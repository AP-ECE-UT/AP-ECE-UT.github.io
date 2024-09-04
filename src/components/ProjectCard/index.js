import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import BlogAuthor from "@theme/Blog/Components/Author";
import Link from "@docusaurus/Link";
import ClampLines from "react-clamp-lines";

function CardContainer({ children }) {
    return <div className={clsx("card padding--lg", styles.cardContainer)}>{children}</div>;
}

function CardLayout({ icon, title, description, projectId }) {
    return (
        <CardContainer>
            <Link href={"/projects?project=" + projectId}>
                <Heading as="h2" className={clsx("text--truncate", styles.cardTitle)} title={title}>
                    {icon} {title}
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
                    // <p className={styles.cardDescription} title={description}>
                    //     {description}
                    // </p>
                )}
            </Link>
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
