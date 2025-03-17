import prisma from '@/lib/prisma';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const chapterId = parseInt(params.id, 10);
  if (isNaN(chapterId)) return { title: "Chapter Not Found" };

  const chapter = await prisma.chapters.findUnique({
    where: { id: chapterId },
    select: { name: true }, // Fetch only the chapter name
  });

  if (!chapter) return { title: "Chapter Not Found" };

  return {
    title: `${chapter.name} | Hemant's Web Novel`,
    description: `Read ${chapter.name} - a chapter from Hemant's Web Novel.`,
  };
}

export default async function ChapterPage({ params }) {
  const chapter = await prisma.chapters.findUnique({
    where: { id: parseInt(await params.id, 10) || 0 },
  });

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center selection:bg-[#c19a6b] selection:text-black">
        <h1 className="text-3xl font-bold text-foreground">
          Chapter {await params.id} is Coming Soon...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground max-w-5xl mx-auto text-justify selection:bg-[#c19a6b] selection:text-black">
      <h1 className="text-4xl font-bold mb-10 text-[#c19a6b] text-center selection:bg-[#c19a6b] selection:text-black">
        {chapter.name}
      </h1>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {chapter.content}
      </p>
      <div className={`flex ${parseInt(params.id, 10) > 1 ? "justify-between" : "justify-end"} px-4 py-2 bg-[#c19a6b]`}>
      {parseInt(params.id, 10) > 1 && (
        <Link href={`/chapter/${parseInt(params.id, 10) - 1}`} className="text-foreground hover:text-black transition-all duration-300 ease-in-out">Previous Chapter</Link>
      )}
        <Link href={`/chapter/${parseInt(params.id, 10) + 1}`} className="text-foreground hover:text-black transition-all duration-300 ease-in-out">Next Chapter</Link>

      </div>
    </div>
  );
}
