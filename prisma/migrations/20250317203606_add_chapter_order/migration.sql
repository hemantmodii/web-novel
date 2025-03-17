/*
  Warnings:

  - A unique constraint covering the columns `[chapter_order]` on the table `Chapters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapter_order` to the `Chapters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapters" ADD COLUMN     "chapter_order" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Chapters_chapter_order_key" ON "Chapters"("chapter_order");
