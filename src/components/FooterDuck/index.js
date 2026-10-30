import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

export default function FooterDuck() {
    const { lang, t } = useLanguage();

    const text = (
        <>
            &copy; {t("footer.course")}
            <br className={styles.footerBreak} />
            <span className={styles.dash}>{" - "}</span>
            {" " + t("footer.school") + " - " + t("footer.university") + " - " + t("footer.term")}
        </>
    );

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.wave}>
                {/* In English the whole line is one LTR run, so its parts keep their reading order. */}
                <div className={styles.text}>{lang === "en" ? <bdi dir="ltr">{text}</bdi> : text}</div>
            </div>
            <img src="/img/duck-waving.webp" className={styles.duck} alt="Duck" />
        </footer>
    );
}
