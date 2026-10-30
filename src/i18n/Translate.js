// Replacement for "@docusaurus/Translate" (wired up in docusaurus.config.js).
//
// Docusaurus theme strings ("On this page", "Next", "Edit this page", admonition
// titles, blog texts...) are Persian at build time because the site locale is "fa".
// The default (source) message of every such string is English, so in English mode
// we simply use that default message instead of the Persian translation.
import React, { useSyncExternalStore } from "react";
import { interpolate } from "@docusaurus/Interpolate";
import codeTranslations from "@generated/codeTranslations";

import { getCurrentLang, subscribeLang } from "@site/src/i18n/langStore";
import { isolate } from "@site/src/i18n/bidi";

function getLocalizedMessage({ id, message }) {
    if (typeof id === "undefined" && typeof message === "undefined") {
        throw new Error(
            "Docusaurus translation declarations must have at least a translation id or a default translation message"
        );
    }
    if (getCurrentLang() === "en") {
        return message ?? id;
    }
    return codeTranslations[id ?? message] ?? message ?? id;
}

// Imperative API (aria labels, titles, ...).
export function translate({ message, id }, values) {
    return interpolate(getLocalizedMessage({ message, id }), values);
}

export default function Translate({ children, id, values }) {
    // Re-render when the language changes.
    useSyncExternalStore(subscribeLang, getCurrentLang, () => "fa");

    if (children && typeof children !== "string") {
        console.warn("Illegal <Translate> children", children);
        throw new Error("The Docusaurus <Translate> component only accept simple string values");
    }
    const message = getLocalizedMessage({ message: children, id });
    // English text is isolated so its punctuation renders correctly inside the RTL layout.
    return <>{interpolate(getCurrentLang() === "en" ? isolate(message) : message, values)}</>;
}
