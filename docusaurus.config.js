// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Broken Rock Studios',
  tagline: 'Multiplayer and Fun',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // Set the production url of your site here
  url: 'https://brokenrockstudios.com',
  baseUrl: '/',
  organizationName: 'brokenrockstudios',
  projectName: 'website',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    about: {
      title: 'About',
      description: 'About us',
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'media',
          routeBasePath: 'media',
          sidebarCollapsible: true,
        },
        blog: {
          blogTitle: 'News',
          blogDescription: 'Discover fun and simple multiplayer games at Broken Rock Studios. Immerse yourself in thoughtful and compelling gameplay developed by gamers. Come play with us!', // optimal 150-160 char
          blogListComponent: '/src/components/BlogListPage',
          routeBasePath: '/',
        },
        gtag: {
          trackingID: 'G-595SGCKWD1',
          anonymizeIP: true, // GDPR
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-500x500.png',
      metadata: [{name: 'keywords', content: 'broken rock studio, game development, multiplayer'}],
      navbar: {
        title: 'Broken Rock Studios',
        logo: {
          alt: 'Broken Rock Studios Logo',
          src: 'img/logo.svg',
          className: 'navbar-logo',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mediaSidebar',
            position: 'left',
            label: 'Media',
          },
          { to: 'https://www.fangamer.com/', label: 'Store', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://store.steampowered.com',
            label: 'Buy Frog of War',
            position: 'right',
            class: 'header-fow-link',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Steam',
                href: 'https://store.steampowered.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/sqt6n7Z5xu',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/BrokenRockStudios/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © Broken Rock Studios, LLC ${new Date().getFullYear()}. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
