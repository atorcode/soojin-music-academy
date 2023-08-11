"use client";

// styles
import styles from "./nav-bar.module.scss";

// icons
import { GiMusicalScore } from "react-icons/gi";

// components
import { HamburgerMenuButton } from "../hamburger-menu-button";
import { HamburgerMenu } from "../hamburger-menu";
import { NavLink } from "../nav-link";

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
        <NavLink name="About" />
        <NavLink name="Accolades" scrollTo="Resume" offset={150} />
        <NavLink name="FAQ" offset={150} />
        <NavLink name="Contact" offset={150} />
      </span>
      <HamburgerMenuButton setIsExpanded={setIsExpanded} />
      {/* CSSTransition's unmountOnExit will handle unmounting */}
      <HamburgerMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </nav>
  );
};
