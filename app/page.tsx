// styles
import styles from "./page.module.scss";

// sections
import { HeroSection } from "./sections/hero-section";
import { AboutAcademySection } from "./sections/about-academy-section";
import { AboutMeSection } from "./sections/about-me-section";
import { GallerySection } from "./sections/gallery-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { FaqSection } from "./sections/faq-section";
import { ContactMeSection } from "./sections/contact-me-section";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <HeroSection />
      <AboutAcademySection />
      <AboutMeSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactMeSection />
    </main>
  );
}
