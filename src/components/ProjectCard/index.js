import clsx from "clsx";
import ClampLines from "react-clamp-lines";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import toFaNum from "@site/src/utils/toFaNum";
import styles from "./styles.module.css";
import "@site/src/css/card.css";

function CardLayout({ icon, title, description, number, pdf, code }) {
    return (
        <div className="card padding--lg cardContainer">
            <Heading as="h3" className={clsx("text--truncate", styles.cardTitle)} title={title}>
                {icon}
                {" پروژه "}
                {toFaNum(number.toString())}
                {"- "}
                {title}
            </Heading>
            {description && (
                <ClampLines
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
                        <span>صورت پروژه</span>
                    </Link>
                </div>
                <div className={styles.linkItem}>
                    <Link href={code}>
                        <img src="/icon/code.svg" alt="Code" className={styles.themeInvert}/>
                        <span>پاسخ نمونه</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ProjectCard({ project }) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout {...project} />
        </div>
    );
}
