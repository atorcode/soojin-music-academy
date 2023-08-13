"use client";

// styles
import styles from "./carousel.module.scss";
import "./swiper-styles.scss";

// components
import Image from "next/image";

// hooks
import { useEffect, useRef, useState } from "react";

// Swiper dependencies
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-coverflow";

import Swiper from "swiper";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

export const Carousel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    // const initSwiper = () => {
    if (isSmallScreen) {
      swiperRef.current?.destroy();
      swiperRef.current = new Swiper(".swiper", {
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow],

        slidesPerView: 1,

        effect: "coverflow",
        coverflowEffect: {
          rotate: 45,
          slideShadows: false,
        },
        centeredSlides: true,

        loop: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else {
      swiperRef.current?.destroy();
      swiperRef.current = new Swiper(".swiper", {
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow],

        slidesPerView: 3,

        effect: "coverflow",
        coverflowEffect: {
          rotate: 45,
          slideShadows: false,
        },
        centeredSlides: true,

        loop: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }, [isSmallScreen]);

  return (
    <article className={styles["container"]}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              src="/p2.png"
              alt=""
              fill
              unoptimized
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p3.png"
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
              src="/p1.jpg"
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
              src="/p21.png"
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
    </article>
  );
};
