-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-03-2023 a las 20:47:22
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

CREATE DATABASE 'crudnodejsmysql';

CREATE TABLE `user` (
  `ID` int(4) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `DIRECCION` varchar(80) NOT NULL,
  `TELEFONO` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);
ALTER TABLE `user`
  MODIFY `ID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;