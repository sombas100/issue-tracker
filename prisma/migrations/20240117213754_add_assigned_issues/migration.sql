-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assingedToUserID` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assingedToUserID_fkey` FOREIGN KEY (`assingedToUserID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
