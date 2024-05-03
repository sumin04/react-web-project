import React from "react";
import styles from "./mainContent.module.css";
import img from "../../img/imgModule";

const Inner = ({content}) => {
    const { title, text1, text2, text3 } = content;
    return(
        <div className={styles.mainProductBox}>
            <a href="#" className={styles.inner}>
                <div className={styles.tBox}>
                    <div className={styles.titBox}>
                        <strong>{title}</strong>
                        <img src={img.arrow} alt="차" />
                    </div>
                    <p>
                        {text1}<br />
                        {text2}<br />
                        {text3}
                    </p>
                </div>
                <div className={styles.iconBox}>
                    <div></div>
                    <img className={styles.icon} src={img.iconBike} alt="오도방구" />
                </div>
            </a>
        </div>
    )
}
export default Inner;