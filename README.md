# Mini-Project-PBW-8

Anggota:
1. Randy Maulana -2308107010054
2. 
3. 
4. 



kita membuat database dulu dengan nama (login_db) dengan query

CREATE DATABASE IF NOT EXISTS login_db;

USE login_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL
);

