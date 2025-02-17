'use client';

import Link from 'next/link';


export default function Header() {

   return (
      <header className="bg-[#c19a6b] text-[#f5f5f5] py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link href="/" className='text-[#f5f5f5] hover:text-white'>Hemant&apos;s Web Novel</Link></h1>
        <nav>
          <ul className="flex space-x-6 text-[#f5f5f5]">
            <li><Link className='text-[#f5f5f5] hover:text-white' href="/">Home</Link></li>
            <li><Link className='text-[#f5f5f5] hover:text-white' href="/chapters">Chapters</Link></li>
            <li><Link className='text-[#f5f5f5] hover:text-white' href="/about">About</Link></li>
            <li><Link className='text-[#f5f5f5] hover:text-white' href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
}
