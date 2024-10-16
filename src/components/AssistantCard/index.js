import clsx from "clsx";

import BlogAuthor from "@theme/Blog/Components/Author";

import toFaNum from "@site/src/utils/toFaNum";
import styles from "./styles.module.css";

function CardLayout({ author }) {
    return (
        <div className={clsx("card padding--lg", styles.cardContainer)}>
            <div className={styles.blogAuthor}>
                <BlogAuthor author={author} />
            </div>
            <a href={"mailto:" + author.email} className={styles.email}>
                {author.email}
            </a>
        </div>
    );
}

export default function AssistantCard({ ta }) {
    const author = { ...ta, title: toFaNum(ta.title) };
    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout author={author} />
        </div>
    );
}
