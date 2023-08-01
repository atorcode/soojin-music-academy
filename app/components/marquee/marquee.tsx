// styles
import styles from "./marquee.module.scss";

// components
import { TestimonialCard } from "../testimonial-card";

export const Marquee = () => {
  return (
    <article className={styles["marquee-container"]}>
      <article className={styles["marquee"]}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />

        {/* duplicates for seamless looping */}
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </article>
    </article>
  );
};
