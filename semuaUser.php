<?php
require 'koneksi.php';

// Reset auto-increment ke 1
$conn->query("ALTER TABLE users AUTO_INCREMENT = 1");

// Ambil semua pengguna
$users = [];
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Hapus user dan reset ID
if (isset($_GET['delete'])) {
    $deleteId = (int)$_GET['delete'];

    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $deleteId);
    $stmt->execute();
    $stmt->close();

    // Reorder ID
    $result = $conn->query("SELECT * FROM users ORDER BY id ASC");
    $newId = 1;
    while ($row = $result->fetch_assoc()) {
        $updateStmt = $conn->prepare("UPDATE users SET id = ? WHERE id = ?");
        $updateStmt->bind_param("ii", $newId, $row['id']);
        $updateStmt->execute();
        $updateStmt->close();
        $newId++;
    }

    header("Location: semuaUser.php");
    exit;
}

// Tambah user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["add_user"])) {
    $name = trim($_POST["name"]);
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if ($name && $username && $email && $password) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $username, $email, $hashedPassword);
        $stmt->execute();
        $stmt->close();
        header("Location: semuaUser.php");
        exit;
    }
}

// Update user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update_id"])) {
    $id = (int)$_POST["update_id"];
    $name = trim($_POST["name"]);
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if ($name && $username && $email && $password) {
        // Jika password diubah, hash password baru
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        // Query untuk memperbarui data pengguna
        $stmt = $conn->prepare("UPDATE users SET name = ?, username = ?, email = ?, password = ? WHERE id = ?");
        $stmt->bind_param("ssssi", $name, $username, $email, $hashedPassword, $id);
        $stmt->execute();
        $stmt->close();

        // Redirect kembali setelah pembaruan
        header("Location: semuaUser.php");
        exit;
    } else {
        echo "Semua field harus diisi.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Semua Pengguna</title>
    <link rel="stylesheet" href="semuaUser.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

</head>
<body>
<div class="sidebar">
    <div class="logo">
        <h1>Tugas<span>In</span></h1>
    </div>
    <ul class="menu">
    <li><a href="admin.html" class="active"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span></a></li>
        <li><a href="admin.html"><i class="fas fa-tasks"></i> <span>Proyek</span></a></li>
        <li><a href="admin.html"><i class="fas fa-clipboard-list"></i> <span>Tugas</span></a></li>
        <li><a href="addAdmin.html"><i class="fas fa-users"></i> <span>Pengguna</span></a></li>
        <li><a href="admin.html"><i class="fas fa-chart-pie"></i> <span>Laporan</span></a></li>
        <li><a href="admin.html"><i class="fas fa-cog"></i> <span>Pengaturan</span></a></li>
        <li><a href="semuaUser.php"><i class="fas fa-user nav-icon"></i> <span>Semua User</span></a></li>
        <li><a href="login.html"><i class="fas fa-sign-out-alt"></i> <span>Keluar</span></a></li>
    </ul>
</div>

<div class="main-content">
    <h1>Semua Pengguna</h1>

    <?php if (isset($_GET['add'])): ?>
        <form method="POST" class="user-form" style="margin-bottom: 20px;">
            <input type="text" name="name" placeholder="Nama Lengkap" required>
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" name="add_user">Simpan</button>
            <a href="semuaUser.php" class="cancel-button">Batal</a>
        </form>
    <?php else: ?>
        <a href="semuaUser.php?add=1" class="add-button" style="display: inline-block; margin-bottom: 20px; background-color: #4CAF50; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px;">+ Tambah</a>
    <?php endif; ?>

    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Tindakan</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach ($users as $user): ?>
            <?php if (isset($_GET['edit']) && $_GET['edit'] == $user['id']): ?>
                <tr>
                    <form method="POST">
                        <td><?= $user['id'] ?></td>
                        <td><input type="text" name="name" value="<?= htmlspecialchars($user['name']) ?>"></td>
                        <td><input type="text" name="username" value="<?= htmlspecialchars($user['username']) ?>"></td>
                        <td><input type="text" name="email" value="<?= htmlspecialchars($user['email']) ?>"></td>
                        <td><input type="password" name="password" value=""></td>
                        <td>
                            <input type="hidden" name="update_id" value="<?= $user['id'] ?>">
                            <button type="submit">Simpan</button>
                            <a href="semuaUser.php">Batal</a>
                        </td>
                    </form>
                </tr>
            <?php else: ?>
                <tr>
                    <td><?= $user['id'] ?></td>
                    <td><?= htmlspecialchars($user['name']) ?></td>
                    <td><?= htmlspecialchars($user['username']) ?></td>
                    <td><?= htmlspecialchars($user['email']) ?></td>
                    <td><?= htmlspecialchars($user['password']) ?></td>
                    <td>
                        <a href="semuaUser.php?edit=<?= $user['id'] ?>">Edit</a> | 
                        <a href="semuaUser.php?delete=<?= $user['id'] ?>" onclick="return confirm('Hapus pengguna ini?')">Hapus</a>
                    </td>
                </tr>
            <?php endif; ?>
        <?php endforeach; ?>
        </tbody>
    </table>
</div>
</body>
</html>
