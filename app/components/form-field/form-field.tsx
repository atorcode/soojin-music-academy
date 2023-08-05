"use client";

// styles
import styles from "./form-field.module.scss";

// hooks
import { useState } from "react";

// types
import { ValidityOfFields } from "@/app/shared-types/validity-of-fields";

export const FormField = ({
  elementType = "input",
  fieldType,
  setIsValid,
}: {
  elementType?: "input" | "textarea";
  fieldType: string;
  setIsValid: React.Dispatch<React.SetStateAction<ValidityOfFields>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLabelLifted, setIsLabelLifted] = useState<boolean>(false);

  const validateOptionalField = (value: string) => {
    return true;
  };

  const validateRequiredField = (value: string) => {
    return value.length > 0;
  };

  const validateEmail = (value: string) => {
    const emailRegex =
      /^(?=.{1,256})(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  };

  const validateFormField = (fieldType: string, value: string) => {
    switch (fieldType) {
      case "email":
        return validateEmail(value);
      case "subject":
        return validateOptionalField(value);
      default:
        return validateRequiredField(value);
    }
  };

  return (
    <div className={styles["container"]}>
      <label
        htmlFor={fieldType}
        className={`${styles["label"]} ${styles[`label-${elementType}`]} ${
          isLabelLifted && styles["label-active"]
        }`}
      >
        {fieldType}
      </label>
      {elementType === "input" ? (
        <input
          type="input"
          id={fieldType}
          autoComplete="off"
          className={`${styles["field"]} ${styles["field-input"]}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsValid((prev) => ({
              ...prev,
              [fieldType]: validateFormField(fieldType, e.target.value),
            }));
          }}
          onFocus={() => {
            setIsLabelLifted(true);
          }}
          onBlur={() => {
            setIsLabelLifted(inputValue !== "");
          }}
        />
      ) : (
        <textarea
          id={fieldType}
          autoComplete="off"
          className={`${styles["field"]} ${styles["field-textarea"]}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsValid((prev) => ({
              ...prev,
              [fieldType]: validateFormField(fieldType, e.target.value),
            }));
          }}
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
