// styles
import styles from "./hamburger-menu-link.module.scss";

// components
import { Link } from "react-scroll";

export const HamburgerMenuLink = ({
  name,
  scrollTo,
  isInHomePage = true,
  setIsExpanded,
}: {
  name: string;
  scrollTo: string;
  isInHomePage?: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
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
      {isInHomePage ? (
        <Link
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={500}
          className={styles["link"]}
          onClick={() => setIsExpanded(false)}
        >
          {name}
        </Link>
      ) : (
        <a
          href={`/?target=#${scrollTo}`}
          className={styles["link"]}
          onClick={(e) => {
            setIsExpanded(false);
          }}
        >
          {name}
        </a>
      )}
    </>
  );
};
