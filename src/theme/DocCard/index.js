import DocCard from "@theme-original/DocCard";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

// Cards on generated index pages (e.g. the list of lessons in a tutorial category).
export default function DocCardWrapper(props) {
    const { lang } = useLanguage();
    if (lang !== "en") return <DocCard {...props} />;

    const item = {
        ...props.item,
        label: translateLabel(props.item.label),
        description: translateLabel(props.item.description),
    };
    return <DocCard {...props} item={item} />;
}