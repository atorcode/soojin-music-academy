"use client";

// styles
import styles from "./nav-bar.module.scss";

// icons
import { GiMusicalScore } from "react-icons/gi";

// components
import { HamburgerMenuButton } from "../hamburger-menu-button";
import { HamburgerMenu } from "../hamburger-menu";

// hooks
import { useState } from "react";

export const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <nav className={styles["nav"]}>
      <a href="#" className={styles["brand"]}>
        <GiMusicalScore className={styles["logo"]} />
        <span className={styles["business-name"]}>Soojin Music Academy</span>
      </a>
      <span className={styles["links"]}>
        <a href="#">About</a>
        <a href="#">Accolades</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </span>
      <HamburgerMenuButton setIsExpanded={setIsExpanded} />
      {/* CSSTransition's unmountOnExit will handle unmounting */}
      <HamburgerMenu isExpanded={isExpanded} />
    </nav>
  );
};
