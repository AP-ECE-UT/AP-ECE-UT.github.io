import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import fa from "@site/src/i18n/fa";
import en from "@site/src/i18n/en";

const STORAGE_KEY = "ap-lang";
const DICTIONARIES = { fa, en };
const DIRECTIONS = { fa: "rtl", en: "ltr" };
const DEFAULT_LANG = "fa";

function lookup(dict, key) {
    return key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

const LanguageContext = createContext({
    lang: DEFAULT_LANG,
    setLang: () => {},
    toggleLang: () => {},
    t: key => lookup(fa, key) ?? key,
});

export function LanguageProvider({ children }) {
    // The static build is always Persian, so the first client render must be Persian too.
    // The saved language is applied only after mount to avoid hydration mismatches.
    const [lang, setLangState] = useState(DEFAULT_LANG);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (saved && DICTIONARIES[saved]) setLangState(saved);
        } catch (e) {
            // localStorage may be unavailable (private mode, blocked storage)
        }
    }, []);

    // Keep <html lang> and <html dir> in sync with the selected language.
    // Docusaurus (react-helmet) may rewrite these attributes on navigation,
    // so we re-apply them whenever they change.
    useEffect(() => {
        const root = document.documentElement;
        const apply = () => {
            if (root.lang !== lang) root.lang = lang;
            if (root.dir !== DIRECTIONS[lang]) root.dir = DIRECTIONS[lang];
        };
        apply();
        const observer = new MutationObserver(apply);
        observer.observe(root, { attributes: true, attributeFilter: ["lang", "dir"] });
        return () => observer.disconnect();
    }, [lang]);

    const setLang = useCallback(next => {
        if (!DICTIONARIES[next]) return;
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
            // ignore
        }
    }, []);

    const toggleLang = useCallback(() => setLang(lang === "fa" ? "en" : "fa"), [lang, setLang]);

    const t = useCallback(
        key => lookup(DICTIONARIES[lang], key) ?? lookup(fa, key) ?? key,
        [lang]
    );

    const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, toggleLang, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    return useContext(LanguageContext);
}