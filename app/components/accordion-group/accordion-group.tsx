// styles
import styles from "./accordion-group.module.scss";

// components
import { Accordion } from "../accordion";

export const AccordionGroup = () => {
  return (
    <article className={styles["group"]}>
      <Accordion
        title="How are you different from other music academies?"
        content="I began my journey of mastering vocal technique about 40 years ago when I moved from South Korea to Italy to pursue a career in opera. Since then, I've had a lot of highs and lows—some good teachers and a lot of bad ones. Even today, I am still learning new things. Because the road was so difficult for me, and every step in my journey came with obstacles, I have a lot of perspective to impart on my students."
      />
      <Accordion
        title="What genres of singing do you teach?"
        content="My lessons are not limited to any specific genre. I teach how to sing. As a classically trained musician, I believe there is tremendous value in learning proper vocal technique for any genre. Once you've developed this technique, you can employ it in the genre of your choice."
      />
      <Accordion
        title="I'm worried that singing is not for me. Should I still give it a try?"
        content="Yes! Many of my students were tone deaf or full of bad habits before starting lessons with me. Everybody has what it takes to be a good singer. The only requirement is that you enjoy the process. Take it at your own pace."
      />
      <Accordion title="How many hours a week should I practice?" content="" />
      <Accordion
        title="Do you teach other instruments?"
        content="While my main focus is on teaching vocal technique, I do also offer piano lessons. If you are interested in learning to play the piano, or know someone who is, please reach out!"
      />
    </article>
  );
};
