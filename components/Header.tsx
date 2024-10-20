"use client";

import React, { useState } from "react";
import { INavList } from "./interface";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

type HeaderProps = {
  header: {
    title: string;
    link: string;
    navList: INavList[];
  };
};

const Header = ({ header }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full  px-6 xl:px-0 py-4 md:py-8 fixed z-50 flex justify-between bg-gray-scale-900 shadow">
      <div className="flex w-full max-w-7xl mx-auto justify-between ">
        <a
          href={header.link}
          className="text-white text-2xl md:text-4xl font-bold"
        >
          {header.title}
        </a>
        <div className="hidden lg:flex justify-end items-center gap-20">
          {header.navList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white text-xl md:text-2xl font-bold font-['Montserrat']"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <FaBars size={32} color="white" />
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-2/3 h-full bg-gray-scale-900 z-50 flex flex-col items-center justify-center lg:hidden"
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes size={32} color="white" />
          </div>
          {header.navList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white text-base font-normal"
              onClick={toggleMenu}
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Header;
