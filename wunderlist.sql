-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2020 at 10:05 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wunderlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `time` time NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

CREATE TABLE `file` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `langue`
--

CREATE TABLE `langue` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'English', 1, '2020-08-03 22:43:00', '2020-08-03 22:43:00'),
(2, 'Math', 20, '2020-08-28 21:36:17', '2020-08-28 21:36:17'),
(5, 'KhoaPham', 21, '2020-08-29 17:20:07', '2020-08-29 17:20:07'),
(52, 'To Do ', 20, '2020-09-16 10:06:54', '2020-09-16 10:06:54'),
(57, 'Vui', 20, '2020-11-13 11:20:41', '2020-11-13 11:20:41'),
(83, 'Deep-Learn', 20, '2020-12-07 17:59:57', '2020-12-07 17:59:57'),
(84, 'Marchine', 20, '2020-12-09 10:29:36', '2020-12-09 10:29:36'),
(85, 'e', 20, '2020-12-09 10:40:10', '2020-12-09 10:40:10');

-- --------------------------------------------------------

--
-- Table structure for table `remember_login`
--

CREATE TABLE `remember_login` (
  `token_hash` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `expires_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `due_date` datetime NOT NULL DEFAULT current_timestamp(),
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `star` varchar(20) NOT NULL DEFAULT 'trang',
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `due_date` datetime NOT NULL DEFAULT current_timestamp(),
  `note` text DEFAULT NULL,
  `list_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `name`, `star`, `status`, `created_at`, `due_date`, `note`, `list_id`) VALUES
(1, 'buoi1', 'trang', 'complete', '2020-08-17 21:53:32', '2020-08-27 21:54:17', NULL, 1),
(5, 'khoa pham file', 'trang', 'active', '2020-08-31 15:06:47', '2020-08-31 15:06:47', NULL, 5),
(7, 'mat2', 'trang', 'active', '2020-09-01 08:47:29', '2020-12-09 10:28:47', NULL, 2),
(8, 'jun', 'trang', 'active', '2020-09-03 09:26:30', '2020-12-09 10:28:42', NULL, 2),
(10, 'thu\n                                        2020-0', 'do', 'complete', '2020-09-16 10:39:45', '2020-12-10 16:57:28', NULL, 52),
(11, 'jully    ', 'trang', 'active', '2020-09-16 10:52:09', '2020-12-09 10:28:49', NULL, 2),
(14, 'jack                                   ', 'do', 'active', '2020-09-18 16:29:46', '2020-12-09 10:25:39', NULL, 2),
(35, 'j', 'trang', 'complete', '2020-09-28 10:00:09', '2020-12-09 10:28:45', NULL, 2),
(49, 'm1', 'do', 'complete', '2020-09-28 22:48:26', '2020-12-02 22:34:24', NULL, 2),
(53, 'todo', 'trang', 'complete', '2020-09-29 11:23:59', '2020-12-10 16:57:52', NULL, 52),
(56, 'di hoc', 'do', 'active', '2020-11-13 11:20:46', '2020-12-10 16:48:19', NULL, 57),
(59, 'a', 'trang', 'complete', '2020-12-02 11:17:02', '2020-12-02 22:34:34', NULL, 2),
(60, 'b', 'trang', 'complete', '2020-12-02 11:17:03', '2020-12-02 11:17:03', NULL, 2),
(61, 'vui1', 'do', 'active', '2020-12-02 22:51:49', '2020-12-10 16:48:39', NULL, 57),
(62, 'to', 'do', 'complete', '2020-12-05 11:02:54', '2020-12-09 10:37:34', NULL, 52),
(67, 'fe', 'trang', 'complete', '2020-12-09 10:29:12', '2020-12-09 10:29:19', NULL, 83),
(68, '3', 'trang', 'complete', '2020-12-09 10:29:14', '2020-12-09 10:29:20', NULL, 83),
(70, 'e1', 'trang', 'complete', '2020-12-09 10:40:17', '2020-12-09 10:40:40', NULL, 85),
(71, 'e2', 'trang', 'complete', '2020-12-09 10:40:22', '2020-12-09 11:03:53', NULL, 85),
(72, 'vuivi', 'trang', 'active', '2020-12-09 10:41:47', '2020-12-09 11:36:46', NULL, 57),
(73, '3', 'trang', 'complete', '2020-12-09 10:42:49', '2020-12-10 16:48:40', NULL, 57),
(74, 'e', 'trang', 'complete', '2020-12-09 10:45:03', '2020-12-09 11:01:55', NULL, 57),
(75, '1', 'trang', 'complete', '2020-12-09 10:45:22', '2020-12-10 22:48:11', NULL, 57),
(76, '1', 'trang', 'active', '2020-12-09 10:45:36', '2020-12-09 10:45:36', NULL, 57);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Jully', 'Vuitt72@wru.vn', '123', '2020-07-19 17:08:06', '2020-07-19 17:08:06'),
(8, 'ki', 'ki@gmail.com', '$2y$10$S6qDn492es27YdwOnWTAOua14L1O/QDTsaQU0tTejVE0xB7Ao6e5u', '2020-08-26 09:10:46', '2020-08-26 09:10:46'),
(9, 'vi', 'vivu@gmail.com', '$2y$10$h6cngbRC10BezrXXt0h.5uOat2yv6Lf1PfIAeDNrBikEuKDTtQwQq', '2020-08-26 09:13:37', '2020-08-26 09:13:37'),
(10, 'n', 'n@wru.edu.vn', '$2y$10$dy/gZ0lIzkXHDb8ffaGNKOZ/G4lwfHuRzf3Bot9oeM2kYjKwTl4Na', '2020-08-26 09:27:32', '2020-08-26 09:27:32'),
(11, 'jun', 'jun@gmail.com', '$2y$10$5w5F2u0PclVmeSotkGrbn.cVFFdEAjk5sSGEkD/WANEfxI7nQGMkG', '2020-08-26 09:37:13', '2020-08-26 09:37:13'),
(19, 'vui', 'vuitrannb@gmail.com', '$2y$10$vfQ7GLRiX9J9LDk2q2Jx8.nhONPRFaRK3RW/YSO7KOl9BS9ygFNra', '2020-08-26 21:02:13', '2020-08-26 21:02:13'),
(20, 'dianl', 'dinal@gmail.com', '$2y$10$zj.u9uK.p8h/7k47H3jzJeTE77WQYx2V7tPT1BbTr9pMeoJdGmAvm', '2020-08-27 09:32:49', '2020-08-27 09:32:49'),
(21, 'j99', 'j99@gmail.com', '$2y$10$kLgclS9/8a.g36v2OvBaP.yjM.ORiPuT6exNlmGvwyOt.kwaUUxRm', '2020-08-29 08:05:32', '2020-08-29 08:05:32'),
(22, 'jack', 'jack@gmail.com', '$2y$10$QPQNVG/CSso7ldCluKRC3.dKo.Gt6EzoXGzcN87CE5ySot3ILv5Ra', '2020-12-04 21:41:11', '2020-12-04 21:41:11');

-- --------------------------------------------------------

--
-- Table structure for table `user_lange`
--

CREATE TABLE `user_lange` (
  `user_id` int(11) NOT NULL,
  `langue_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_taskcmt` (`task_id`);

--
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_task` (`task_id`);

--
-- Indexes for table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indexes for table `remember_login`
--
ALTER TABLE `remember_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subtask`
--
ALTER TABLE `subtask`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tasksb` (`task_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_list` (`list_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_lange`
--
ALTER TABLE `user_lange`
  ADD PRIMARY KEY (`user_id`,`langue_id`),
  ADD KEY `fk_ulang` (`langue_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `fk_role` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file`
--
ALTER TABLE `file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `langue`
--
ALTER TABLE `langue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `remember_login`
--
ALTER TABLE `remember_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_taskcmt` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

--
-- Constraints for table `file`
--
ALTER TABLE `file`
  ADD CONSTRAINT `fk_task` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

--
-- Constraints for table `list`
--
ALTER TABLE `list`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `remember_login`
--
ALTER TABLE `remember_login`
  ADD CONSTRAINT `rememlog_us` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subtask`
--
ALTER TABLE `subtask`
  ADD CONSTRAINT `fk_tasksb` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `fk_list` FOREIGN KEY (`list_id`) REFERENCES `list` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_lange`
--
ALTER TABLE `user_lange`
  ADD CONSTRAINT `fk_u` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `fk_ulang` FOREIGN KEY (`langue_id`) REFERENCES `langue` (`id`);

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `fk_us` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
