"use client";

// styles
import styles from "./hamburger-menu.module.scss";

// hooks
import { useRef } from "react";

// components
import { CSSTransition } from "react-transition-group";

export const HamburgerMenu = ({ isExpanded }: { isExpanded: boolean }) => {
  const menuRef = useRef<HTMLElement>(null);

  return (
    <CSSTransition
      nodeRef={menuRef}
      in={isExpanded}
      timeout={500}
      classNames={{
        enterActive: styles["menu-enter-active"],
        enterDone: styles["menu-enter-done"],
        exitActive: styles["menu-exit-active"],
      }}
      unmountOnExit
    >
      <section className={styles["menu"]} ref={menuRef}></section>
    </CSSTransition>
  );
};
