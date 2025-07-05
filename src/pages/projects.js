import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import ProjectCard from "@site/src/components/ProjectCard";
import FooterDuck from "@site/src/components/FooterDuck";

import projectsData from "@site/src/data/projectsData";
import toFaNum from "@site/src/utils/toFaNum";

const title = "آرشیو پروژه‌ها";
const desc = "آرشیو صورت مسئله و کد پاسخ پروژه‌های درس";

function ProjectList() {
    return (
        <section className="padding-vert--lg">
            {projectsData.map((sec, idx) => (
                <div key={idx} className="container margin-top--lg">
                    <Heading as="h2" className="margin-bottom--lg">
                        {toFaNum(sec.section)}
                    </Heading>
                    <div className="row">
                        {sec.list.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default function ProjectsPage() {
    // TODO: #6 add pdf viewer
    //
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const projectId = queryParams.get("project");
    // const mode = queryParams.get("mode");
    // let project;
    // if (projectId) {
    //     project = projectsData[0].list.find((pr) => pr.projectId == projectId);
    // }
    //
    // return project ? (
    //     <Layout title={project.title} description={project.description}>
    //         {mode == "iframe" ? (
    //             <iframe src={`https://docs.google.com/viewer?url=${project.pdf}`} width="100%" height="600px">
    //                 This browser does not support iframes.
    //             </iframe>
    //         ) : mode == "embed" ? (
    //             <embed src={project.pdf} width="100%" height="600px" type="application/pdf"></embed>
    //         ) : (
    //             <GoogleDocsViewer
    //                 width="600px"
    //                 height="780px"
    //                 fileUrl="https://raw.githubusercontent.com/PashaBarahimi/CPS-Course-Projects/main/CA2-Motion-Based-Authentication/description.pdf"
    //             />
    //         )}
    //     </Layout>
    // )

    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={title} subtitle={desc} />
            <main style={{ flexGrow: 1 }}>
                <ProjectList />
            </main>
            <FooterDuck />
        </Layout >
    );
}
