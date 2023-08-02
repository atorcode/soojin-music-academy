// styles
import styles from "./about-me-section.module.scss";

// components
import Image from "next/image";

export const AboutMeSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["text"]}>
        <h2>Hi, I'm Soojin!</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          cumque nam laboriosam temporibus. Cupiditate provident deleniti est
          praesentium blanditiis voluptatum magnam veritatis natus dolore
          adipisci facere voluptas, consectetur in itaque rerum magni beatae
          esse animi ullam maiores quibusdam nesciunt officiis, necessitatibus
          sed? Aperiam ex quod fugiat voluptatum delectus dignissimos inventore.
        </p>
      </div>
      <div className={styles["image-container"]}>
        {/* <Image
          src="/p1.jpg"
          alt="Soojin posing with her hands in the air."
          layout="fill"
          className={styles["image"]}
        /> */}
        <Image src="/p2.jpg" alt="" layout="fill" className={styles["image"]} />
      </div>
    </section>
  );
};
