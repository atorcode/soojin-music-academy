// styles
import styles from "./descriptive-icon-group.module.scss";

// icons
import { TbMail } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";

export const DescriptiveIconGroup = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["individual-grouping"]}>
        <TbMail className={styles["icon"]} />
        <span>soojin58@hotmail.com</span>
      </div>
      <div className={styles["individual-grouping"]}>
        <GrLocation className={styles["icon"]} />
        <span>Federal Way, WA</span>
      </div>
      <div className={styles["individual-grouping"]}>
        <LiaLinkedin className={styles["icon"]} />
        <span>Soojin Music Academy</span>
      </div>
    </section>
  );
};
