import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import toFaNum from "@site/src/utils/toFaNum";
import styles from "./styles.module.css";

export default function TermCard({ slug, icon, section, count }) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <Link to={`/projects/${slug}`} className={clsx("card padding--lg", styles.termCard)}>
                <span className={styles.termIcon}>{icon}</span>
                <Heading as="h3" className={styles.termTitle}>
                    {toFaNum(section)}
                </Heading>
                <p className={styles.termCount}>{toFaNum(count.toString())} پروژه</p>
            </Link>
        </div>
    );
}