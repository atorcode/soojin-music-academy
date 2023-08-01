// styles
import styles from "./testimonial-card.module.scss";

// icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// components
import { Avatar } from "../avatar";
import { StarRating } from "../star-rating/star-rating";

export const TestimonialCard = () => {
  return (
    <article className={styles["card"]}>
      <section className={styles["header-and-rating"]}>
        <div className={styles["header"]}>
          <Avatar />
          <div>
            <p className={styles["name"]}>John Doe</p>
            <p className={styles["personal-title"]}>Student: 7 years</p>
          </div>
        </div>
        <div className={styles["rating"]}>
          <StarRating rating={4.5} />
        </div>
      </section>
      <section>
        <FaQuoteLeft className={styles["quote-open"]} />
        <p className={styles["quote-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque
          est tempore dicta nihil id nulla natus ab totam corporis?
        </p>
        <FaQuoteRight className={styles["quote-closed"]} />
      </section>
    </article>
  );
};
