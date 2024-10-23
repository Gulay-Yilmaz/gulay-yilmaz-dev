import Link from "next/link";
import React, { ReactNode } from "react";
import { FaMailBulk } from "react-icons/fa";
// Sosyal medya linkleri için tip tanımlaması
interface SocialLink {
  href: string;
  icon: ReactNode; // İkon bileşenleri için ReactNode kullanıyoruz
}
const Contact = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
  return (
    <div
      id="contact"
      className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6 py-16 lg:p-16 rounded bg-gray-scale-800"
    >
      <div className="text-left mb-16 flex flex-col gap-4 text-white">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Me</h2>
        <p className="text-base max-w-3xl mx-auto text-white">
          If you&apos;re interested in collaborating or have any questions
          regarding job opportunities, please don&apos;t hesitate to reach out.
          I look forward to connecting!
        </p>

        <Link
          href="mailto:gulayyilmaz4158@gmail.com"
          className="flex gap-2 items-center"
        >
          <FaMailBulk className="text-base text-primary-mid" />
          <span className="text-base text-white font-semibold">
            gulayyilmaz4158@gmail.com
          </span>
        </Link>
      </div>
      <div className="flex gap-4 items-center md:justify-end">
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
  );
};

export default Contact;
