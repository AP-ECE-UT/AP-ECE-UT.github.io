import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageHeader from "@site/src/components/HomepageHeader";
import AssistantCard from "@site/src/components/AssistantCard";
import FooterDuck from "@site/src/components/FooterDuck";

import assistantsData from "@site/src/data/assistantsData";

const title = "دستیاران آموزشی";
const desc = "معرفی و راه‌های ارتباطی دستیاران آموزشی درس";

function TAList() {
    return (
        <section style={{ padding: "2rem 0" }}>
            {assistantsData.map((sec, idx) => (
                <div key={idx} className="container margin-top--lg" style={{ opacity: sec.opacity }}>
                    <Heading as="h2" className="margin-bottom--lg">
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
    );
}

export default function TAPage() {
    return (
        <Layout title={title} description={desc}>
            <HomepageHeader title={title} subtitle={desc} />
            <main style={{ flexGrow: 1 }}>
                <TAList />
            </main>
            <FooterDuck />
        </Layout>
    );
}
