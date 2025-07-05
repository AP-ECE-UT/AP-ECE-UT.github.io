import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FooterDuck from "@site/src/components/FooterDuck";

export default function HomePage() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader title={siteConfig.title} subtitle={siteConfig.tagline} />
            <main style={{ flexGrow: 1 }}>
                <HomepageFeatures />
            </main>
            <FooterDuck />
        </Layout>
    );
}
