// styles
import styles from "./page.module.scss";

// components
import { NavBar } from "@/app/components/nav-bar";
import { TestimonialCard } from "@/app/components/testimonial-card";

export default function Testimonials() {
  return (
    <>
      <NavBar isInHomePage={false} />
      <article className={styles["testimonials-article"]}>
        <h1 className={styles["main-heading"]}>Student Success Stories:</h1>
        <h2 className={styles["subheading"]}>From Zero to Hero</h2>
        <section className={styles["testimonials-section"]}>
          <TestimonialCard
            name="SJ Lee"
            title="Student: 11 years"
            quote="A decade ago, I couldn't fathom singing at my current level. Soojin's personalized instruction guided me in conquering my tone-deafness. With her patient coaching and meticulous focus on breath control, I overcame many barriers and found the confidence to emote through singing."
            rating={5}
            url="/t14.png"
            color="#A2E4B8"
          />
          <TestimonialCard
            name="Jung-soon Bae"
            title="Student: 2 years"
            quote="Meeting Soojin in my retirement was a stroke of luck. The feeling of basking in applause after my triumphant performance only a year into my journey was incredibly validating. Soojin's demeanor is commendable and her mentorship has become my confidence's greatest ally."
            rating={5}
            url="/t15x.png"
            color="#89CFF0"
          />
          <TestimonialCard
            name="Yu-kyung Ji"
            title="Student: 6 months"
            quote="As someone grappling with anxiety and depression, I can attest to the profound impact of Soojin's distinctive fusion of spirituality, psychology, and genuine connection. Her guidance has offered me transformative life counseling that played a pivotal role in my healing."
            rating={5}
            url="/t4.jpg"
            color="#FDFD96"
          />
          <TestimonialCard
            name="Ok-hee Lee"
            title="Student: 2 years"
            quote="A little over a year ago, I took up singing lessons to address my throat hoarseness. Soojin takes such a genuine interest in the growth of her students. Her pure, passionate teaching style imbue me with great energy and vivaciousness for the rest of the week."
            rating={5}
            url="/t16.png"
            color="#DF7371"
          />
          <TestimonialCard
            name="Hoon-suk Lee"
            title="Student: 2 years"
            quote="My wife convinced me to take singing lessons from Soojin. I reluctantly accepted, but I was pretty sure I was doomed to sound like a wild beast forever. However, Soojin's unwavering encouragement led to a cathartic transformation which has made my retired life so much more rewarding and enjoyable."
            rating={5}
            url="/t17.png"
            color="pink"
          />
          <TestimonialCard
            name="Mai Le"
            title="Student: 2 months"
            quote="I've had a lifelong yearning for voice lessons, and destiny led me to Soojin's doorstep. I jumped at the opportunity and joined her classes. Not only is she a decorated teacher, but I was particularly blown away by how supportive she is toward beginners like me."
            rating={4.5}
            url="/t13x.png"
            color="violet"
          />
          <TestimonialCard
            name="Jung-ae Lee"
            title="Student: 2 years"
            quote="Amidst menopausal health challenges, I embraced singing to be proactive about my breathing problems. During our vocal lessons, I had many epiphanies about bel canto technique including appoggio breathing and airflow. I always leave our sessions brimming with joy and with a rekindled sense of wellness."
            rating={4.5}
            url="/t8.png"
            color="orange"
          />
          <TestimonialCard
            name="Bo-young Kim"
            title="Student: 1 years"
            quote="Once tone-deaf, and lacking rhythm and confidence, singing was a distant dream. Yet, with Soojin's reassurance and exceptional teaching, I've gained the courage to push myself. You have no idea how fun the lessons are, so I encourage you to give it a shot if you're on the fence."
            rating={5}
            url="/t1.jpg"
            color="#A2E4B8"
          />
          <TestimonialCard
            name="Hong-mo Kim"
            title="Student: 1 year"
            quote="Past scars of being shamed for singing in school haunted me, erasing my voice. Soojin entered my life as a chance encounter, rekindling hope. She taught me the right path. As I improved, fear faded, replaced by triumph as I sang confidently at a recital. Now, I proudly anchor the Bel Canto Choir's bass section."
            rating={4.5}
            url="/t2.png"
            color="#89CFF0"
          />
          <TestimonialCard
            name="Hae-won Chun"
            title="Student: 3 years"
            quote="I Always wanted to sing, but only pursued it post-retirement. My soft voice was limiting, and I could only sing falsetto. Soojin changed that. Through her, I developed a pro-level vocal resonance—an accomplishment that brings me immense joy. Her meticulously tailored lessons are perfect for amateurs!"
            rating={5}
            url="/t3a.png"
            color="#FDFD96"
          />
          <div className={styles["small-font"]}>
            <TestimonialCard
              name="Hyun-kyung Kim"
              title="Student: 4 years"
              quote="I come from a background in piano, and I knew I wanted to learn singing. I was introduced to Soojin and was shocked at how quickly I progressed in my development. Learning the Bel Canto method properly, I gained control over my volume and improved my diction. Under Soojin’s teaching, my goal is to expand my repertoire to include many opera arias."
              rating={5}
              url="/t5a.png"
              color="#DF7371"
            />
          </div>
          <TestimonialCard
            name="Yeon-ok Kim"
            title="Student: 8 years"
            quote="If I had to sum up Soojin's teaching style in a phrase, I would say she's enthusiastic and detail-oriented. Her profound dedication to her students' growth is clear from her actions, and she's always a pleasure to be around as a person. As soon as the pandemic ended, one of the first things I did was to resume our lessons."
            rating={5}
            url="/t6x.png"
            color="pink"
          />
          <div className={styles["small-font"]}>
            <TestimonialCard
              name="In-sook Lee"
              title="Student: 8 years"
              quote="Just because you're great at singing doesn't make you a good teacher. Soojin is an exception. She has an impressive background of learning, performing, and teaching in Italy. I sang as a soprano soloist in my church choir, and Soojin's teachings have been incredibly helpful. I’m grateful for her unwavering passion and devotion for imparting her wisdom on those who are less musically talented than her."
              rating={5}
              url="/t7x.png"
              color="violet"
            />
          </div>
          <div className={styles["small-font"]}>
            <TestimonialCard
              name="Mi-won Park"
              title="Choir member: 5 years"
              quote="I've known Soojin for over 25 years. Currently, I’m a member of my own church choir and the Bel Canto Choir led by Soojin. The church I belong to has a conductor with an extensive background in singing who vouches for Soojin and tells all our choir members to seek Soojin’s voice lessons. Soojin’s achievements speak for themselves and she’s clearly a foundational piece in our musical community."
              rating={5}
              url="/t19x.png"
              color="orange"
            />
          </div>
          <TestimonialCard
            name="Eun-kyung Choi"
            title="Choir member: 5 years"
            quote="Soojin teaches with passion and diligence...with all her soul. More than anything, her personality and warm heart stand out as her greatest qualities. Her ability to empathize and connect with others is truly remarkable. I'm proud to call her my best friend."
            rating={5}
            url="/t9.png"
            color="#A2E4B8"
          />
          <TestimonialCard
            name="Kyung-mi Yoon"
            title="Choir Member: 4 years"
            quote="Soojin's passion is contagious, and she is super relatable. Her wisdom has helped me undergo a deepened appreciation for spirituality and life's journey in general. Through that, I have experienced a heightened artistic sensibility in my own performances."
            rating={4.5}
            url="/t10x.png"
            color="#89CFF0"
          />
          <TestimonialCard
            name="Jung-sook Woo"
            title="Student: 6 years"
            quote="Once upon a time, I had huge misunderstandings about the breathing technique involved in singing. After learning from Soojin for a couple years, I felt connected to my breath in a major way. My diction problems were fixed, and she gave me the fundamentals I needed to continue learning independently."
            rating={4}
            url="/t11.jpg"
            color="#FDFD96"
          />
          <TestimonialCard
            name="Helen Lee"
            title="Choir member: 1 year"
            quote="Soojin is both an incredible musician and teacher. A year of voice lessons has given me the confidence to sing in front of anyone, anytime. I am delighted to explore diverse music under her guidance."
            rating={4.5}
            url="/t12.jpg"
            color="#DF7371"
          />
          <div className={styles["small-font"]}>
            <TestimonialCard
              name="Dong-wan Kim"
              title="Student: 2 years"
              quote="Initially, classical music felt distant from my preferred genres. However, upon getting acquainted with Soojin and embracing the challenge, I recognized the value of learning classically-rooted vocal techniques. Genre aside, I've been able to transfer my skills in singing to all kinds of music by learning what Soojin taught me. Her principles are universal."
              rating={4.5}
              url="/t18.png"
              color="pink"
            />
          </div>
          <TestimonialCard
            name="In-ok Yang"
            title="Student: 3 years"
            quote="Soojin's guidance breathed new confidence into me. In the past, I had always second-guessed my abilities when singing in front of my congregation. However, through Soojin's patient teachings, I have gained security in my skill. I've also learned a ton about how to properly maintain optimal vocal health."
            rating={4.5}
            url="/t20.jpg"
            color="violet"
          />
          <TestimonialCard
            name="Tae-eun Son"
            title="Student: 2 years"
            quote="I think Ms. Lee is an absolutely wonderful teacher! I love how she always tries her best to help me improve at piano. She makes sure to give important feedback all the time. She is very talented and kind! I believe that it is such an honor to be a student of hers."
            rating={5}
            url="/default-woman-img.png"
            color="orange"
          />
        </section>
      </article>
    </>
  );
}
