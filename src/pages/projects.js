import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ProjectCard from "../components/ProjectCard";
import Footer from "@site/src/components/FooterDuck";
import { useParams } from "react-router-dom";

import Heading from "@theme/Heading";
import styles from "./ta.module.css";
import projectsData from "../data/projectsData";
import { useLocation } from "react-router-dom";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    آرشیو پروژه‌ها
                </Heading>
                <p className="hero__subtitle">آرشیو صورت مسئله و کد پاسخ پروژه‌های درس</p>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const projectId = queryParams.get("project");
    let project;
    if (projectId) {
        project = projectsData[0].list.find((pr) => pr.projectId == projectId);
    }
    return project ? (
        <Layout title={project.title} description={project.description}>
            <Heading as="h1" className="margin-bottom--lg">
                {project.title}
            </Heading>
        </Layout>
    ) : (
        <Layout title={" آرشیو پروژه‌ها"} description="آرشیو صورت مسئله و کد پاسخ پروژه‌های درس">
            <HomepageHeader />
            <main>
                <section className={styles.tas}>
                    {projectsData.map((sec, idx) => (
                        <div key={idx} className="container margin-top--lg" style={{ opacity: sec.opacity }}>
                            <Heading as="h1" className="margin-bottom--lg">
                                {sec.section}
                            </Heading>
                            <div className="row">
                                {sec.list.map((project, idx) => (
                                    <ProjectCard key={idx} project={project} />
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
