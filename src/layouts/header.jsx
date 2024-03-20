import React from "react";
import styles from "./header.module.css"
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
    return(
        <>
            <div className={styles.menuBox}>
                <div className={styles.flexBox}>
                    <a href="/"><b>DB 손해보험 다이렉트</b></a>
                    <div className={styles.aBox}>
                        <a href="#"><b>법인</b></a>
                        <a href="#">로그인</a>
                        <a href="#">인증센터</a>
                        <a href="#">공사실</a>
                        <a href="#">DB손해보험홈페이지</a>
                        <IoIosSearch></IoIosSearch>
                    </div>
                </div>
                <div className={styles.flexBox}>
                    <p className={styles.item}>보험가입</p>
                    <p className={styles.item}>혜택/서비스</p>
                    <p className={styles.item}>계약관리</p>
                    <p className={styles.item}>사고/보상</p>
                    <span className={styles.iconBox}>
                        <p className={styles.item}>고객지원</p>
                        <a href="#"><BiShoppingBag className={styles.icon}></BiShoppingBag></a>
                        <a href="#"><FiMenu className={styles.icon}></FiMenu></a>
                    </span>
                </div>
            </div>
            <hr />
            <div>탄먀ㅓ래ㅑ버ㅐ</div>
        </>
    );

}
export default Header;