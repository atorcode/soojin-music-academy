// styles
import styles from "./nav-bar.module.scss";

// icons
import { GiMusicalScore } from "react-icons/gi";

export const NavBar = () => {
  return (
    <nav className={styles["nav"]}>
      <span className={styles["brand"]}>
        <GiMusicalScore />
        <p>Soojin Music Academy</p>
      </span>
      <span className={styles["links"]}>
        <a href="#">About</a>
        <a href="#">Accolades</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </span>
    </nav>
  );
};
