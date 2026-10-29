import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

export default function FooterDuck() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.wave}>
                <div className={styles.text}>
                    &copy;
                    {" " + t("footer.course")}
                    <br className={styles.footerBreak} />
                    <span className={styles.dash}>{" - "}</span>
                    {" " + t("footer.school") + " - " + t("footer.university") + " - "}
                    {t("footer.term")}
                </div>
            </div>
            <img src="/img/duck-waving.webp" className={styles.duck} alt="Duck" />
        </footer>
    );
}