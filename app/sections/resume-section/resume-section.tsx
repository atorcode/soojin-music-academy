// styles
import styles from "./resume-section.module.scss";

// components
import { Resume } from "@/app/components/resume";

export const ResumeSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["anchor"]} id="resume-anchor"></div>
      <div className={styles["content-wrapper"]}>
        <Resume />
      </div>
    </section>
  );
};
