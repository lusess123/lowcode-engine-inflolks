import { defineConfig } from 'umi';

export default defineConfig({
  externals: {
    // react: 'window.React',
    // // "react-dom": "var window.ReactDOM",
    // "prop-types": "var window.PropTypes",
    // "moment": "var window.moment",
    // "lodash": "var window._",
    // "@alifd/next": "var window.Next",
  },
  devtool: 'eval-source-map',
  scripts:[
    // "https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js",
    // "https://g.alicdn.com/code/lib/react-dom/16.13.1/umd/react-dom.production.min.js",
    // "https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js",
    "https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js",
    "https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js",
    "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js",
    // "https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js"

  ],
  links: [
    { href :'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css', rel:"stylesheet" },
    { href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css' , rel:"stylesheet"},
    { href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.1/dist/css/engine-core.css' , rel:"stylesheet"},
    { href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.2/dist/css/engine-ext.css' , rel:"stylesheet"},
    { href: 'https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css' , rel:"stylesheet"},
    { href: 'https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.cs' , rel:"stylesheet"},
    { herf: 'https://unpkg.com/@salesforce-ux/design-system@2.17.5/assets/styles/salesforce-lightning-design-system.min.css', rel: "stylesheet" }
  ],

//   <link rel="stylesheet" type="text/css" href="https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css" />
// <link rel="stylesheet" type="text/css" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />

  define: {
    VERSION_PLACEHOLDER: '1.0.0',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/designer' },
    // { path: '/preview', component: '@/pages/preview' },
    // { path: '/builder', component: '@/pages/builder' },
    // { path: '/form-object', component: '@/pages/form-object' }
  ],
  webpack5:{},
  fastRefresh: {},
  chainWebpack(config) {
       config.resolve.symlinks(false);
       config.module.rule('mjs-rule').test(/\.m?js/).resolve.set('fullySpecified', false);
  },
  extraBabelIncludes: [
    '@alilc/lowcode-designer'
  ]
});
