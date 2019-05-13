module.exports = {
    base:'/gulu-demo/',
    title: 'JD-Wheels',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/JackDing1208/gulu-demo' },
        ],
        sidebar: [
            {
                title: '快速上手',
                children: ['/guide/install', '/guide/use' ]
            },
            {
                title: '常用组件',
                children: ['/components/layout','/components/grid',  '/components/button',
                    '/components/input', '/components/popover','/components/toast',
                    '/components/tab', '/components/collapse',]
            }
        ]
    }
}
