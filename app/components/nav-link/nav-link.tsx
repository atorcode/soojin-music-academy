// styles
import styles from "./nav-link.module.scss";

// components
import { Link } from "react-scroll";

export const NavLink = ({
  name,
  scrollTo = name,
  offset = 0,
}: {
  name: string;
  scrollTo?: string;
  offset?: number;
}) => {
  return (
    <Link
      to={scrollTo}
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
