"use client";

// styles
import styles from "./contact-me-section.module.scss";

// components
import { FormField } from "@/app/components/form-field";
import { Button } from "@/app/components/button";
import { DescriptiveIconGroup } from "@/app/components/descriptive-icon-group";
import { Notification } from "@/app/components/notification";

// hooks
import { useState } from "react";

// types
import { NotificationType } from "@/app/shared-types/notification-type";
import { ValidityOfFields } from "@/app/shared-types/validity-of-fields";

export const ContactMeSection = () => {
  const [areFieldsValid, setAreFieldsValid] = useState<ValidityOfFields>({
    email: false,
    subject: false,
    message: false,
  });
  const [displayedNotification, setDisplayedNotification] =
    useState<NotificationType | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(areFieldsValid).every((value) => value === true)) {
      setDisplayedNotification({ type: "success", text: "YAHOO!" });
    } else {
      setDisplayedNotification({ type: "warning", text: "FAIL" });
    }
  };

  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>Embark on Your Journey Today</h2>
        <div className={styles["form-and-icons"]}>
          <form className={styles["form"]} onSubmit={handleSubmit}>
            <FormField fieldType="email" setIsValid={setAreFieldsValid} />
            <FormField fieldType="subject" setIsValid={setAreFieldsValid} />
            <FormField
              elementType="textarea"
              fieldType="message"
              setIsValid={setAreFieldsValid}
            />
            <Button text="Send Message" />
          </form>
          <DescriptiveIconGroup />
          {displayedNotification && (
            <Notification
              type={displayedNotification.type}
              text={displayedNotification.text}
            />
          )}
        </div>
      </div>
    </section>
  );
};
