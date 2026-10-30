import clsx from "clsx";
import Heading from "@theme/Heading";

import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

export default function HomepageHeader({ title, subtitle }) {
    const { ltr } = useLanguage();

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">{ltr(title)}</Heading>
                <p className="hero__subtitle">{ltr(subtitle)}</p>
            </div>
        </header>
    );
}
