import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
    return(
        <div className={Styles.footer}>
            <b>DB손해보험 주식회사</b>
            <div>
                <div>
                    <p>대표이사: 전종표</p>
                    <p>사업자등록번호: 201-81-45593</p>
                </div>
                <p>서울시 강남구 테헤란로 432(대치동, DB금융센터) (우)06194</p>
            </div>
        </div>
    );
}

export default Footer;