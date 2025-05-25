<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "login_db"; // Pastikan nama database sesuai

// Buat koneksi
$conn = new mysqli($host, $user, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
