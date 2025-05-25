# Mini-Project-PBW-8

Anggota:
1. Randy Maulana -2308107010054
2. 
3. 
4. 



kami membuat project dengan bahasa pemrograman html, css, java script, di ikuti dengan php untuk mengelola data dan koneksi ke database
kami membuat database dulu dengan nama (login_db) dengan query

CREATE DATABASE IF NOT EXISTS login_db;

USE login_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL
);
ini sebagai gambaran database yang di buat dengan value yang udah di input dari registrasi user:
![image](https://github.com/user-attachments/assets/26466bcb-adfd-4612-9555-de4e9272acf2)


