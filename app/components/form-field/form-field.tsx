"use client";

// styles
import styles from "./form-field.module.scss";
import { Roboto } from "next/font/google";

// hooks
import { useState } from "react";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

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
          className={`${styles["field"]} ${styles["field-input"]} ${roboto.className}`}
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
          className={`${styles["field"]} ${styles["field-textarea"]} ${roboto.className}`}
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
