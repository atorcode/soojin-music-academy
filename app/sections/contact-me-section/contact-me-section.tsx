"use client";

// styles
import styles from "./contact-me-section.module.scss";

import { Form } from "@/app/components/form";
import { DescriptiveIconGroup } from "@/app/components/descriptive-icon-group";

export const ContactMeSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["anchor"]} id="contact-anchor"></div>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>Embark on Your Journey Today</h2>
        <div className={styles["form-and-details"]}>
          <Form
            fields={[
              { fieldType: "email" },
              { fieldType: "subject" },
              { fieldType: "message", elementType: "textarea" },
            ]}
          />
          <div className={styles["form-description-and-icons"]}>
            <p className={styles["form-description"]}>
              We now offer free 30-minute consultations! Whether you&apos;re a
              beginner or a seasoned vocalist, we&apos;re here to help you take
              your musical journey to new heights. Feel free to message us with
              any questions or to schedule your session today.
            </p>
            <DescriptiveIconGroup />
          </div>
        </div>
      </div>
    </section>
  );
};
