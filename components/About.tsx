import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Sosyal medya linkleri için tip tanımlaması
interface SocialLink {
  href: string;
  icon: ReactNode; // İkon bileşenleri için ReactNode kullanıyoruz
}

// AboutMe bileşenine verilecek props'lar için tip tanımlaması
interface AboutMeProps {
  profileImage: string | StaticImageData;
  name: string;
  position: string;
  markdownContent: string;
  socialLinks: SocialLink[];
  title: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  profileImage,
  name,
  position,
  markdownContent,
  socialLinks,
  title,
}) => {
  return (
    <div
      className="bg-gray-scale-800 px-6 py-16 lg:p-16 text-white rounded-lg shadow-md max-w-7xl mx-auto"
      id="about"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col-reverse md:grid  md:grid-cols-3 gap-6">
        {/* Sol: Metin içeriği */}
        <div className="md:col-span-2">
          <Markdown className="prose prose-lg prose-blue">
            {markdownContent}
          </Markdown>
        </div>

        {/* Sağ: Profil Resmi ve İkonlar */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profil Resmi */}
          <div className="mb-4">
            <Image
              src={profileImage} // Props ile gelen profil resmi
              alt="Profile Photo"
              width={150}
              height={150}
              className="w-28 h-28 rounded-full border-4 border-primary-mid object-cover"
            />
          </div>

          {/* İsim ve Pozisyon */}
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-primary-mid">{position}</p>

          {/* Sosyal Medya İkonları */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-primary-mid hover:text-white  transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
