import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import BlogAuthor from "@theme/Blog/Components/Author";
import Link from "@docusaurus/Link";
import toFaNum from "@site/utils/toFaNum";

function CardContainer({ children }) {
    return <div className={clsx("card padding--lg", styles.cardContainer)}>{children}</div>;
}

function CardLayout({ author }) {
    author.title = toFaNum(author.title);
    return (
        <CardContainer>
            <div className={styles.blogAuthorImage}>
                <BlogAuthor author={author} />
            </div>
            <Link href={"mailto:" + author.email} className={styles.email}>
                {author.email}
            </Link>
        </CardContainer>
    );
}

export default function AssistantCard({ key, ta }) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout key={key} author={ta} />
        </div>
    );
}
