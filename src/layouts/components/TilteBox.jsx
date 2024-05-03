import React from "react";
import styles from "./mainContent.module.css";
import img from "../../img/imgModule";

const TitleBox = ({content}) => {
    const {title, text1, text2, text3, btn1, btn2} = content;
    return(
        <div className={styles.mainProductBox}>
            <div className={`${styles.inner} ${styles.innerFirst}`}>
                <strong>{title}</strong>
                <p>
                    {text1}<br/>
                    {text2}<br/>
                    {text3}
                </p>
                <button className={styles.btnFill}>{btn1}</button>
                <button className={styles.btnLine}>{btn2}</button>
            </div>
            <div className={styles.imgBox}>
                <img src={img.carImg} alt="자동차" />
            </div>
        </div>
    )
}
export default TitleBox;