"use client";

// styles
import styles from "./contact-me-section.module.scss";

// components
import { FormField } from "@/app/components/form-field";
import { Button } from "@/app/components/button";
import { DescriptiveIconGroup } from "@/app/components/descriptive-icon-group";
import { Notification } from "@/app/components/notification";

// hooks
import { useRef, useState } from "react";

// constants
import { NOTIFICATION_DURATION } from "@/app/constants/constants";

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

  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearTimeout(timerRef.current);

    if (Object.values(areFieldsValid).every((value) => value === true)) {
      setDisplayedNotification({ type: "success", text: "YAHOO!" });
    } else {
      setDisplayedNotification({ type: "warning", text: "FAIL" });
    }
    timerRef.current = setTimeout(() => {
      setDisplayedNotification(null);
    }, NOTIFICATION_DURATION);
  };

  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>Embark on Your Journey Today</h2>
        <div className={styles["form-and-details"]}>
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
          <div className={styles["form-description-and-icons"]}>
            <p className={styles["form-description"]}>
              We now offer free 30-minute consultations! Whether you're a
              beginner or a seasoned vocalist, we're here to help you take your
              musical journey to new heights. Feel free to message us with any
              questions or to schedule your session today.
            </p>
            <DescriptiveIconGroup />
            {displayedNotification && (
              <Notification
                type={displayedNotification.type}
                text={displayedNotification.text}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
