-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2022 at 07:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ztl`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `re_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '2014_10_12_000000_create_users_table', 1),
(7, '2014_10_12_100000_create_password_resets_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(14, '2022_07_11_065256_create_ztl_recruitment_processes_table', 3),
(15, '2022_07_12_154825_create_ztl_job_lists_table', 3),
(16, '2022_07_13_105228_create_ztl_partners_table', 4),
(17, '2022_07_13_120112_create_ztl_our_partners_table', 5),
(18, '2022_07_14_040938_create_ztl_news_table', 6),
(19, '2022_07_14_050650_create_ztl_consultations_table', 7),
(20, '2022_07_14_104008_create_ztl_job_applications_table', 8),
(21, '2022_07_14_175232_create_ztl_counters_table', 9),
(25, '2022_07_18_172616_create_ztl_job_descriptions_table', 12),
(27, '2022_07_21_040934_create_ztl_service_logos_table', 14),
(28, '2022_07_26_112023_create_ztl_health_care_title_logos_table', 15),
(29, '2022_07_28_110015_create_ztlfaq_images_table', 16),
(30, '2022_07_28_134924_create_ztl_contact_us_table', 17),
(32, '2022_07_30_071958_create_admins_table', 18),
(33, '2022_07_30_110726_create_ztl_web_development_title_logos_table', 19),
(35, '2022_07_30_122533_create_ztl_web_development_faq_images_table', 21),
(36, '2022_07_31_094048_create_ztl_web_development_projects_table', 22),
(38, '2022_07_03_071516_create_ztl_headings_table', 24),
(39, '2022_07_20_164504_create_ztl_service_descriptions_table', 25),
(40, '2022_07_15_133537_create_ztl_service_types_table', 26),
(41, '2022_07_17_094841_create_ztl_technology_indices_table', 27),
(42, '2022_07_06_083756_create_ztl_landing_testimonials_table', 28),
(43, '2022_07_31_153657_create_ztl_web_development_cards_table', 29),
(44, '2022_07_30_120423_create_ztl_web_development_faqs_table', 30),
(45, '2022_08_03_055645_create_ztl_technology_index_logos_table', 31),
(46, '2022_08_03_091355_create_ztl_key_web_technologies_table', 32),
(47, '2022_08_03_103845_create_ztl_web_technology_frame_work_logos_table', 33),
(48, '2022_08_04_063939_create_ztl_health_care_cards_table', 34),
(49, '2022_08_04_070445_create_ztl_key_health_care_technologies_table', 35),
(50, '2022_08_04_093337_create_ztl_health_technology_frame_work_logos_table', 36),
(51, '2022_08_04_114255_create_ztl_health_care_solution_cards_table', 37),
(52, '2022_08_06_062811_create_ztl_erp_solution_title_logos_table', 38),
(53, '2022_08_06_064648_create_ztl_erp_solution_cards_table', 39),
(54, '2022_08_06_071626_create_ztl_key_erp_technologies_table', 40),
(55, '2022_08_06_092003_create_ztl_custom_erp_solutions_table', 41),
(56, '2022_08_06_095515_create_ztl_erp_technology_frame_work_logos_table', 42),
(57, '2022_08_06_105928_create_ztl_career_title_logos_table', 43),
(58, '2022_07_11_061415_create_ztl_faqs_table', 44),
(59, '2022_08_08_120938_create_ztl_partner_title_logos_table', 45),
(60, '2022_08_09_092941_create_ztl_our_partner_testimonials_table', 46),
(61, '2022_08_10_051231_create_ztl_become_a_partner_title_logos_table', 47),
(62, '2022_08_10_115355_create_ztl_our_world_wide_projects_table', 48),
(63, '2022_08_11_090048_create_ztl_product_title_logos_table', 49),
(64, '2022_08_11_101426_create_ztl_portfolio_products_table', 50),
(65, '2022_08_13_060643_create_ztl_about_us_title_logos_table', 51),
(66, '2022_08_13_063629_create_ztl_about_us_mission_vissions_table', 52),
(67, '2022_08_13_070055_create_ztl_about_us_missions_table', 53),
(68, '2022_08_13_071301_create_ztl_about_us_vissions_table', 54),
(69, '2022_08_13_075041_create_ztl_our_values_cards_table', 55),
(70, '2022_08_13_095055_create_ztl_how_we_works_table', 56),
(71, '2022_08_14_052029_create_r_d_work_items_table', 57);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('rakibtech9@gmail.com', '$2y$10$3TcpgA0nvGl/SewHuTzfXOb6q2iaByi4lZxGFRW877tVH2GqzxsNW', '2022-07-31 05:27:33'),
('rakib10ms@gmail.com', '$2y$10$i4XmxKhwD1EK66sRWjW3n.Hgq7mRuMwVeiYFI/39Aq.RQHuL1EeOK', '2022-07-31 06:13:54');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(179, 'App\\Models\\User', 9, 'sakib@gmail.com_Token', '6ccdbeb918a569ed9a73c515237380c31d508c901177ae1c9e7ad0e6becdfa64', '[\"*\"]', NULL, '2022-07-31 04:37:00', '2022-07-31 04:37:00'),
(180, 'App\\Models\\User', 9, 'sakib@gmail.com_Token', '2b1dbe193695c81e7556447b0f67bd1739d2e1a54578b939801e1b8ef19b330e', '[\"*\"]', NULL, '2022-07-31 04:42:13', '2022-07-31 04:42:13'),
(181, 'App\\Models\\User', 9, 'sakib@gmail.com_Token', '4103c7ddd81c985c060525dccbe1c798cf238cf965587b285cfdcd60f8ea136c', '[\"*\"]', NULL, '2022-07-31 04:47:44', '2022-07-31 04:47:44'),
(199, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '2747aa76a186fb1bff11fc065526da3f6169df44783b93930c9177cc66d5bdfe', '[\"*\"]', NULL, '2022-08-06 04:45:28', '2022-08-06 04:45:28'),
(200, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '3d6bd10de34c05a44a07a7639f284ef493c252f7f28d857f68e8e4b1562fba0b', '[\"*\"]', NULL, '2022-08-07 01:18:27', '2022-08-07 01:18:27'),
(201, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '0ad7f75c4f185a9cf37b03036d18bfc5d4b78df84d1d026439e5bfe34f799a0f', '[\"*\"]', NULL, '2022-08-08 00:12:21', '2022-08-08 00:12:21'),
(202, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '6edc36a33bc02760fbfff8b54b54a6e7bbf5cb8ad2a16faefdab591e62a429f3', '[\"*\"]', NULL, '2022-08-08 06:42:06', '2022-08-08 06:42:06'),
(203, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', 'cfc0f689f436744c5b7bf0e2f4e19ca52d5e3546293ed57b24de846f94b440fb', '[\"*\"]', NULL, '2022-08-08 06:42:15', '2022-08-08 06:42:15'),
(204, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '1ea8b5c3486cf08344b76bf9bdb7aa07fda88f4058c0e40f3c109e2010d6a9cd', '[\"*\"]', NULL, '2022-08-09 21:32:20', '2022-08-09 21:32:20'),
(205, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '13b3f7ab7dc0b2a42251bc7d2d347a0ad9b582bff75521c2530609d18ffc6dc8', '[\"*\"]', NULL, '2022-08-10 21:47:22', '2022-08-10 21:47:22'),
(206, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '12fe48244133a77d1646b28066c0b1d683a9806a90fe04633a9eaa368c70fbdb', '[\"*\"]', NULL, '2022-08-10 23:06:46', '2022-08-10 23:06:46'),
(207, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', 'c622ad725ea094a4efe4f2697bb739e15456a06715025eb703061958df29d196', '[\"*\"]', NULL, '2022-08-12 21:51:28', '2022-08-12 21:51:28'),
(208, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', 'c85700cc613d2a55e56806ed472ac2a501727962314a82f122e7b87f31f3a062', '[\"*\"]', NULL, '2022-08-13 00:08:20', '2022-08-13 00:08:20'),
(209, 'App\\Models\\User', 1, 'rakib@gmail.com_Token', '75689a482ba3ea582c71e01f0d4b158bdbdbe9268cfe72e0ce5f749c46138a0a', '[\"*\"]', NULL, '2022-08-13 22:50:14', '2022-08-13 22:50:14');

-- --------------------------------------------------------

--
-- Table structure for table `r_d_work_items`
--

CREATE TABLE `r_d_work_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rd_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rd_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `r_d_work_items`
--

INSERT INTO `r_d_work_items` (`id`, `project_name`, `rd_title`, `rd_description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Clinical Management System', 'Clinical Management System', 'undefined', '1660455492.jpg', '2022-08-13 23:38:12', '2022-08-13 23:38:12'),
(2, 'Clinical Management System', 'Clinical Management System', '<p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, ante et accumsan venenatis, enim est ultrices lacus, in cursus erat dui dignissim leo. Morbi sit amet rhoncus odio. Aenean massa purus, pharetra a commodo nec, tempus vitae sem. Donec porttitor ornare sapien, semper ornare eros dapibus tincidunt. Integer lacinia erat lectus, in scelerisque augue sodales ut. Aliquam erat volutpat. Sed risus augue, consectetur eu libero at, tristique dignissim magna.</p><p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Etiam turpis ligula, convallis non sagittis in, pharetra non mauris. Suspendisse auctor elit leo, vel vestibulum nisl dictum ut. Fusce ac purus a arcu varius sollicitudin sed eget purus. Quisque eu lacus metus. Fusce a erat urna. Suspendisse finibus sem in nunc ultrices, tincidunt dictum felis maximus. Quisque urna leo, convallis a metus vitae, congue eleifend mi. Sed eget quam risus. Sed vestibulum ipsum erat, non iaculis purus pulvinar in. Donec auctor, urna ut suscipit mollis, quam turpis maximus augue, quis porttitor lectus ex eu diam. Vestibulum id lacinia sem, vitae molestie sapien. Vivamus auctor mauris ligula, sit amet mollis massa pulvinar eu. Etiam at nisi in velit vulputate faucibus nec in lorem.</p><p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Proin vel rhoncus arcu. Etiam a nibh nec nisl efficitur convallis sed a urna. Donec condimentum urna enim, sed sagittis risus ultricies eget. Vestibulum cursus, lorem laoreet cursus dictum, dolor tellus congue risus, id egestas sem neque ut leo. Donec aliquam ligula elit, quis fermentum neque lacinia vel. Sed quis dolor sed risus vulputate lobortis. Ut id turpis odio. Ut efficitur enim purus, nec finibus ipsum accumsan vel. Duis suscipit porta lobortis. Maecenas facilisis blandit vulputate. Phasellus a gravida lectus. Morbi vel erat dictum, imperdiet ante suscipit, facilisis erat. Etiam accumsan nibh quis ultrices pulvinar.</p><p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Quisque sit amet ante vel sem tempor volutpat at sit amet velit. Aenean a eros eget nibh pharetra facilisis sit amet sed massa. Aliquam rutrum vel mi in molestie. Donec sed magna ex. Morbi eget odio tellus. Mauris nulla diam, rutrum in purus id, rhoncus malesuada libero. Duis consectetur tellus et odio imperdiet venenatis. Suspendisse mattis sodales neque, non convallis leo iaculis in. Nam faucibus libero massa, ac laoreet tortor feugiat vel.</p>', '1660455710.jpg', '2022-08-13 23:41:50', '2022-08-13 23:41:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `re_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `email_verified_at`, `password`, `re_password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rakib', NULL, 'rakib@gmail.com', NULL, '$2y$10$Bko0XUc7jkY7okdGFzviBe8eA1mafrI1z3vp7Bk3J/4NCfgxNw3Nq', NULL, 'super_admin', NULL, '2022-07-17 23:21:17', '2022-07-17 23:21:17'),
(9, 'Sakib', '01778749543', 'sakib@gmail.com', NULL, '$2y$10$U3LwnZth6cE/o5ELLwgWBeM2.5/h6ZEhvjtv77VOc0vC8mAXkCYaG', NULL, 'user', NULL, '2022-07-20 00:56:12', '2022-07-20 00:56:12'),
(10, 'aakib', '01778749543', 'aakib@gmail.com', NULL, '$2y$10$C.FIlVw8v6GN8Fzn1ErJZuJKuOi0hd/pGodklIBYMzN18OBuPYL2K', NULL, 'user', NULL, '2022-07-20 00:58:42', '2022-07-20 00:58:42'),
(11, 'saakib', '54326758', 'qq@gmail.com', NULL, '$2y$10$xNAygdMj7/MGkpsiNwFtQexKjDucjfT76WfNw8LotFvpivTsXvdFu', NULL, 'user', NULL, '2022-07-20 01:01:21', '2022-07-20 01:01:21'),
(13, 'bal', '527825', 'bal@gmail.com', NULL, '$2y$10$9c5YmhVj0h9vIKzUfnyNx.yDutuZAw/nEwbsFEHn1ICxouZPSdv56', NULL, 'user', NULL, '2022-07-30 03:55:45', '2022-07-30 03:55:45'),
(14, 'Rakib', '01312275802', 'rakibtech9@gmail.com', NULL, '$2y$10$sMN10UTJ5/O.7SV7FnkTzeoErMuejjI.mAAaXWjRp3I4uqvjzUJmq', NULL, 'user', NULL, '2022-07-30 22:28:43', '2022-07-30 22:28:43');

-- --------------------------------------------------------

--
-- Table structure for table `ztlfaq_images`
--

CREATE TABLE `ztlfaq_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztlfaq_images`
--

INSERT INTO `ztlfaq_images` (`id`, `image`, `created_at`, `updated_at`) VALUES
(6, '1659940907.png', '2022-08-08 00:39:51', '2022-08-08 00:41:47');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_about_us_missions`
--

CREATE TABLE `ztl_about_us_missions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mission_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_about_us_missions`
--

INSERT INTO `ztl_about_us_missions` (`id`, `mission_description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', '1660374323.png', '2022-08-13 01:05:24', '2022-08-13 01:29:21');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_about_us_mission_vissions`
--

CREATE TABLE `ztl_about_us_mission_vissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mission_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vission_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_about_us_mission_vissions`
--

INSERT INTO `ztl_about_us_mission_vissions` (`id`, `mission_description`, `vission_description`, `image`, `image2`, `created_at`, `updated_at`) VALUES
(1, 'asdasd', 'asdasd', '1660373355.jpg', '1660373355.png', '2022-08-13 00:49:15', '2022-08-13 00:49:15');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_about_us_title_logos`
--

CREATE TABLE `ztl_about_us_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_about_us_title_logos`
--

INSERT INTO `ztl_about_us_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'About Us mission uodated', '34205d2f710ced4d06a94cd54d35401f5e609.png', '2022-08-13 00:08:45', '2022-08-13 01:07:37');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_about_us_vissions`
--

CREATE TABLE `ztl_about_us_vissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vission_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_about_us_vissions`
--

INSERT INTO `ztl_about_us_vissions` (`id`, `vission_description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', '90551istockphoto-1266883438-612x612.jpg', '2022-08-13 01:18:08', '2022-08-13 01:28:02');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_become_a_partner_title_logos`
--

CREATE TABLE `ztl_become_a_partner_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_become_a_partner_title_logos`
--

INSERT INTO `ztl_become_a_partner_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'become a partner title logo', '71072images (1).png', '2022-08-09 23:16:08', '2022-08-09 23:16:42');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_career_title_logos`
--

CREATE TABLE `ztl_career_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_career_title_logos`
--

INSERT INTO `ztl_career_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(3, 'Our Career Section', '53279pngtree-tech-service-logo-png-image_3557083.jpg', '2022-08-07 03:35:42', '2022-08-13 04:48:51');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_consultations`
--

CREATE TABLE `ztl_consultations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_consultations`
--

INSERT INTO `ztl_consultations` (`id`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(3, 'rakib hossain', 'rakib@gmail.com', '01312275802', '543dsfsdf', '2022-08-11 00:26:52', '2022-08-11 00:26:52'),
(4, 'rakib hossain', 'rakib10ms@gmail.com', '01312275802', 'asdasd', '2022-08-13 05:00:52', '2022-08-13 05:00:52'),
(5, 'rakib hossain', 'rakib10@gmail.com', '01312275802', 'hello rakib', '2022-08-13 05:01:53', '2022-08-13 05:01:53');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_contact_us`
--

CREATE TABLE `ztl_contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_contact_us`
--

INSERT INTO `ztl_contact_us` (`id`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Rakib', 'rakib10ms@gmail.com', '01778749543', 'test', '2022-07-28 07:50:30', '2022-07-28 07:50:30'),
(2, 'Radiology Test', 'sakib@gmail.com', '01312275802', 'xzdzxd', '2022-08-01 03:22:43', '2022-08-01 03:22:43');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_counters`
--

CREATE TABLE `ztl_counters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total_countries` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_clients` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_projects` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_counters`
--

INSERT INTO `ztl_counters` (`id`, `total_countries`, `total_clients`, `total_projects`, `created_at`, `updated_at`) VALUES
(1, '30', '200', '455', '2022-08-02 05:00:35', '2022-08-02 05:00:35');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_custom_erp_solutions`
--

CREATE TABLE `ztl_custom_erp_solutions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_custom_erp_solutions`
--

INSERT INTO `ztl_custom_erp_solutions` (`id`, `title`, `short_description`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Document Management System', 'What Is a Short Description? A short description is the initial text for a topic. In most output formats, short descriptions appear as a brief paragraph. Some output formats also use the short descriptions as a link preview text for topic', '1659778032.png', '2022-08-06 03:27:12', '2022-08-06 03:27:12'),
(3, 'How long is a short description?', 'At a minimum all Short Descriptions should be at least 150 characters long. Here\'s an example of what can happen when your Short Description is not long enough. As you can see Google took a guess at what the other text should be in their search results by pulling in designer and product names on the page.', '1659778053.webp', '2022-08-06 03:27:33', '2022-08-06 03:27:33'),
(4, 'How do you write a good short description?', 'Cut out obvious descriptions. ...\r\nUse surprising words. ...\r\nRemember sensory details. ...\r\nMake use of figurative language. ...\r\nThink about who is doing the describing. ...\r\nBe wary of over-description. ...', '1659778075.jpg', '2022-08-06 03:27:55', '2022-08-06 03:27:55'),
(5, 'How do I add a short description to Wikipedia?', 'The easiest way to create and edit short descriptions on the desktop is to use the Shortdesc helper gadget. This may be enabled in the Gadgets tab of your Preferences under the \"Editing\" section. Alternatively, you can manually amend the {{Short description}} template.', '1659778094.png', '2022-08-06 03:28:14', '2022-08-06 03:28:14');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_erp_solution_cards`
--

CREATE TABLE `ztl_erp_solution_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_erp_solution_cards`
--

INSERT INTO `ztl_erp_solution_cards` (`id`, `title`, `short_description`, `created_at`, `updated_at`) VALUES
(1, 'erp title card updatd', 'Effective short descriptions provide enough context for a reader to understand what the topic conveys. A short description ought to contain keywords that help the reader identify whether the topic contains useful information. It should also be a concise description of the topic', '2022-08-06 00:50:29', '2022-08-06 00:56:24'),
(2, 'What is description Wikipedia?', 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration.', '2022-08-06 00:57:04', '2022-08-06 00:57:04');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_erp_solution_title_logos`
--

CREATE TABLE `ztl_erp_solution_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_erp_solution_title_logos`
--

INSERT INTO `ztl_erp_solution_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(3, 'Erp Solution Title', '72999Screenshot (4).png', '2022-08-07 03:30:24', '2022-08-13 04:44:36');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_erp_technology_frame_work_logos`
--

CREATE TABLE `ztl_erp_technology_frame_work_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_erp_technology_frame_work_logos`
--

INSERT INTO `ztl_erp_technology_frame_work_logos` (`id`, `image`, `created_at`, `updated_at`) VALUES
(2, '1659780481.png', '2022-08-06 04:08:01', '2022-08-06 04:08:01'),
(4, '1659780496.jpg', '2022-08-06 04:08:16', '2022-08-06 04:08:16'),
(5, '1659780502.png', '2022-08-06 04:08:22', '2022-08-06 04:08:22'),
(6, '1659780508.webp', '2022-08-06 04:08:28', '2022-08-06 04:08:28'),
(8, '1659864721.png', '2022-08-07 03:31:52', '2022-08-07 03:32:01');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_faqs`
--

CREATE TABLE `ztl_faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `faq_qtn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_ans` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_faqs`
--

INSERT INTO `ztl_faqs` (`id`, `faq_qtn`, `faq_ans`, `created_at`, `updated_at`) VALUES
(1, 'asdasdasd', 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr', '2022-08-06 05:13:58', '2022-08-06 05:13:58'),
(2, 'Why do we use it?', 't of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now', '2022-08-06 05:14:19', '2022-08-06 05:14:19'),
(3, 'Where does it come from?', 'McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem', '2022-08-06 05:14:30', '2022-08-06 05:14:30'),
(4, 'qweqwe', 'qweqwe', '2022-08-06 07:06:40', '2022-08-06 07:06:40'),
(5, 'asdas', 'dasd', '2022-08-06 07:14:51', '2022-08-06 07:14:51');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_headings`
--

CREATE TABLE `ztl_headings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_headings`
--

INSERT INTO `ztl_headings` (`id`, `heading_name`, `heading_description`, `image`, `created_at`, `updated_at`) VALUES
(60, 'The heading elements are', 'What is a heading example?\r\n2. 1. The definition of a heading is the title or subject of an article or another piece of written work. An example of a heading is a few words telling the subject of an article. noun.', '1660102512.jpg', '2022-08-07 02:29:23', '2022-08-09 21:35:12');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_health_care_cards`
--

CREATE TABLE `ztl_health_care_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_health_care_cards`
--

INSERT INTO `ztl_health_care_cards` (`id`, `title`, `short_description`, `created_at`, `updated_at`) VALUES
(2, 'Healthcare Web App Development', 'Health care or healthcare is the improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease, illness, injury, and other physical and mental impairments in people.', '2022-08-04 00:44:28', '2022-08-04 00:44:28'),
(3, 'Healthcare Mobile App Development', 'Under federal regulations, a \"health care provider\" is defined as: a doctor of medicine or osteopathy, podiatrist, dentist, chiropractor, clinical psychologist, optometrist, nurse practitioner, nurse-midwife, or a clinical social worker who is authorized to practice by the State and performing within the scope of their ...', '2022-08-04 00:44:50', '2022-08-04 00:44:50');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_health_care_solution_cards`
--

CREATE TABLE `ztl_health_care_solution_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_health_care_solution_cards`
--

INSERT INTO `ztl_health_care_solution_cards` (`id`, `title`, `short_description`, `image`, `created_at`, `updated_at`) VALUES
(3, 'Health care card', 'Discipline is action or inaction that is regulated to be in accordance with a particular system of governance. Discipline is commonly applied to regulating human and animal behavior to its', '1659614802.png', '2022-08-04 06:06:42', '2022-08-04 06:06:42'),
(4, 'What discipline really means?', 'What discipline really means?\r\n1 : to punish or penalize for the sake of enforcing obedience and perfecting moral character. 2 : to train or develop by instruction and exercise especially in self-control.', '1659614821.png', '2022-08-04 06:07:01', '2022-08-04 06:07:01'),
(5, 'What does discipline mean in life?', 'Discipline provides people with rules to live their lives efficiently and effectively. When you have discipline in your life you can make small sacrifices in the present for a better life in the future. Discipline creates habits, habits make routines, and routines become who you are daily.sdasda', '1659614842.jpg', '2022-08-04 06:07:22', '2022-08-04 06:07:22'),
(6, 'dfgdf', 'gdfgdfg', '1659864493.png', '2022-08-07 03:28:13', '2022-08-07 03:28:13');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_health_care_title_logos`
--

CREATE TABLE `ztl_health_care_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_health_care_title_logos`
--

INSERT INTO `ztl_health_care_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(10, 'Our Health Care', '1660387365.png', '2022-08-13 04:42:45', '2022-08-13 04:42:45');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_health_technology_frame_work_logos`
--

CREATE TABLE `ztl_health_technology_frame_work_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_health_technology_frame_work_logos`
--

INSERT INTO `ztl_health_technology_frame_work_logos` (`id`, `image`, `created_at`, `updated_at`) VALUES
(3, '1659614679.png', '2022-08-04 06:04:39', '2022-08-04 06:04:39'),
(4, '1659614684.jpg', '2022-08-04 06:04:44', '2022-08-04 06:04:44'),
(6, '1659614721.jpg', '2022-08-04 06:05:21', '2022-08-04 06:05:21'),
(7, '1659864395.png', '2022-08-07 03:26:27', '2022-08-07 03:26:35');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_how_we_works`
--

CREATE TABLE `ztl_how_we_works` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_how_we_works`
--

INSERT INTO `ztl_how_we_works` (`id`, `short_description`, `created_at`, `updated_at`) VALUES
(1, 'There are few pieces of content on your website that are more compelling than your mission, vision, values, and team. And all of these elements are typically found on the About page of your website.', '2022-08-13 03:54:29', '2022-08-13 03:55:15');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_job_applications`
--

CREATE TABLE `ztl_job_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emergency_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `highest_qualificiation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_employeer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience_from_year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience_from_month` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice_period` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cv` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_job_applications`
--

INSERT INTO `ztl_job_applications` (`id`, `name`, `email`, `phone`, `emergency_no`, `highest_qualificiation`, `current_employeer`, `experience_from_year`, `experience_from_month`, `notice_period`, `cv`, `created_at`, `updated_at`) VALUES
(2, 'undefined', 'rakib10ms@gmail.com', '01312275802', '01312275802', 'BSC', 'Zaimah', '2023', 'Spetember', '2', '1657953376.pdf', '2022-07-16 00:36:16', '2022-07-16 00:36:16'),
(4, 'undefined', 'jabedakhter@gmail.com', '01714131050', '01714131050', 'HH', 'dd', '2024', 'November', '1', '1658039196.pdf', '2022-07-17 00:26:36', '2022-07-17 00:26:36'),
(5, 'undefined', 'rakib10ms@gmail.com', '01312275802', '01312275802', 'BSC', 'asdas', '2023', 'October', '1', '1658055632.png', '2022-07-17 05:00:32', '2022-07-17 05:00:32'),
(6, 'undefined', 'rakibtech9@gmail.com', '01312275802', '01312275802', 'BSC', 'asdas', NULL, NULL, '2', '1659241805.png', '2022-07-30 22:30:05', '2022-07-30 22:30:05'),
(7, 'undefined', 'rakibtech9@gmail.com', '01312275802', '01312275802', 'BSC', 'sdfsd', NULL, NULL, '2', '1659242253.png', '2022-07-30 22:37:33', '2022-07-30 22:37:33'),
(8, 'undefined', 'sakib@gmail.com', '01778749543', '01312275802', 'dfgdf', 'Zaimah', NULL, NULL, '1 week', '1659242742.png', '2022-07-30 22:45:42', '2022-07-30 22:45:42'),
(9, 'undefined', 'rakibtech9@gmail.com', '01312275802', '01312275802', NULL, 'asdas', NULL, NULL, '1 week', '1659242939.png', '2022-07-30 22:48:59', '2022-07-30 22:48:59'),
(10, 'undefined', 'rakibtech9@gmail.com', '01778749543', '01312275802', 'BSC', 'asdas', NULL, NULL, '1 week', '1659252443.png', '2022-07-31 01:27:23', '2022-07-31 01:27:23'),
(11, 'undefined', 'sakib@gmail.com', '01778749573', '01778749573', 'BSC', 'Zaimah', NULL, NULL, '1 week', '1659326996.png', '2022-07-31 22:09:56', '2022-07-31 22:09:56'),
(12, 'undefined', 'rakib10ms@gmail.com', '01312275802', '01778749543', 'BSc', 'Zaimah', '6', 'October', 'immidiate', '1660385353.jpg', '2022-08-13 04:09:13', '2022-08-13 04:09:13'),
(13, 'undefined', 'rakib10ms@gmail.com', '01312275802', '01778749543', 'BSc asdas', 'asdas', '7', 'October', '2', '1660385563.png', '2022-08-13 04:12:43', '2022-08-13 04:12:43'),
(14, 'undefined', 'rakib10ms@gmail.com', 'dsf', 'd', NULL, NULL, '3', 'February', '1', '1660385684.png', '2022-08-13 04:14:44', '2022-08-13 04:14:44');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_job_descriptions`
--

CREATE TABLE `ztl_job_descriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_tittle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qualification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_description1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_description2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_requirements` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_responsibilites` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_post_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_job_descriptions`
--

INSERT INTO `ztl_job_descriptions` (`id`, `job_id`, `job_tittle`, `qualification`, `job_description1`, `job_description2`, `job_requirements`, `job_responsibilites`, `job_post_logo`, `created_at`, `updated_at`) VALUES
(7, 'Laravel-321', 'Laravel Developer', 'Bsc in cse', 'Lorem ipsum dollor sit Lorem ipsum dollor sitLorem ipsum dollor sit', 'Lorem ipsum dollor sit Lorem ipsum dollor sit', '<ul><li>laravel must&nbsp; be needed</li><li>asdasdas</li><li>sadasdas</li><li>asdasdasdasd\'</li><li>dfsfsdfs\'</li><li>dfsdf sd</li><li>dfgdfgdfg</li><li>dfgd</li><li>fgdf</li></ul><p><br></p>', '<ul><li>laravel must&nbsp; be needed</li><li>asdasdas</li><li>sadasdas</li><li>asdasdasdasd\'</li><li>dfsfsdfs\'</li><li>dfsdf sd</li><li>dfgdfgdfg</li><li>dfgd</li><li>fgdf</li></ul>', '1660119058.jpg', '2022-08-10 02:10:58', '2022-08-10 03:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_job_lists`
--

CREATE TABLE `ztl_job_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_tittle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_experience` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_post_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_job_lists`
--

INSERT INTO `ztl_job_lists` (`id`, `job_tittle`, `job_id`, `job_experience`, `job_status`, `job_post_logo`, `created_at`, `updated_at`) VALUES
(9, 'Laravel Developer', 'Laravel-321', 'N/A', 'Full Time', '1660116649.png', '2022-08-10 01:30:49', '2022-08-10 01:30:49'),
(10, 'Php Developer', '124-php', '10 Years', 'Contract', '1660393879.png', '2022-08-13 06:31:19', '2022-08-13 06:31:19');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_key_erp_technologies`
--

CREATE TABLE `ztl_key_erp_technologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_key_erp_technologies`
--

INSERT INTO `ztl_key_erp_technologies` (`id`, `short_description`, `created_at`, `updated_at`) VALUES
(1, 'Lorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry\'s \nstandard dummy text ever since the 1500s, when an unknown \nprinter took a galley of type and scrambled it to make a \ntype specimen book. It has survived not only five centuries, \nbut also the leap into electronic typesetting, \nremaining essentially unchanged.', '2022-08-06 01:18:28', '2022-08-06 01:21:36');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_key_health_care_technologies`
--

CREATE TABLE `ztl_key_health_care_technologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_key_health_care_technologies`
--

INSERT INTO `ztl_key_health_care_technologies` (`id`, `short_description`, `created_at`, `updated_at`) VALUES
(2, 'As a custom web application development company we offer a wide range of technologies to deliver exquisitely robust web app solutions for our clients. Along with core fundamental languages and technologies as Java, .Net and PHP, we use innovative frameworks to better serve our customers.', '2022-08-04 02:10:52', '2022-08-04 02:11:49');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_key_web_technologies`
--

CREATE TABLE `ztl_key_web_technologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_key_web_technologies`
--

INSERT INTO `ztl_key_web_technologies` (`id`, `short_description`, `created_at`, `updated_at`) VALUES
(23, 'As a custom web application development company we offer a wide range of technologies to deliver exquisitely robust web app solutions for our clients. Along with core fundamental languages and technologies as Java, .Net and PHP, we use innovative frameworks to better serve our customers.', '2022-08-03 04:16:05', '2022-08-03 05:14:30');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_landing_testimonials`
--

CREATE TABLE `ztl_landing_testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_landing_testimonials`
--

INSERT INTO `ztl_landing_testimonials` (`id`, `heading_name`, `heading_description`, `client_name`, `client_company_name`, `client_designation`, `client_image`, `created_at`, `updated_at`) VALUES
(1, 'I found ZaimahTech to be very enthusiastic and knowledgeable', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.', 'Mike Holder', 'Harlond inc', 'CEO', '1659509502.jpg', '2022-08-03 00:51:42', '2022-08-03 00:51:42'),
(2, 'If you\'re competitor-focused, you have to wait until there is a competitor doing something. .', 'Only madmen and fools are pleased with themselves; no wise man is good enough for his own satisfaction. Human life may be regarded as a succession of frontispieces. The way to be satisfied is never to look back. Be satisfied with your business, and learn to love what you were bred to.', 'Jabed Akter', 'Zaimah Technology ltd', 'Founder', '1659509622.jpg', '2022-08-03 00:53:42', '2022-08-03 00:53:42'),
(3, 'The basics of business is to stay as close as possible to your customers—understand their behavior patterns, etc', 'I really believe that it is possible to both improve customer satisfaction and reduce costs. Customer satisfaction with the service runs at more than 90 per cent.', 'Imran Hossain', 'WellDev', 'Manager', '1659509697.jpg', '2022-08-03 00:54:57', '2022-08-03 01:26:01'),
(4, 'sdfsdf', 'fsdfsd', 'fsdfsd', 'fsdfsdf', 'dsfsd', '34430unnamed.jpg', '2022-08-07 03:10:22', '2022-08-07 03:12:02');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_news`
--

CREATE TABLE `ztl_news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `news_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ztl_our_partners`
--

CREATE TABLE `ztl_our_partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_our_partners`
--

INSERT INTO `ztl_our_partners` (`id`, `image`, `created_at`, `updated_at`) VALUES
(6, '56164Screenshot (4).png', '2022-07-20 22:01:24', '2022-07-20 22:01:24'),
(7, '54633Screenshot (26).png', '2022-08-07 03:44:50', '2022-08-07 03:44:59'),
(8, '97932blockchain-logo-design-vector-28501721.jpg', '2022-08-08 04:01:18', '2022-08-08 04:01:18'),
(9, '3187d2f710ced4d06a94cd54d35401f5e609.png', '2022-08-08 04:54:22', '2022-08-08 04:54:22'),
(10, '82816images.png', '2022-08-08 04:54:29', '2022-08-08 04:54:29'),
(11, '27415219-2195660_software-mobile-applications-web-development-web-development-icon.png', '2022-08-08 04:55:02', '2022-08-08 04:55:02');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_our_partner_testimonials`
--

CREATE TABLE `ztl_our_partner_testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ztl_our_values_cards`
--

CREATE TABLE `ztl_our_values_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_our_values_cards`
--

INSERT INTO `ztl_our_values_cards` (`id`, `title`, `short_description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'values card title updtaed', 'values card short description updated', '51498istockphoto-1266883438-612x612.jpg', '2022-08-13 03:08:52', '2022-08-13 03:09:59'),
(2, 'ewrew', 'dsfsdf sdfe adf dsfsad   sdafsdaaaa       sdafsdasdf', '1660381820.png', '2022-08-13 03:10:20', '2022-08-13 03:10:20'),
(3, 'ytutyuty', 'asdasdas adsadasdasdasd adwqeqwec adawda f', '1660381833.png', '2022-08-13 03:10:33', '2022-08-13 03:10:33'),
(4, 'qwrqwer', 'qqwqwe vqe', '1660381841.png', '2022-08-13 03:10:41', '2022-08-13 03:10:41'),
(5, 'tw3rwe', 'adew weq', '1660381849.jpg', '2022-08-13 03:10:49', '2022-08-13 03:10:49'),
(6, 'reye', 'rdsfgfsdefasdf', '1660382413.jpg', '2022-08-13 03:20:13', '2022-08-13 03:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_our_world_wide_projects`
--

CREATE TABLE `ztl_our_world_wide_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_our_world_wide_projects`
--

INSERT INTO `ztl_our_world_wide_projects` (`id`, `category`, `title`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Logistics', 'asdasd', '16601341980b6059ca12f551a50852b0a4946125890.png', '2022-08-10 06:09:35', '2022-08-10 06:23:18'),
(3, 'Healthcare', 'Macrohealth Plus', '1660134391.jpg', '2022-08-10 06:26:31', '2022-08-10 06:26:31'),
(4, 'Legal & Law', 'Web Development', '1660134406.jpeg', '2022-08-10 06:26:46', '2022-08-10 06:26:46'),
(5, 'IoT', 'Iot Projects', '1660134421.jpg', '2022-08-10 06:27:01', '2022-08-10 06:27:01'),
(6, 'FinTech', 'Legal and low', '1660134526.jpg', '2022-08-10 06:28:46', '2022-08-10 06:28:46'),
(7, 'Others', 'Rio Da Vamos', '1660194434.png', '2022-08-10 23:07:14', '2022-08-10 23:07:14');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_partners`
--

CREATE TABLE `ztl_partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `partner_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_partners`
--

INSERT INTO `ztl_partners` (`id`, `first_name`, `last_name`, `email`, `phone`, `customer_type`, `description`, `partner_type`, `country`, `job_title`, `notification`, `created_at`, `updated_at`) VALUES
(3, 'qweqw', 'asdeas', 'r@gmail.com', '01404524', '1', 'asdasdadas', 'owner', 'Dhaka', 'owner', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ztl_partner_title_logos`
--

CREATE TABLE `ztl_partner_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_partner_title_logos`
--

INSERT INTO `ztl_partner_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Our Partner Title Logos', '91278pexels-photo-574071.jpeg', '2022-08-08 06:20:01', '2022-08-08 06:20:26');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_portfolio_products`
--

CREATE TABLE `ztl_portfolio_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `option` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_portfolio_products`
--

INSERT INTO `ztl_portfolio_products` (`id`, `title`, `category`, `option`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Complete Vision', 'E-Commerce', 'By Industries', '16602136040download.png', '2022-08-11 04:21:39', '2022-08-11 04:26:44'),
(3, 'LOlo', 'Django', 'By Technologies', '1660213650.jpg', '2022-08-11 04:27:30', '2022-08-11 04:27:30'),
(4, 'aeras', 'Logistics', 'By Industries', '1660213660.png', '2022-08-11 04:27:40', '2022-08-11 04:27:40'),
(6, 'sdfsdf', 'Asp.Net', 'By Technologies', '1660213676.jpg', '2022-08-11 04:27:56', '2022-08-11 04:27:56'),
(7, 'ewrwerew', 'IoT', 'By Industries', '1660213691.webp', '2022-08-11 04:28:11', '2022-08-11 04:28:11'),
(8, '4dsfsdf', 'Others', 'By Industries', '1660213703.png', '2022-08-11 04:28:23', '2022-08-11 04:28:23'),
(9, 't5tgdfgxdf', 'IoT', 'By Industries', '1660213713.png', '2022-08-11 04:28:33', '2022-08-11 04:28:33'),
(10, 'thrtfhgh', 'E-Commerce', 'By Industries', '1660213723.jpg', '2022-08-11 04:28:43', '2022-08-11 04:28:43'),
(11, 'dfgdfg', 'Django', 'By Technologies', '1660213735.png', '2022-08-11 04:28:55', '2022-08-11 04:28:55'),
(12, 'dfgdfgd', 'Python', 'By Technologies', '1660213751.jpg', '2022-08-11 04:29:11', '2022-08-11 04:29:11'),
(13, 'zfsasdfasf', 'React Native', 'By Technologies', '1660213793.jpg', '2022-08-11 04:29:53', '2022-08-11 04:29:53'),
(14, 'rgdfgvdf', 'Legal & Law', 'By Industries', '1660213803.jpeg', '2022-08-11 04:30:03', '2022-08-11 04:30:03'),
(15, 'cfvxcv', 'Javascript', 'By Technologies', '1660393157.png', '2022-08-13 06:19:17', '2022-08-13 06:19:17');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_product_title_logos`
--

CREATE TABLE `ztl_product_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_product_title_logos`
--

INSERT INTO `ztl_product_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Our Products', '976641dc975102390537.5f354c4a8dc2c.jpg', '2022-08-11 03:04:55', '2022-08-11 03:06:32');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_recruitment_processes`
--

CREATE TABLE `ztl_recruitment_processes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `process_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `process_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_recruitment_processes`
--

INSERT INTO `ztl_recruitment_processes` (`id`, `process_name`, `process_description`, `created_at`, `updated_at`) VALUES
(1, 'Hiring Process', 'Recruitment process is a process of identifying the jobs vacancy, analyzing the job requirements, reviewing applications, screening, shortlisting and selecting the right candidate.', '2022-07-21 05:15:49', '2022-08-06 05:48:23'),
(2, 'What is meant by RPO?', 'Recruitment process outsourcing (RPO) involves an employer turning the responsibility of finding potential job candidates over to a third-party service provider.', '2022-08-06 05:48:59', '2022-08-06 05:48:59'),
(3, 'What is RTO vs RPO?', 'These are the Recovery Time Objective (RTO) and Recovery Point Objective (RPO). RTO is the goal your organization sets for the maximum length of time it should take to restore normal operations following an outage or data loss.', '2022-08-06 05:50:12', '2022-08-06 05:50:12'),
(4, 'Last Viva', 'Now 40th BCS Viva Result For Professional Viva Result Will be Announced 30 March 2022.adsdsdsds', '2022-08-06 05:50:55', '2022-08-06 05:50:55');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_service_descriptions`
--

CREATE TABLE `ztl_service_descriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_service_descriptions`
--

INSERT INTO `ztl_service_descriptions` (`id`, `short_description`, `created_at`, `updated_at`) VALUES
(11, 'We had started software design & development in mind but with the time the canvas is widened as full IT solution company.\n\nWe are strategists, designers, producers, technologists and visioners who share a passion for creating innovative ideas and transforming them into real life engaging user experiences, meaningful relationship with business and consumer.', '2022-08-02 23:01:51', '2022-08-02 23:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_service_logos`
--

CREATE TABLE `ztl_service_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_service_logos`
--

INSERT INTO `ztl_service_logos` (`id`, `service_logo`, `created_at`, `updated_at`) VALUES
(26, '1659503247.jpg', '2022-08-02 23:07:27', '2022-08-02 23:07:27'),
(27, '1659503252.png', '2022-08-02 23:07:32', '2022-08-02 23:07:32'),
(28, '1659503260.jpg', '2022-08-02 23:07:40', '2022-08-02 23:07:40'),
(29, '1659503266.jpg', '2022-08-02 23:07:46', '2022-08-02 23:07:46'),
(30, '1659503271.webp', '2022-08-02 23:07:51', '2022-08-02 23:07:51'),
(31, '1659503275.jpg', '2022-08-02 23:07:55', '2022-08-02 23:07:55'),
(34, '1659862440.jpg', '2022-08-07 02:54:00', '2022-08-07 02:54:00');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_service_types`
--

CREATE TABLE `ztl_service_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_service_types`
--

INSERT INTO `ztl_service_types` (`id`, `service_name`, `short_description`, `service_logo`, `created_at`, `updated_at`) VALUES
(19, 'Mobile App Development', 'Get top-notch mobile applications that run on multiple platforms costs while providing your users with an app that fits their OS. Use this alternative to reduce costs and time-to-market and to reach more users without loss of quality, including.Using the latest technologies, we help businesses establish their presence on any modern device and platform, including:', '1659504230.png', '2022-08-02 23:23:50', '2022-08-02 23:23:50'),
(20, 'UI/UX Design', 'The UI UX Designer gathers and evaluates user requirements in collaboration with Product Managers. They use their skills to illustrate design ideas using storyboards, process flows, or sitemaps. They also design graphic user interface elements like menus tab widgets.', '1659504270.png', '2022-08-02 23:24:30', '2022-08-02 23:24:30'),
(21, 'QA & Testing', 'What Does a QA Tester Do? Quality assurance (QA) testers play a critical role in delivering high quality, perfectly-functioning software and web applications to customers. They test and evaluate new and existing programs to identify and help remove bugs, glitches, and other user experience issues', '1659504301.png', '2022-08-02 23:25:01', '2022-08-02 23:25:01'),
(22, 'dsfsd', 'sdfsd', '1659862956.png', '2022-08-07 03:02:36', '2022-08-07 03:02:36');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_technology_index_logos`
--

CREATE TABLE `ztl_technology_index_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `technology_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_technology_index_logos`
--

INSERT INTO `ztl_technology_index_logos` (`id`, `technology_logo`, `created_at`, `updated_at`) VALUES
(1, '1659506276.png', '2022-08-02 23:57:56', '2022-08-02 23:57:56'),
(3, '1659506840.jpg', '2022-08-03 00:07:20', '2022-08-03 00:07:20'),
(4, '1659506849.png', '2022-08-03 00:07:29', '2022-08-03 00:07:29'),
(5, '1659506869.png', '2022-08-03 00:07:49', '2022-08-03 00:07:49'),
(7, '1659863224.png', '2022-08-07 03:07:04', '2022-08-07 03:07:04');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_technology_indices`
--

CREATE TABLE `ztl_technology_indices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `heading_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heading_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_technology_indices`
--

INSERT INTO `ztl_technology_indices` (`id`, `heading_name`, `heading_description`, `created_at`, `updated_at`) VALUES
(3, 'We Deliver Solution with the Goal of Trusting Relationships', 'We carry more than just good coding skills. Our experience makes us stand out from other web development. We carry more than just good coding skills. Our experience makes us stand out from other web development. We carry more than just good coding skills. Our experience makes us stand out from other web development. We carry more than', '2022-08-02 04:59:10', '2022-08-02 04:59:35');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_development_cards`
--

CREATE TABLE `ztl_web_development_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_development_cards`
--

INSERT INTO `ztl_web_development_cards` (`id`, `title`, `short_description`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', 'Zaimah Technology back-end development team comprises 250+ full-time engineers working for companies across multiple domains. For the past 20+ years, \n\nLearn More', '2022-08-02 05:30:46', '2022-08-03 05:11:28'),
(2, 'Web Development', 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website', '2022-08-03 02:14:57', '2022-08-03 05:07:25');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_development_faqs`
--

CREATE TABLE `ztl_web_development_faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `faq_qtn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_ans` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_development_faqs`
--

INSERT INTO `ztl_web_development_faqs` (`id`, `faq_qtn`, `faq_ans`, `created_at`, `updated_at`) VALUES
(1, 'Contrary to popular belief, Lorem Ipsum is not simply random text Ipsum um is not simply random text Ipsum', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin litera has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.d.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.', '2022-08-02 06:12:41', '2022-08-03 06:00:47'),
(2, 'what is laravel', 'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony', '2022-08-03 06:01:09', '2022-08-03 06:01:09'),
(3, 'what is competitive programming', 'The aim of competitive programming is to write source code of computer programs which are able to solve given problems. A vast majority of problems appearing in programming contests are mathematical or logical in nature.', '2022-08-03 06:01:30', '2022-08-03 06:01:30');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_development_faq_images`
--

CREATE TABLE `ztl_web_development_faq_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_development_faq_images`
--

INSERT INTO `ztl_web_development_faq_images` (`id`, `image`, `created_at`, `updated_at`) VALUES
(22, '1659863939.png', '2022-08-07 03:18:59', '2022-08-07 03:18:59');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_development_projects`
--

CREATE TABLE `ztl_web_development_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `technologies` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_development_projects`
--

INSERT INTO `ztl_web_development_projects` (`id`, `project_name`, `technologies`, `created_at`, `updated_at`) VALUES
(3, 'Clinical Management System', '<ul><li>JavaScript</li><li>Node.JS</li><li>React.JS</li><li>PHP</li><li>Laravel</li><li>Fluter</li><li>MySQL</li><li>MongoDB</li></ul>', '2022-08-02 05:56:32', '2022-08-02 05:56:32'),
(4, 'BCLC Project', '<ul><li>Php&nbsp;</li><li>Laravel</li><li>Javascript</li><li>Html</li><li>CSS</li><li>Bootstrap</li></ul>', '2022-08-03 23:17:45', '2022-08-03 23:17:45'),
(5, 'MacroHealthPlus', '<ul><li>Laravel&nbsp;</li><li>React js&nbsp;</li><li>Vue js</li><li>Django</li><li>Node JS</li><li>Api</li><li>Bootstrap</li><li>Sass</li></ul>', '2022-08-04 06:18:14', '2022-08-04 06:18:14'),
(6, 'Ayeener Gurukul', '<ul><li>Html&nbsp;</li><li>Css&nbsp;</li><li>Javascript</li><li>Bootstrap</li><li>Node Js</li><li>MongoDB</li><li>Material UI</li></ul>', '2022-08-04 06:20:46', '2022-08-04 06:20:46');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_development_title_logos`
--

CREATE TABLE `ztl_web_development_title_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_development_title_logos`
--

INSERT INTO `ztl_web_development_title_logos` (`id`, `title_name`, `image`, `created_at`, `updated_at`) VALUES
(7, 'Web Development Services', '72823Screenshot (23).png', '2022-08-07 03:13:55', '2022-08-11 00:19:32');

-- --------------------------------------------------------

--
-- Table structure for table `ztl_web_technology_frame_work_logos`
--

CREATE TABLE `ztl_web_technology_frame_work_logos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ztl_web_technology_frame_work_logos`
--

INSERT INTO `ztl_web_technology_frame_work_logos` (`id`, `image`, `created_at`, `updated_at`) VALUES
(7, '1659523691.png', '2022-08-03 04:48:11', '2022-08-03 04:48:11'),
(9, '1659523709.png', '2022-08-03 04:48:29', '2022-08-03 04:48:29'),
(11, '1659525309.png', '2022-08-03 05:15:09', '2022-08-03 05:15:09'),
(12, '1659525314.jpg', '2022-08-03 05:15:14', '2022-08-03 05:15:14'),
(13, '1659525319.jpg', '2022-08-03 05:15:19', '2022-08-03 05:15:19'),
(16, '1659863893.png', '2022-08-07 03:18:13', '2022-08-07 03:18:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `r_d_work_items`
--
ALTER TABLE `r_d_work_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `ztlfaq_images`
--
ALTER TABLE `ztlfaq_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_about_us_missions`
--
ALTER TABLE `ztl_about_us_missions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_about_us_mission_vissions`
--
ALTER TABLE `ztl_about_us_mission_vissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_about_us_title_logos`
--
ALTER TABLE `ztl_about_us_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_about_us_vissions`
--
ALTER TABLE `ztl_about_us_vissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_become_a_partner_title_logos`
--
ALTER TABLE `ztl_become_a_partner_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_career_title_logos`
--
ALTER TABLE `ztl_career_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_consultations`
--
ALTER TABLE `ztl_consultations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_contact_us`
--
ALTER TABLE `ztl_contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_counters`
--
ALTER TABLE `ztl_counters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_custom_erp_solutions`
--
ALTER TABLE `ztl_custom_erp_solutions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_erp_solution_cards`
--
ALTER TABLE `ztl_erp_solution_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_erp_solution_title_logos`
--
ALTER TABLE `ztl_erp_solution_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_erp_technology_frame_work_logos`
--
ALTER TABLE `ztl_erp_technology_frame_work_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_faqs`
--
ALTER TABLE `ztl_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_headings`
--
ALTER TABLE `ztl_headings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_health_care_cards`
--
ALTER TABLE `ztl_health_care_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_health_care_solution_cards`
--
ALTER TABLE `ztl_health_care_solution_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_health_care_title_logos`
--
ALTER TABLE `ztl_health_care_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_health_technology_frame_work_logos`
--
ALTER TABLE `ztl_health_technology_frame_work_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_how_we_works`
--
ALTER TABLE `ztl_how_we_works`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_job_applications`
--
ALTER TABLE `ztl_job_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_job_descriptions`
--
ALTER TABLE `ztl_job_descriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_job_lists`
--
ALTER TABLE `ztl_job_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_key_erp_technologies`
--
ALTER TABLE `ztl_key_erp_technologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_key_health_care_technologies`
--
ALTER TABLE `ztl_key_health_care_technologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_key_web_technologies`
--
ALTER TABLE `ztl_key_web_technologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_landing_testimonials`
--
ALTER TABLE `ztl_landing_testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_news`
--
ALTER TABLE `ztl_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_our_partners`
--
ALTER TABLE `ztl_our_partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_our_partner_testimonials`
--
ALTER TABLE `ztl_our_partner_testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_our_values_cards`
--
ALTER TABLE `ztl_our_values_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_our_world_wide_projects`
--
ALTER TABLE `ztl_our_world_wide_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_partners`
--
ALTER TABLE `ztl_partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_partner_title_logos`
--
ALTER TABLE `ztl_partner_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_portfolio_products`
--
ALTER TABLE `ztl_portfolio_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_product_title_logos`
--
ALTER TABLE `ztl_product_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_recruitment_processes`
--
ALTER TABLE `ztl_recruitment_processes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_service_descriptions`
--
ALTER TABLE `ztl_service_descriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_service_logos`
--
ALTER TABLE `ztl_service_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_service_types`
--
ALTER TABLE `ztl_service_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_technology_index_logos`
--
ALTER TABLE `ztl_technology_index_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_technology_indices`
--
ALTER TABLE `ztl_technology_indices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_development_cards`
--
ALTER TABLE `ztl_web_development_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_development_faqs`
--
ALTER TABLE `ztl_web_development_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_development_faq_images`
--
ALTER TABLE `ztl_web_development_faq_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_development_projects`
--
ALTER TABLE `ztl_web_development_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_development_title_logos`
--
ALTER TABLE `ztl_web_development_title_logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ztl_web_technology_frame_work_logos`
--
ALTER TABLE `ztl_web_technology_frame_work_logos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT for table `r_d_work_items`
--
ALTER TABLE `r_d_work_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `ztlfaq_images`
--
ALTER TABLE `ztlfaq_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ztl_about_us_missions`
--
ALTER TABLE `ztl_about_us_missions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_about_us_mission_vissions`
--
ALTER TABLE `ztl_about_us_mission_vissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_about_us_title_logos`
--
ALTER TABLE `ztl_about_us_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_about_us_vissions`
--
ALTER TABLE `ztl_about_us_vissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_become_a_partner_title_logos`
--
ALTER TABLE `ztl_become_a_partner_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_career_title_logos`
--
ALTER TABLE `ztl_career_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_consultations`
--
ALTER TABLE `ztl_consultations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ztl_contact_us`
--
ALTER TABLE `ztl_contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ztl_counters`
--
ALTER TABLE `ztl_counters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_custom_erp_solutions`
--
ALTER TABLE `ztl_custom_erp_solutions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ztl_erp_solution_cards`
--
ALTER TABLE `ztl_erp_solution_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_erp_solution_title_logos`
--
ALTER TABLE `ztl_erp_solution_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_erp_technology_frame_work_logos`
--
ALTER TABLE `ztl_erp_technology_frame_work_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ztl_faqs`
--
ALTER TABLE `ztl_faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ztl_headings`
--
ALTER TABLE `ztl_headings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `ztl_health_care_cards`
--
ALTER TABLE `ztl_health_care_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_health_care_solution_cards`
--
ALTER TABLE `ztl_health_care_solution_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ztl_health_care_title_logos`
--
ALTER TABLE `ztl_health_care_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ztl_health_technology_frame_work_logos`
--
ALTER TABLE `ztl_health_technology_frame_work_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ztl_how_we_works`
--
ALTER TABLE `ztl_how_we_works`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_job_applications`
--
ALTER TABLE `ztl_job_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `ztl_job_descriptions`
--
ALTER TABLE `ztl_job_descriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ztl_job_lists`
--
ALTER TABLE `ztl_job_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ztl_key_erp_technologies`
--
ALTER TABLE `ztl_key_erp_technologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_key_health_care_technologies`
--
ALTER TABLE `ztl_key_health_care_technologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ztl_key_web_technologies`
--
ALTER TABLE `ztl_key_web_technologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `ztl_landing_testimonials`
--
ALTER TABLE `ztl_landing_testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ztl_news`
--
ALTER TABLE `ztl_news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ztl_our_partners`
--
ALTER TABLE `ztl_our_partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ztl_our_partner_testimonials`
--
ALTER TABLE `ztl_our_partner_testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ztl_our_values_cards`
--
ALTER TABLE `ztl_our_values_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ztl_our_world_wide_projects`
--
ALTER TABLE `ztl_our_world_wide_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ztl_partners`
--
ALTER TABLE `ztl_partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ztl_partner_title_logos`
--
ALTER TABLE `ztl_partner_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_portfolio_products`
--
ALTER TABLE `ztl_portfolio_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `ztl_product_title_logos`
--
ALTER TABLE `ztl_product_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ztl_recruitment_processes`
--
ALTER TABLE `ztl_recruitment_processes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ztl_service_descriptions`
--
ALTER TABLE `ztl_service_descriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ztl_service_logos`
--
ALTER TABLE `ztl_service_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `ztl_service_types`
--
ALTER TABLE `ztl_service_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `ztl_technology_index_logos`
--
ALTER TABLE `ztl_technology_index_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ztl_technology_indices`
--
ALTER TABLE `ztl_technology_indices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_web_development_cards`
--
ALTER TABLE `ztl_web_development_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ztl_web_development_faqs`
--
ALTER TABLE `ztl_web_development_faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ztl_web_development_faq_images`
--
ALTER TABLE `ztl_web_development_faq_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `ztl_web_development_projects`
--
ALTER TABLE `ztl_web_development_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ztl_web_development_title_logos`
--
ALTER TABLE `ztl_web_development_title_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ztl_web_technology_frame_work_logos`
--
ALTER TABLE `ztl_web_technology_frame_work_logos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
