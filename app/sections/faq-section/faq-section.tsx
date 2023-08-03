// styles
import styles from "./faq-section.module.scss";

// components
import { Accordion } from "@/app/components/accordion";

export const FaqSection = () => {
  return (
    <section className={styles["section"]}>
      <h2 className={styles["heading"]}>Frequently Asked Questions</h2>
      <article className={styles["faq"]}>
        <div className={styles["group"]}>
          <Accordion
            title="How are you different from other music academies?"
            content="I began my journey of mastering vocal technique about 40 years ago when I moved from South Korea to Italy to pursue a career in opera. Since then, I've had a lot of highs and lows—some good teachers and a lot of bad ones. Even today, I am still learning new things. Because the road was so difficult for me, and every step in my journey came with obstacles, I have a lot of perspective to impart on my students."
          />
          <Accordion
            title="What genres of singing do you teach?"
            content="My lessons are not limited to any specific genre. I teach how to sing. As a classically trained musician, I believe there is tremendous value in learning proper vocal technique for any genre. Once you've developed this technique, you can employ it in the genre of your choice."
          />
          <Accordion
            title="I'm worried that singing is not for me. Should I still give it a try?"
            content="Yes! Many of my students were tone deaf or full of bad habits before starting lessons with me. Everybody has what it takes to be a good singer. The only requirement is that you enjoy the process. Take it at your own pace."
          />
          <Accordion
            title="How many hours a week should I practice?"
            content="This is one of my more controversial takes, but you shouldn't practice singing at all for the first month. If you're a beginner, practicing too much without supervision can lead to the formation of bad habits. That's not to say that you can't sing at home in the shower, or on your walks in nature, but separate this from practice. Instead, focus your attention on training your ear and performing our breathing exercises. Once you have a solid foundation, you may practice as much as you want as long as you're not straining your vocal cords."
          />
          <Accordion
            title="How long will it take to see results?"
            content="I typically guarantee that my students will already start to notice improvements within the first month or two. By the end of the first year, you'll look back and be amazed at how far you came. However, the path to mastery is a long one—for many, it's a lifelong journey. It's important not to rush yourself. Instead, if you adopt a mindset of positivity and become invested in your personal growth, good things will happen."
          />
        </div>
        <div className={styles["group"]}>
          <Accordion
            title="What is the rate that you charge for lessons?"
            content="My standard rates are $70 per hour, or $60 per hour if you choose to do two lessons per week. In certain cases, this price point may be open to negotiation, as I understand that individual circumstances and budgets may vary. If you want to learn but cannot afford the standard rates, I encourage you to reach out to me anyway, and we'll have a discussion."
          />
          <Accordion
            title="How can I overcome stage fright or performance anxiety?"
            content="While there is no one-size-fits-all answer to this, there are some things that definitely help. The first of these is confidence in technique. If you feel insecure about your abilities, it's only natural to worry that you'll stumble. Another one is repetition. It may sound cliché, but the more you do something, the more comfortable you'll get at it. We have a small student recital every 3-4 months, and a larger one annually. Students will have multiple opportunities to perform in front of a supportive community of music enjoyers."
          />
          <Accordion
            title="What is your teaching style?"
            content="When it comes to drilling technique, I am very detail-oriented, and I give plenty of demonstrations for you to hear. Becoming a great singer is just as much about training the ear as it is about training the voice. I will give you guidance by explaining the mechanics of the body parts involved and how to control them in order to achieve resonance."
          />
          <Accordion
            title="I want to join a choir. Do you know of any in the area?"
            content="In addition to running my music academy, I am also a conductor and founding member for the Federal Way Bel Canto Choir. We are a Non-profit Organization and an integral part of the Korean community in our city. For the time being, we are meeting once a week on Wednesdays. We'd love to have you over there. There will be delicious food!"
          />
          <Accordion
            title="Do you teach other instruments?"
            content="While my main focus is on teaching vocal technique, I do also offer piano lessons. If you are interested in learning to play the piano, or know someone who is, please reach out!"
          />
        </div>
      </article>
    </section>
  );
};
