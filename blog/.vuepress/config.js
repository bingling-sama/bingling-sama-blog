module.exports = {
    title: "Booling✨",
    description: "冰凌sama的个人博客！",
    theme: require.resolve('./theme/'),
    host: 'localhost',
    port: 8090,
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico'}]
    ],
    extraWatchFiles: [
        '.vuepress/config.js'
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        translations: {
            read_more: "阅读更多...",
            read_this_post: "立刻阅读 →",
        },
        summary: true,
        summary: {
            paragraphs: 1,
            paragraphsSeparator: "...\n",
            paragraphsJoiner: "",
            prepend: "🔈",
            append: "📖",
        },
        nav: [{
                text: "主页",
                link: "/",
                icon: "el-icon-house",
            },
            {
                text: "项目",
                link: "/projects/",
                icon: "el-icon-folder",
            },
            {
                text: "关于",
                link: "/about.html",
                icon: "el-icon-more     "
            }
        ],
        posts: {
            prepend: "尽情享受阅读吧！",
            append: "到底啦~",
        },
        disqus: "booling",
        about: {
            fullname: "bingling_sama",
            bio: "你好，这里是冰凌吖❤",
            image: "/img/yjtp.png",
        },
        footer: {
            contact: [{
                    type: "github",
                    link: "https://github.com/bingling-sama/",
                },
                {
                    type: "bilibili",
                    link: "https://space.bilibili.com/355281675/",
                },
            ],
            copyright: [
                {
                    text: "Made by bingling_sama",
                    link: "https://github.com/bingling-sama/"
                },
                {
                    text: "Powered by Vuepress",
                    link: "https://github.com/vuejs/vuepress",
                },
                {
                    text: "Themed by modern-blog",
                    link: "https://github.com/z3by/vuepress-theme-modern-blog/",
                },
                {
                    text: "MIT Licensed",
                    link: "/"
                },
                {
                    text: "Copyright © 2020-present Vue.js",
                    link: "/",
                },
            ],
            plugins: [
                "crisp",
                "seo",
                "smooth-scroll",
                "reading-progress",
                "@vuepress/medium-zoom",
                "@vuepress/nprogress",
                "social-share",
                [
                    "@vuepress/pwa",
                    {
                        serviceWorker: true,
                        updatePopup: true,
                    },
                ],
                [
                    "sitemap",
                    {
                        hostname: "https://www.booling.com",
                    },
                ],
            ],
        },
    },
}