// styles
import styles from "./gallery-section.module.scss";

// components
import { Carousel } from "@/app/components/carousel";

export const GallerySection = () => {
  return (
    <section className={styles["section"]} id="Gallery">
      <div className={styles["content-wrapper"]}>
        <div className={styles["content"]}>
          <h2 className={styles["heading"]}>Telling Stories Through Harmony</h2>
          <Carousel />
        </div>
      </div>
    </section>
  );
};
