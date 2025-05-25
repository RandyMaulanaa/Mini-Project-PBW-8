<?php
session_start();

// Pastikan pengguna sudah login
if (!isset($_SESSION['username'])) {
    echo json_encode(['success' => false, 'message' => 'Harus login terlebih dahulu.']);
    exit;
}

$sessionUsername = $_SESSION['username'];

// Koneksi ke database
require 'koneksi.php';

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Koneksi database gagal.']);
    exit;
}

// Ambil data pengguna berdasarkan username
$stmt = $conn->prepare("SELECT full_name, username, email FROM users WHERE username = ?");
$stmt->bind_param("s", $sessionUsername);
$stmt->execute();
$stmt->bind_result($fullName, $fetchedUsername, $email);
$stmt->fetch();
$stmt->close();

if (!$fullName || !$fetchedUsername || !$email) {
    echo json_encode(['success' => false, 'message' => 'Data pengguna tidak ditemukan.']);
    exit;
}

echo json_encode([
    'success' => true,
    'data' => [
        'full_name' => $fullName,
        'username' => $fetchedUsername,
        'email' => $email
    ]
]);

$conn->close();
?>
