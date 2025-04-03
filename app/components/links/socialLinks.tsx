import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const socialItems = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabrielfbino/",
    icon: <FaLinkedin size={26} />,
    className: "bg-blue-700 text-white hover:bg-blue-800",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@gabrielfbino",
    icon: <FaTiktok size={24} />,
    className: "bg-cyan-500 text-white hover:bg-cyan-600",
  },
  {
    name: "Kwai",
    url: "https://www.kwai.com/@gabrielfbino",
    icon: (
      <Image
        src="icons/kwai.svg"
        alt="Kwai"
        width={28}
        height={28}
        className="invert dark:invert-0"
      />
    ),
    className: "bg-orange-500 text-white hover:bg-orange-600"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/gabrielfbino/",
    icon: <FaInstagram size={26} />,
    className: "bg-gradient-to-br from-pink-500 to-yellow-500 text-white",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {socialItems.map(({ name, url, icon }) => (
        <Link
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition"
          aria-label={`Ir para o ${name}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
