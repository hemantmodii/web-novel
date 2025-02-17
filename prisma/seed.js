import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

   await prisma.chapters.create({
      data: {
        name: `Sample Chapter`,
        content: `Sample Content`,
      },
    });
}

main()
  .then(() => {
    console.log('Seeding completed.');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
