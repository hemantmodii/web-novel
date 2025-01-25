import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';  // For 404 handling

// Type for the params object
interface ChapterPageProps {
  params: {
    id: string; // The dynamic parameter in your URL (e.g., /chapters/1)
  };
}

const prisma = new PrismaClient();

// Fetching chapter data on the server side using getServerSideProps
export async function generateMetadata({ params }: ChapterPageProps) {
  const chapter = await prisma.chapters.findUnique({
    where: { id: Number(params.id) },
  });

  if (!chapter) {
    notFound(); // Automatically show a 404 page if no chapter is found
  }

  return {
    title: chapter.name,
    description: chapter.content,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const chapter = await prisma.chapters.findUnique({
    where: { id: Number(params.id) }, // Cast the ID to a number
  });

  // If chapter doesn't exist, return a 404
  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-primaryAccent">
          Chapter {params.id} is Coming soon...
        </h1>
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
