import BlogAuthor from "@theme-original/Blog/Components/Author";

import { useLanguage } from "@site/src/context/LanguageContext";
import englishName from "@site/src/utils/englishName";
import { translateEntryYear } from "@site/src/i18n/labels";

// Blog authors: English name (derived from the photo file name) and "Entry year NNNN".
export default function BlogAuthorWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en" || !props.author) return <BlogAuthor {...props} />;

    const { author } = props;
    const translated = {
        ...author,
        name: englishName(author.imageURL, author.name),
        title: translateEntryYear(author.title),
    };
    return <BlogAuthor {...props} author={translated} />;
}
