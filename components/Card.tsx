"use client";
import React from "react";
import { ICard } from "./interface";
import Image from "next/image";
import clsx from "clsx";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

type CardProps = {
  card: ICard;
  handleClick: () => void;
};

const Card = ({ card, handleClick }: CardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "w-auto h-auto flex flex-col gap-8 p-3 border border-white",
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
          height={card.image.height}
          className="w-full h-[200px] object-cover"
        />
      )}

      <div className="flex flex-col gap-4">
        <h1
          className={clsx("text-2xl font-bold", {
            "text-white": !isHovered,
            "text-primary-100": isHovered,
          })}
        >
          {card.title}
        </h1>
        <p
          className={clsx("text-base", {
            "text-white line-clamp-3": !isHovered,
            "text-primary-100": isHovered,
          })}
        >
          {card.description}
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {card.technologies.map((tecnology, index) => (
          <div
            key={index}
            className={clsx("w-8 h-8 p-2 bg-white", {
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
