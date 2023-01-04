<h1>评分</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '评分',
              type: 'rate',
              options: {
                defaultValue: null,
                max: 5,
                allowHalf: false,
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
| max | 最大值 | number |  --   |  --  |
| width | 宽度 | string |  % px  |  --  |
| defaultValue | 默认值 | string |  --  |  --  |
| allowHalf | 是否允许选一半 | boolean | false |  --  |
| disabled | 禁用 | boolean |  false  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |