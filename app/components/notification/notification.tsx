"use client";

// styles
import styles from "./notification.module.scss";

// icons
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";

// hooks
import { useState } from "react";

export const Notification = ({
  type,
  text,
}: {
  type: "warning" | "success";
  text: string;
}) => {
  // const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={styles["notification"]}>
      {type === "success" ? (
        <IoCheckboxOutline className={styles["icon"]} />
      ) : (
        <IoWarningOutline className={styles["icon"]} />
      )}
      {text}
    </div>
  );
};
