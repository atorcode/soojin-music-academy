// styles
import styles from "./hero.module.scss";

// components
import { Button } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <section style={{ position: "relative", width: "100vw", height: "800px" }}>
      <Image
        src="/hero-image.jpg"
        alt="Woman playing piano"
        fill
        sizes="100vw"
        objectFit="cover"
      />
      <Button variant="contained" size="large">
        Learn more
      </Button>
    </section>
  );
};
