// styles
import styles from "./gallery-section.module.scss";

// components
import { Carousel } from "@/app/components/carousel";

export const GallerySection = () => {
  return (
    <section className={styles["section"]}>
      <h2>Connecting Through the Language of Music</h2>
      <Carousel />
    </section>
  );
};
