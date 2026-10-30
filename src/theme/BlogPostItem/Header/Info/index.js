// Swizzled (ejected) copy of BlogPostItem/Header/Info: in English mode the date is shown
// with the Gregorian calendar and Latin digits ("October 12, 2023").
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import { useLanguage } from "@site/src/context/LanguageContext";

import styles from "./styles.module.css";

function useReadingTimePlural() {
    const { selectMessage } = usePluralForm();
    return readingTimeFloat => {
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(
            readingTime,
            translate(
                {
                    id: "theme.blog.post.readingTime.plurals",
                    description: 'Pluralized label for "{readingTime} min read".',
                    message: "One min read|{readingTime} min read",
                },
                { readingTime }
            )
        );
    };
}

function ReadingTime({ readingTime }) {
    const readingTimePlural = useReadingTimePlural();
    return <>{readingTimePlural(readingTime)}</>;
}

export default function BlogPostItemHeaderInfo({ className }) {
    const { lang, ltr } = useLanguage();
    const { metadata } = useBlogPost();
    const { date, readingTime } = metadata;

    const options = { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" };
    const faFormat = useDateTimeFormat(options);
    const enFormat = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = (lang === "en" ? enFormat : faFormat).format(new Date(date));

    return (
        <div className={clsx(styles.container, "margin-vert--md", className)}>
            <time dateTime={date}>{ltr(formattedDate)}</time>
            {typeof readingTime !== "undefined" && (
                <>
                    {" · "}
                    <ReadingTime readingTime={readingTime} />
                </>
            )}
        </div>
    );
}
