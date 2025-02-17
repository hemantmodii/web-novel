import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const { name, content } = await request.json();

  try {
    const newChapter = await prisma.chapters.create({
      data: {
        name,
        content,
      },
    });

    return NextResponse.json({ chapter: newChapter }, { status: 200 });
  } catch (error) {
    console.error('Error creating chapter:', error);
    return NextResponse.json({ error: 'Failed to create chapter' }, { status: 500 });
  }
}

export async function GET() {
   try {
     const chapters = await prisma.chapters.findMany();
     return NextResponse.json(chapters);
   } catch (error) {
     console.error('Error fetching chapters:', error);
     return NextResponse.json({ error: 'Failed to fetch chapters' }, { status: 500 });
   }
 }