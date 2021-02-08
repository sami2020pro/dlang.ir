"use strict";

var _;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../../package'),
    description = _require.description;

module.exports = _defineProperty({
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
  head: [['meta', {
    name: 'theme-color',
    content: '#B03931'
  }], ['meta', {
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  }], ['meta', {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  }], ['link', {
    rel: 'icon',
    href: '/DLogo.png'
  }]],
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top'],
  dest: 'dist',
  base: '/dlangir/',
  host: 'localhost',
  port: '8080',
  cache: true,
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'en-US',
      // this will be set as the lang attribute on <html>
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
      '/': (_ = {
        repo: '',
        selectText: 'English',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        editLinks: true,
        docsDir: '/en/'
      }, _defineProperty(_, "editLinkText", ''), _defineProperty(_, "lastUpdated", true), _defineProperty(_, "nav", [{
        text: 'Guide',
        link: '/en/guide/'
      }, {
        text: 'Library',
        link: '/en/library/'
      }, {
        text: 'DLang',
        link: 'https://dlang.org/'
      }]), _defineProperty(_, "sidebar", {
        '/en/guide/': [{
          title: 'Guide',
          collapsable: true,
          children: ['', 'basics', 'io']
        }],
        '/en/library/': [{
          title: 'Library',
          collapsable: true,
          children: ['', 'std-algorithm']
        }]
      }), _),
      '/fa/': {
        repo: '',
        selectText: 'فارسی',
        label: 'فارسی',
        editLinkText: 'میتوانید در گیت هاب ویرایش کنید',
        editLinks: true,
        docsDir: '/fa/',
        lastUpdated: true,
        nav: [{
          text: 'راهنما',
          link: '/fa/guide/'
        }, {
          text: 'کتابخانه ها',
          link: '/fa/library/'
        }, {
          text: 'مرجع',
          link: 'https://dlang.org/'
        }],
        sidebar: {
          '/fa/library/': [{
            title: 'کتابخانه ها',
            collapsable: true,
            children: ['', 'using-vue']
          }],
          '/fa/guide/': [{
            title: 'راهنما',
            collapsable: true,
            children: ['', 'using-vue']
          }]
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
  }
}, "plugins", ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']);