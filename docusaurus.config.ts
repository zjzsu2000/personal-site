import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const links = {
  github: 'https://github.com/zjzsu2000',
  linkedin: 'https://www.linkedin.com/in/zjzsu2000/',
};

const config: Config = {
  title: 'Jie Zou',
  tagline: 'Backend & platform engineer building AI-native workflows.',
  favicon: 'img/favicon.svg',

  url: 'https://zjzsu2000.github.io',
  baseUrl: '/personal-site/',
  organizationName: 'zjzsu2000',
  projectName: 'personal-site',
  trailingSlash: false,

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
      {
        docs: false,
        blog: {
          routeBasePath: 'writing',
          blogTitle: 'Writing',
          blogDescription: 'Notes on AI-native workflows, engineering judgment, and building reliable systems around strong models.',
          blogSidebarTitle: 'Writing',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Jie Zou',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/writing', label: 'Writing', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {href: links.github, label: 'GitHub', position: 'right'},
        {href: links.linkedin, label: 'LinkedIn', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Site',
          items: [
            {label: 'Writing', to: '/writing'},
            {label: 'Projects', to: '/projects'},
            {label: 'About', to: '/about'},
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {label: 'GitHub', href: links.github},
            {label: 'LinkedIn', href: links.linkedin},
          ],
        },
      ],
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Jie Zou.',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
