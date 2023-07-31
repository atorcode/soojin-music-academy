// icons
import { PiCaretUpBold } from "react-icons/pi";
import { PiCaretDownBold } from "react-icons/pi";

// styles
import styles from "./accordion.module.scss";

export const Accordion = () => {
  return (
    <div className={styles["accordion"]}>
      <button className={styles["button"]}>
        I'M AN ACCORDION!
        <PiCaretDownBold />
      </button>
      <p className={styles["content"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet
        incidunt perspiciatis, eaque magnam pariatur unde explicabo nesciunt
        reiciendis nihil?
      </p>
    </div>
  );
};
