import GulayYilmazImg from "@/public/projectsImg/gulay-yilmaz.png";
import DogusGroupImg from "@/public/projectsImg/dweb.png";
import NetworkdryImg from "@/public/projectsImg/networkdry.png";
import RecommasterImg from "@/public/projectsImg/recommaster.png";
import Nextjs from "@/public/technologies/next.svg";
import Tailwind from "@/public/technologies/tailwind.png";
import TypeScript from "@/public/technologies/typescript.png";
import Threejs from "@/public/technologies/three-js.png";
import React from "@/public/technologies/react.png";
import MUI from "@/public/technologies/mui.png";
import Strapi from "@/public/technologies/strapi.png";
import JavaScript from "@/public/technologies/javascript.png";
import Vue from "@/public/technologies/vue.png";
import Vuetify from "@/public/technologies/vuetify.png";
import { ICard } from "@/components/interface";
export const projects: ICard[] = [
  {
    title: "Gülay YILMAZ - Portfolio",
    description: "Portfolio website for Gülay YILMAZ",
    image: {
      src: GulayYilmazImg,
      alt: "Gülay YILMAZ - Portfolio",
      width: 630,
      height: 630,
    },
    technologies: [
      {
        src: Nextjs,
        alt: "Next.js",
        width: 100,
        height: 100,
      },
      {
        src: Tailwind,
        alt: "Tailwind",
        width: 100,
        height: 100,
      },
      {
        src: TypeScript,
        alt: "TypeScript",
        width: 100,
        height: 100,
      },
      {
        src: Threejs,
        alt: "Three.js",
        width: 100,
        height: 100,
      },
      { src: Strapi, alt: "Strapi", width: 100, height: 100 },
    ],
  },
  {
    title: "Doğuş Group Website",
    description:
      "Doğuş Group is one of the largest group companies in Turkey. We've made their new website. I was in the project frontend developer position during the development process. ",
    image: {
      src: DogusGroupImg,
      alt: "Doğuş Group Website",
      width: 630,
      height: 630,
    },
    technologies: [
      {
        src: React,
        alt: "React",
        width: 100,
        height: 100,
      },
      {
        src: JavaScript,
        alt: "JavaScript",
        width: 100,
        height: 100,
      },
      {
        src: MUI,
        alt: "Material UI",
        width: 100,
        height: 100,
      },
      { src: Strapi, alt: "Strapi", width: 100, height: 100 },
    ],
  },

  {
    title: "Networkdry Website",
    description:
      "Networkdry is a online cleaning service provider. We've made their new web and mobile application. I was in the project manager and frontend developer positions during the development process. I also developed their web application using Nextjs, tailwind, context API, RestFull API and Strapi. ",
    image: {
      src: NetworkdryImg,
      alt: "Networkdry Website",
      width: 630,
      height: 630,
    },
    technologies: [
      {
        src: Nextjs,
        alt: "Next.js",
        width: 100,
        height: 100,
      },
      {
        src: Tailwind,
        alt: "Tailwind",
        width: 100,
        height: 100,
      },
      {
        src: TypeScript,
        alt: "TypeScript",
        width: 100,
        height: 100,
      },
      { src: Strapi, alt: "Strapi", width: 100, height: 100 },
    ],
  },

  {
    title: "Recommaster Wep App",
    description:
      "Recommaster is a personalize ai-driven recommender system.  I was in the project manager and frontend developer positions. I also developed their web application using Vue.js, Vuetify, RestFull API and JS SDK. ",
    image: {
      src: RecommasterImg,
      alt: "Recommaster Wep App",
      width: 630,
      height: 630,
    },
    technologies: [
      {
        src: Vue,
        alt: "Vue.js",
        width: 100,
        height: 100,
      },
      {
        src: Vuetify,
        alt: "Vuetify",
        width: 100,
        height: 100,
      },
      {
        src: JavaScript,
        alt: "JavaScript",
        width: 100,
        height: 100,
      },
    ],
  },
  {
    title: "RMK Merrill",
    description:
      "RMK Merrill project is a corporate website consisting of cms and frontend. I worked as PM/PO and frontend developer in this project. Nextjs and Strapi CMS were used in the project.",
    image: {
      src: GulayYilmazImg,
      alt: "RMK Merrill",
      width: 630,
      height: 630,
    },
    technologies: [
      {
        src: Nextjs,
        alt: "Next.js",
        width: 100,
        height: 100,
      },
      {
        src: Tailwind,
        alt: "Tailwind",
        width: 100,
        height: 100,
      },
      {
        src: TypeScript,
        alt: "TypeScript",
        width: 100,
        height: 100,
      },
      { src: Strapi, alt: "Strapi", width: 100, height: 100 },
    ],
  },
];
