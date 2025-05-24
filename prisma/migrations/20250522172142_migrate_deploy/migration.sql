/*
  Warnings:

  - You are about to alter the column `created_at` on the `Message` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Message` MODIFY `created_at` DATETIME NOT NULL;
