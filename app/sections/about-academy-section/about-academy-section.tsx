"use client";

// styles
import styles from "./about-academy-section.module.scss";
import buttonStyles from "../../components/button/button.module.scss";

// components
import Image from "next/image";
import { Button as ReactScrollButton } from "react-scroll";

export const AboutAcademySection = () => {
  return (
    <section className={styles["section"]} id="About">
      <div className={styles["content-wrapper"]}>
        <div className={styles["content-and-ribbon"]}>
          <div className={styles["image-group"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/about-academy.jpg"
                alt=""
                fill
                className={styles["image"]}
              />
            </div>
            <section className={styles["ribbon-section"]}>
              <div className={styles["ribbon-container"]}>
                <Image
                  src="/20-years.png"
                  alt=""
                  fill
                  unoptimized
                  className={styles["ribbon"]}
                />
              </div>
              <p className={styles["ribbon-caption"]}>
                Proudly serving the community for <span>two decades.</span>
              </p>
            </section>
          </div>
          <h2 className={styles["heading"]}>
            Connecting Through the Language of Music
          </h2>
          <p className={styles["text"]}>
            Soojin Music Academy, founded by Maestra Soojin Lee in 2003 as a
            passion project, has since flourished into an esteemed and cherished
            establishment within the Federal Way community. Our mission is to
            ignite a passion for singing and empower students on their
            individual journeys toward vocal mastery. Moreover, SJM has an
            exceptional track record of spreading positivity in the community by
            participating in charity events and building meaningful connections.
            Our ultimate goal is to create a welcoming space where people gather
            in mutual appreciation of singing in order to foster a vibrant and
            harmonious atmosphere. By doing so, we advance our aim of enriching
            lives through musical expression one day at a time. Join us in
            celebrating the transformative power of music!
          </p>
          <ReactScrollButton
            to="Contact"
            value="BOOK YOUR FIRST LESSON"
            type="submit"
            spy={true}
            smooth={true}
            offset={150}
            duration={500}
            className={buttonStyles["button"]}
          />
        </div>
      </div>
    </section>
  );
};
