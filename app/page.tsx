import Head from "next/head";
import { home, head, skills } from "@/mocks/home";
import TextContent from "@/components/TextContent";
import Banner from "@/components/Banner";
import AboutMe from "@/components/About";
import {
  content,
  title,
  socialLinks,
  profileImage,
  name,
  position,
} from "@/mocks/about";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { projects } from "@/mocks/projects";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gülay Yılmaz",
  description: "Gülay Yılmaz Portfolio",
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full py-16 max-w-7xl mx-auto">
        <Banner />
        <AboutMe
          markdownContent={content}
          name={name}
          socialLinks={socialLinks}
          profileImage={profileImage}
          position={position}
          title={title}
        />
        <Skills skills={skills} />
        <Projects cards={projects} />
        <Contact socialLinks={socialLinks} />
      </main>
    </div>
  );
}
