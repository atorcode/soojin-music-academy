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

export const NavBar = ({ isInHomePage = true }: { isInHomePage?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <nav
      className={`${styles["nav"]} ${!isInHomePage && styles["nav-solid"]}`}
      id="nav-bar"
    >
      <a href="/" className={styles["brand"]}>
        <GiMusicalScore className={styles["logo"]} />
        <span className={styles["business-name"]}>Soojin Music Academy</span>
      </a>
      <span className={styles["links"]}>
        {/* should turn these offset values into variables to ensure consistency across different navigation buttons and links */}
        <NavLink
          name="About"
          scrollTo="about-anchor"
          isInHomePage={isInHomePage}
        />
        <NavLink
          name="Accolades"
          scrollTo="resume-anchor"
          isInHomePage={isInHomePage}
        />
        <NavLink name="FAQ" scrollTo="FAQ-anchor" isInHomePage={isInHomePage} />
        <NavLink
          name="Contact"
          scrollTo="contact-anchor"
          isInHomePage={isInHomePage}
        />
      </span>
      <HamburgerMenuButton setIsExpanded={setIsExpanded} />
      {/* CSSTransition's unmountOnExit will handle unmounting */}
      <HamburgerMenu
        isInHomePage={isInHomePage}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    </nav>
  );
};
