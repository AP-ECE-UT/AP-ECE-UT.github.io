import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import { useLanguage } from "@site/src/context/LanguageContext";
import termLabel from "@site/src/utils/termLabel";
import styles from "./styles.module.css";

export default function TermCard({ slug, icon, section, count }) {
    const language = useLanguage();
    const { t, num } = language;

    return (
        <div className="col col--4 margin-bottom--lg">
            <Link to={`/projects/${slug}`} className={clsx("card padding--lg", styles.termCard)}>
                <span className={styles.termIcon}>{icon}</span>
                <Heading as="h3" className={styles.termTitle}>
                    {termLabel(section, language)}
                </Heading>
                <p className={styles.termCount}>
                    {num(count)} {t("projects.projectCount")}
                </p>
            </Link>
        </div>
    );
}