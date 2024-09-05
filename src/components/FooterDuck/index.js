import React from "react";

// Import your SVGs here

import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.wave} alt="wave">
                    <div className={styles.text}>
                        <span style={{ marginTop: "10px" }}>{"©"}</span>
                        {" برنامه سازی پیشرفته"}
                        <br />
                        <span className={styles.dash}>{" - "}</span>
                        {" دانشکده مهندسی برق و کامپیوتر  - دانشکدگان فنی دانشگاه تهران - "}
                        {"پاییز ۱۴۰۳"}
                    </div>
                </div>
                <img src="img/duck-waving.webp" className={styles.duck} alt="wave" />
            </div>
        </>
    );
};

export default Footer;
