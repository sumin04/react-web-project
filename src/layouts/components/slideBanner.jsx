import React from "react";
import img from "../../img/imgModule";
import styles from "../../layouts/main.module.css"

const SlideBanner = () => {
    return(
        <div className={styles.slideBanner}>
            <img src={img.eventBanner} alt="이벤트 광고 배너" />
            <img src={img.eventBanner2} alt="이벤트 광고 배너" />
        </div>
    )
}
export default SlideBanner;