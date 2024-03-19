import React from "react";
import styles from "./header.module.css"
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
    return(
        <div>
            <div className={styles.flexBox}>
                <a href="/">DB 손해보험 다이렉트</a>
                <div className={styles.aBox}>
                    <a href="#"><b>법인</b></a>
                    <a href="#">로그인</a>
                    <a href="#">인증센터</a>
                    <a href="#">공사실</a>
                    <a href="#">DB손해보험홈페이지</a>
                    <IoIosSearch className={styles.icon}></IoIosSearch>
                </div>
            </div>
            <div>
                <a href="#">보험가입</a>
                <a href="#">혜택/서비스</a>
                <a href="#">계약관리</a>
                <a href="#">사고/보상</a>
                <a href="#">고객지원</a>
                <div>
                    <BiShoppingBag />
                    <FiMenu />
                </div>
            </div>
        </div>
    );

}
export default Header;