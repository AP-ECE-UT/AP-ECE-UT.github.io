import { useState } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import AssistantCard from "@site/src/components/AssistantCard";
import FooterDuck from "@site/src/components/FooterDuck";
import { useLanguage } from "@site/src/context/LanguageContext";

import assistantsData from "@site/src/data/assistantsData";
import "@site/src/css/toggle.css";

// Section names come from the data files (Persian); map them to dictionary keys.
const SECTION_KEYS = {
  "دستیاران ارشد": "ta.sections.senior",
  "دستیاران آموزشی": "ta.sections.current",
  "دستیاران آموزشی پیشین": "ta.sections.former",
};

function TAList() {
  const { t } = useLanguage();
  const [showPreviousTAs, setShowPreviousTAs] = useState(false);

  const handleToggle = () => {
    setShowPreviousTAs(!showPreviousTAs);
  };

  const sectionLabel = name => (SECTION_KEYS[name] ? t(SECTION_KEYS[name]) : name);

  return (
    <section className="padding-vert--lg">
      {assistantsData.map((sec, idx) => {
        if (sec.section === "دستیاران آموزشی پیشین") {
          return (
            <article key={idx} className="container margin-top--lg">
              <div onClick={handleToggle} className="padding-horiz--md padding-vert--sm toggleSection">
                <h3 className="margin--none">{sectionLabel(sec.section)}</h3>
                <span className={`toggleIcon ${showPreviousTAs ? "open" : ""}`}>▼</span>
              </div>
              <div className={`padding-horiz--md margin-top--lg collapsibleContent ${showPreviousTAs ? "show" : ""}`}>
                <div className="row">
                  {sec.list.map((ta, idx) => (
                    <AssistantCard key={idx} ta={ta} />
                  ))}
                </div>
              </div>
            </article>
          );
        }

        return (
          <article key={idx} className="container margin-top--lg">
            <Heading as="h2" className="margin-bottom--lg">
              {sectionLabel(sec.section)}
            </Heading>
            <div className="row">
              {sec.list.map((ta, idx) => (
                <AssistantCard key={idx} ta={ta} />
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default function TAPage() {
  const { t } = useLanguage();
  const title = t("ta.title");
  const desc = t("ta.description");

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