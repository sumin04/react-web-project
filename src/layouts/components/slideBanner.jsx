import React from "react";
import img from "../../img/imgModule";
import styles from "./slideBanner.module.css"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import styled from "styled-components";

const SlideBanner = () => {
    const trainCompartment = [
        img.eventBanner,
        img.eventBanner2,
    ];

    const [current, setCurrent] = useState(0);
    const length = SlideBanner.length;

    // 다음은 화살표를 누르면 앞이나 뒤 슬라이드로 이동하는 함수를 만든다.
    // setCurrent를 활용하여 이미지 인덱스 값을 바꿔주는데,
    // 이때 만약 마지막 페이지였을 경우 뒤로 넘길 때 첫 페이지로 이동하도록,
    // 첫 페이지였을 경우 앞으로 넘길 때 마지막 페이지로 이동하도록 설정하여
    // 슬라이더가 끝나지 않고 무한 반복되도록 한다
    const nextSlide = () => {
        setCurrent(current === trainCompartment.length -1 ? 0 : current + 1);
        console.log('ㅓ런ㄷ트 : ', current)
        console.log('렝스 : ', length -1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? trainCompartment.length -1 : current -1);
        console.log('ㅓ런ㄷ트 : ', current)
        console.log('렝스 : ', trainCompartment.length -1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [current, length]);

    if (!Array.isArray(trainCompartment) || trainCompartment.length <= 0){
        return null;
    }

    const firstCompartmentImage = new Image();
    firstCompartmentImage.src = trainCompartment[0];
    
    // const Box = styled(motion.img)`...`;
    // const variants = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    // }


    return(
        <div className={styles.train}>
            <div className={styles.show}>
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
            </div>
        </div>
    )
}
export default SlideBanner;