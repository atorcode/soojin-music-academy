// styles
import styles from "./accordion-group.module.scss";

// components
import { Accordion } from "../accordion";

export const AccordionGroup = () => {
  return (
    <article className={styles["group"]}>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </article>
  );
};
