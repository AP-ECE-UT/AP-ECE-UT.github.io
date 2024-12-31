import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

const featureList = [
    {
        title: "آموزش‌ها",
        imageSrc: "/img/duck-laptop.png",
        description:
            "چندین آموزش جامع تهیه شده توسط دستیاران آموزشی درس درباره کار با لینوکس، تمیزی کد، گیت و گیت‌هاب و...",
        link: "/docs/tutorials/intro",
    },
    {
        title: "ویدیوهای درس",
        imageSrc: "/img/duck-video.png",
        description: "آرشیو کامل ویدیوهای درس که توسط استاد ضبط شده‌ است به همراه کدهای مربوط به هر بخش",
        link: "/docs/course/intro",
    },
    {
        title: "مجله",
        imageSrc: "/img/duck-magazine.png",
        description: "مجلۀ خواندنی «سی به علاوه یک» که شامل اطلاعات فراتر از درس بوده و به مرور تالیف و منتشر می‌شود",
        link: "/blog",
    },
];

function Feature({ title, imageSrc, description, link }) {
    return (
        <div className="col col--4 text--center">
            <div className="padding-horiz--md">
                <Link to={link} className={styles.featureLink}>
                    <img className={styles.featureSvg} src={imageSrc} alt="Duck" />
                    <Heading as="h3">{title}</Heading>
                </Link>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className="padding-vert--lg">
            <div className="container">
                <div className="row">
                    {featureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
