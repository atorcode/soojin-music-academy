"use client";

// styles
import styles from "./hamburger-menu.module.scss";

// icons
import { IoClose } from "react-icons/io5";

// hooks
import { useRef } from "react";

// components
import { CSSTransition } from "react-transition-group";

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
          <a href="#">About</a>
          <a href="#">Accolades</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
      </section>
    </CSSTransition>
  );
};
