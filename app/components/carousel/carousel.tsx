"use client";

// styles
import styles from "./carousel.module.scss";
import "./swiper-styles.scss";

// components
import Image from "next/image";

// hooks
import { useEffect, useRef } from "react";

// contexts
import { useScreenSizeContext } from "@/app/contexts/screen-size-context";

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
  const swiperRef = useRef<Swiper | null>(null);
  const { screenSize } = useScreenSizeContext();

  useEffect(() => {
    if (screenSize === "small") {
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
  }, [screenSize]);

  return (
    <article className={styles["container"]}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              src="/p2.png"
              alt="Close-up of Soojin conducting a class"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p3.png"
              alt="Soojin performing opera on stage"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p25.png"
              alt="Soojin smiling on stage after performance"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p24.png"
              alt="Soojin and students stand on stage with flowers"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p1.jpg"
              alt="Soojin posing inside of a lobby in Las Vegas"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p16.jpg"
              alt="Soojin and students gathering around a table in her home"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p21.png"
              alt="Soojin wearing a doll costume after her performance"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p23.png"
              alt="Close-up of Soojin playing the guitar"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p15.jpg"
              alt="Soojin and and her friends inside of a house in California"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p14.jpg"
              alt="Soojin and her coworkers at a convention"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p9.jpg"
              alt="Soojin posing for the camera in a green dress"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p6.jpg"
              alt="Soojin's students singing in her living room"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p5.jpg"
              alt="Soojin smiling for the camera beside a statue"
              loading="eager"
              fill
              sizes="500px"
              className={styles["image"]}
            />
          </div>
          <div className="swiper-slide">
            <Image
              src="/p4.jpg"
              alt="Soojin's photo appearing outside of a building"
              loading="eager"
              fill
              sizes="500px"
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
