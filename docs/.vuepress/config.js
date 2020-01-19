module.exports = {
    base:'/gulu-demo/',
    title: 'JD-VUE-UI',
    description: '一个简单的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/JackDing1208/gulu-demo' },
        ],
        sidebar: [
            {
                title: '快速上手',
                children: ['/guide/introduction','/guide/install', '/guide/use' ]
            },
            {
                title: '组件介绍',
                children: ['/components/layout','/components/grid',  '/components/button',
                    '/components/input', '/components/popover','/components/toast',
                    '/components/tab', '/components/collapse',]
            }
        ]
    }
}
