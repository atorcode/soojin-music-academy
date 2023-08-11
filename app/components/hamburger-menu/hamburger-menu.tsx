"use client";

// styles
import styles from "./hamburger-menu.module.scss";

// icons
import { IoClose } from "react-icons/io5";

// hooks
import { useRef } from "react";

// components
import { CSSTransition } from "react-transition-group";
import { HamburgerMenuLink } from "../hamburger-menu-link";

export const HamburgerMenu = ({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLElement>(null);

  return (
    <CSSTransition
      nodeRef={menuRef}
      in={isExpanded}
      timeout={500}
      classNames={{
        enterActive: styles["menu-enter-active"],
        enterDone: styles["menu-enter-done"],
        exit: styles["menu-exit"],
      }}
      unmountOnExit
    >
      <section className={styles["menu"]} ref={menuRef}>
        <button className={styles["button"]}>
          <IoClose
            className={styles["icon"]}
            onClick={() => setIsExpanded(false)}
          />
        </button>
        <div className={styles["links"]}>
          <HamburgerMenuLink name="About" setIsExpanded={setIsExpanded} />
          <HamburgerMenuLink
            name="Gallery"
            offset={50}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="Testimonials"
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="FAQ"
            offset={150}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="Contact"
            offset={150}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </section>
    </CSSTransition>
  );
};
