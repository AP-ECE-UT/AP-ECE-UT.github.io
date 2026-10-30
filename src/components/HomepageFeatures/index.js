import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

const featureList = [
    {
        key: "tutorials",
        imageSrc: "/img/duck-laptop.png",
        link: "/docs/tutorials/intro",
    },
    {
        key: "videos",
        imageSrc: "/img/duck-video.png",
        link: "/docs/course/intro",
    },
    {
        key: "blog",
        imageSrc: "/img/duck-magazine.png",
        link: "/blog",
    },
];

function Feature({ featureKey, imageSrc, link }) {
    const { t, ltr } = useLanguage();
    return (
        <div className="col col--4 text--center">
            <div className={`padding--md ${styles.feature}`}>
                <Link to={link} className={styles.featureLink}>
                    <img className={styles.featureSvg} src={imageSrc} alt="Duck" />
                    <Heading as="h3">{ltr(t(`home.features.${featureKey}.title`))}</Heading>
                </Link>
                <p>{ltr(t(`home.features.${featureKey}.description`))}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className="padding-vert--lg">
            <div className="container">
                <div className="row" dir="rtl">
                    {featureList.map((props, idx) => (
                        <Feature key={idx} featureKey={props.key} imageSrc={props.imageSrc} link={props.link} />
                    ))}
                </div>
            </div>
        </section>
    );
}
