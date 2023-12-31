"use client";

// styles
import styles from "./hero.module.scss";
import buttonStyles from "../button/button.module.scss";

// images
import heroImage from "../../../public/hero-final.png";

// components
import Image from "next/image";
import { Button as ReactScrollButton } from "react-scroll";

// hooks
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [hasTransitionBegun, setHasTransitionBegun] = useState<boolean>(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    let observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasTransitionBegun(true);
        }
      })
    );

    headingRef.current && observer.observe(headingRef.current);
  }, []);

  return (
    <section className={styles["hero"]}>
      <div className={styles["image-container"]}>
        <Image
          src={heroImage}
          alt="Woman playing piano"
          loading="eager"
          placeholder="blur"
          fill
          sizes="100vw"
          unoptimized
          className={styles["image"]}
        />
      </div>
      <div className={styles["text-section"]}>
        <h1
          className={`${styles["heading"]} ${
            hasTransitionBegun && styles["heading-active"]
          }`}
          ref={headingRef}
        >
          Discover your voice{" "}
          <span
            className={`${styles["delayed-text"]} ${
              hasTransitionBegun && styles["delayed-text-active"]
            }`}
          >
            with us
          </span>
        </h1>
        <div
          className={`${styles["button"]} ${
            hasTransitionBegun && styles["button-active"]
          }`}
        >
          <ReactScrollButton
            to="about-anchor"
            value="GET STARTED"
            type="submit"
            spy={true}
            smooth={true}
            duration={500}
            className={buttonStyles["button"]}
          />
        </div>
      </div>
    </section>
  );
};
