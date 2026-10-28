// Builds help-index.json, the knowledge of the in-app "Ask Aixly" assistant, from the help center:
// one entry per section (## / ###), with a link to that section on docs.aixly.io.
// Runs before every build (npm "prebuild"), so docs.aixly.io/help-index.json always matches the published
// docs and the app picks up changes by itself (backend/services/support/helpSearch.js).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.resolve(process.argv[2] || path.join(here, "../../docs"));
const OUT = path.join(here, "../static/help-index.json");
const SITE = (process.env.DOCS_URL || "https://docs.aixly.io").replace(/\/$/, "");
const SKIP = new Set(["README.md"]);

// Docusaurus heading ids (github-slugger): lowercase, punctuation removed, spaces → dashes.
const anchor = (h) => h.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s/g, "-");
const plain = (md) => md
  .replace(/!\[[^\]]*\]\([^)]*\)/g, "")          // images
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")        // links → text
  .replace(/^:::\w*.*$/gm, "")                    // admonition fences
  .replace(/\n{3,}/g, "\n\n")
  .trim();

function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return files(p);
    return e.name.endsWith(".md") && !SKIP.has(e.name) ? [p] : [];
  });
}

const entries = [];
for (const file of files(DOCS).sort()) {
  const raw = fs.readFileSync(file, "utf8");
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(raw);
  const meta = Object.fromEntries((fm?.[1] || "").split("\n").map((l) => l.split(/:\s*/)).filter((p) => p.length > 1).map(([k, ...v]) => [k.trim(), v.join(": ").trim()]));
  const body = fm ? raw.slice(fm[0].length) : raw;
  const rel = path.relative(DOCS, file).replace(/\\/g, "/").replace(/\.md$/, "");
  const pageUrl = `${SITE}${meta.slug ? meta.slug.replace(/\/$/, "") || "" : `/${rel}`}` || SITE;
  const title = meta.title || rel;

  // Sections at ## and ### (an H3 keeps its H2 as context). Text before the first heading is the intro.
  let h2 = null;
  let cur = { heading: null, level: 1, lines: [] };
  const flush = () => {
    const text = plain(cur.lines.join("\n"));
    if (text.length < 20) return;
    const section = [cur.level === 3 && h2 ? h2 : null, cur.heading].filter(Boolean).join(" › ");
    entries.push({
      id: entries.length,
      page: title,
      section: section || null,
      url: cur.heading ? `${pageUrl}#${anchor(cur.heading)}` : pageUrl,
      text: text.slice(0, 2400),
    });
  };
  for (const line of body.split("\n")) {
    const m = /^(#{2,3})\s+(.*)$/.exec(line);
    if (m) {
      flush();
      if (m[1] === "##") h2 = m[2].trim();
      cur = { heading: m[2].replace(/\s*\{#[^}]+\}\s*$/, "").trim(), level: m[1].length, lines: [] };
    } else cur.lines.push(line);
  }
  flush();
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ builtAt: new Date().toISOString().slice(0, 10), site: SITE, entries }, null, 0));
console.log(`${entries.length} sections from ${files(DOCS).length} pages → ${path.relative(process.cwd(), OUT)} (${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
