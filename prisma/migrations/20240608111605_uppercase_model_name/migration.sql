/*
  Warnings:

  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_authorId_fkey`;

-- DropTable
DROP TABLE `article`;

-- DropTable
DROP TABLE `event`;

-- CreateTable
CREATE TABLE `Article` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `event_name` VARCHAR(255) NOT NULL,
    `lat` FLOAT NOT NULL,
    `lon` FLOAT NOT NULL,
    `authorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
