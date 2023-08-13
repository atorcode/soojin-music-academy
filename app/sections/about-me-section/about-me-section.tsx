"use client";

// styles
import styles from "./about-me-section.module.scss";
import buttonStyles from "../../components/button/button.module.scss";

// components
import Image from "next/image";
import { Button as ReactScrollButton } from "react-scroll";

// hooks
import { useEffect, useState } from "react";

export const AboutMeSection = () => {
  const [isResumeDisplayed, setIsResumeDisplayed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsResumeDisplayed(false);
      } else {
        setIsResumeDisplayed(true);
      }
    };
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className={styles["section"]}>
      <div className={styles["content-wrapper"]}>
        <section className={styles["greeting"]}>
          <div className={styles["non-image-content"]}>
            <h2 className={styles["heading"]}>Hi, I&apos;m Soojin!</h2>
            <div className={styles["paragraphs"]}>
              <p className={styles["paragraph-text"]}>
                Nice to meet you! I'm thrilled to have you here. I began my
                journey as a lyric soprano soloist and voice coach over 40 years
                ago when I left my home country to pursue my dreams. Originally
                drawn to the world of dance, a twist of fate led me to discover
                my true calling in opera. Since then, I've expanded my
                repertoire to include semi-classical and pop songs. I'm also a
                choir conductor, a guitar student, and a drum enthusiast. Music
                is truly my heart and soul.
              </p>
              <p className={styles["paragraph-text"]}>
                When I'm not immersed in music, you can find me improving my
                short game in golf, swimming, or listening to lectures. As a
                lifelong learner with a lot of different hobbies, I like to stay
                productive and constantly grow as a person. Being trilingual has
                given me the advantage of connecting with many different kinds
                of people. I resonate with people who can carry deep
                conversations about life, psychology, and spirituality. One
                thing that these discussions have taught me is how to keep a
                healthy mindset. Even though we all face tough challenges, I
                believe it is key to love yourself and remain optimistic.
              </p>
            </div>
            <div className={styles["buttons"]}>
              {isResumeDisplayed ? (
                <ReactScrollButton
                  to="Resume"
                  value="VIEW RESUME"
                  type="submit"
                  spy={true}
                  smooth={true}
                  offset={150}
                  duration={500}
                  className={`${buttonStyles["button"]}`}
                />
              ) : (
                <a
                  href="https://drive.google.com/file/d/1Mw3S4pJmJyaq3sASdSvsiWtIUheoEhS7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles["button"]}
                >
                  VIEW RESUME
                </a>
              )}
              <ReactScrollButton
                to="Testimonials"
                value="LEARN MORE"
                type="submit"
                spy={true}
                smooth={true}
                duration={500}
                className={buttonStyles["button"]}
              />
            </div>
          </div>
          <div className={styles["image-container"]}>
            <Image
              src="/about-me-profile.jpg"
              alt=""
              fill
              className={styles["image"]}
            />
          </div>
        </section>
      </div>
    </section>
  );
};
