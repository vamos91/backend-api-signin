/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `event_name` on the `Event` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Article` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Event` DROP PRIMARY KEY,
    DROP COLUMN `event_name`,
    ADD COLUMN `description` VARCHAR(255) NOT NULL,
    ADD COLUMN `price` VARCHAR(255) NOT NULL,
    ADD COLUMN `title` VARCHAR(255) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
