// styles
import styles from "./nav-bar.module.scss";

// icons
import { GiMusicalScore } from "react-icons/gi";

export const NavBar = () => {
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
    </nav>
  );
};
