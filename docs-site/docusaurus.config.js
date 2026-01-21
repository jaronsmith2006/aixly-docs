const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const SITE_URL =
  process.env.DOCUSAURUS_URL ||
  process.env.SITE_URL ||
  'https://docs.aixly.io';
const BASE_URL = process.env.DOCUSAURUS_BASE_URL || process.env.BASE_URL || '/';

const config = {
  title: 'Merchant Help Center',
  tagline: 'Help docs for merchants using the AI Chatbot app',
  favicon: 'img/favicon.svg',

  // GitHub Pages deployment settings:
  // - url should be: https://<GITHUB_USERNAME>.github.io
  // - baseUrl should be: /<REPO_NAME>/  (for a project site)
  // If you deploy to a custom domain, you can change these accordingly.
  url: SITE_URL,
  baseUrl: BASE_URL,

  // Used by some deploy setups / generated links
  organizationName: 'jaronsmith2006',
  projectName: 'aixly-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // IMPORTANT: read docs content from the repo root /docs directory
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          // Don't publish internal maintenance docs
          exclude: ['README.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Help Center',
          // Place your logo file in: docs-site/static/img/
          // Then update this to e.g. 'img/logo.svg'
          src: 'img/favicon.svg',
        },
        items: [
          // Because routeBasePath is '/', all doc URLs are at the site root:
          // e.g. '/getting-started/intro', '/faq', etc.
          {to: '/', label: 'Getting started', position: 'left'},
          {to: '/features/appearance', label: 'Features', position: 'left'},
          {to: '/integrations/shopify', label: 'Integrations', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          {to: '/changelog', label: 'Changelog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;

