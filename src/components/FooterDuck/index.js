import styles from "./styles.module.css";

export default function FooterDuck() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.wave}>
                <div className={styles.text}>
                    &copy;
                    {" برنامه سازی پیشرفته"}
                    <br className={styles.footerBreak} />
                    <span className={styles.dash}>{" - "}</span>
                    {" دانشکده مهندسی برق و کامپیوتر  - دانشکدگان فنی دانشگاه تهران - "}
                    {"پاییز ۱۴۰۳"}
                </div>
            </div>
            <img src="/img/duck-waving.webp" className={styles.duck} alt="Duck" />
        </footer>
    );
}
