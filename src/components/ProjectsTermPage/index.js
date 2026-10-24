import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import HomepageHeader from "@site/src/components/HomepageHeader";
import ProjectCard from "@site/src/components/ProjectCard";
import FooterDuck from "@site/src/components/FooterDuck";

import projectsData from "@site/src/data/projectsData";
import toFaNum from "@site/src/utils/toFaNum";

// TODO: #6 add pdf viewer

export default function ProjectsTermPage({ slug }) {
    const term = projectsData.find((t) => t.slug === slug);

    if (!term) {
        return (
            <Layout title="ترم پیدا نشد">
                <main className="container padding-vert--xl">
                    <Heading as="h1">ترم موردنظر پیدا نشد</Heading>
                    <Link to="/projects">بازگشت به آرشیو پروژه‌ها</Link>
                </main>
            </Layout>
        );
    }

    const title = `آرشیو پروژه‌ها - ${toFaNum(term.section)}`;
    const desc = "آرشیو صورت مسئله و کد پاسخ پروژه‌های این ترم";

    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={toFaNum(term.section)} subtitle={desc} />
            <main style={{ flexGrow: 1 }}>
                <section className="padding-vert--lg">
                    <div className="container">
                        <Link to="/projects">← بازگشت به انتخاب ترم</Link>
                    </div>
                    <div className="container margin-top--lg">
                        <div className="row">
                            {term.list.map((project, idx) => (
                                <ProjectCard key={idx} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FooterDuck />
        </Layout>
    );
}