import prisma from '@/lib/prisma';

type tParams = Promise<{ params: { id: string } }>;

export default async function ChapterPage(props : { params : tParams }) {
  const { params } = await props.params;
  const chapter = await prisma.chapters.findUnique({
    where: { id: Number(params.id) },
  });

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-primaryAccent">Chapter {params.id} is Coming soon...</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-5 text-primary-accent">{chapter.name}</h1>
      <p className="text-lg leading-relaxed whitespace-pre-line">{chapter.content}</p>
    </div>
  );
}
