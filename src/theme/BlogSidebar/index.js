import BlogSidebar from "@theme-original/BlogSidebar";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

export default function BlogSidebarWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en" || !props.sidebar) return <BlogSidebar {...props} />;

    return <BlogSidebar {...props} sidebar={{ ...props.sidebar, title: translateLabel(props.sidebar.title) }} />;
}