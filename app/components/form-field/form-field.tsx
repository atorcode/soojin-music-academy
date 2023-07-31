"use client";

// styles
import styles from "./form-field.module.scss";

// hooks
import { useState } from "react";

export const FormField = ({
  type = "input",
  id,
}: {
  type?: "input" | "textarea";
  id: string;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLabelLifted, setIsLabelLifted] = useState<boolean>(false);
  return (
    <div className={styles["container"]}>
      <label
        htmlFor={id}
        className={`${styles["label"]} ${styles[`label-${type}`]} ${
          isLabelLifted && styles["label-active"]
        }`}
      >
        {id}
      </label>
      {type === "input" ? (
        <input
          type="input"
          id={id}
          autoComplete="off"
          className={`${styles["field"]} ${styles["field-input"]}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => {
            setIsLabelLifted(true);
          }}
          onBlur={() => {
            setIsLabelLifted(inputValue !== "");
          }}
        />
      ) : (
        <textarea
          id={id}
          autoComplete="off"
          className={`${styles["field"]} ${styles["field-textarea"]}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => {
            setIsLabelLifted(true);
          }}
          onBlur={() => {
            setIsLabelLifted(inputValue !== "");
          }}
        ></textarea>
      )}
    </div>
  );
};
