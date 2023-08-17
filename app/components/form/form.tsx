// styles
import styles from "./form.module.scss";

// components
import { FormField } from "../form-field";
import { Button } from "../button";
import { Notification } from "../notification";

// hooks
import { useRef, useState } from "react";

// constants
import { NOTIFICATION_DURATION } from "@/app/constants/constants";

// types
import { FormFieldType } from "@/app/shared-types/form-field-type";
import { NotificationType } from "@/app/shared-types/notification-type";
import { ValidityOfFields } from "@/app/shared-types/validity-of-fields";

export const Form = ({
  fields,
}: {
  fields: { fieldType: string; elementType?: FormFieldType }[];
}) => {
  const [areFieldsValid, setAreFieldsValid] = useState<ValidityOfFields>({
    email: false,
    subject: false,
    message: false,
  });
  const [displayedNotification, setDisplayedNotification] =
    useState<NotificationType | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearTimeout(timerRef.current);

    if (Object.values(areFieldsValid).every((value) => value === true)) {
      setDisplayedNotification({
        type: "success",
        text: "Your message has been sent successfully. Thank you!",
      });
    } else {
      setDisplayedNotification({
        type: "warning",
        text: "Please fill out all required fields appropriately!",
      });
    }
    timerRef.current = setTimeout(() => {
      setDisplayedNotification(null);
    }, NOTIFICATION_DURATION);
  };
  return (
    <>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormField
            fieldType={field.fieldType}
            elementType={field.elementType}
            setIsValid={setAreFieldsValid}
          />
        ))}
        <Button text="Send Message" />
      </form>
      {displayedNotification && (
        <Notification
          type={displayedNotification.type}
          text={displayedNotification.text}
        />
      )}
    </>
  );
};
