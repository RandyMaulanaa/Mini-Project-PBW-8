<?php
session_start();


// Jika ada parameter logout di URL, lakukan logout
if (isset($_GET['logout'])) {
    session_unset(); // Menghapus semua session variables
    session_destroy(); // Menghancurkan session
    header('Location: login.html'); // Redirect ke halaman login setelah logout
    exit();
}

// Pastikan pengguna sudah login, jika tidak redirect ke login
if (!isset($_SESSION['username'])) {
    header('Location: login.html');
    exit();
}
// Ambil nama pengguna dari session
$user_name = $_SESSION['username'];

// Ambil dua huruf pertama dari nama pengguna
$initials = strtoupper(substr($user_name, 0, 2));  // Ambil dua huruf pertama dan ubah jadi huruf kapital


require 'koneksi.php';
$username = $_SESSION['username']; // Menggunakan username yang sudah diperbarui dari session

$stmt = $conn->prepare("SELECT first_name, last_name, name, username, email FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user_data = $result->fetch_assoc();
    $full_name = $user_data['first_name'] . ' ' . $user_data['last_name'];
} else {
    echo "Data pengguna tidak ditemukan.";
    exit();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Pengguna - TugasIn</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>
    <div class="container">
        <!-- Sidebar -->
        <nav class="sidebar">
            <div class="logo">
                <h1>Tugas<span>In</span>.</h1>
            </div>
            <ul class="nav-links">
                <li><a href="dashboard.php"><i class="fas fa-home"></i> Dashboard</a></li>
                <li><a href="dashboard.php"><i class="fas fa-project-diagram"></i> Proyek</a></li>
                <li><a href="dashboard.php"><i class="fas fa-tasks"></i> Tugas</a></li>
                <li><a href="dashboard.php"><i class="far fa-calendar"></i> Kalender</a></li>
                <li><a href="dashboard.php"><i class="fas fa-chart-bar"></i> Laporan</a></li>
                <li class="active"><a href="profile.php"><i class="fas fa-user"></i> Profil</a></li>
                <li><a href="dashboard.php"><i class="fas fa-cog"></i> Pengaturan</a></li>
            </ul>
            <div class="logout">
                <a href="?logout=true"><i class="fas fa-sign-out-alt"></i> Keluar</a>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="main-content">
            <div class="page-header">
                <h2>Ubah Profil</h2>
            </div>

            <!-- Profile Section -->
            <section class="profile-section">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <!-- <img src="https://ui-avatars.com/api/?name=Programmer&background=6246ea&color=fff&size=100" alt="Profile Picture"> -->
                            <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($initials); ?>&background=0D8ABC&color=fff&size=100" alt="Avatar" style="border: 2px solid black; border-radius: 50%;">


                        </div>
                        <div class="profile-info">
                            <h3>Informasi Profil</h3>
                            <p>Perbarui informasi profil dan alamat email Anda</p>
                        </div>
                    </div>

                    <div class="card card-profile">
                        <h3>Informasi Personal</h3>
                        <p class="section-description">Informasi dasar tentang akun Anda</p>

                        <form id="profile-form" method="POST" action="update_profile.php">
                            <div id="error-message" style="display: none;" class="alert alert-danger"></div>
                            <div id="success-message" style="display: none;" class="alert alert-success"></div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="fullname">Nama Lengkap</label>
                                    <input type="text" id="fullname" name="fullname" value="<?= $user_data['name'] ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" name="username" value="<?= $user_data['username'] ?>" required>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" value="<?= $user_data['email'] ?>" required>
                                </div>
                            </div>

                            <div class="button-group">
                                <button type="submit" class="btn-save">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
