import DocPaginator from "@theme-original/DocPaginator";

import UtterancesComments from "@site/src/components/UtterancesComments";
import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

function translateLink(link, lang) {
    if (!link || lang !== "en") return link;
    return { ...link, title: translateLabel(link.title) };
}

export default function DocPaginatorWrapper(props) {
    const { lang } = useLanguage();

    return (
        <>
            <DocPaginator
                {...props}
                previous={translateLink(props.previous, lang)}
                next={translateLink(props.next, lang)}
            />
            <UtterancesComments />
        </>
    );
}