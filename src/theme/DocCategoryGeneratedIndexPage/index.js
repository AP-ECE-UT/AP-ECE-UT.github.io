import DocCategoryGeneratedIndexPage from "@theme-original/DocCategoryGeneratedIndexPage";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

function translateLink(link) {
    return link ? { ...link, title: translateLabel(link.title) } : link;
}

// Generated index pages of tutorial categories: title, description and prev/next links.
export default function DocCategoryGeneratedIndexPageWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <DocCategoryGeneratedIndexPage {...props} />;

    const index = props.categoryGeneratedIndex;
    const categoryGeneratedIndex = {
        ...index,
        title: translateLabel(index.title),
        description: translateLabel(index.description),
        navigation: {
            previous: translateLink(index.navigation.previous),
            next: translateLink(index.navigation.next),
        },
    };
    return <DocCategoryGeneratedIndexPage {...props} categoryGeneratedIndex={categoryGeneratedIndex} />;
}
