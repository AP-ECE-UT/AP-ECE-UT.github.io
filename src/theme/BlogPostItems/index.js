import BlogPostItems from "@theme-original/BlogPostItems";

import { useLanguage } from "@site/src/context/LanguageContext";
import englishBlogContent from "@site/src/utils/englishBlogContent";

// Blog list and tag pages show the English excerpt of a post when one exists.
export default function BlogPostItemsWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <BlogPostItems {...props} />;
    const items = props.items.map(item => ({ ...item, content: englishBlogContent(item.content, "excerpt") }));
    return <BlogPostItems {...props} items={items} />;
}
