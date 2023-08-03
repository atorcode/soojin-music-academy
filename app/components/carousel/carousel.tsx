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
          <Image src="/p2.jpg" alt="" fill className={styles["image"]} />
        </div>
        <div className="swiper-slide">
          <Image src="/p2.jpg" alt="" fill className={styles["image"]} />
        </div>
        <div className="swiper-slide">
          <Image src="/p2.jpg" alt="" fill className={styles["image"]} />
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
