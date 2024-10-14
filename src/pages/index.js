import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FooterDuck from "@site/src/components/FooterDuck";

import styles from "./index.module.css";

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
    return (
        <Layout
            title={"صفحه اصلی"}
            description="سایت درس برنامه‌سازی پیشرفته دانشگاه تهران"
            noFooter={false}
        >
            <HomepageHeader />
            <main style={{ flexGrow: 1 }}>
                <HomepageFeatures />
            </main>
            <FooterDuck />
        </Layout>
    );
}
