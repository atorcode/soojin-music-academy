// styles
import styles from "./hamburger-menu-link.module.scss";

// components
import { Link } from "react-scroll";

export const HamburgerMenuLink = ({
  name,
  scrollTo = name,
  offset = 0,
  setIsExpanded,
}: {
  name: string;
  scrollTo?: string;
  offset?: number;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Link
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className={styles["link"]}
      onClick={() => setIsExpanded(false)}
    >
      {name}
    </Link>
  );
};
