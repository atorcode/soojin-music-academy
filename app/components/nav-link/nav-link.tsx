// styles
import styles from "./nav-link.module.scss";

// components
import { Link } from "react-scroll";
// import { scroller } from "react-scroll";

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
    <>
      <a
        href={`#${scrollTo}`}
        className={styles["link-hidden"]}
        aria-hidden="true"
        tabIndex={-1}
      >
        {name}
      </a>
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
    </>
  );
};
