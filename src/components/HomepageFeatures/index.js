import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "آموزش ها",
        imageSrc: "img/duck-laptop.png",
        description: <>آموزش های آماده شده توسط دستیاران آموزشی لورم ایپسوم و دورت کاپاسی</>,
    },
    {
        title: "ویدیوهای درس",
        imageSrc: "img/duck-video.png",
        description: <>آرشیو ویدیوهای فصل بندی شده تدریس استاد با قابلیت لورم ایپسوم و دورت کاپاسی</>,
    },
    {
        title: "مجله",
        imageSrc: "img/duck-magazine.png",
        description: <>مجله "سی به علاوه یک" محتوی لورم ایپسوم و دورت کاپاسی</>,
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
