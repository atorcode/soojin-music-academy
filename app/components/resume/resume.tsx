// styles
import styles from "./resume.module.scss";

// components
import Image from "next/image";

export const Resume = () => {
  return (
    <article className={styles["resume"]}>
      <Image
        src="/soojin-lee-resume.png"
        alt="Resume for Soojin Lee"
        fill
        className={styles["image"]}
      ></Image>
    </article>
  );
};
