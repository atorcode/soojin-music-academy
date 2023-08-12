"use client";

// styles
import styles from "./hero.module.scss";
import buttonStyles from "../button/button.module.scss";

// components
import Image from "next/image";
// import { Button } from "../button";
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
    <section className={styles["hero"]} id="hero">
      <div className={styles["image-container"]}>
        <Image
          src="/hero-final.png"
          alt="Woman playing piano"
          fill
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
            to="About"
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
