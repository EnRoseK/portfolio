import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import logoPic from "@/assets/pic-1.jpeg";

import {
  TfiHome,
  TfiIdBadge,
  TfiPanel,
  TfiBookmarkAlt,
  TfiLayoutMediaOverlayAlt2,
  TfiMapAlt,
} from "react-icons/tfi";
import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";

const Sidebar: FC = () => {
  const menuItems = [
    { name: "Home", link: "/", Icon: TfiHome },
    { name: "About Me", link: "#about", Icon: TfiIdBadge },
    { name: "Services", link: "#services", Icon: TfiPanel },
    { name: "Portfolio", link: "#portfolio", Icon: TfiBookmarkAlt },
    { name: "Projects", link: "#projects", Icon: TfiLayoutMediaOverlayAlt2 },
    { name: "Contact Me", link: "#contact", Icon: TfiMapAlt },
  ];

  return (
    <header className="fixed top-0 bottom-0 left-0 min-h-screen min-w-[250px] bg-gray-light dark:bg-dark-1 duration-150 overflow-hidden flex flex-col">
      <div className="p-[25px] pt-[65px] flex flex-col items-center gap-[15px] relative">
        <div className="absolute -top-[82%] -translate-x-5 w-[310px] h-[310px] rounded-full bg-primary" />

        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-[5px] border-white z-10">
          <Image src={logoPic} alt="Logo" className="w-full h-full aspect-square object-cover" />
        </div>

        <h5 className="uppercase text-[13px] font-light leading-[15.6px] tracking-[7px] text-dark-2 dark:text-white duration-150">
          Javkhlant
        </h5>
      </div>

      <div className="overflow-y-auto flex-1">
        <nav className="py-[45px]">
          <ul className="flex flex-col gap-0">
            {menuItems.map((item, index) => (
              <li key={`menu-item-${index}`}>
                <Link
                  className="flex items-center gap-3 py-[15px] px-[30px] text-dark-2/70 uppercase font-normal text-xs leading-[18px] tracking-[3px] dark:text-white/80 duration-150 hover:text-primary dark:hover:text-white"
                  href={item.link}
                >
                  <item.Icon className="font-light text-lg" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="py-3 flex items-center justify-center gap-4 text-dark-1 dark:text-white duration-150">
        <Link className="hover:text-primary duration-150" href={"github.com"} target="_blank">
          <FaGithub size={16} />
        </Link>
        <Link className="hover:text-primary duration-150" href={"github.com"} target="_blank">
          <FaInstagram size={16} />
        </Link>
        <Link className="hover:text-primary duration-150" href={"github.com"} target="_blank">
          <FaFacebookF size={16} />
        </Link>
      </div>
    </header>
  );
};

export default Sidebar;
