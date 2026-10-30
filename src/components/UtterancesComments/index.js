import { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

import Heading from "@theme/Heading";

import { useLanguage } from "@site/src/context/LanguageContext";
export default function UtterancesComments() {
    const { t } = useLanguage();
    const { colorMode, setColorMode } = useColorMode();
    const ref = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        const themes = {
            dark: "github-dark",
            light: "github-light",
        };
        const config = {
            src: "https://utteranc.es/client.js",
            repo: "AP-ECE-UT/AP-ECE-UT.github.io",
            "issue-term": "pathname",
            label: "💬Comment",
            theme: themes[colorMode],
            crossOrigin: "anonymous",
            defer: true,
        };

        Object.entries(config).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });

        setTimeout(() => {
            ref.current.append(script);
        }, 300);
    }, []);

    return (
        <div style={{ paddingTop: 60 }}>
            <Heading as="h2">{t("common.comments")}</Heading>
            <div ref={ref} />
        </div>
    );
}
