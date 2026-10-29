import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import HomepageHeader from "@site/src/components/HomepageHeader";
import ProjectCard from "@site/src/components/ProjectCard";
import FooterDuck from "@site/src/components/FooterDuck";
import { useLanguage } from "@site/src/context/LanguageContext";

import projectsData from "@site/src/data/projectsData";
import termLabel from "@site/src/utils/termLabel";

// TODO: #6 add pdf viewer

export default function ProjectsTermPage({ slug }) {
    const language = useLanguage();
    const { t, lang } = language;
    const term = projectsData.find((t) => t.slug === slug);

    if (!term) {
        return (
            <Layout title={t("projects.notFoundTitle")}>
                <main className="container padding-vert--xl">
                    <Heading as="h1">{t("projects.notFoundHeading")}</Heading>
                    <Link to="/projects">{t("projects.backToArchive")}</Link>
                </main>
            </Layout>
        );
    }

    const label = termLabel(term.section, language);
    const title = `${t("projects.archiveTitle")} - ${label}`;
    const desc = t("projects.termDescription");

    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={label} subtitle={desc} />
                        <main dir={lang === "en" ? "ltr" : "rtl"} style={{ flexGrow: 1 }}>
                <section className="padding-vert--lg">
                    <div className="container">
                        <Link to="/projects">{t("projects.backToTerms")}</Link>
                    </div>
                    <div className="container margin-top--lg">
                        <div className="row">
                            {term.list.map((project, idx) => (
                                <ProjectCard key={idx} slug={slug} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FooterDuck />
        </Layout>
    );
}