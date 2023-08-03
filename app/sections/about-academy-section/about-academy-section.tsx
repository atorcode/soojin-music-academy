// styles
import styles from "./about-academy-section.module.scss";

// components
import Image from "next/image";

export const AboutAcademySection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["image-group"]}>
          <div className={styles["image-container"]}>
            <Image src="/p3.jpg" alt="" fill className={styles["image"]} />
          </div>
          <section className={styles["ribbon-section"]}>
            <div className={styles["ribbon-container"]}>
              <Image
                src="/20-years.png"
                alt=""
                fill
                className={styles["ribbon"]}
              />
            </div>
            <p className={styles["ribbon-text"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              rem.
            </p>
          </section>
        </div>
        <h2 className={styles["heading"]}>
          Connecting Through the Language of Music
        </h2>
        <p className={styles["text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos
          aliquam aspernatur eaque sunt eligendi repellendus beatae quisquam,
          tenetur eum fugit fuga! Natus itaque pariatur at, assumenda nam
          explicabo officia exercitationem quia reiciendis facere eligendi quo
          ad tempora porro, sapiente aperiam quod, velit eum magni possimus
          earum quisquam adipisci minus quam. Reiciendis vero totam soluta
          tenetur dolorem, quos quidem, porro sit, est deserunt earum laboriosam
          distinctio. Nulla eveniet, molestiae consequuntur minus temporibus,
          cum illum repellat pariatur optio ipsam quo omnis asperiores ullam
          aspernatur perferendis. Dolores nesciunt delectus unde mollitia neque
          vel repellat magnam atque, cum saepe nemo quidem, laudantium
          blanditiis.
        </p>
      </div>
    </section>
  );
};
