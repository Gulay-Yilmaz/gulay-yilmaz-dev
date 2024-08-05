import SocialList from "@/components/SocialList";
import Image from "next/image";
import React from "react";
import AstronautImg from "@/public/astronaut.png";

const page = () => {
  return (
    <div className=" w-full max-w-7xl  mx-auto py-48 flex flex-col  gap-8 h-full px-6 xl:px-0 ">
      <h1 className="text-white text-4xl font-bold font-['Montserrat'] underline leading-[60px]">
        Contact
      </h1>

      <SocialList
        list={[
          {
            icon: "FaEnvelope",
            link: "mailto:gulayyilmaz4158@gmail.com",
            text: "gulayyilmaz4158@gmail.com",
          },
          {
            icon: "FaGithub",
            link: "https://github.com/Gulay-Yilmaz",
            text: "Gulay-Yilmaz",
          },
          {
            icon: "FaLinkedin",
            link: "https://www.linkedin.com/in/gulayyilmaz/",
            text: "gulayyilmaz",
          },
        ]}
      />

      <Image
        src={AstronautImg}
        alt="logo"
        width={500}
        height={500}
        className="w-1/2 h-[75vh] object-contain absolute bottom-10 right-0"
      />
    </div>
  );
};

export default page;
