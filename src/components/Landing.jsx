'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from './Loading';


export default function LandingPage() {
  const [latestChapters, setLatestChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestChapters = async () => {
      try {
        const response = await fetch('/api/chapters');
        const data = await response.json();
        setLatestChapters(data);

        const latest = data.slice(-2).reverse();
        setLatestChapters(latest);
      } catch (error) {
        console.error('Failed to fetch chapters:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchLatestChapters();
  } , []);

  if(loading) {
    return <Loading/>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-black text-foreground">
        <h1 className="text-4xl font-bold">Welcome to Hemant&apos;s Web Novel</h1>
        <p className="mt-4 text-lg">
          A tale of mystery and adventure, updated weekly. Dive into a new world!
        </p>
        <Link href="/chapter/1">
          <button className="mt-6 px-6 py-2 rounded-lg">
            Start Reading
          </button>
        </Link>
      </section>
      <hr />

      {/* Latest Chapters */}
      
      <section className="py-10 px-6 bg-black text-foreground">
        <h2 className="text-2xl font-bold mb-6 underline underline-offset-8">Latest Chapters</h2>
        <ul className="grid gap-6 md:grid-cols-2">
        {latestChapters.map((chapter) => (
          <li key={chapter.id}>
            <div className="p-4 hover:shadow-sm hover:bg-primaryAccent transition-all duration-300 bg-background rounded-lg">
            <h3 className="text-lg font-bold">Chapter {chapter.id}: {chapter.name}</h3>
            <p className="mt-2 text-sm text-foreground">
            {chapter.content.split(' ').slice(0, 24).join(' ')}...
            </p>
            <Link href={`/chapter/${chapter.id}`}>
              <button className="mt-4 px-4 py-2 rounded-lg hover:text-white hover:bg-black text-primaryAccent bg-black">
                Read More
              </button>
            </Link>
          </div>
          </li>
          ))}
        </ul>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 bg-black border-t-2">
        <h2 className="text-2xl font-bold mb-4">About the Story</h2>
        <p>
          This web novel follows the adventures of Adi, a brave soul navigating a world of uncertainty and danger. With new twists weekly, readers will experience a rollercoaster of emotions.
        </p>
      </section>
    </div>
  );
}
