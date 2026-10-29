import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import en from "@site/src/i18n/en";
import { useLanguage } from "@site/src/context/LanguageContext";

// Docusaurus builds <title> as "<page> | <site title>" with the Persian site title.
// This keeps the site-title part in sync with the selected language.
export default function DocumentTitle() {
    const { lang } = useLanguage();
    const {
        siteConfig: { title: faTitle },
    } = useDocusaurusContext();

    useEffect(() => {
        const enTitle = en.site.title;
        const from = lang === "en" ? faTitle : enTitle;
        const to = lang === "en" ? enTitle : faTitle;

        const apply = () => {
            if (document.title.includes(from)) {
                document.title = document.title.split(from).join(to);
            }
        };

        apply();
        const observer = new MutationObserver(apply);
        observer.observe(document.head, { childList: true, subtree: true, characterData: true });
        return () => observer.disconnect();
    }, [lang, faTitle]);

    return null;
}