<h1>下拉选择框</h1>


### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
                label: '下拉选择框',
                type: 'select',
                options: {
                    defaultValue: "",
                    width: '100%',
                    multiple: false,
                    placeholder: '请选择',
                    filterable: false,
                    clearable: true,
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
| placeholder | 占位文本 | string |  --  |  --  |
| multiple | 是否多选 | boolean |  false  |  --  |
| filterable | 是否可搜索 | boolean |  false  |  --  |
| disabled | 禁用 | boolean | false |  --  |
| clearable | 是否可清空 | boolean |  false  |  --  |
| options | 选项数组 | Array |  --  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/select" target="_blank">https://element.eleme.cn/#/zh-CN/component/select</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/select.html" target="_blank">https://element-plus.org/zh-CN/component/select.html</a>


