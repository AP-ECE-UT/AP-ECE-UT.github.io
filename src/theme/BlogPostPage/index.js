import BlogPostPage from "@theme-original/BlogPostPage";

import { useLanguage } from "@site/src/context/LanguageContext";
import englishBlogContent from "@site/src/utils/englishBlogContent";

// In English mode a post is rendered from its English version when one exists.
export default function BlogPostPageWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <BlogPostPage {...props} />;
    return <BlogPostPage {...props} content={englishBlogContent(props.content)} />;
}
