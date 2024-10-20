import React from "react";
import { IButton } from "./interface";
import Link from "next/link";
import clsx from "clsx";
import ReactIcon from "./ReactIcon";

const Button = ({ variant, text, icon, link, onClick }: IButton) => {
  return (
    <Link
      href={link}
      className={clsx(
        "flex justify-center items-center text-base font-semibold px-5 py-3 rounded",
        {
          "bg-primary-mid text-white": variant === "fill",
          "bg-transparent text-primary-mid border border-primary-mid":
            variant === "outline",
        }
      )}
      onClick={onClick}
    >
      {icon && <ReactIcon iconName={icon} />}
      {text}
    </Link>
  );
};

export default Button;
