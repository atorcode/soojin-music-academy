"use client";

// styles
import styles from "./hamburger-menu-button.module.scss";
import "./hamburger-menu-button.scss";

export const HamburgerMenuButton = ({
  setIsExpanded,
}: {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className={styles["button"]}
      aria-label="menu"
      onClick={() => {
        setIsExpanded((prev) => !prev);
      }}
    >
      <div className="svg-container">
        {/* music staff */}
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="staff-svg"
        >
          {/* color value of following path fills should be the same as the $text-color SASS variable */}
          <path
            d="M2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5C18 3.77614 17.7761 4 17.5 4H2.5C2.22386 4 2 3.77614 2 3.5Z"
            fill="rgb(217, 217, 217)"
          />
          <path
            d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
            fill="rgb(217, 217, 217)"
          />
          <path
            d="M2.5 6C2.22386 6 2 6.22386 2 6.5C2 6.77614 2.22386 7 2.5 7H17.5C17.7761 7 18 6.77614 18 6.5C18 6.22386 17.7761 6 17.5 6H2.5Z"
            fill="rgb(217, 217, 217)"
          />
          <path
            d="M2 12.5C2 12.2239 2.22386 12 2.5 12H17.5C17.7761 12 18 12.2239 18 12.5C18 12.7761 17.7761 13 17.5 13H2.5C2.22386 13 2 12.7761 2 12.5Z"
            fill="rgb(217, 217, 217)"
          />
          <path
            d="M2.5 15C2.22386 15 2 15.2239 2 15.5C2 15.7761 2.22386 16 2.5 16H17.5C17.7761 16 18 15.7761 18 15.5C18 15.2239 17.7761 15 17.5 15H2.5Z"
            fill="rgb(217, 217, 217)"
          />
        </svg>
        {/* whole note */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          x="0.0000000"
          y="0.0000000"
          width="12.000000"
          height="7.0000000"
          id="svg1361"
          className="note-svg"
        >
          <defs id="defs1363" />
          <g style={{ fill: "white", opacity: "1.0" }} id="layer1">
            <g
              transform="translate(-199.3990,-536.4730)"
              style={{ fill: "white", opacity: "1.0" }}
              id="g2912"
            >
              <path
                d="M 206.04921,542.89329 C 204.33221,542.80244 202.99047,541.27833 202.45208,539.70226 C 202.12589,538.77722 202.30505,537.38950 203.39174,537.12966 C 204.96615,536.86226 206.27260,538.19967 207.00481,539.47953 C 207.52641,540.42880 207.81478,541.92368 206.83679,542.67615 C 206.60458,542.83188 206.32387,542.89434 206.04921,542.89329 z M 208.78446,537.49000 C 206.85001,536.31510 204.40641,536.22358 202.28813,536.88110 C 200.94630,537.35025 199.41169,538.34823 199.39900,539.97250 C 199.39807,541.56396 200.87900,542.55675 202.18949,543.02959 C 204.26418,543.70824 206.65796,543.64856 208.59501,542.56669 C 209.69149,541.98333 210.66334,540.77535 210.33379,539.43643 C 210.15258,538.57546 209.49304,537.93123 208.78446,537.49000 z "
                style={{ fill: "white", opacity: "1.0" }}
                id="path2918"
              />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
};
