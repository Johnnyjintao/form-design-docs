<h1>图片</h1>

### 配置代码
---
```js
  data() {
    return {
      widgetForm: {
            "list":[{
              label: '图片',
              type: 'image',
              options: {
                width:"100%",
                imgWidth:"100px",
                imgHeight:"100px",
                srcList: [{url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],
                previewSrcList:[{url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],
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
| width | 宽度 | string | -- |  --  |
| imgWidth | 每张图片的宽度 | string | px % |  --  |
| imgHeight | 每张图片的高度 | string | px % |  --  |
| srcList | 图片数组 | Array | [{url:""}] |  --  |
| previewSrcList | 预览图片的数组 | Array | [{url:""}] |  --  |

