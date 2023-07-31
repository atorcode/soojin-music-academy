// styles
import styles from "./faq-section.module.scss";

// components
import { AccordionGroup } from "@/app/components/accordion-group";

export const FaqSection = () => {
  return (
    <section className={styles["section"]}>
      <h2 className={styles["heading"]}>Frequently Asked Questions</h2>
      <AccordionGroup />
    </section>
  );
};
