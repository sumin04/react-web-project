import React from "react";
import img from "../../img/imgModule";
import styles from "./slideBanner.module.css"
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
// import { motion } from "framer-motion"
import styled from "styled-components";
import { wrap } from "popmotion";



const SlideBanner = () => {
    const trainCompartment = [
        img.eventBanner,
        img.eventBanner2,
    ];


    // const Wrapper = styled(motion.div) `
    // // width: 360px;
    // // height: 85px;
    // `

    // const SlideWrap = styled.div`
    // `;
    
    const boxVariants = {
        entry: (back) => ({ opacity: 0, x: back ? 50 :-50}), // 초기 상태
        // hidden: { opacity: 0, x: -100 }, // 초기 상태
        visible: { opacity: 1, x: 0, scale: 1,}, // 애니메이션 중간 상태
        exit: (back) => ({ opacity: 0, x:back? -50: 50, scale: 1,}),  // 컴포넌트가 제거될 때 상태
        // exit: { opacity: 0, x: 100 },  // 컴포넌트가 제거될 때 상태
        
        // entry: (back) => ({
        //     // x: back ? -500 : 500,
        //     x: 500,
        //     opacity: 0,
        //     scale: 0,
        //     // faRotate: 4500,
        // }),
        // center: {
        //     opacity: 1,
        //     x: 0,
        //     scale: 1,
        //     transition: { duration: 0.5 },
        // },
        // exit: (back) => ({
        //     // x: back ? 500 : -500,
        //     x: -500,
        //     opacity: 0,
        //     scale: 0,
        //     transition: { duration: 0.5 },
        // })
    };

    // const Box = styled(motion.img)`
    // width: 360px;
    // height: 85px;
    // border-radius: 5px;
    // // border: 1px solid black;
    // `;




    // const SlideBanner = () => {
    //     const trainCompartment = [
    //         img.eventBanner,
    //         img.eventBanner2,
    //     ];

    //     const [current, setCurrent] = useState(0);
    //     const length = SlideBanner.length;

    // 다음은 화살표를 누르면 앞이나 뒤 슬라이드로 이동하는 함수를 만든다.
    // setCurrent를 활용하여 이미지 인덱스 값을 바꿔주는데,
    // 이때 만약 마지막 페이지였을 경우 뒤로 넘길 때 첫 페이지로 이동하도록,
    // 첫 페이지였을 경우 앞으로 넘길 때 마지막 페이지로 이동하도록 설정하여
    // 슬라이더가 끝나지 않고 무한 반복되도록 한다
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? trainCompartment.length -1 : current -1);
    //     console.log('ㅓ런ㄷ트 : ', current)
    //     console.log('렝스 : ', trainCompartment.length -1)
    // }
    // const nextSlide = () => {
    //     setCurrent(current === trainCompartment.length -1 ? 0 : current + 1);
    //     console.log('ㅓ런ㄷ트 : ', current)
    //     console.log('렝스 : ', length -1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [current, length]);
    // // }, [imageIndex]);

    // if (!Array.isArray(trainCompartment) || trainCompartment.length <= 0){
    //     return null;
    // }

    // const firstCompartmentImage = new Image();
    // firstCompartmentImage.src = trainCompartment[0];




    const [visible, setVisible] = useState(0);
    const [back, setBack] = useState(false);
    // 박스마다 이미지 적용
    // const imageIndex = wrap(0, trainCompartment.length, visible);

    const prevSlide = () => {
        setBack(true);
        console.log('back RKQT:',back)
        setVisible((prev) => 
        prev === trainCompartment.length -1 ? trainCompartment.length : prev - 1,
    );
    };
    const nextSlide = () => {
        setBack(false);
        console.log('back dddd:',back)
        setVisible((prev) =>
            prev === trainCompartment.length -1 ? trainCompartment.length : prev + 1
        );
    };

    // wrap은 정의된 숫자 범위를 넘어서면 숫자를 다시 처음 상태
    // wrap(min:number, max:number, v:number)s
    const Index = wrap(0, trainCompartment.length, visible);


    return (
        <div className={styles.train}>
            <div>
                <button
                className={`${styles.swiperButtonPrev} 
                            ${styles.swiperButton}`}
                onClick={prevSlide}
                >
                    {"〈"}
                </button>

                <AnimatePresence custom={back}>
                    <motion.div>
                        <motion.img className={styles.img}
                                // src={img.eventBanner}
                                src={trainCompartment[Index]}
                                // custom={true}
                                custom={back}
                                // custom={false}
                                variants={boxVariants}
                                // initial="hidden"
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
            {/* <Wrapper>
                <SlideWrap>
                    <button
                        className={`${styles.swiperButtonPrev} 
                                    ${styles.swiperButton}`}
                        onClick={prevSlide}
                    >
                        {"〈"}
                    </button>

                    <AnimatePresence custom={false}>
                        <Box
                            // src={img.eventBanner}
                            src={trainCompartment[Index]}
                            // custom={true}
                            // custom={back}
                            custom={false}
                            variants={boxVariants}
                            // initial="hidden"
                            initial="entry"
                            animate="visible"
                            exit="exit"
                            key={visible}
                        />
                    </AnimatePresence>

                    <button
                        className={`${styles.swiperButtonNext} 
                                        ${styles.swiperButton}`}
                        onClick={nextSlide}
                    >
                        {"〉"}
                    </button>
                </SlideWrap>
            </Wrapper> */}

            {/* <div className={styles.show}>
                <div 
                className={styles.compartment}
                // key={index}
                >
                    <span>
                        <button 
                            className={`${styles.swiperButtonPrev} 
                                        ${styles.swiperButton}`}
                            onClick={prevSlide}
                        >
                            {"〈"}
                        </button>
                    </span>

                    {trainCompartment.map((imageUrl, index) => {
                        return(
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && 
                                    <img className={styles.img} src={imageUrl} alt={`Compartment ${index + 1}`} />
                                }
                            </div>
                        );
                    })}

                    <span>
                        <button
                            className={`${styles.swiperButtonNext} 
                                        ${styles.swiperButton}`}
                            onClick={nextSlide}
                        >
                            {"〉"}
                        </button>
                    </span>
                </div>
            </div> */}
        </div>
    )
}
export default SlideBanner;