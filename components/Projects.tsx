"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ICard } from "./interface";
import Card from "./Card";

const Projects = ({ cards }: { cards: ICard[] }) => {
  return (
    <div
      id="projects"
      className="grid grid-cols-1 md:md:grid-cols-2 gap-8 md:gap-16 px-6 xl:px-0 py-16"
    >
      <div className="text-left mb-16 flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        <p className="text-base max-w-3xl mx-auto">
          Explore a selection of my personal and professional projects that
          showcase my expertise in frontend development and creative
          problem-solving. My personal projects reflect my passion for
          technology and design, allowing me to experiment with new technologies
          and frameworks while enhancing my skills. In my role at Doğuş
          Teknoloji, I have contributed to various professional projects,
          including CMS-integrated landing pages and e-commerce platforms,
          delivering high-quality, scalable solutions tailored to client needs.
        </p>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.6}
        speed={5000}
        loop={true} // Sonsuz döngü
        breakpoints={{
          200: { slidesPerView: 1 },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1.2 },
          1280: { slidesPerView: 1.6 },
        }}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        className="w-full h-[412px]"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full w-full"
          >
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
