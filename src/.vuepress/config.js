const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'D Lang',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#B03931'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top'],

  locales: {
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'D Language',
      description: 'D Programming Language'
    },
    '/fa/': {
      lang: 'fa-IR',
      title: 'فارسی',
      description: 'فارسی'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    locales: {
      '/en/': {
        repo: '',
        selectText: 'English',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        editLinks: false,
        docsDir: '/en/',
        editLinkText: '',
        lastUpdated: false,
        nav: [
          {
            text: 'Library',
            link: '/en/library/'
          },
          {
            text: 'DLang',
            link: 'https://dlang.org/'
          }
        ],
        sidebar: {
          '/en/guide/': [{
            title: 'Guide',
            collapsable: true,
            children: [
              '',
              'using-vue',
            ]
          }],
        }
      },
      '/fa/': {
        repo: '',
        selectText: 'فارسی',
        label: 'فارسی',
        editLinkText: 'میتوانید در گیت هاب ویرایش کنید',
        editLinks: false,
        docsDir: '/fa/',
        editLinkText: '',
        lastUpdated: false,
        nav: [
          {
            text: 'کتابخانه ها',
            link: '/fa/library/'
          },
          {
            text: 'مرجع',
            link: 'https://dlang.org/'
          }
        ],
        sidebar: {
          '/fa/library/': [{
            title: 'کتابخانه ها',
            collapsable: true,
            children: [
              '',
              'using-vue',
            ]
          }],
        }
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../public'
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}