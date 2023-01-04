<h1>数字范围</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '数字范围',
              type: 'numrange',
              options: {
                min:0,
                max:0,
                width: '100%',
                minPlaceholder: '请输入最小值',
                maxPlaceholder: '请输入最大值',
                readonly: false,
                editable: true,
                clearable: true,
                disabled: false,
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
| min | 最小值 | number |  --   |  --  |
| max | 最大值 | number |  --   |  --  |
| width | 宽度 | string |  % px  |  --  |
| minPlaceholder | 最大值占位内容 | string |  --  |  --  |
| maxPlaceholder | 最大值占位内容 | string |  --  |  --  |
| readonly | 完全只读 | boolean | false |  --  |
| disabled | 禁用 | boolean |  false  |  --  |
| editable | 文本框可输入 | boolean |  false  |  --  |
| clearable | 是否显示清除按钮	 | boolean |  false  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |


