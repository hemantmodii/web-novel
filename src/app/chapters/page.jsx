'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';


export default function ChaptersPage() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('/api/chapters');
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error('Failed to fetch chapters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Chapters</h1>
      <ul className="space-y-4 lg:ml-20 md:ml-8 sm:ml-4">
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <Link href={`/chapter/${chapter.id}`} className="text-secondaryAccent hover:text-primaryAccent">
              Chapter {index+1}: {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
