import BlogListPage from "@theme-original/BlogListPage";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

export default function BlogListPageWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <BlogListPage {...props} />;

    const metadata = { ...props.metadata, blogTitle: translateLabel(props.metadata.blogTitle) };
    return <BlogListPage {...props} metadata={metadata} />;
}
