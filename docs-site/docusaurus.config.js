const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Merchant Help Center',
  tagline: 'Help docs for merchants using the AI Chatbot app',
  favicon: 'img/favicon.svg',

  // GitHub Pages deployment settings:
  // - url should be: https://<GITHUB_USERNAME>.github.io
  // - baseUrl should be: /<REPO_NAME>/  (for a project site)
  // If you deploy to a custom domain, you can change these accordingly.
  url: 'https://jaronsmith2006.github.io',
  baseUrl: '/aixly-docs/',

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
        items: [
          {type: 'docSidebar', sidebarId: 'merchantSidebar', position: 'left', label: 'Docs'},
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

