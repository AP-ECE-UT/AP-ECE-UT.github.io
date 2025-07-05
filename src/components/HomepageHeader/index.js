import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export default function HomepageHeader({ title, subtitle }) {
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">{title}</Heading>
                <p className="hero__subtitle">{subtitle}</p>
            </div>
        </header>
    );
}
