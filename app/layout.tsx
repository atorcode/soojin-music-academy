import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// components
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

// contexts
import { ScreenSizeProvider } from "./contexts/screen-size-context";

export const metadata: Metadata = {
  title: "Soojin Music Academy",
  description:
    "Discover your voice with us. Located in Federal Way, WA, our mission is to ignite a passion for singing and empower students on their individual journeys toward vocal mastery.",
  keywords: [
    "voice lessons",
    "singing lessons",
    "music academy",
    "Federal Way",
    "Soojin Lee",
    "vocal training",
    "vocal coaching",
    "vocal classes",
    "music education",
    "bel canto",
    "breathing techniques",
    "best voice teachers",
    "best vocal coaches",
    "voice lessons for beginners",
    "voice lessons in Federal Way",
    "singing lessons in Federal Way",
    "vocal training in Federal Way",
  ],
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <ScreenSizeProvider>
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </ScreenSizeProvider>
    </html>
  );
}
