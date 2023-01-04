<h1>多选框</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '多选框组',
              type: 'checkbox',
              options: {
                defaultValue: [],
                width: '100%',
                inline: true,
                border: false,
                options: [
                  {
                    label: 'Option 1',
                    value: 'Option 1'
                  },
                  {
                    label: 'Option 2',
                    value: 'Option 2'
                  },
                  {
                    label: 'Option 3',
                    value: 'Option 3'
                  }
                ],
                disabled: false,
                rules:[],
                ...
              }
            }],
            "config":{ //config里包含的是表单属性
                ...
            }
        }
    };
  },
```

### 参数说明
---
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----------: | :--------------------: | :-----: | :-----: | :----: |
| label | 名称 | string |  -- |  --  |
| type | 组件类型 | string |  -- |  --  |
| options | 配置参数 | Array |  -- |   []  |

### options参数说明
---
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----------: | :--------------------: | :-----: | :-----: | :----: |
| width | 宽度 | string |  % px  |  --  |
| defaultValue | 默认值 | string |  --  |  --  |
| inline | 布局方式 | boolean |  true行内 false块级  |  --  |
| disabled | 是否禁用 | boolean | false |  --  |
| border | 是否带边框 | boolean | false |  --  |
| options | 选项数组 | Array |  --  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/checkbox" target="_blank">https://element.eleme.cn/#/zh-CN/component/checkbox</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/checkbox.html" target="_blank">https://element-plus.org/zh-CN/component/checkbox.html</a>


