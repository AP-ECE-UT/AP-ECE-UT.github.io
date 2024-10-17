import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "برنامه‌سازی پیشرفته",
    tagline: "سایت درس برنامه‌سازی پیشرفته دانشگاه تهران!",
    favicon: "img/favicon.ico",

    url: "https://AP-ECE-UT.github.io",
    baseUrl: "/",
    trailingSlash: false,

    organizationName: "AP-ECE-UT",
    projectName: "AP-ECE-UT.github.io",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "fa",
        locales: ["fa"],
        localeConfigs: {
            fa: {
                label: "فارسی",
                direction: "rtl",
            },
        },
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: "https://github.com/AP-ECE-UT/AP-ECE-UT.github.io/blob/main/",
                },
                blog: {
                    showReadingTime: false,
                    blogTitle: 'مجله',
                    blogDescription: 'AP Blog!',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'جلدهای منتشر شده',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: "./src/css/global.css",
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/ap-social-card.jpg",
            navbar: {
                title: "برنامه‌سازی پیشرفته",
                logo: {
                    alt: "AP Site Logo",
                    src: "img/duck.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "courseSidebar",
                        label: "محتوای درس",
                        position: "left",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialsSidebar",
                        label: "آموزش‌ها",
                        position: "left",
                    },
                    {
                        to: "/blog",
                        label: "مجله",
                        position: "left",
                    },
                    {
                        to: "/projects",
                        label: "پروژه‌ها",
                        position: "right",
                    },
                    {
                        to: "/ta",
                        label: "دستیاران",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["makefile", "bash", "cmake"],
            },
        }),
};

export default config;
