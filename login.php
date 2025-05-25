<?php
require 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        echo "<script>
                alert('Username dan password harus diisi!');
                window.history.back();
              </script>";
        exit;
    }

    // Cek berdasarkan username
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user['password'])) {
            session_start(); // Tambahkan ini!
            $_SESSION['username'] = $user['username']; // Simpan username ke session
        
            header("Location: dashboard.php"); // atau profile.html kalau mau langsung ke situ
            exit;
        } else {
            // Password salah
            echo "<script>
                    alert('Password salah!');
                    window.history.back();
                  </script>";
            exit;
        }
    } else {
        // Username tidak ditemukan
        echo "<script>
                alert('Username tidak ditemukan!');
                window.history.back();
              </script>";
        exit;
    }

    $stmt->close();
}

$conn->close();
?>
