// Turns a data-file term label like "ترم پاییز 1404" into the current language.
// fa: unchanged text with Persian digits. en: "Fall 1404".
export default function termLabel(section, { lang, t, num }) {
    if (lang !== "en") return num(section);
    const match = section.match(/(پاییز|بهار)\s*(\d+)/);
    if (!match) return section;
    const season = match[1] === "پاییز" ? "fall" : "spring";
    return `${t(`projects.terms.${season}`)} ${match[2]}`;
}