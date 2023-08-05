"use client";

// styles
import styles from "./notification.module.scss";

// icons
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";

// dependencies
import { CSSTransition } from "react-transition-group";

// hooks
import { useEffect, useRef, useState } from "react";

// constants
import { NOTIFICATION_DURATION } from "@/app/constants/constants";

// types
import { NotificationType } from "@/app/shared-types/notification-type";

export const Notification = ({ type, text }: NotificationType) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, NOTIFICATION_DURATION - 1000);
  }, []);

  return (
    <CSSTransition
      nodeRef={notificationRef}
      in={isVisible}
      timeout={500}
      classNames={{
        enter: styles["notification-enter"],
        enterActive: styles["notification-enter-active"],
        enterDone: styles["notification-enter-done"],
        exit: styles["notification-exit"],
        exitActive: styles["notification-exit-active"],
      }}
    >
      <div className={styles["notification"]} ref={notificationRef}>
        {type === "success" ? (
          <IoCheckboxOutline className={styles["icon"]} />
        ) : (
          <IoWarningOutline className={styles["icon"]} />
        )}
        {text}
      </div>
    </CSSTransition>
  );
};
