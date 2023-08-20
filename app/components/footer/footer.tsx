"use client";

// styles
import styles from "./footer.module.scss";

// icons
import { PiCaretUpBold } from "react-icons/pi";
import { GiMusicalScore } from "react-icons/gi";

// components
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a href="#hero" className={styles["link-hidden"]} aria-hidden="true">
        Scroll to top
      </a>
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
        <div className={styles["category-section"]}>
          <div>
            <h3 className={styles["category"]}>For business inquiries</h3>
            <p>soojin58@hotmail.com</p>
            <p>(253) 335-7533</p>
          </div>
          <div>
            <p className={`${styles["emphasized"]} ${styles["copyright"]}`}>
              &copy; 2023 Soojin Music Academy. All rights reserved.
            </p>
          </div>
        </div>
        <div className={styles["business"]}>
          <GiMusicalScore className={styles["logo"]} />
          <h2>SMA</h2>
        </div>
        <div className={styles["category-section"]}>
          <div>
            <h3 className={styles["category"]}>Like our website?</h3>
            <p>atorcode@gmail.com</p>
            <p>(253) 335-6420</p>
          </div>
          <div>
            <p>
              Made with &#x1F496; by{" "}
              <a
                href="https://www.linkedin.com/in/alberto-torrigiotti/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["emphasized"]}
              >
                atorcode
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
