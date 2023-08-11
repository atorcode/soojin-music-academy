"use client";

// styles
import styles from "./footer.module.scss";

// icons
import { PiCaretUpBold } from "react-icons/pi";

// components
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className={styles["link"]}
      >
        <PiCaretUpBold className={styles["icon"]} />
      </Link>
      <div className={styles["categories"]}>
        <div>
          <h3 className={styles["category"]}>For Business Inquiries</h3>
          <p>soojin58@hotmail.com</p>
          <p>(253) 335-7533</p>
        </div>
        <div>
          <h3 className={styles["category"]}>Like our website?</h3>
          <p>atorcode@gmail.com</p>
          <p>(253) 335-6420</p>
        </div>
      </div>
      <div>
        <p className={styles["copyright"]}>
          &copy; 2023 Soojin Music Academy. All rights reserved.
        </p>
        <p>Made with &#x1F496; by atorcode</p>
      </div>
    </footer>
  );
};
