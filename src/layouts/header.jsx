import React from "react";
import styles from "./header.module.css"
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
    return(
        <div>
            <div className={styles.menuBox}>
                <div className={styles.flexBox}>
                    <a href="/"><b>DB 손해보험 다이렉트</b></a>
                    <div className={styles.aBox}>
                        <a href="#"><b className={styles.corporate}>법인</b></a>
                        <a href="#" className={styles.line}>로그인</a>
                        <a href="#" className={styles.line}>인증센터</a>
                        <a href="#" className={styles.line}>공시실</a>
                        <a href="#">DB손해보험홈페이지</a>
                        <IoIosSearch></IoIosSearch>
                    </div>
                </div>
                <div className={styles.menu}>
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
            
            {/* 호버 내용 */}
            <div className={styles.display}>
                {/* 보험가입 */}
                <div className={styles.textBox}>
                    <b>자동차</b>
                    <p>자동차 보험</p>
                    <p>자동차보험할인특약안내</p>
                    <ul>
                        <li>주행거리할인특약</li>
                        <li>안전운전할인특약</li>
                        <li>Baby in car 할인특약</li>
                        <li>블랙박스할인특약</li>
                        <li>첨단안전장치할인특약</li>
                        <li>커넥티드카 할인특약</li>
                        <li>커넥티드카 안전운전할인특약</li>
                        <li>프로미하트나눔특약</li>
                    </ul>
                    <p>원데이자동차보험</p>
                    <p>자동차 고장수리비용보험</p>

                    <b>이륜차</b>
                    <p>이륜차보험</p>
                </div>
                {/* 혜택/서비스 */}
                <div className={styles.textBox}>
                    <b>운전자</b>
                    <p>운전자 보험</p>
                    <p>안전운전UBI운전자보험</p>
                    <p>운전자보험(1년이내)</p>

                    <b>이륜차운전자</b>
                    <p>오토바이운전자보험</p>
                    <p>킥보드운전자보험</p>
                </div>
                {/* 계약관리 */}
                <div className={styles.textBox}>
                    <b>건강</b>
                    <p>종합 보험</p>
                    <p>암보험</p>
                    <p>간편건강보험</p>
                    <p>유병자간편건강보험</p>
                    <p>치아보험</p>

                    <b>자녀</b>
                    <p>자녀보험</p>
                    <p>치아보험(자녀)</p>
                    <p>유병자간편실손보험(자녀)</p>
                    
                    <b>실손</b>
                    <p>실손의료비보험</p>
                    <p>실손의료비보험(계약전환)</p>
                    <p>유병자간편실손보험</p>
                    <p>유병자간편실손보험(재가입)</p>
                </div>
                {/* 사고/보상 */}
                <div className={styles.textBox}>
                    <b>여행</b>
                    <p>해외여행보험</p>
                    <p>해외유학/장기체류보험</p>
                    <p>프리미엄해외여행보험</p>
                    <p>국내여행보험</p>
                    
                    <b>레저</b>
                    <p>오잘공골프보험(3년)</p>
                    <p>골프보험(1년이내)</p>
                    <p>OUTDOOR레저(스키)보험</p>
                    
                    <b>실손</b>
                    <p>실손의료비보험</p>
                    <p>실손의료비보험(계약전환)</p>
                    <p>유병자간편실손보험</p>
                    <p>유병자간편실손보험(재가입)</p>

                    <b>반려동물</b>
                    <p>펫블리반려견보험</p>
                    <p>펫보험(1년)</p>
                </div>
                {/* 고객지원 */}
                <div className={styles.textBox}>
                    <b>화재</b>
                    <p>가정보장보험(화재)</p>
                    <p>주택화재보험(3년이내)</p>
                    
                    <b>재산</b>
                    <p>재난배상책임보험(3년)</p>
                    <p>풍수해보험(소상공인)</p>
                    <p>개인정보보호책임보험Ⅱ</p>
                    
                    <b>연금</b>
                    <p>연금보험</p>

                    <b>보장분석</b>
                    <p>내 보험 보장분석</p>

                    <b>전화가입</b>
                    <p>전화가입안내</p>
                </div>
            </div>
        </div>
    );

}
export default Header;