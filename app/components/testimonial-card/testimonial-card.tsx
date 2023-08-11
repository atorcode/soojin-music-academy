// styles
import styles from "./testimonial-card.module.scss";

// icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// components
import { Avatar } from "../avatar";
import { StarRating } from "../star-rating/star-rating";

export const TestimonialCard = ({
  name,
  title,
  quote,
  rating,
  url,
  color,
}: {
  name: string;
  title: string;
  quote: string;
  rating: number;
  url: string;
  color: string;
}) => {
  return (
    <article className={styles["card"]} style={{ backgroundColor: color }}>
      <section className={styles["header-and-rating"]}>
        <div className={styles["header"]}>
          <Avatar name={name} url={url} />
          <div>
            <p className={styles["name"]}>{name}</p>
            <p className={styles["personal-title"]}>{title}</p>
          </div>
        </div>
        <div className={styles["rating"]}>
          <StarRating rating={rating} />
        </div>
      </section>
      <section>
        <FaQuoteLeft className={styles["quote-open"]} />
        <p className={styles["quote-text"]}>{quote}</p>
        <FaQuoteRight className={styles["quote-closed"]} />
      </section>
    </article>
  );
};
