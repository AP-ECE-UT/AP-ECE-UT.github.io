import DocSidebarItem from "@theme-original/DocSidebarItem";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

// Sidebar items (categories and docs) get an English label in English mode.
// Children of a category are rendered through this wrapper again, so nesting works.
export default function DocSidebarItemWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <DocSidebarItem {...props} />;

    const item = { ...props.item, label: translateLabel(props.item.label) };
    return <DocSidebarItem {...props} item={item} />;
}