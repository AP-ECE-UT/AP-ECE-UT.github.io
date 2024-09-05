import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import BlogAuthor from "@theme/Blog/Components/Author";
import Link from "@docusaurus/Link";
import ClampLines from "react-clamp-lines";
import { useColorMode } from "@docusaurus/theme-common";
import toFaNum from "@site/utils/toFaNum";

function CardContainer({ children }) {
    return <div className={clsx("card padding--lg", styles.cardContainer)}>{children}</div>;
}

function CardLayout({ icon, title, description, number, pdf, code }) {
    const { colorMode, setColorMode } = useColorMode();
    return (
        <CardContainer>
            <Heading as="h2" className={clsx("text--truncate", styles.cardTitle)} title={title}>
                {icon}
                {" پروژه "}
                {toFaNum(number.toString())}
                {"- "}
                {title}
            </Heading>
            {description && (
                <ClampLines
                    text={description}
                    id="really-unique-id"
                    lines={2}
                    ellipsis="..."
                    buttons={false}
                    lessText="Collapse"
                    className={styles.cardDescription}
                    innerElement="p"
                />
            )}
            <div className={styles.linkItems}>
                <div className={styles.linkItem}>
                    <Link href={pdf}>
                        <img src="icon/document.svg" />
                        <span>صورت پروژه</span>
                    </Link>
                </div>
                <div className={styles.linkItem}>
                    <Link href={code}>
                        <img src="icon/code.svg" className={styles.themeInvert}/>
                        <span>پاسخ نمونه</span>
                    </Link>
                </div>
            </div>
        </CardContainer>
    );
}

export default function ProjectCard({ key, project }) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout key={key} {...project} />
        </div>
    );
}
