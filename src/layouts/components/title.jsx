import React from "react";
import styles from "./mainContent.module.css";

const Title = ({content}) => {
    const { title } = content;
    return(
        <div className={styles.mainTitle}>
            <h2 className={styles.tit}>{title}</h2>
        </div>
    );
};
export default Title;