import { useState } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageHeader from "@site/src/components/HomepageHeader";
import AssistantCard from "@site/src/components/AssistantCard";
import FooterDuck from "@site/src/components/FooterDuck";

import assistantsData from "@site/src/data/assistantsData";
import "@site/src/css/toggle.css";

const title = "دستیاران آموزشی";
const desc = "معرفی و راه‌های ارتباطی دستیاران آموزشی درس";

function TAList() {
  const [showPreviousTAs, setShowPreviousTAs] = useState(false);

  const handleToggle = () => {
    setShowPreviousTAs(!showPreviousTAs);
  };

  return (
    <section className="padding-vert--lg">
      {assistantsData.map((sec, idx) => {
        if (sec.section === "دستیاران آموزشی پیشین") {
          return (
            <article key={idx} className="container margin-top--lg">
              <div onClick={handleToggle} className="padding-horiz--md padding-vert--sm toggleSection">
                <h3 className="margin--none">{sec.section}</h3>
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
              {sec.section}
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
