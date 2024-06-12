/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `Users` table. All the data in the column will be lost.
  - Added the required column `id` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_authorId_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP PRIMARY KEY,
    DROP COLUMN `ID`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
