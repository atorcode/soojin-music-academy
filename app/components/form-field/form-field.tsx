import styles from "./form-field.module.scss";

export const FormField = ({
  type = "field",
  id,
}: {
  type?: "field" | "textarea";
  id: string;
}) => {
  return (
    <div className={styles["container"]}>
      <label htmlFor={id} className={styles["label"]}>
        {id}
      </label>
      {type === "field" ? (
        <input
          type="field"
          id={id}
          className={`${styles["field"]} ${styles["field-small"]}`}
        />
      ) : (
        <textarea
          id={id}
          className={`${styles["field"]} ${styles["field-large"]}`}
        ></textarea>
      )}
    </div>
  );
};
