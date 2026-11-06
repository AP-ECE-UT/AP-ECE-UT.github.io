import clsx from "clsx";
import IconLanguage from "@theme/Icon/Language";

import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

export default function LanguageToggle({ mobile, sidebarHeader, className }) {
    const { toggleLang, t } = useLanguage();

    // In the mobile sidebar the toggle lives in the header (next to the X), not in the menu list.
    if (mobile) return null;

    return (
        <button
            type="button"
            className={clsx("clean-btn", styles.toggle, sidebarHeader && styles.sidebarHeader, className)}
            onClick={toggleLang}
            title={t("langToggle.title")}
            aria-label={t("langToggle.title")}>
            <IconLanguage width={20} height={20} />
            <span className={styles.label}>{t("langToggle.label")}</span>
        </button>
    );
}