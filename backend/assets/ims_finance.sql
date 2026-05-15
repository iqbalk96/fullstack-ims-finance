-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 15, 2026 at 05:51 AM
-- Server version: 8.4.3
-- PHP Version: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ims_finance`
--

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `id` int NOT NULL,
  `contractNo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clientName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otr` int NOT NULL,
  `dpPercentage` double NOT NULL,
  `dpAmount` int NOT NULL,
  `loanAmount` int NOT NULL,
  `tenorMonths` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (`id`, `contractNo`, `clientName`, `otr`, `dpPercentage`, `dpAmount`, `loanAmount`, `tenorMonths`, `createdAt`) VALUES
(6, 'AGR00001', 'SUGUS', 240000000, 20, 48000000, 192000000, 12, '2026-05-15 04:31:35.373');

-- --------------------------------------------------------

--
-- Table structure for table `installment`
--

CREATE TABLE `installment` (
  `id` int NOT NULL,
  `contractId` int NOT NULL,
  `installmentNo` int NOT NULL,
  `amount` int NOT NULL,
  `dueDate` datetime(3) NOT NULL,
  `isPaid` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `installment`
--

INSERT INTO `installment` (`id`, `contractId`, `installmentNo`, `amount`, `dueDate`, `isPaid`) VALUES
(97, 6, 1, 16000000, '2026-01-25 00:00:00.000', 1),
(98, 6, 2, 16000000, '2026-02-25 00:00:00.000', 1),
(99, 6, 3, 16000000, '2026-03-25 00:00:00.000', 1),
(100, 6, 4, 16000000, '2026-04-25 00:00:00.000', 1),
(101, 6, 5, 16000000, '2026-05-25 00:00:00.000', 1),
(102, 6, 6, 16000000, '2026-06-25 00:00:00.000', 0),
(103, 6, 7, 16000000, '2026-07-25 00:00:00.000', 0),
(104, 6, 8, 16000000, '2026-08-25 00:00:00.000', 0),
(105, 6, 9, 16000000, '2026-09-25 00:00:00.000', 0),
(106, 6, 10, 16000000, '2026-10-25 00:00:00.000', 0),
(107, 6, 11, 16000000, '2026-11-25 00:00:00.000', 0),
(108, 6, 12, 16000000, '2026-12-25 00:00:00.000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('7f1c5cb0-626e-4e11-96a9-7efe200c69c4', '3b74daffa41f5ea5e4e7ad3641657ceff691c281bacaa21080057bfcf71c9327', '2026-05-15 02:31:00.677', '20260515023100_init', NULL, NULL, '2026-05-15 02:31:00.402', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Contract_contractNo_key` (`contractNo`);

--
-- Indexes for table `installment`
--
ALTER TABLE `installment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Installment_contractId_fkey` (`contractId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contract`
--
ALTER TABLE `contract`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `installment`
--
ALTER TABLE `installment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `installment`
--
ALTER TABLE `installment`
  ADD CONSTRAINT `Installment_contractId_fkey` FOREIGN KEY (`contractId`) REFERENCES `contract` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
