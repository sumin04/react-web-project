import React, { useCallback, useRef } from "react";
import img from "../../img/imgModule";
import styles from "./slideBanner.module.css"
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const SlideBanner = () => {
    const trainCompartment = [
        img.eventBanner,
        img.eventBanner2,
    ];
    
    const boxVariants = {
        entry: (back) => ({opacity: 0, x: back ? -50 :50,}), // 초기 상태
        visible: { opacity: 1, x: 0, scale: 1,}, // 애니메이션 중간 상태
        exit: (back) => ({opacity: 0, x: back ? 50: -50, scale: 1,}),  // 컴포넌트가 제거될 때 상태
    };

    const [visible, setVisible] = useState(0);
    const [back, setBack] = useState(false);
    const autoStop = useRef();

    const prevSlide = () => {
        setBack(true);
        console.log('back RKQT:', back)
        setVisible((prev) => 
            prev === trainCompartment.length -1 ? trainCompartment.length : prev - 1,
        );
    };
    const nextSlide = () => {
        setBack(false);
        console.log('back dddd:', back)
        setVisible((prev) =>
            prev === trainCompartment.length -1 ? trainCompartment.length : prev + 1
        );
    };

    // wrap은 정의된 숫자 범위를 넘어서면 숫자를 다시 처음 상태
    // wrap(min:number, max:number, v:number)s
    const Index = wrap(0, trainCompartment.length, visible);
    
    // 자동 재생 기능
    useEffect(() => {
        autoStop.current=  setInterval(() => {
            nextSlide();
        }, 2000);
        
        return () => clearInterval(autoStop.current);
    }, [setVisible]);
    
    // 멈춤 기능
    const stop = useCallback(() => {
        clearInterval(autoStop.current);
        console.log("stop : ", trainCompartment.length);
    }, []);
    
    // 재생 기능
    const play = () => {
        autoStop.current = setInterval(()=>{
            nextSlide();
        },2000);
        console.log("play : ", autoStop.current);
    };

    return (
        <div className={styles.train}>
            <div className={styles.compartment}>
                <span className={styles.swiperBtnWrapper}>
                    <small>{Index+1}/2</small>
                    <div>
                        <button onClick={stop}>멈춤</button>
                        <button onClick={play}>재생</button>
                    </div>
                </span>

                <div className={styles.compartment}>
                    <button
                        className={`${styles.swiperButtonPrev} 
                                    ${styles.swiperButton}`}
                        onClick={prevSlide}
                    >
                        {"〈"}
                    </button>
                    
                    <AnimatePresence custom={back} className={styles.animate}>
                        <motion.div>
                            <motion.img className={styles.img}
                                    src={trainCompartment[Index]}
                                    custom={back}
                                    variants={boxVariants}
                                    initial="entry"
                                    animate="visible"
                                    exit="exit"
                                    key={visible}
                                />
                        </motion.div>
                    </AnimatePresence>

                    <button
                        className={`${styles.swiperButtonNext} 
                        ${styles.swiperButton}`}
                        onClick={nextSlide}
                        >
                        {"〉"}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SlideBanner;