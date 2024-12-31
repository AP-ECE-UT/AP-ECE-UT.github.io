import React, { useEffect } from "react";  // Add useEffect import
import { data } from "../AssistantCard/data.js"
// Import your SVGs here

import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const Footer = () => {

    useEffect(() => {
        data();
        return () => {
            window.removeEventListener("beforeunload", () => observer.disconnect());
        }
    }, []);

    return (
        <div className={styles.footerContainer}>
            <div className={styles.wave} alt="wave">
                <div className={styles.text}>
                    <span style={{ marginTop: "10px" }}>{"©"}</span>
                    {" برنامه سازی پیشرفته"}
                    <br className={styles.footerBreak} />
                    <span className={styles.dash}>{" - "}</span>
                    {" دانشکده مهندسی برق و کامپیوتر  - دانشکدگان فنی دانشگاه تهران - "}
                    {"پاییز ۱۴۰۳"}
                </div>
            </div>
            <img src="img/duck-waving.webp" className={styles.duck} alt="duck" />
        </div>
    );
};

export default Footer;
