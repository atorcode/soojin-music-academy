// styles
import styles from "./hero.module.scss";

// components
import Image from "next/image";
import { Button } from "../button";

export const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <Image
        src="/hero-final.png"
        alt="Woman playing piano"
        fill
        unoptimized
        className={styles["image"]}
      />
      <div className={styles["text"]}>
        <h1 className={styles["heading"]}>Discover your voice with us</h1>
        <Button text="GET STARTED" />
      </div>
    </section>
  );
};
