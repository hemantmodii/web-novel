import prisma from '@/lib/prisma';

export default async function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = await prisma.chapters.findUnique({
    where: { id: parseInt(params.id, 10) || 0 },
  });

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Chapter {params.id} is Coming Soon...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-5 text-primary-accent text-center">
        {chapter.name}
      </h1>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {chapter.content}
      </p>
    </div>
  );
}
