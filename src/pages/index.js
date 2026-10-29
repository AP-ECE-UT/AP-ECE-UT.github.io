import Layout from "@theme/Layout";

import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FooterDuck from "@site/src/components/FooterDuck";
import { useLanguage } from "@site/src/context/LanguageContext";

export default function HomePage() {
    const { t } = useLanguage();

    return (
        <Layout title={t("site.title")} description={t("home.tagline")}>
            <HomepageHeader title={t("site.title")} subtitle={t("home.tagline")} />
            <main style={{ flexGrow: 1 }}>
                <HomepageFeatures />
            </main>
            <FooterDuck />
        </Layout>
    );
}