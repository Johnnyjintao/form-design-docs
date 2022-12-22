module.exports = {
    base: '/form-design-docs/',
    title: '表单设计器 文档',
    description: '表单设计器 文档',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Johnnyjintao的博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/Johnnyjintao' },
                    { text: '掘金', link: 'https://juejin.cn/user/998792661830926' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
        ],
        subSidebar: 'auto'
    }
  }