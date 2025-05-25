<?php
session_start();
require 'koneksi.php';

// Ambil data yang diubah dari form
$new_username = $_POST['username'];
$new_email = $_POST['email'];
$new_fullname = $_POST['fullname'];

// Ambil username lama dari session
$old_username = $_SESSION['username'];

// Siapkan query untuk memperbarui data pengguna
$stmt = $conn->prepare("UPDATE users SET username = ?, email = ?, name = ? WHERE username = ?");
$stmt->bind_param("ssss", $new_username, $new_email, $new_fullname, $old_username);

// Eksekusi query
if ($stmt->execute()) {
    // Jika update berhasil, perbarui session dengan username baru
    $_SESSION['username'] = $new_username;

    // Redirect ke halaman profil dengan pesan sukses
    header("Location: profile.php?update=success");
    exit();
} else {
    // Jika ada error
    echo "Gagal memperbarui profil.";
    exit();
}

$stmt->close();
$conn->close();
?>
