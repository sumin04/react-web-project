import React from "react";
import styles from "./main.module.css"
import SlideBanner from "./components/slideBanner"
import ListItem from "./components/mainList-Item"
import MainContents from "./components/mainContent";

const Main = () => {
    return(
        <main className={styles.main}>
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

                <div className={styles.contents}>
                    <div className={styles.mainProductList}>
                        <div className={styles.tit}>
                            <h1>
                                <strong>인기상품. </strong>
                                최근 조회가<br/>많은 상품들이에요
                            </h1>
                            {/* 슬라이드 배너 */}
                            <SlideBanner/>
                        </div>
                        {/* 리스트 아이템 */}
                        <ListItem />
                    </div>

                    <MainContents />
                    {/* <MainContents /> */}
                </div>
            </div>
        </main>
    );
}

export default Main;