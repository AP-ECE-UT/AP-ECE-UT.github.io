import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function GitHubLinkBox({ url }) {
    return (
        <div className={clsx("card padding--md", styles.githubLinkBox)}>
            <Link href={url} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                View Code on GitHub
            </Link>
        </div>
    );
}
