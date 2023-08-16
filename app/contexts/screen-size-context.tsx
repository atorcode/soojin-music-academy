"use client";

// React and hooks
import React, { useContext, useEffect, useState } from "react";

const ScreenSizeContext = React.createContext<
  | {
      screenSize: string;
    }
  | undefined
>(undefined);

const ScreenSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("small");
      } else if (window.innerWidth <= 1280) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSizeContext = () => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error(
      "useScreenSizeContext must be used within a ScreenSizeProvider!"
    );
  }
  return context;
};

export { ScreenSizeProvider, useScreenSizeContext };
