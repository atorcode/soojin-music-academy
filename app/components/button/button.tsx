import styles from "./button.module.scss";

export const Button = ({ text }: { text: string }) => {
  return (
    <button className={styles["button"]} onClick={() => {}}>
      {text}
    </button>
  );
};
