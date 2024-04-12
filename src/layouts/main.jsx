import React from "react";
import styles from "./main.module.css"

const Main = () => {
    return(
        <main>
            <div className={styles.contentInner}>
                <nav className={styles.mainNav}>
                    <p><a href="#">자동차</a></p>
                    <p><a href="#">운전자</a></p>
                    <p><a href="#">건강</a></p>
                    <p><a href="#">자녀</a></p>
                    <p><a href="#">반려동물</a></p>
                    <p><a href="#">주택화재</a></p>
                    <p><a href="#">여행</a></p>
                    <p><a href="#">레저</a></p>
                    <p><a href="#">실손</a></p>
                    <p><a href="#">연금/자산</a></p>
                    <p><a href="#">전화가입</a></p>
                    <p><a href="#">보장분석</a></p>
                    <p><a href="#">서비스</a></p>
                </nav>

                <div className={styles.test}>
                    <div>
                        <div className={styles.advertisementBanner}>
                            <h1>
                                <strong>인기상품. </strong>
                                최근 조회가<br/>많은 상품들이에요
                            </h1>
                            <p>광고 배너</p>
                        </div>
                        <ul className={styles.iconList}>
                            <li>자동차보험</li>
                            <li>이륜차보험</li>
                            <li>운전자보험</li>
                            <li>가정보장보험</li>
                            <li>종합보험</li>
                            <li>쳇블리반려견보험</li>
                            <li>해외여행보험</li>
                        </ul>
                    </div>
                    {/* <div className={styles.textLi}>
                        <div>
                            <p style={{height:'300px', background: 'skyblue'}}>자동차</p>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p style={{height:'300px', background: 'orange'}}>운전자</p>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div> */}
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </main>
    );
}

export default Main;