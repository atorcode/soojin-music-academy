// styles
import styles from "./hero-section.module.scss";

// components
import { Hero } from "@/app/components/hero";
export const HeroSection = () => {
  return (
    <section className={styles["section"]}>
      <Hero />
    </section>
  );
};
