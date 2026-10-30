// A tiny store that mirrors the current language outside React.
// It lets the imperative translate() API (used by Docusaurus for aria-labels,
// titles, ...) know the language, and lets <Translate> re-render on change.
let current = "fa";
const listeners = new Set();

export const getCurrentLang = () => current;

// Called by LanguageProvider while rendering (no notification, so it is safe during render).
export const syncLang = lang => {
    current = lang;
};

// Called by LanguageProvider in an effect, after the language changed.
export const notifyLang = () => listeners.forEach(listener => listener());

export const subscribeLang = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};
