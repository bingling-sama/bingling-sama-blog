module.exports = {
    title: 'Booooling!',
    description: '冰凌的个人博客辣',
    theme: 'ting',
    host: 'localhost',
    port: 8090,
    themeConfig: {
        author: 'bingling_sama',
        headImg: '/img/bingling.png',
        catalog: '/catalog',
        lastUpdated: '最近更新',
        smoothScroll: true,
        live2dModel: '/live2d/model.json',
        nav: [
            { text: '主页', link: '/' },
            { text: '目录',link:'/config/catalog'},
            { text: '项目列表', link: '/config/about' },
            { text: 'Github',type:'url', link: 'https://github.com/bingling-sama' },
        ],
        footer: 'Made by bingling_sama | Powered by Vuepress | Themed by Ting'
    }
}