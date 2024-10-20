"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaServer,
  FaDev,
  FaGitAlt,
} from "react-icons/fa6";
import Button from "./Button";

const AnimatedBubbles = () => {
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const icons = [
    <FaLaptopCode key="FaLaptopCode" />,
    <FaCode key="FaCode" />,
    <FaDatabase key="FaDatabase" />,
    <FaServer key="FaServer" />,
    <FaDev key="FaDev" />,
    <FaGitAlt key="FaGitAlt" />,
  ];

  useEffect(() => {
    bubbleRefs.current.forEach((bubble, index) => {
      gsap.set(bubble, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
      gsap.to(bubble, {
        x: () => Math.random() * window.innerWidth - 100,
        y: () => Math.random() * window.innerHeight - 100,
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden" id="home">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute w-16 h-16 rounded-full flex items-center justify-center"
          ref={(el) => {
            bubbleRefs.current[index] = el;
          }}
        >
          <div className="absolute w-full h-full bg-linear-bubble-bg blur-2xl"></div>
          <div className="relative w-6 h-6 text-gray-scale-500">{icon}</div>
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-[720px] md:h-[600px] text-center text-white">
        <h1 className="text-lg text-blue-400">Software Developer</h1>
        <h2 className="text-4xl font-bold mb-4">Gülay YILMAZ</h2>
        <p className="mb-6">
          Let&apos;s develop your next successful product together!
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button link="/#projects" text="View Projects" variant="fill" />
          <Button link="/#contact" text="Contact Me" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBubbles;
