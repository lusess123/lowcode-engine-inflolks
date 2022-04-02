import Meta from './input/meta'
import PassWord from './input-password/meta'
import TextArea from './input-text-area/meta'
import ObjectForm from './object-form/meta'
export default {
  version: "1.0",
  packages: [
    {
      package: 'moment',
      version: '2.24.0',
      urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
      library: 'moment',
    },
    {
      package: 'lodash',
      library: '_',
      urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
    },
    {
      title: 'fusion组件库',
      package: '@alifd/next',
      version: '1.24.18',
      urls: [
        'https://g.alicdn.com/code/lib/alifd__next/1.24.18/next.min.css',
        'https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css',
        'https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css',
        'https://unpkg.com/@salesforce-ux/design-system@2.17.5/assets/styles/salesforce-lightning-design-system.min.css',
        'https://g.alicdn.com/code/lib/alifd__next/1.24.18/next-with-locales.min.js',
        'https://unpkg.com/@steedos-ui/builder-widgets/dist/builder-widgets.umd.css'
      ],
      library: 'Next',
    },
    {
      title: 'NextTable',
      package: 'NextTable',
      version: '1.0.1',
      urls: [
        'https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.js',
        'https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.css',
      ],
      library: 'NextTable',
    },
    {
      package: '@alilc/lowcode-materials',
      version: '1.0.1',
      library: 'AlilcLowcodeMaterials',
      urls: [
        'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/dist/AlilcLowcodeMaterials.js',
        'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/dist/AlilcLowcodeMaterials.css',
      ],
      editUrls: [
        'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/build/lowcode/view.js',
        'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.1/build/lowcode/view.css',
      ],
    },
  ],
  components: [
     Meta, PassWord, TextArea, ObjectForm
  ],
  sort: {
    groupList: ['精选组件', '原子组件'],
    categoryList: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
  },
  // groupList: ['精选组件', '原子组件'],
  ignoreComponents: {},
};
