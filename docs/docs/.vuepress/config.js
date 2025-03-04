module.exports = {
   base:'/lemon-ui-docs/',
   // base:''
   plugins: ['demo-container'], // 配置插
    lang:'zh-CN',
    title: 'lemon-ui-vue2',
    description: '可视化大屏UI组件库',
    // theme:'lemonui-docs-theme',
   //  theme: 'default',
    themeConfig:{
         nav:[
            {text:'首页',link:'/'},
            {text:'组件',link:'/components/guide.html'}
    ],
    sidebar:{
        '/components/' : [
           {
            title:'开发指南',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children:[
               {title:"快速上手",path:'/components/guide.html'},
               {title:"屏幕自适应",path:'/components/screenAdaptive'},
               {title:"标题框",path:'/components/titleFrame'},
               {title:"边框",path:'/components/frame'},
               {title:"按钮",path:'/components/button'},
               {title:"加载框",path:'/components/loading'},
               // {title:"表格",path:'/components/table'},
            ]
           }
        ]
      
    },

    repo: 'the-lemonboy/lemon-ui',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'the-lemonboy/lemon-ui',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！'
    }
  }