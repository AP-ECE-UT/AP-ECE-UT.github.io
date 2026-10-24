import Layout from "@theme/Layout";

import HomepageHeader from "@site/src/components/HomepageHeader";
import TermCard from "@site/src/components/TermCard";
import FooterDuck from "@site/src/components/FooterDuck";

import projectsData from "@site/src/data/projectsData";

const title = "آرشیو پروژه‌ها";
const desc = "ترم موردنظر خود را برای مشاهده صورت مسئله و کد پاسخ پروژه‌ها انتخاب کنید";

export default function ProjectsIndexPage() {
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