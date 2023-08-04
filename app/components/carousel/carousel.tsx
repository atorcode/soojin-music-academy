"use client";

// styles
import styles from "./carousel.module.scss";
import "./swiper-styles.scss";

// components
import Image from "next/image";

// hooks
import { useEffect } from "react";

// Swiper dependencies
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const Carousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],

      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },

      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <Image
            src="/p27.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p26.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p25.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p24.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p23.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p21.png"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p16.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p15.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p14.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p9.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p6.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p5.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
        <div className="swiper-slide">
          <Image
            src="/p4.jpg"
            alt=""
            fill
            unoptimized
            className={styles["image"]}
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
