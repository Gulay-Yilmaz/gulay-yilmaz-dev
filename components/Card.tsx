"use client";
import React from "react";
import { ICard } from "./interface";
import Image from "next/image";
import clsx from "clsx";

type CardProps = {
  card: ICard;
};

const Card = ({ card }: CardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={clsx(
        "w-[360px] h-[380px] flex flex-col gap-8 p-4 border border-white rounded",
        {
          "bg-white": isHovered,
          "bg-transparent": !isHovered,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <Image
          src={card.image.src}
          alt={card.image.alt}
          width={card.image.width}
          height={150}
          className="w-full h-[150px] object-cover"
        />
      )}

      <div className="flex flex-col gap-4">
        <h1
          className={clsx("text-2xl font-bold", {
            "text-white": !isHovered,
            "text-gray-scale-900": isHovered,
          })}
        >
          {card.title}
        </h1>
        <p
          className={clsx("text-base", {
            "text-white line-clamp-2": !isHovered,
            "text-gray-scale-900": isHovered,
          })}
        >
          {card.description}
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {card.technologies.map((tecnology, index) => (
          <div
            key={index}
            className={clsx("w-8 h-8 p-2 rounded bg-white", {
              "bg-white": !isHovered,
              "bg-transparent": isHovered,
            })}
          >
            <Image
              className="w-full h-full object-cover"
              src={tecnology.src}
              alt={tecnology.alt}
              width={tecnology.width}
              height={tecnology.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
