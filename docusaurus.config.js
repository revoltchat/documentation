const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

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
          href: 'https://github.com/revoltchat',
          label: 'GitHub',
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
              href: 'https://mastodon.social/@revoltchat',
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
              href: 'https://github.com/revoltchat',
            },
            {
              label: 'Project Tracker',
              href: 'https://github.com/orgs/revoltchat/projects/2?fullscreen=true',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
          'https://github.com/revoltchat/documentation/blob/master/',
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
            spec: 'https://api.revolt.chat/openapi.json',
            route: '/api/',
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
