// styles
import styles from "./gallery-section.module.scss";

// components
import { Carousel } from "@/app/components/carousel";

export const GallerySection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>
          Connecting Through the Language of Music
        </h2>
        <Carousel />
      </div>
    </section>
  );
};
