import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FooterDuck from "@site/src/components/FooterDuck";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Footer from "@theme/Footer";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            wrapperClassName={styles.wrapper}
            title={" صفحه اصلی"}
            description="سایت درس برنامه سازی پیشرفته دانشگاه تهران"
            noFooter={false}
        >
            <HomepageHeader />
            <main style={{ flex: 1 }}>
                <HomepageFeatures />
            </main>

            <FooterDuck />
        </Layout>
    );
}
