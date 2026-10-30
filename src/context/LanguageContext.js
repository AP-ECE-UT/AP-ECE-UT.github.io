import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import fa from "@site/src/i18n/fa";
import en from "@site/src/i18n/en";
import toFaNum from "@site/src/utils/toFaNum";
import { notifyLang, syncLang } from "@site/src/i18n/langStore";
import { isolate } from "@site/src/i18n/bidi";

const STORAGE_KEY = "ap-lang";
const DICTIONARIES = { fa, en };
const DEFAULT_LANG = "fa";

function lookup(dict, key) {
    return key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

const LanguageContext = createContext({
    lang: DEFAULT_LANG,
    setLang: () => {},
    toggleLang: () => {},
    t: key => lookup(fa, key) ?? key,
    ltr: text => text,
    num: value => toFaNum(String(value)),
});

export function LanguageProvider({ children }) {
    // The static build is always Persian, so the first client render must be Persian too.
    // The saved language is applied only after mount to avoid hydration mismatches.
    const [lang, setLangState] = useState(DEFAULT_LANG);

    useEffect(() => {
        // Every page load starts in Persian. The choice lives only in React state, so it
        // survives client-side navigation but not a reload or a new visit.
        // Remove keys written by earlier versions of the toggle.
        try {
            window.localStorage.removeItem(STORAGE_KEY);
            window.sessionStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            // storage may be unavailable (private mode, blocked storage)
        }
    }, []);

    // Mirror the language outside React (see i18n/Translate.js). The value is assigned during
    // render so that children rendered in this pass see it; listeners are notified in an effect.
    syncLang(lang);
    useEffect(() => {
        notifyLang();
    }, [lang]);

    // Keep <html lang> in sync with the selected language. The page direction stays RTL in both
    // languages (English text is isolated instead, see i18n/bidi.js). Docusaurus (react-helmet)
    // rewrites <html lang> on every navigation, so we re-apply it whenever it changes.
    useEffect(() => {
        const root = document.documentElement;
        const apply = () => {
            if (root.lang !== lang) root.lang = lang;
            if (root.dataset.uiLang !== lang) root.dataset.uiLang = lang;
        };
        apply();
        const observer = new MutationObserver(apply);
        observer.observe(root, { attributes: true, attributeFilter: ["lang"] });
        return () => observer.disconnect();
    }, [lang]);

    const setLang = useCallback(next => {
        if (DICTIONARIES[next]) setLangState(next);
    }, []);

    const toggleLang = useCallback(() => setLang(lang === "fa" ? "en" : "fa"), [lang, setLang]);

    const t = useCallback(
        key => lookup(DICTIONARIES[lang], key) ?? lookup(fa, key) ?? key,
        [lang]
    );

    // Digits: Persian digits in fa mode, Latin digits in en mode.
    const num = useCallback(value => (lang === "fa" ? toFaNum(String(value)) : String(value)), [lang]);

    // For text rendered on the page: isolates English strings (no-op in Persian).
    const ltr = useCallback(text => (lang === "en" ? isolate(text) : text), [lang]);

    const value = useMemo(
        () => ({ lang, setLang, toggleLang, t, ltr, num }),
        [lang, setLang, toggleLang, t, ltr, num]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    return useContext(LanguageContext);
}
