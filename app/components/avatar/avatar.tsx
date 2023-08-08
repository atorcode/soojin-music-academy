// styles
import styles from "./avatar.module.scss";

// components
import Image from "next/image";

export const Avatar = ({ name, url }: { name: string; url: string }) => {
  return (
    <div className={styles["avatar"]}>
      <Image
        src={url}
        alt={`${name}'s profile photo`}
        fill
        className={styles["image"]}
      />
    </div>
  );
};
