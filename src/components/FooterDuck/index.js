import React from "react";
import { motion } from "framer-motion";

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
                {/* <motion.img
                className={styles.duck}
                src={"img/duck-waving.webp"}
                alt="duck"
                initial={{ left: "100%" }}
                animate={{ left: "-10%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 80,
                    ease: "linear",
                }}
                style={{ top: "-40px" }}
            /> */}
            </div>
        </>
    );
};

export default Footer;
