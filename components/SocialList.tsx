import React from "react";
import ReactIcon from "./ReactIcon";
import { ISocialItem } from "./interface";

type SocialListProps = {
  list: ISocialItem[];
};

const SocialList = ({ list }: SocialListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {list.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="text-white flex gap-2 items-center"
        >
          <ReactIcon iconName={item.icon} />
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default SocialList;
