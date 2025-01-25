'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {
   const {theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
     setMounted(true);
   }, []);

   if (!mounted) {
     return null;
   }

   const toggleDarkMode = () => {
     setTheme(theme === "dark" ? "light" : "dark");
   };

   return (
      <header className="bg-primaryAccent text-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hemant&apos;s Web Novel</h1>
        <nav>
          <ul className="flex space-x-6 text-foreground">
            <li><Link className='text-foreground hover:text-white' href="/">Home</Link></li>
            <li><Link className='text-foreground hover:text-white' href="/chapters">Chapters</Link></li>
            <li><Link className='text-foreground hover:text-white' href="/about">About</Link></li>
            <li><Link className='text-foreground hover:text-white' href="/contact">Contact</Link></li>
          </ul>
        </nav>
        {/* Dark Mode Toggle Button */}
        <button
          className="ml-4 py-2 px-4 rounded shadow-none hover:bg-primaryAccent hover:text-foreground"
          onClick={toggleDarkMode}
        >
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
      </header>
    );
}
