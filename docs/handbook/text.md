<h1>文字</h1>


### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '文字',
              type: 'text',
              options: {
                defaultValue: 'This is a text',
                style: '',
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
| style | 自定义样式 | string | -- |  --  |
| defaultValue | 默认值 | string |  --  |  --  |

