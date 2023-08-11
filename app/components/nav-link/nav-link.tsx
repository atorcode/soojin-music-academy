// styles
import styles from "./nav-link.module.scss";

// components
import { Link } from "react-scroll";

export const NavLink = ({
  name,
  offset = 0,
}: {
  name: string;
  offset?: number;
}) => {
  return (
    <Link
      to={name}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className={styles["link"]}
    >
      {name}
    </Link>
  );
};
