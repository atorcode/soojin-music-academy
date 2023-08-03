// styles
import styles from "./contact-me-section.module.scss";

// components
import { FormField } from "@/app/components/form-field";
import { Button } from "@/app/components/button";
import { DescriptiveIconGroup } from "@/app/components/descriptive-icon-group";

export const ContactMeSection = () => {
  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <h2 className={styles["heading"]}>Embark on Your Journey Today</h2>
        <div className={styles["form-and-icons"]}>
          <div className={styles["form"]}>
            <FormField id="name" />
            <FormField id="subject" />
            <FormField type="textarea" id="message" />
            <Button text="Send Message" />
          </div>
          <DescriptiveIconGroup />
        </div>
      </div>
    </section>
  );
};
