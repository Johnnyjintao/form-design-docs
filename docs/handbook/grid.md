<h1>栅格布局</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 12,
                  list: []
                },
                {
                  span: 12,
                  list: []
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top'
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
| columns | 列配置 | Array |  -- |   []  |
| options | 配置参数 | Array |  -- |   []  |

### options参数说明
---
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----------: | :--------------------: | :-----: | :-----: | :----: |
| gutter | 栅格间隔	| string | -- |  --  |
| justify | flex 布局下的水平排列方式 | string | -- |  --  |
| align | flex 布局下的垂直排列方式	 | string | -- |  --  |
