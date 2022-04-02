import { AssetsJson } from '@alilc/lowcode-types';
import React from 'react';
const AssertConfig: AssetsJson = {
  version: '1.0',
  packages: [
    {
      package: 'moment',
      version: '2.24.0',
      urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
      library: 'moment',
    },
    {
      version: '',
      package: 'lodash',
      urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
      library: 'lodash',
    },
    {
      package: '@alifd/next',
      version: '1.23.0',
      urls: [
        'https://g.alicdn.com/code/lib/alifd__next/1.23.18/next.min.css',
        'https://g.alicdn.com/code/lib/alifd__next/1.23.18/next-with-locales.min.js',
      ],
      library: 'Next',
    },
  ],
  components: [
    {
      componentName: 'componentName1',
      keywords: ['组件1'],
      description: '组件描述1',
      group: '组件分类1',
      category: '组件面板2',
      icon: 'picture',
    },
    {
      componentName: 'Link',
      title: '链接',
      npm: {
        package: '@alifd/ali-lowcode-components',
        version: 'latest',
        exportName: 'Link',
        main: '',
        destructuring: true,
        subName: '',
      },
      props: [
        {
          name: 'href',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '超链接',
              en_US: 'Link',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性：href | 说明：超链接地址',
              en_US: 'prop: href | description: link address',
            },
          },
          propType: 'string',
          defaultValue: 'https://fusion.design',
        },
        {
          name: 'children',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '链接文案',
              en_US: 'Text',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性：children | 说明：超链接文案',
              en_US: 'prop: children | description: text of the link',
            },
          },
          propType: {
            type: 'oneOfType',
            value: ['string', 'node'],
          },
          defaultValue: '这是一个超链接',
        },
        {
          name: 'style',
          propType: 'object',
        },
        {
          name: 'target',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '页面目标',
              en_US: 'Target',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性：target | 说明：跳转页面目标',
              en_US: 'prop: target | description: target of new page',
            },
          },
          propType: {
            type: 'oneOf',
            value: ['_blank', '_self'],
          },
        },
      ],
      configure: {
        supports: {
          style: true,
          events: ['onClick'],
        },
        component: {
          isContainer: true,
        },
        props: [
          {
            name: 'children',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '链接文案',
                en_US: 'Text',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性：children | 说明：超链接文案',
                en_US: 'prop: children | description: text of the link',
              },
            },
            setter: 'StringSetter',
            defaultValue: '这是一个超链接',
          },
          {
            name: 'linkType',
            title: '跳转类型',
            condition: {
              type: 'JSFunction',
              value:
                'condition(target) {\n          const _pages_ = target.getProps().getPropValue("_pages_");\n          console.log(\'_pages_: \', _pages_);\n          return !!_pages_;\n        }',
            },
            defaultValue: 'page',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    value: 'page',
                    title: '内部页面',
                  },
                  {
                    value: 'link',
                    title: '外部链接',
                  },
                ],
              },
            },
          },
          {
            name: '_redirect_url',
            title: '跳转页面',
            extraProps: {
              getValue: {
                type: 'JSFunction',
                value:
                  "(target, value) => {\n            return target.getProps().getPropValue('href');\n          }",
              },
              setValue: {
                type: 'JSFunction',
                value:
                  "(target, value) => {\n            return target.getProps().setPropValue('href', value);\n          }",
              },
            },
            setter: {
              type: 'JSFunction',
              value:
                "(target) => {\n          const data = ((target.getProps().getPropValue('_pages_') || {}).content || []).map(item => {\n            return {\n              title: item.title.zh_CN,\n              value: `#/${item.relateUuid}`,\n            };\n          });\n          return {\n            componentName: 'SelectSetter',\n            props: {\n              options: data\n            },\n          };\n        }",
            },
            condition: {
              type: 'JSFunction',
              value:
                'condition(target) {\n          return target.getProps().getPropValue("linkType") === \'page\';\n        }',
            },
          },
          {
            name: 'href',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '跳转链接',
                en_US: 'Link',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性：href | 说明：超链接地址',
                en_US: 'prop: href | description: link address',
              },
            },
            setter: 'StringSetter',
            condition: {
              type: 'JSFunction',
              value:
                'condition(target) {\n          return target.getProps().getPropValue("linkType") === \'link\';\n        }',
            },
          },
          {
            name: 'target',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '页面目标',
                en_US: 'Target',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性：target | 说明：跳转页面目标',
                en_US: 'prop: target | description: target of new page',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    value: '_self',
                    title: '当前页面',
                  },
                  {
                    value: '_blank',
                    title: '新开页面',
                  },
                ],
              },
            },
          },
          {
            name: '_pages_',
            condition: {
              type: 'JSFunction',
              value: '() => false',
            },
          },
        ],
      },
      experimental: {
        initials: [
          {
            name: 'linkType',
            initial: {
              type: 'JSFunction',
              value: "() => 'link'",
            },
          },
          {
            name: '_pages_',
            initial: {
              type: 'JSFunction',
              value:
                "(target) => {\n          let url = `/uipass/query/formnav/getFormNavigationListByOrder.json${window.location.search}`\n          if (['localhost', '127.0.0.1', 'a7343369-3834-4e55-9f69-e071f489f979-3333.cloud-ide-router.alibaba-inc.com'].includes(window.location.hostname)) {\n            url = 'mock-pages.json';\n          }\n          (AliLowCodeEngine || VisualEngine).editor.utils.get(url)\n            .then((response) => {\n              target.getProps().setPropValue('_pages_', response);\n            });\n        }",
            },
          },
        ],
        filters: [],
        autoruns: [],
      },
      icon: '',
      category: '常用',
    },
  ],
  // sort: {
  //   categoryList: ['组件分类1', '组件分类2'],
  //   groupList: ['组件面板1', '组件面板2'],
  // },
  componentList: [
    {
      title: '常用',
      icon: '',
      children: [
        {
          componentName: 'Link',
          // library: 'Next',
          title: '链接',
          icon: '',
          snippets: [
            {
              title: '链接',
              screenshot:
                'https://img.alicdn.com/tfs/TB15DZVReL2gK0jSZFmXXc7iXXa-200-200.svg',
              schema: {
                componentName: 'Link',
                title: '链接',
                props: {
                  href: 'https://fusion.design',
                  target: '_blank',
                  children: ['这是一个超链接'],
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

export default AssertConfig;
