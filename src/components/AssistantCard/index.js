import BlogAuthor from "@theme/Blog/Components/Author";

import toFaNum from "@site/src/utils/toFaNum";
import englishName from "@site/src/utils/englishName";
import { useLanguage } from "@site/src/context/LanguageContext";
import styles from "./styles.module.css";
import "@site/src/css/card.css";

function CardLayout({ author }) {
    return (
        <div className="card padding--lg cardContainer">
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
    const { lang, t } = useLanguage();

    let author;
    if (lang === "en") {
        const year = ta.title.match(/\d+/)?.[0];
        author = {
            ...ta,
            name: englishName(ta.imageURL, ta.name),
            title: year ? `${t("ta.entryYear")} ${year}` : ta.title,
        };
    } else {
        author = { ...ta, title: toFaNum(ta.title) };
    }
    return (
        <div className="col col--4 margin-bottom--lg">
            <CardLayout author={author} />
        </div>
    );
}