import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ProfileImage from "@/public/Gülay YILMAZ.jpg";

const link = process.env.BASE_URL;

export const title = "About";
export const name = "Gülay Yılmaz";
export const position = "Software Developer";

export const content = `
   Welcome to **[my website](${link})**, where innovation meets expertise in frontend development. Since June 2022, I've been a proud member of the Doğuş Teknoloji family, bringing creative web solutions to life. My journey began with a degree in Computer Engineering from Kocaeli University, and over the years, I've honed my skills in a diverse range of technologies, including Next.js, React, TypeScript, Tailwind CSS, and more.
<br/><br/>
   Before joining Doğuş Teknoloji, I spent a year working at NTT Data, focusing on SAP ABAP projects. This experience provided me with a strong foundation in problem-solving and technical skills, which I continue to leverage in my current role.
<br/><br/>
   With a passion for language independence in web development, I've successfully delivered projects using various frameworks such as Vue, HTML (MVC), and Django. However, my true specialization lies in Next.js, where I've developed everything from CMS-integrated landing pages to comprehensive e-commerce platforms.
At Gülay YILMAZ, we believe in pushing the boundaries of what's possible. Whether you're looking to create a stunning landing page or a robust e-commerce site, we're here to turn your vision into reality with precision and creativity. Let's build the future of web together.
`;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gulayyilmaz/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/Gulay-Yilmaz",
    icon: <FaGithub />,
  },
];

export const profileImage = ProfileImage;
