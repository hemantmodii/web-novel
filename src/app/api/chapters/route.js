import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Create a new chapter
export async function POST(request) {
  const { name, content } = await request.json();

  try {
    // Get the next chapter_order value
    const lastChapter = await prisma.chapters.findFirst({
      orderBy: { chapter_order: 'desc' }, // Find the chapter with the highest chapter_order
    });

    const nextChapterOrder = lastChapter ? lastChapter.chapter_order + 1 : 1; // If no chapters exist, start with 1

    // Create the new chapter
    const newChapter = await prisma.chapters.create({
      data: {
        name,
        content,
        chapter_order: nextChapterOrder, // Set the calculated chapter_order
      },
    });

    return NextResponse.json({ chapter: newChapter }, { status: 200 });
  } catch (error) {
    console.error('Error creating chapter:', error);
    return NextResponse.json({ error: 'Failed to create chapter' }, { status: 500 });
  }
}

// GET: Fetch all chapters
export async function GET() {
  try {
    const chapters = await prisma.chapters.findMany({
      orderBy: { chapter_order: 'asc' }, // Fetch chapters sorted by chapter_order
    });
    return NextResponse.json(chapters);
  } catch (error) {
    console.error('Error fetching chapters:', error);
    return NextResponse.json({ error: 'Failed to fetch chapters' }, { status: 500 });
  }
}

// DELETE: Delete a chapter and reassign chapter_order
export async function DELETE(request) {
  const { id } = await request.json();

  try {
    // Get the chapter_order of the chapter to delete
    const chapterToDelete = await prisma.chapters.findUnique({
      where: { id },
    });

    if (!chapterToDelete) {
      return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
    }

    const { chapter_order } = chapterToDelete;

    // Delete the chapter
    await prisma.chapters.delete({
      where: { id },
    });

    // Reassign chapter_order for subsequent chapters
    await prisma.chapters.updateMany({
      where: { chapter_order: { gt: chapter_order } }, // Chapters with higher chapter_order
      data: { chapter_order: { decrement: 1 } }, // Decrement their chapter_order by 1
    });

    return NextResponse.json({ message: 'Chapter deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting chapter:', error);
    return NextResponse.json({ error: 'Failed to delete chapter' }, { status: 500 });
  }
}