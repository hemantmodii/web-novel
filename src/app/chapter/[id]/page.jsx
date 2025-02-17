import prisma from '@/lib/prisma';

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
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Chapter {await params.id} is Coming Soon...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground max-w-5xl mx-auto text-justify">
      <h1 className="text-4xl font-bold mb-10 text-[#c19a6b] text-center">
        {chapter.name}
      </h1>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {chapter.content}
      </p>
    </div>
  );
}
