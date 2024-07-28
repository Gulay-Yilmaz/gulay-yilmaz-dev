import React from "react";
import { content, title } from "@/mocks/about";
import Markdown from "markdown-to-jsx";

const page = () => {
  return (
    <div className=" w-full max-w-7xl  mx-auto py-48 flex flex-col  gap-8 h-full px-6 xl:px-0 ">
      <h1 className="text-white text-4xl font-bold font-['Montserrat'] underline leading-[60px]">
        ABOUT
      </h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default page;
