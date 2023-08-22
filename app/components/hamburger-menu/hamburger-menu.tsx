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
  isInHomePage = true,
  isExpanded,
  setIsExpanded,
}: {
  isInHomePage: boolean;
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
        <button aria-label="close" className={styles["button"]}>
          <IoClose
            className={styles["icon"]}
            onClick={() => setIsExpanded(false)}
          />
        </button>
        <div className={styles["links"]}>
          <HamburgerMenuLink
            name="About"
            scrollTo="about-anchor"
            isInHomePage={isInHomePage}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="Gallery"
            scrollTo="gallery-anchor"
            isInHomePage={isInHomePage}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="Testimonials"
            scrollTo="testimonials-anchor"
            isInHomePage={isInHomePage}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="FAQ"
            scrollTo="FAQ-anchor"
            isInHomePage={isInHomePage}
            setIsExpanded={setIsExpanded}
          />
          <HamburgerMenuLink
            name="Contact"
            scrollTo="contact-anchor"
            isInHomePage={isInHomePage}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </section>
    </CSSTransition>
  );
};
