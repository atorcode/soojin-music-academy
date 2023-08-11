// styles
import styles from "./marquee.module.scss";

// components
import { TestimonialCard } from "../testimonial-card";

export const Marquee = () => {
  return (
    <article className={styles["marquee-container"]}>
      <div className={styles["marquee"]}>
        <TestimonialCard
          name="SJ Lee"
          title="Student: 11 years"
          quote="A decade ago, I couldn't fathom singing at my current level. Soojin's personalized instruction guided me in conquering my tone-deafness. With her patient coaching and meticulous focus on breath control, I overcame many barriers and found the confidence to emote through singing."
          url="/t14.png"
        />
        <TestimonialCard
          name="Jung-soon Bae"
          title="Student: 3 years"
          quote="Meeting Soojin in my retirement was a stroke of luck. The feeling of basking in applause after my triumphant performance only a year into my journey was incredibly validating. Soojin's demeanor is commendable and her mentorship has become my confidence's greatest ally."
          url="/t15x.png"
        />
        <TestimonialCard
          name="Yu-kyung Ji"
          title="Student: 6 months"
          quote="As someone grappling with anxiety and depression, I can attest to the profound impact of Soojin's distinctive fusion of spirituality, psychology, and genuine connection. Her guidance has offered me transformative life counseling that played a pivotal role in my healing."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Ok-hee Lee"
          title="Student: 1 year"
          quote="A little over a year ago, I took up singing lessons to address my throat hoarseness. Soojin takes such a genuine interest in the growth of her students. Her pure, passionate teaching style imbue me with great energy and vivaciousness for the rest of the week."
          url="/t16.png"
        />
        <TestimonialCard
          name="Hoon-suk Lee"
          title="Student: 3 years"
          quote="My wife convinced me to take singing lessons from Soojin. I reluctantly accepted, but I was pretty sure I was doomed to sound like a wild beast forever. However, Soojin's unwavering encouragement led to a cathartic transformation which has made my retired life so much more rewarding and enjoyable."
          url="/t17.png"
        />
        <TestimonialCard
          name="Mai Le"
          title="Student: 2 months"
          quote="I've had a lifelong yearning for voice lessons, and destiny led me to Soojin's doorstep. I jumped at the opportunity and joined her classes. Not only is she a decorated teacher, but I was particularly blown away by how supportive she is toward beginners like me."
          url="/t13x.png"
        />
        <TestimonialCard
          name="Jung-ae Lee"
          title="Student: 2 years"
          quote="Amidst menopausal health challenges, I embraced singing to be proactive about my breathing problems. During our vocal lessons, I had many epiphanies about bel canto technique including appoggio breathing and airflow. I always leave our sessions brimming with joy and with a rekindled sense of wellness."
          url="/t8.png"
        />
        {/* duplicates for seamless looping */}
        <TestimonialCard
          name="SJ Lee"
          title="Student: 11 years"
          quote="A decade ago, I couldn't fathom singing at my current level. Soojin's personalized instruction guided me in conquering my tone-deafness. With her patient coaching and meticulous focus on breath control, I overcame many barriers and found the confidence to emote through singing."
          url="/t14.png"
        />
        <TestimonialCard
          name="Jung-soon Bae"
          title="Student: 3 years"
          quote="Meeting Soojin in my retirement was a stroke of luck. The feeling of basking in applause after my triumphant performance only a year into my journey was incredibly validating. Soojin's demeanor is commendable and her mentorship has become my confidence's greatest ally."
          url="/t15x.png"
        />
        <TestimonialCard
          name="Yu-kyung Ji"
          title="Student: 6 months"
          quote="As someone grappling with anxiety and depression, I can attest to the profound impact of Soojin's distinctive fusion of spirituality, psychology, and genuine connection. Her guidance has offered me transformative life counseling that played a pivotal role in my healing."
          url="/t4.jpg"
        />
        <TestimonialCard
          name="Ok-hee Lee"
          title="Student: 1 year"
          quote="A little over a year ago, I took up singing lessons to address my throat hoarseness. Soojin takes such a genuine interest in the growth of her students. Her pure, passionate teaching style imbue me with great energy and vivaciousness for the rest of the week."
          url="/t16.png"
        />
        <TestimonialCard
          name="Hoon-suk Lee"
          title="Student: 3 years"
          quote="My wife convinced me to take singing lessons from Soojin. I reluctantly accepted, but I was pretty sure I was doomed to sound like a wild beast forever. However, Soojin's unwavering encouragement led to a cathartic transformation which has made my retired life so much more rewarding and enjoyable."
          url="/t17.png"
        />
        <TestimonialCard
          name="Mai Le"
          title="Student: 2 months"
          quote="I've had a lifelong yearning for voice lessons, and destiny led me to Soojin's doorstep. I jumped at the opportunity and joined her classes. Not only is she a decorated teacher, but I was particularly blown away by how supportive she is toward beginners like me."
          url="/t13x.png"
        />
        <TestimonialCard
          name="Jung-ae Lee"
          title="Student: 2 years"
          quote="Amidst menopausal health challenges, I embraced swimming and singing to be proactive about my breathing problems. During our vocal lessons, I had many epiphanies about bel canto technique including appoggio breathing and airflow. I always leave our sessions brimming with joy and with a rekindled sense of wellness."
          url="/t8.png"
        />
      </div>
    </article>
  );
};
