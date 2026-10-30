import clsx from "clsx";
import ClampLines from "react-clamp-lines";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import projectsDataEn from "@site/src/data/projectsDataEn";
import { useLanguage } from "@site/src/context/LanguageContext";
import styles from "./styles.module.css";
import "@site/src/css/card.css";

function CardLayout({ icon, title, description, number, pdf, code }) {
    const { lang, t, num } = useLanguage();

    return (
        <div className="card padding--lg cardContainer">
            <Heading as="h3" className={clsx("text--truncate", styles.cardTitle)} title={title}>
                {icon}
                {" " + t("projects.project") + " "}
                {num(number)}
                {"- "}
                {title}
            </Heading>
            {description && (
                <ClampLines
                    key={lang}
                    text={description}
                    id={`cl-${icon}${number}`}
                    lines={2}
                    ellipsis="..."
                    buttons={false}
                    lessText="Collapse"
                    className={styles.cardDescription}
                    innerElement="p"
                />
            )}
            <div className={clsx("margin-top--sm", styles.linkItems)}>
                <div className={styles.linkItem}>
                    <Link href={pdf}>
                        <img src="/icon/document.svg" alt="Description" />
                        <span>{t("projects.description")}</span>
                    </Link>
                </div>
                <div className={styles.linkItem}>
                    <Link href={code}>
                        <img src="/icon/code.svg" alt="Code" className={styles.themeInvert}/>
                        <span>{t("projects.solution")}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ProjectCard({ slug, project }) {
    const { lang } = useLanguage();
    const en = lang === "en" ? projectsDataEn[slug]?.[project.number] : null;

    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout {...project} {...en} />
        </div>
    );
}