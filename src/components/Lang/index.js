import { useLanguage } from "@site/src/context/LanguageContext";

// Language-specific blocks for MDX pages, e.g.
//   <Fa> ...Persian markdown... </Fa>
//   <En> ...English markdown... </En>
// Doc bodies are RTL (see polish.css), so the English block sets its own direction.
export function Fa({ children }) {
    const { lang } = useLanguage();
    return lang === "fa" ? <div dir="rtl">{children}</div> : null;
}

export function En({ children }) {
    const { lang } = useLanguage();
    return lang === "en" ? <div dir="ltr">{children}</div> : null;
}
