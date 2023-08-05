// styles
import styles from "./notification.module.scss";

// icons
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";

// types
import { NotificationType } from "@/app/shared-types/notification-type";

export const Notification = ({ type, text }: NotificationType) => {
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
