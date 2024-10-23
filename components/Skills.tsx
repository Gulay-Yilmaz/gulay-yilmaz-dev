"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface SkillsProps {
  skills: { name: string; logo: string }[]; // Skill'ler için tip tanımı
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="py-16 " id="skills">
      <div className="text-center mb-16 flex flex-col gap-4 px-6 xl:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        <p className="text-base max-w-3xl mx-auto text-white">
          I specialize in frontend development with expertise in Next.js, React,
          and TypeScript, complemented by a strong foundation in Tailwind CSS,
          Vue, and more.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 0 }} // Otomatik geçiş
        speed={10000}
        loop={true} // Sonsuz döngü
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full m-auto flex items-center justify-center"
      >
        {skills.map((skill) => (
          <SwiperSlide
            key={skill.name}
            className="flex justify-center items-center  h-full m-auto"
          >
            <Image
              src={skill.logo} // Logoları dinamik olarak props ile alıyoruz
              alt={`${skill.name} Logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
