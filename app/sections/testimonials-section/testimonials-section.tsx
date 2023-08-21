"use client";

// styles
import styles from "./testimonials-section.module.scss";

// components
import { Marquee } from "@/app/components/marquee";
import { Button } from "@/app/components/button";

export const TestimonialsSection = () => {
  return (
    <section className={styles["section"]} id="Testimonials">
      {/* This section doesn't need a content-wrapper child since the content should occupy 100% of the width of its parent */}
      <Marquee />
      <div className={styles["content-wrapper"]}>
        <div className={styles["button-container"]}>
          <Button text="View More Testimonials" />
        </div>
      </div>
    </section>
  );
};
