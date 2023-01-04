<h1>日期选择器</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '日期选择器',
              type: 'date',
              options: {
                type:"date",
                defaultValue: '',
                width: '100%',
                placeholder: '请选择',
                format: '',
                readonly: false,
                editable: true,
                clearable: true,
                disabled: false,
                rules
              }
            },],
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
| type | 日期选择类型 | string |  week周 year年 month月 dates多个日期 months多个月 years多个年 datetime日期时间 datetimerange日期时间范围 daterange日期范围 monthrange月范围   |  --  |
| width | 宽度 | string |  % px  |  --  |
| defaultValue | 默认值 | string |  --  |  --  |
| placeholder | 占位内容 | string |  --  |  --  |
| format | 时间格式化 | string |  小时：HH，分：mm，秒：ss，AM/PM A  |  --  |
| readonly | 完全只读 | boolean | false |  --  |
| disabled | 禁用 | boolean |  false  |  --  |
| editable | 文本框可输入 | boolean |  false  |  --  |
| clearable | 是否显示清除按钮	 | boolean |  false  |  --  |
| rules | <a href="/handbook/rules">查看规则配置</a> | Array |  []  |  --  |

更多配置参考：<br>
element-ui <a href="https://element.eleme.cn/#/zh-CN/component/date-picker" target="_blank">https://element.eleme.cn/#/zh-CN/component/date-picker</a><br>
element-plus <a href="https://element-plus.org/zh-CN/component/date-picker.html" target="_blank">https://element-plus.org/zh-CN/component/date-picker.html</a>


