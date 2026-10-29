import Layout from "@theme/Layout";

import HomepageHeader from "@site/src/components/HomepageHeader";
import TermCard from "@site/src/components/TermCard";
import FooterDuck from "@site/src/components/FooterDuck";
import { useLanguage } from "@site/src/context/LanguageContext";

import projectsData from "@site/src/data/projectsData";

export default function ProjectsIndexPage() {
    const { t } = useLanguage();
    const title = t("projects.archiveTitle");
    const desc = t("projects.archiveDescription");

    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={title} subtitle={desc} />
            <main style={{ flexGrow: 1 }}>
                <section className="padding-vert--lg">
                    <div className="container margin-top--lg">
                        <div className="row">
                            {projectsData.map((term) => (
                                <TermCard
                                    key={term.slug}
                                    slug={term.slug}
                                    icon={term.icon}
                                    section={term.section}
                                    count={term.list.length}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FooterDuck />
        </Layout>
    );
}