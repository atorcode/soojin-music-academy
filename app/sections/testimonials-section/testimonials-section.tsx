"use client";

// styles
import styles from "./testimonials-section.module.scss";
import buttonStyles from "../../components/button/button.module.scss";

// components
import Link from "next/link";
import { Marquee } from "@/app/components/marquee";

export const TestimonialsSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["anchor"]} id="testimonials-anchor"></div>
      {/* This section doesn't need a content-wrapper child since the content should occupy 100% of the width of its parent */}
      <Marquee />
      <div className={styles["content-wrapper"]}>
        <div className={styles["button-container"]}>
          <Link href="/testimonials" className={buttonStyles["button"]}>
            VIEW MORE TESTIMONIALS
          </Link>
        </div>
      </div>
    </section>
  );
};
