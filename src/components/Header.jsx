"use client";

import Link from "next/link";
import logo from "@/public/vulkan_white.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-[#c19a6b] text-[#f5f5f5] py-0 px-6 flex justify-between items-center lg:px-[11%]">
      <h1 className="text-2xl font-bold">
        <Link href="/" className="text-[#f5f5f5] hover:text-white">
          <Image
            src={logo}
            className="h-20 w-20"
            alt={`Hemant's Web Novel`}
          ></Image>
        </Link>
      </h1>
      <button className="lg:hidden text-[#f5f5f5] focus:outline-none shadow-none hover:bg-inherit"
      onClick={() => setIsOpen(!isOpen)}>
        <FiMenu/>
      </button>
      <nav className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#c19a6b] lg:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "h-[100vh] flex flex-col justify-around align-bottom" : "hidden"} lg:block`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left text-[#f5f5f5]">
          <li><Link className="text-foreground hover:text-white" href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link className="text-foreground hover:text-white" href="/chapters" onClick={() => setIsOpen(false)}>Chapters</Link></li>
          <li><Link className="text-foreground hover:text-white" href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link className="text-foreground hover:text-white" href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
