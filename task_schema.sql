-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2024 at 03:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_schema`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_institute`
--

CREATE TABLE `tbl_institute` (
  `id` bigint(20) NOT NULL,
  `organization_type` varchar(20) NOT NULL,
  `board` varchar(20) NOT NULL,
  `medium` varchar(20) NOT NULL,
  `class_category` varchar(20) NOT NULL,
  `standard` varchar(20) NOT NULL,
  `subjects` text NOT NULL,
  `university` varchar(256) NOT NULL,
  `degree` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_institute`
--

INSERT INTO `tbl_institute` (`id`, `organization_type`, `board`, `medium`, `class_category`, `standard`, `subjects`, `university`, `degree`, `created_at`, `updated_at`) VALUES
(1, 'College', '', '', '', '', '', 'Gujrat University', 'BE', '2024-11-09 14:54:07', '2024-11-09 14:54:07'),
(2, 'School', 'GSAB', 'English', 'Higher Secondary', '10th', 'Math,Science', '', '', '2024-11-09 14:54:56', '2024-11-09 14:54:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_institute`
--
ALTER TABLE `tbl_institute`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_institute`
--
ALTER TABLE `tbl_institute`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
