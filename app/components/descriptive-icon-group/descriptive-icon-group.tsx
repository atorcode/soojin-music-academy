// styles
import styles from "./descriptive-icon-group.module.scss";

// icons
import { TbMail } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";

export const DescriptiveIconGroup = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["individual-grouping"]}>
        <TbMail />
        <span>soojin58@hotmail.com</span>
      </div>
      <div className={styles["individual-grouping"]}>
        <GrLocation />
        <span>Federal Way, WA</span>
      </div>
    </section>
  );
};
