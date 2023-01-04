<h1>输入框</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
                label: '输入框',
                type: 'input',
                options: {
                    width: '100%',
                    defaultValue: '',
                    placeholder: '请输入',
                    maxlength: null,
                    prefix: '',
                    suffix: '',
                    prepend: '',
                    append: '',
                    disabled: false,
                    clearable: true,
                    readonly: false,
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
| type | 输入框类型 | string | 	text，textarea 和其他 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types" target="_blank">原生input的type值</a>  | -- |
| width | 宽度 | string |  % px  |  --  |
| defaultValue | 默认值 | string |  --  |  --  |
| placeholder | 输入框占位文本 | string |  --  |  --  |
| maxlength | 原生属性，最大输入长度 | number |  --  |  --  |
| minlength | 原生属性，最小输入长度 | number |  --  |  --  |
| prefix | 输入框头部内容，只对 type="text" 有效 | Array |  --  |  --  |
| suffix | 输入框尾部内容，只对 type="text" 有效 | Array |  --  |  --  |
| prepend | 输入框前置内容，只对 type="text" 有效 | Array |  --  |  --  |
| append | 输入框后置内容，只对 type="text" 有效 | Array |  --  |  --  |
| disabled | 禁用 | boolean | false |  --  |
| clearable | 是否可清空 | boolean |  false  |  --  |
| readonly | 原生属性，是否只读 | boolean |  false  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/input" target="_blank">https://element.eleme.cn/#/zh-CN/component/input</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/input.html" target="_blank">https://element-plus.org/zh-CN/component/input.html</a>


