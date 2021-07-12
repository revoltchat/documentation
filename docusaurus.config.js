const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Revolt',
  tagline: '',
  url: 'https://developers.revolt.chat',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'revoltchat',
  projectName: 'delta',
  themeConfig: {
    navbar: {
      title: 'Revolt',
      logo: {
        alt: 'REVOLT logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: '/api/',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/revoltchat/revolt.js',
          position: 'left',
          label: 'revolt.js',
        },
        {
          href: 'https://gitlab.insrt.uk/revolt/delta',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Contributing',
              to: '/contributing',
            },
            {
              label: 'REST API',
              to: '/api/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Revolt',
              href: 'https://app.revolt.chat/invite/Testers',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/revoltchat/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/revoltchat',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.social/web/accounts/106482042997274001',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/AWFZeCc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            /*{
              label: 'Blog',
              to: '/blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.insrt.uk/revolt',
            },
          ],
        },
      ],
      copyright: `Licensed under AGPLv3`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',      
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
          'https://gitlab.insrt.uk/revolt/legal/-/edit/master/',
        },
        /*blog: {
          showReadingTime: true,
          editUrl:
          'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            specUrl: 'OpenAPI.json',
            routePath: '/api/',
          }
        ],
        theme: {
          primaryColor: '#1890ff',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ]
  ]
};
