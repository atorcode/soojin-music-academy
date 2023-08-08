"use client";

// icons
import { PiCaretDownBold } from "react-icons/pi";

// styles
import styles from "./accordion.module.scss";

// hooks
import { useState } from "react";

export const Accordion = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles["accordion"]}>
      <button
        className={styles["button"]}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {title}
        <PiCaretDownBold
          className={`${styles["icon"]} ${
            isExpanded && styles["icon-rotated"]
          }`}
        />
      </button>
      <p
        className={`${styles["content"]} ${
          isExpanded && styles["content-expanded"]
        }`}
      >
        {content}
      </p>
    </div>
  );
};
