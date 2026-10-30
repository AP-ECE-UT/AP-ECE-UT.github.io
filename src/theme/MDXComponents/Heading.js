import Heading from "@theme-original/MDXComponents/Heading";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

// In English mode the page title (the Persian "# ..." heading of a lesson) is replaced by its
// English label when one exists. The rest of the lesson stays Persian.
export default function MDXHeadingWrapper(props) {
    const { lang } = useLanguage();
    if (lang === "en" && props.as === "h1" && typeof props.children === "string") {
        return <Heading {...props}>{translateLabel(props.children)}</Heading>;
    }
    return <Heading {...props} />;
}
