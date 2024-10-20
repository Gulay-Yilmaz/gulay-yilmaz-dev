import { StaticImageData } from "next/image";
import * as ReactIcons from "react-icons/fa6";

export interface INavList {
  link: string;
  title: string;
}

export interface IImage {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  link?: string;
}

export interface ICard {
  title: string;
  description: string;
  image: IImage;
  technologies: IImage[];
}

export interface ISocialItem {
  link: string;
  icon: keyof typeof ReactIcons;
  text: string;
}

export interface IButton {
  text: string;
  link: string;
  icon?: keyof typeof ReactIcons;
  variant: "fill" | "outline";
  onClick?: () => void;
}
