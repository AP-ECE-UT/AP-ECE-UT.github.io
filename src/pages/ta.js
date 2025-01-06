import React, { useState } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageHeader from "@site/src/components/HomepageHeader";
import AssistantCard from "@site/src/components/AssistantCard";
import FooterDuck from "@site/src/components/FooterDuck";

import assistantsData from "@site/src/data/assistantsData";

const title = "دستیاران آموزشی";
const desc = "معرفی و راه‌های ارتباطی دستیاران آموزشی درس";

function TAList() {
  const [showPreviousTAs, setShowPreviousTAs] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setShowPreviousTAs(!showPreviousTAs);
    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="padding-vert--lg">
      {assistantsData.map((sec, idx) => {
        if (sec.section === "دستیاران پیشین") {
          return (
            <div key={idx} className="container margin-top--lg">
              <div
                onClick={handleToggle}
                className="toggle-section"
              >
                <span className="toggle-icon-wrapper">
                  <span className={`toggle-icon ${showPreviousTAs ? "open" : ""}`}>
                    ▼
                  </span>
                </span>
                <span className="toggle-title">{sec.section}</span>
              </div>
              <div className={`collapsible-content ${showPreviousTAs ? "show" : "hide"} ${isAnimating ? "animating" : ""}`}>
                <div className="row">
                  {sec.list.map((ta, idx) => (
                    <AssistantCard key={idx} ta={ta} />
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className="container margin-top--lg">
            <Heading as="h2" className="margin-bottom--lg">
              {sec.section}
            </Heading>
            <div className="row">
              {sec.list.map((ta, idx) => (
                <AssistantCard key={idx} ta={ta} />
              ))}
            </div>
          </div>
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