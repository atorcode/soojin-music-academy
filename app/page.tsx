// sections
import { HeroSection } from "./sections/hero-section";
import { AboutAcademySection } from "./sections/about-academy-section";
import { AboutMeSection } from "./sections/about-me-section";
import { ResumeSection } from "./sections/resume-section";
import { GallerySection } from "./sections/gallery-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { FaqSection } from "./sections/faq-section";
import { ContactMeSection } from "./sections/contact-me-section";

// components
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HeroSection />
      <AboutAcademySection />
      <AboutMeSection />
      <ResumeSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactMeSection />
    </Box>
  );
}
