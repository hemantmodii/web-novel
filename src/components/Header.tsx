'use client';

import Link from 'next/link';


export default function Header() {

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
      </header>
    );
}
