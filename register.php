<?php
require 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = trim($_POST["first_name"]);
    $lastName = trim($_POST["last_name"]);
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (empty($firstName) || empty($lastName) || empty($username) || empty($email) || empty($password)) {
        echo "<script>
                alert('Semua field harus diisi!');
                window.history.back();
              </script>";
        exit;
    }

    // Cek apakah email sudah terdaftar
    $checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    // Cek apakah username sudah terdaftar
    $checkUsername = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $checkUsername->bind_param("s", $username);
    $checkUsername->execute();
    $checkUsername->store_result();

    if ($checkEmail->num_rows > 0) {
        echo "<script>
                alert('Email sudah terdaftar. Silakan gunakan email lain.');
                window.history.back();
              </script>";
        exit;
    }

    if ($checkUsername->num_rows > 0) {
        echo "<script>
                alert('Username sudah terdaftar. Silakan gunakan username lain.');
                window.history.back();
              </script>";
        exit;
    }

    // Enkripsi password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Gabungkan nama lengkap
    $fullName = $firstName . ' ' . $lastName;

    // Simpan ke database
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, name, username, email, password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstName, $lastName, $fullName, $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        header("Location: login.html"); // Registrasi berhasil, arahkan ke login tanpa pop-up
        exit;
    } else {
        echo "<script>
                alert('Terjadi kesalahan saat menyimpan data!');
                window.history.back();
              </script>";
        exit;
    }

    $stmt->close();
}

$conn->close();
?>
