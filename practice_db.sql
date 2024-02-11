-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2024 at 06:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practice_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `product_data`
--

CREATE TABLE `product_data` (
  `productId` int(11) NOT NULL,
  `productName` varchar(64) NOT NULL,
  `productOldPrice` int(11) NOT NULL,
  `productNewPrice` int(11) NOT NULL,
  `productCount` varchar(256) NOT NULL,
  `productDesc` varchar(256) NOT NULL,
  `productImg` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_data`
--

INSERT INTO `product_data` (`productId`, `productName`, `productOldPrice`, `productNewPrice`, `productCount`, `productDesc`, `productImg`) VALUES
(2, 'Keycult 1/60', 800, 699, '10', 'Highend Mechanical Keyboard that is handicraft.', 'img_1707664168765.jpg'),
(3, 'Macbook Pro M10', 1699, 1499, '30', 'Super Macbook product from Apple. Use M10 chipset with high perfomance.', 'img_1707659436047.jpg'),
(4, 'Hefiman HE9112', 3299, 3099, '5', 'Product from Hefiman have super special mega sound that even have in the world.', 'img_1707664594439.jpg'),
(5, 'What A Chair', 12999, 9999, '2', 'What A Chair is a super funiture that create by 20 years include many function that we don\'t know for real.', 'img_1707664791480.jpg'),
(6, 'Audoseat Special Edition', 399, 329, '30', 'Audoseat Special Edition collab with Michael Johndow with special design from super hot music.', 'img_1707666094191.jpg'),
(7, 'GOG Speed Runner Keycaps', 499, 329, '250', 'Keycaps that manufacture by GOG. This keycaps have inspire from Allien 2003 made with high quality plastic from Mars.', 'img_1707666338816.jpg'),
(8, 'VeryFinalmouse SuperUltraLight', 799, 679, '30', 'Better than Finalmouse with more function than original product. and we don\'t know anything.', 'img_1707669693222.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `profile_img`
--

CREATE TABLE `profile_img` (
  `userId` int(11) NOT NULL DEFAULT 0,
  `userEmail` varchar(64) NOT NULL,
  `imgId` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile_img`
--

INSERT INTO `profile_img` (`userId`, `userEmail`, `imgId`) VALUES
(35, 'backendtest@mail.com', 1),
(28, 'dasds@mail.com', 1),
(20, 'dds2s@mail.com', 1),
(19, 'ddss@mail.com', 1),
(32, 'registertest@mail.com', 1),
(17, 'tes2t22212@mail.com', 1),
(16, 'test221@mail.com', 1),
(18, 'tt2@mail.com', 1),
(21, 'tteerr@mail.com', 1),
(27, 'ttttt@mail.com', 1),
(37, 'ttw2@mail.com', 3),
(25, 'tukdanai@mail.com', 1),
(38, 'tytytt@mail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `register_users`
--

CREATE TABLE `register_users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `userEmail` varchar(64) NOT NULL,
  `userPhoneNum` varchar(64) DEFAULT NULL,
  `userPassword` varchar(64) NOT NULL,
  `userBirth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register_users`
--

INSERT INTO `register_users` (`userId`, `firstName`, `lastName`, `userEmail`, `userPhoneNum`, `userPassword`, `userBirth`) VALUES
(16, 'testt22', 'Testpuda', 'test221@mail.com', '0221134422', '$2b$10$SCw8CvLPrHXGbPuJRDwQKuxebWcC8phjmJXUWzE6BuAtqL5/80Bfu', '2024-02-02'),
(17, 'Use2rTest12', 'TestLast', 'tes2t22212@mail.com', '992223321', '$2b$10$./.MNkubRCKravHeRhpIu.jaExqxNltDXO6TWG9u7TWkEuK72WRS6', '0000-00-00'),
(18, 'testupdate', 'updatelastname', 'tt2@mail.com', '099212341', '$2b$10$S4jkUkvE4RROKvX3nmWOkOuBRdhlQg3ARzpu2.kq3yUaUXSOnyevW', '2022-01-12'),
(19, 'Testsss', 'GGSSAA', 'ddss@mail.com', '826249966', '$2b$10$JfY.DlygC.NvrYZrwV/6.OOPJFjbRNgaW8xRIz22ZzjH8NBsqPs2C', '2024-01-01'),
(20, 'Test2', 'Ddsa', 'dds2s@mail.com', '826248855', '$2b$10$uxcGrXyS4Tg63Z7arlpaluKYTUl7212ytF9U4GU6IwSdp3HvFahru', '2024-01-01'),
(21, 'Test', 'DDs', 'tteerr@mail.com', '812223331', '$2b$10$O/0x4/PdJ2iHUI07vZM0a.FU59LxpD7RSfjUwvds6gS46DfpdmsMe', '2024-01-02'),
(25, 'ทักษ์ดนัย', 'อุรัมภรณ์', 'tukdanai@mail.com', '826249968', '$2b$10$OD/v04rM./34NcEdagGNyOD7KjKaojYcmQgUbx0eYiHSANA7oV2.O', '2003-06-16'),
(27, 'ทักษ์ดนัย', 'อุรัมภรณ์', 'ttttt@mail.com', '826249961', '$2b$10$5m3XHmoU3Zu59Kz9Eq6R9O100l6Klv9A2FYhaaOOfSJ9DjdeSbemq', '2002-01-02'),
(28, 'ทักษ์ดนัย', 'อุรัมภรณ์', 'dasds@mail.com', '826249922', '$2b$10$U3KjxFfalGcLUbR9Ed5Vo.6Mt65yKN1ogZilww9K1Po9lNOO.1bf.', '2022-12-01'),
(32, 'Tester', 'Register ', 'registertest@mail.com', '826249900', '$2b$10$rNWM7iB5s9nBw830cGMNKOV8D/CxzaZPA1ce8UO0fuXOnekts983i', '2024-02-01'),
(35, 'Gaypoon', 'TestLast1', 'backendtest@mail.com', '0818667784', '$2b$10$qiDoxysTFN4tG1iezWI/VOBI0KeESRUiA33GnLSAoCC79jHE93mHe', '2003-02-02'),
(37, 'Hellotestdocker', 'subimg', 'ttw2@mail.com', '0818667755', '$2b$10$TSC8ee/wpZChQEgo2rL5LuKTsbQWa0ZeEr2bNBVkuG6qiiNBSMTXe', '2024-01-02'),
(38, 'ttewt', 'trrtrr', 'tytytt@mail.com', '0826248868', '$2b$10$c.73YsXlBcVvxZgDvxn7Yey444kAAM4anO4FajXTLEauxbVmU7G52', '2002-02-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product_data`
--
ALTER TABLE `product_data`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `profile_img`
--
ALTER TABLE `profile_img`
  ADD KEY `fk_userId` (`userId`);

--
-- Indexes for table `register_users`
--
ALTER TABLE `register_users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userEmail` (`userEmail`),
  ADD UNIQUE KEY `userPhoneNum` (`userPhoneNum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product_data`
--
ALTER TABLE `product_data`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `register_users`
--
ALTER TABLE `register_users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `profile_img`
--
ALTER TABLE `profile_img`
  ADD CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `register_users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
