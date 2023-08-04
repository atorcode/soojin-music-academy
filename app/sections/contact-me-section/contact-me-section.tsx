"use client";

// styles
import styles from "./contact-me-section.module.scss";

// components
import { FormField } from "@/app/components/form-field";
import { Button } from "@/app/components/button";
import { DescriptiveIconGroup } from "@/app/components/descriptive-icon-group";
import { Notification } from "@/app/components/notification";

export const ContactMeSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>Embark on Your Journey Today</h2>
        <div className={styles["form-and-icons"]}>
          <form
            className={styles["form"]}
            onSubmit={() => console.log("SUBMITTED")}
          >
            <FormField id="name" />
            <FormField id="subject" />
            <FormField type="textarea" id="message" />
            <Button text="Send Message" />
          </form>
          <DescriptiveIconGroup />
          <Notification
            type="warning"
            text="Please fill out all required fields appropriately!"
          />
          <Notification
            type="success"
            text="Your message has been sent. Thank you!"
          />
        </div>
      </div>
    </section>
  );
};
