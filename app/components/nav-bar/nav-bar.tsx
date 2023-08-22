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

// contexts
import { useScreenSizeContext } from "@/app/contexts/screen-size-context";

export const NavBar = ({ isInHomePage = true }: { isInHomePage?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { screenSize } = useScreenSizeContext();
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
          offset={screenSize === "large" ? 100 : 0}
          isInHomePage={isInHomePage}
        />
        <NavLink
          name="Accolades"
          scrollTo="Resume"
          offset={150}
          isInHomePage={isInHomePage}
        />
        <NavLink name="FAQ" offset={150} isInHomePage={isInHomePage} />
        <NavLink name="Contact" offset={150} isInHomePage={isInHomePage} />
      </span>
      <HamburgerMenuButton setIsExpanded={setIsExpanded} />
      {/* CSSTransition's unmountOnExit will handle unmounting */}
      <HamburgerMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </nav>
  );
};
