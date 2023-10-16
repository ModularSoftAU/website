// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modular Software',
  tagline: 'Building software, one module at a time.',
  url: 'http://modularsoft.org/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ModularSoftAU', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/ModularSoft/website/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ModularSoft',
        logo: {
          alt: 'ModularSoft Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/ModularSoftAU/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Craftify',
                to: '/docs/products/craftify',
              },
              {
                label: 'Player Head Hunt',
                to: '/docs/products/playerHeadHunt',
              },
              {
                label: 'DevoteMe',
                to: '/docs/products/devoteMe',
              },
            ],
          },
          {
            title: 'Crafting For Christ',
            items: [
              {
                label: 'Discord',
                href: 'https://craftingforchrist.net/discord',
              },
              {
                label: 'Network Website',
                href: 'https://craftingforchrist.net/',
              }
            ],
          },
          {
            title: 'Our Platforms',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ModularSoftAU',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/YRpakuYhJZ',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 - ${new Date().getFullYear()} Modular Software. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'json'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'SV8F0YX93F',

        // Public API key: it is safe to commit it
        apiKey: 'a2f321bcf90874e1db65a1a7fcddef23',

        indexName: 'modularsoft',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
