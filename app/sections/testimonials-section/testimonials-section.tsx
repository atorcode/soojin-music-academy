// styles
import styles from "./testimonials-section.module.scss";

// components
import { Marquee } from "@/app/components/marquee";

export const TestimonialsSection = () => {
  return (
    <section className={styles["section"]}>
      <Marquee />
    </section>
  );
};
