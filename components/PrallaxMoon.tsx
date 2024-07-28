"use client";

import React, { useEffect, useState } from "react";
import MoonImg from "@/public/moon.png";

const ParallaxMoon = () => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const deltaY = newScrollY - scrollY;
      setScrollY(newScrollY);

      setPosition((prevPosition) => ({
        x: Math.max(-500, Math.min(0, prevPosition.x + deltaY * 0.1)),
        y: Math.max(-500, Math.min(0, prevPosition.y + deltaY * 0.1)),
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const scale = Math.min(0.5 + scrollY / 1000, 1);
  const rotation = Math.min(0, -125 + scrollY / 10);

  return (
    <img
      src={MoonImg.src}
      alt="Moon"
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        top: `${position.y}px`,
        right: `${position.x}px`,
        transition: "transform 0.1s, top 0.1s, right 0.1s",
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "auto",
        maxWidth: "1440px",
        minWidth: "800px",
      }}
      className="top-0 right-0 z-0"
    />
  );
};

export default ParallaxMoon;
