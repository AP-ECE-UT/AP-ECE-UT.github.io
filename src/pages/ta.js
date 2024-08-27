import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AssistantCard from "@site/src/components/AssistantCard";

import Heading from "@theme/Heading";
import styles from "./ta.module.css";
import assistantsData from "../data/assistants";

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
        <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <section className={styles.tas}>
                    {assistantsData.map((sec, idx) => (
                        <div key={idx} className="container margin-top--lg">
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
        </Layout>
    );
}
