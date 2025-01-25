'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Chapter {
  id: number;
  name: string;
}

export default function ChaptersPage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Chapters</h1>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/chapters/${chapter.id}`} className="text-primaryAccent hover:text-blue-500">
              {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
