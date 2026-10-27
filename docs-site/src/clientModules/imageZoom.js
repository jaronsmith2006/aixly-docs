// Screenshots in articles: shown at their real size (files named @2x are captured at double
// resolution, so they're displayed at half their pixel width), and clicking one opens it full size.
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const isShot = (el) => el && el.tagName === 'IMG' && el.closest('.markdown') && !el.closest('a');

function size(img) {
  if (!/@2x\./.test(img.currentSrc || img.src) || !img.naturalWidth) return;
  img.style.width = `${Math.round(img.naturalWidth / 2)}px`;
}

function open(img) {
  const prevFocus = document.activeElement;
  const overlay = document.createElement('div');
  overlay.className = 'shot-zoom';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', img.alt || 'Screenshot');
  const big = document.createElement('img');
  big.src = img.currentSrc || img.src;
  big.alt = img.alt || '';
  // Full resolution, but never wider or taller than the window.
  if (/@2x\./.test(big.src) && img.naturalWidth) big.style.width = `${Math.round(img.naturalWidth / 2) * 1.5}px`;
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'shot-zoom-close';
  close.setAttribute('aria-label', 'Close');
  close.textContent = '×';
  const caption = document.createElement('p');
  caption.textContent = img.alt || '';
  overlay.append(close, big, caption);
  const done = () => {
    overlay.remove();
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    prevFocus && prevFocus.focus && prevFocus.focus();
  };
  const onKey = (e) => { if (e.key === 'Escape') done(); };
  overlay.addEventListener('click', done);
  document.addEventListener('keydown', onKey);
  document.documentElement.style.overflow = 'hidden';
  document.body.append(overlay);
  close.focus();
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('load', (e) => { if (isShot(e.target)) size(e.target); }, true);
  document.addEventListener('click', (e) => { if (isShot(e.target)) open(e.target); });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && isShot(e.target)) { e.preventDefault(); open(e.target); }
  });
}

export function onRouteDidUpdate() {
  document.querySelectorAll('.markdown img').forEach((img) => {
    if (!isShot(img)) return;
    img.tabIndex = 0;
    img.title = img.title || 'Click to enlarge';
    if (img.complete) size(img);
  });
}
