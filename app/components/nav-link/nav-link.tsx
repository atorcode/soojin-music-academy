// styles
import styles from "./nav-link.module.scss";

// components
import { Link } from "react-scroll";

export const NavLink = ({
  name,
  scrollTo = name,
  offset = 0,
  isInHomePage,
}: {
  name: string;
  scrollTo?: string;
  offset?: number;
  isInHomePage: boolean;
}) => {
  return (
    <>
      <a
        href={`/?target=#${scrollTo}`}
        className={styles["link-hidden"]}
        aria-hidden="true"
        tabIndex={-1}
      >
        {name}
      </a>
      {isInHomePage ? (
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
      ) : (
        <a href={`/?target=#${scrollTo}`} className={styles["link"]}>
          {name}
        </a>
      )}
    </>
  );
};
