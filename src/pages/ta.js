import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AssistantCard from "@site/src/components/AssistantCard";
import Footer from "@site/src/components/FooterDuck";

import Heading from "@theme/Heading";
import styles from "./ta.module.css";
import assistantsData from "../data/assistantsData";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    دستیاران آموزشی
                </Heading>
                <p className="hero__subtitle">معرفی و راه های ارتباطی دستیاران آموزشی درس</p>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={" دستیاران آموزشی"}
            description="معرفی و راه های ارتباطی دستیاران آموزشی درس"
            wrapperClassName={styles.wrapper}
        >
            <HomepageHeader />
            <main style={{ flex: 1 }}>
                <section className={styles.tas}>
                    {assistantsData.map((sec, idx) => (
                        <div key={idx} className="container margin-top--lg" style={{ opacity: sec.opacity }}>
                            <Heading as="h1" className="margin-bottom--lg">
                                {sec.section}
                            </Heading>
                            <div className="row">
                                {sec.list.map((ta, idx) => (
                                    <AssistantCard key={idx} ta={ta} />
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </Layout>
    );
}
