<h1>表单规则配置</h1>


### 配置代码
---
```js
const rules = {
  trigger: 'blur',
  enum: '',
  len: undefined,
  max: undefined,
  message: '',
  min: undefined,
  pattern: '',
  required: false,
  type: ''
}
```

### 参数说明
---
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----------: | :--------------------: | :-----: | :-----: | :----: |
| trigger | 触发时机 | string |  Blur || Change |  --  |
| len | 字段长度 | string |  -- |   --  |
| max | 最大长度 | string |  -- |   --  |
| min | 最小长度 | string |  -- |   --  |
| message | 校验文案 | string |  -- |   --  |
| pattern | 正则表达式 | string |  -- |   --  |
| required | 是否必填 | boolean |  -- |   --  |
| type | 校验类型 | string |  string字符串 number数字 boolean布尔值 method方法 regexp正则表达式 integer整数 float浮点数 array数组 object对象 enum枚举 date日期 urlURL地址 hex十六进制 email邮箱地址 any任意类型 |   --  |
