<h1>开关</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '开关',
              type: 'switch',
              options: {
                defaultValue: false,
                disabled: false,
                activeText: '',
                inactiveText: '',
                rules
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
| active-text | switch 打开时的文字描述 | string | -- |  --  |
| inactive-text | switch 关闭时的文字描述 | string | -- |  --  |
| disabled | 禁用 | boolean |  false  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/switch" target="_blank">https://element.eleme.cn/#/zh-CN/component/switch</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/switch.html" target="_blank">https://element-plus.org/zh-CN/component/switch.html</a>


