// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "برنامه‌سازی پیشرفته",
    tagline: "سایت درس برنامه‌سازی پیشرفته دانشگاه تهران!",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://AP-ECE-UT.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "AP-ECE-UT", // Usually your GitHub org/user name.
    projectName: "AP-ECE-UT.github.io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/AP-ECE-UT/AP-ECE-UT.github.io/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/AP-ECE-UT/AP-ECE-UT.github.io/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/ap-social-card.jpg",
            navbar: {
                title: "برنامه‌سازی پیشرفته",
                logo: {
                    alt: "My Site Logo",
                    src: "img/duck.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "courseSidebar",
                        position: "left",
                        label: "محتوای درس",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialsSidebar",
                        position: "left",
                        label: "آموزش‌ها",
                    },
                    { to: "/blog", label: "مجله", position: "left" },
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
            // footer: {
            //     style: "dark",
            //     links: [
            //         {
            //             title: "Docs",
            //             items: [
            //                 {
            //                     label: "Tutorial",
            //                     to: "/docs/intro",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "Community",
            //             items: [
            //                 {
            //                     label: "Stack Overflow",
            //                     href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //                 },
            //                 {
            //                     label: "Discord",
            //                     href: "https://discordapp.com/invite/docusaurus",
            //                 },
            //                 {
            //                     label: "Twitter",
            //                     href: "https://twitter.com/docusaurus",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "More",
            //             items: [
            //                 {
            //                     label: "Blog",
            //                     to: "/blog",
            //                 },
            //                 {
            //                     label: "GitHub",
            //                     href: "https://github.com/facebook/docusaurus",
            //                 },
            //             ],
            //         },
            //     ],
            //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            // },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ["powershell", "makefile", "bash"],
            },
        }),
    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
        "https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap",
    ],
};

export default config;
