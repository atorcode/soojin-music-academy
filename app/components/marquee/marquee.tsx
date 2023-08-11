// styles
import styles from "./marquee.module.scss";

// components
import { TestimonialCard } from "../testimonial-card";

export const Marquee = () => {
  return (
    <article className={styles["marquee-container"]}>
      <div className={styles["marquee"]}>
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        {/* duplicates for seamless looping */}
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Agatha"
          title="Student: 3 years"
          quote="Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome. Soojin is awesome."
          url="/t4.jpg"
        />
      </div>
    </article>
  );
};
