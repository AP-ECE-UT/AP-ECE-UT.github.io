import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "آموزش‌ها",
        imageSrc: "img/duck-laptop.png",
        description:
            "چندین آموزش جامع تهیه شده توسط دستیاران آموزشی درس، درباره کار با لینوکس، تمیزی کد، گیت و گیتهاب و...",
    },
    {
        title: "ویدیوهای درس",
        imageSrc: "img/duck-video.png",
        description: "آرشیو کامل ویدیوهای درس که توسط استاد ضبط شده‌ است به همراه کدهای مربوط به هر بخش",
    },
    {
        title: "مجله",
        imageSrc: "img/duck-magazine.png",
        description: "مجلۀ خواندنی «سی به علاوه یک» که شامل اطلاعات فراتر از درس بوده و به مرور تالیف و منتشر می‌شود",
    },
];

function Feature({ imageSrc, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <img className={styles.featureSvg} src={imageSrc} />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
