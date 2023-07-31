// styles
import styles from "./accordion-group.module.scss";

// components
import { Accordion } from "../accordion";

export const AccordionGroup = () => {
  return (
    <article className={styles["group"]}>
      <Accordion
        title="How are you different from other music academies?"
        content=""
      />
      <Accordion
        title="What genres of singing do you teach?"
        content="My lessons are not limited to any specific genre. I teach how to sing. As a classically trained musician, I believe there is tremendous value in learning proper vocal technique for any genre."
      />
      <Accordion
        title="I'm worried that singing is not for me. Should I still try?"
        content="Yes!"
      />
      <Accordion title="How many hours a week should I practice?" content="" />
      <Accordion title="Do you teach other instruments?" content="" />
    </article>
  );
};
