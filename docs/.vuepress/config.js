module.exports = {
    base: '/form-design-docs/',
    title: '表单设计器',
    description: '基于饿了么UI组件（vue2的element-ui和vue3的element-plus）的表单设计器',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '关于作者', 
                items: [
                    { text: 'Github', link: 'https://github.com/Johnnyjintao' },
                    { text: '掘金', link: 'https://juejin.cn/user/998792661830926' }
                ]
            }
        ],
        sidebar: [
            {
                title: '介绍',
                path: '/',
            },
            {
              title: "组件配置",
              children: [
                { title: "输入框", path: "/handbook/input" },
                { title: "下拉选择器", path: "/handbook/select" },
                { title: "单选框组", path: "/handbook/radio" },
                { title: "多选框组", path: "/handbook/checkbox" },
                { title: "时间选择器", path: "/handbook/time" },
                { title: "日期选择器", path: "/handbook/date" },
                { title: "数字范围", path: "/handbook/numrange" },
                { title: "评分", path: "/handbook/rate" },
                { title: "开关", path: "/handbook/switch" },
                { title: "滑块", path: "/handbook/slider" },
                { title: "文字", path: "/handbook/text" },
                { title: "图片", path: "/handbook/image" },
                { title: "栅格布局", path: "/handbook/grid" },
                { title: "表单校验规则", path: "/handbook/rules" },
              ],
            }
        ],
    }
  }