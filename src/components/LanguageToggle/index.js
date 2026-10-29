import clsx from "clsx";
import IconLanguage from "@theme/Icon/Language";

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
            <IconLanguage width={20} height={20} />
            <span className={styles.label}>{t("langToggle.label")}</span>
        </button>
    );
}