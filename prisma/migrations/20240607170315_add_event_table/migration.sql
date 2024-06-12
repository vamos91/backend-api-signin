-- CreateTable
CREATE TABLE `event` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `event_name` VARCHAR(255) NOT NULL,
    `lat` FLOAT NOT NULL,
    `lon` FLOAT NOT NULL,
    `authorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
