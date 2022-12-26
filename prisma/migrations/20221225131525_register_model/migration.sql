-- CreateTable
CREATE TABLE `Register` (
    `regID` INTEGER NOT NULL AUTO_INCREMENT,
    `reg_firstname` VARCHAR(50) NOT NULL,
    `reg_lastname` VARCHAR(50) NOT NULL,
    `reg_username` VARCHAR(25) NOT NULL,
    `reg_password` VARCHAR(12) NOT NULL,
    `reg_account` VARCHAR(7) NOT NULL,

    PRIMARY KEY (`regID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
