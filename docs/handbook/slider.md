<h1>滑块</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '滑块',
              type: 'slider',
              options: {
                defaultValue: 0,
                width: '100%',
                min: 0,
                max: 100,
                step: 1,
                disabled: false,
                range: false,
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
| step | 步长 | number |  --  |  1  |
| min | 最小值 | number | -- |  0  |
| max | 最大值 | number | -- |  100  |
| range | 是否为范围选择 | boolean | -- |  false  |
| disabled | 是否禁用 | boolean |  --  |  false  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/slider" target="_blank">https://element.eleme.cn/#/zh-CN/component/slider</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/slider.html" target="_blank">https://element-plus.org/zh-CN/component/slider.html</a>


