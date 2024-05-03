import React from "react";
import styles from "./mainContent.module.css";
import TitleBox from "./TilteBox";
import Inner from "./innerBox";
import Title from "./title";

const MainContents = () => {
    return(
        <div className={styles.productCar}>
            <Title content={TITLE}/>
            <div className={styles.main}>
                <TitleBox content={TITLEBOX}/>
                <Inner content={INNER} />
                <Inner content={INNER1} />
            </div>
        </div>
    );
};

const TITLE = {
    title: "자동차"
}

const TITLEBOX = {
    title: "자동차보험",
    text1: "자사 오프라인 대비",
    text2: "인터넷가입 평균 18.1% 저렴해요!",
    text3: "(24.2.15 보험시기 이전 17.7%)",
    btn1: "계산/가입",
    btn2: "갱신/재가입",
    // img: "",
}

const INNER = {
    title: "이륜자보험",
    text1: "자사 오프라인 대비",
    text2: "평균 19.8% 저렴",
    // img: "",
}
const INNER1 = {
    title: "자동차보험(법인)",
    text1: "자사 오프라인 대비",
    text2: "평균 18.1% 저렴",
    text3: "(24.2.15 보험시기 이전 17.7%)",
    // img: "",
}
export default MainContents;