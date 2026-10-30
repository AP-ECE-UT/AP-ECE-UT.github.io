// Swizzled (ejected) copy of BlogPostItem/Header/Title: the title is translated in English mode.
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import { useLanguage } from "@site/src/context/LanguageContext";
import translateLabel from "@site/src/i18n/labels";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderTitle({ className }) {
    const { lang } = useLanguage();
    const { metadata, isBlogPostPage } = useBlogPost();
    const { permalink } = metadata;
    const title = lang === "en" ? translateLabel(metadata.title) : metadata.title;
    const TitleHeading = isBlogPostPage ? "h1" : "h2";

    return (
        <TitleHeading className={clsx(styles.title, "blog-post-title", className)}>
            {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
    );
}
