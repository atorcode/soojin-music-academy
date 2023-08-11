// styles
import styles from "./resume-section.module.scss";

// components
import { Resume } from "@/app/components/resume";

export const ResumeSection = () => {
  return (
    <section className={styles["section"]} id="Resume">
      <div className={styles["content-wrapper"]}>
        <Resume />
      </div>
    </section>
  );
};
