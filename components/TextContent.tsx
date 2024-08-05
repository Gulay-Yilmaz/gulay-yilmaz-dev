"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type TextContentProps = {
  content: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "default";
  customClass?: string;
};

const TextContent = ({ content, tag, customClass }: TextContentProps) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedText = (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={variants}
      className="inline-block"
    >
      {Array.from(content).map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  const renderContent = () => {
    switch (tag) {
      case "h1":
        return (
          <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed tracking-normal">
            {AnimatedText}
          </h1>
        );
      case "h2":
        return (
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
            {AnimatedText}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-xl lg:text-2xl font-bold leading-tight">
            {AnimatedText}
          </h3>
        );
      case "h4":
        return (
          <h4 className="text-lg lg:text-xl font-bold leading-tight">
            {AnimatedText}
          </h4>
        );
      case "h5":
        return (
          <h5 className="text-base lg:text-lg font-bold leading-tight">
            {AnimatedText}
          </h5>
        );
      case "p":
        return (
          <p className="text-sm lg:text-base leading-tight">{AnimatedText}</p>
        );
      default:
        return (
          <p className="text-3xl lg:text-4xl font-bold leading-tight">
            {AnimatedText}
          </p>
        );
    }
  };

  return (
    <div className={clsx("w-[70%] lg:w-1/2 py-24 px-6 xl:px-0", customClass)}>
      {renderContent()}
    </div>
  );
};

export default TextContent;
