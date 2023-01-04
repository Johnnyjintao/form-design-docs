<h1>单选框组</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
                label: '单选框组',
                type: 'radio',
                options: {
                    defaultValue: '',
                    width: '100%',
                    inline: true,
                    disabled: false,
                    options: [
                        {
                        label: 'label1',
                        value: 'value1'
                        },
                        {
                        label: 'label2',
                        value: 'value2'
                        },
                        {
                        label: 'label3',
                        value: 'value3'
                        }
                    ],
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
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/radio" target="_blank">https://element.eleme.cn/#/zh-CN/component/radio</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/radio.html" target="_blank">https://element-plus.org/zh-CN/component/radio.html</a>


