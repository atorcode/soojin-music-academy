// styles
import styles from "./resume.module.scss";

export const Resume = () => {
  return (
    <article className={styles["resume"]}>
      <h2>Soojin Lee</h2>
      <h3>Summary</h3>
      <h3>Education</h3>
      <h3>Work Experience</h3>
      <h3>Skills</h3>
      <h3>Languages</h3>
    </article>
  );
};
