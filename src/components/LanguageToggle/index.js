import clsx from "clsx";

import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

export default function LanguageToggle({ mobile, className }) {
    const { toggleLang, t } = useLanguage();

    return (
        <button
            type="button"
            className={clsx("clean-btn", styles.toggle, mobile && styles.mobile, className)}
            onClick={toggleLang}
            title={t("langToggle.title")}
            aria-label={t("langToggle.title")}>
            {t("langToggle.label")}
        </button>
    );
}