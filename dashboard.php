<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

$user_name = $_SESSION['username'];
$notification_count = 3; // ubah sesuai logika notifikasi kamu
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - TaskVa</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <div class="layout">
        <div class="sidebar">
            <div class="logo">
                <h1>Tugas<span>In</span>.</h1>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link active">
                        <i class="fas fa-home nav-icon"></i>
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-clipboard-list nav-icon"></i>
                        Proyek
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-tasks nav-icon"></i>
                        Tugas
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#jadwal" class="nav-link">
                        <i class="fas fa-calendar-alt nav-icon"></i>
                        Kalender
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-chart-bar nav-icon"></i>
                        Laporan
                    </a>
                </li>
                <li class="nav-item">
                    <a href="profile.php" class="nav-link">
                        <i class="fas fa-user nav-icon"></i>
                        Profil
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-cog nav-icon"></i>
                        Pengaturan
                    </a>
                </li>
            </ul>
            <div class="logout">
                <a href="login.html" class="nav-link" style="color: #dc3545;">
                    <i class="fas fa-sign-out-alt nav-icon"></i>
                    Keluar
                </a>
            </div>            
        </div>
        
        <div class="content">
            <div class="header">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                </ul>
                <div class="user-info">
                    <div class="notification-icon">
                        <i class="fas fa-bell"></i>
                        <span class="notification-badge"><?php echo $notification_count; ?></span>
                    </div>
                    <div class="user-name"><?php echo $user_name; ?></div>
                </div>
            </div>
            
            <h1 class="page-title">Dashboard</h1>
            
            <div class="grid">
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">
                            <div class="section-icon">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            Tugas Saya
                        </h2>
                        <button class="btn">
                            <span class="btn-icon"><i class="fas fa-plus"></i></span>
                            Tambah Tugas
                        </button>
                    </div>
                    <ul class="task-list">
                        <li class="task-item">
                            <div class="task-info">
                                <div class="task-title">Revisi proposal klien ABC</div>
                                <div class="task-meta">Proyek: Website Redesign • Deadline: 25 Mar 2025</div>
                            </div>
                            <span class="badge badge-urgent">Prioritas Tinggi</span>
                        </li>
                        <li class="task-item">
                            <div class="task-info">
                                <div class="task-title">Meeting dengan tim desain</div>
                                <div class="task-meta">Proyek: Mobile App XYZ • Jadwal: 23 Mar 2025, 10:00</div>
                            </div>
                            <span class="badge badge-progress">Dalam Progres</span>
                        </li>
                        <li class="task-item">
                            <div class="task-info">
                                <div class="task-title">Membuat laporan bulanan</div>
                                <div class="task-meta">Proyek: Administrasi • Deadline: 31 Mar 2025</div>
                            </div>
                            <span class="badge badge-progress">Dalam Progres</span>
                        </li>
                        <li class="task-item">
                            <div class="task-info">
                                <div class="task-title">Update dokumentasi API</div>
                                <div class="task-meta">Proyek: Platform Integration • Selesai: 20 Mar 2025</div>
                            </div>
                            <span class="badge badge-completed">Selesai</span>
                        </li>
                    </ul>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">
                            <div class="section-icon">
                                <i class="fas fa-chart-pie"></i>
                            </div>
                            Progres Proyek
                        </h2>
                    </div>
                    <div class="progress-container">
                        <div class="progress-header">
                            <span class="progress-title">Website Redesign</span>
                            <span>70%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-value" style="width: 70%"></div>
                        </div>
                    </div>
                    <div class="progress-container">
                        <div class="progress-header">
                            <span class="progress-title">Mobile App XYZ</span>
                            <span>45%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-value" style="width: 45%"></div>
                        </div>
                    </div>
                    <div class="progress-container">
                        <div class="progress-header">
                            <span class="progress-title">Platform Integration</span>
                            <span>90%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-value" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="progress-container">
                        <div class="progress-header">
                            <span class="progress-title">Marketing Campaign</span>
                            <span>20%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-value" style="width: 20%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="section col-full">
                    <div class="section-header">
                        <h2 class="section-title">
                            <div class="section-icon">
                                <i class="fas fa-history"></i>
                            </div>
                            Aktivitas Terbaru
                        </h2>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="activity-content">
                            <div>Anda menyelesaikan tugas <strong>Update dokumentasi API</strong></div>
                            <div class="activity-time">Hari ini, 09:45</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="activity-content">
                            <div>Siti Rahayu mengomentari tugas <strong>Revisi proposal klien ABC</strong></div>
                            <div class="activity-time">Kemarin, 16:30</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-sync-alt"></i>
                        </div>
                        <div class="activity-content">
                            <div>Dian Permata memperbarui status tugas <strong>Design landing page</strong> menjadi <strong>Selesai</strong></div>
                            <div class="activity-time">21 Mar 2025, 14:20</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-plus-circle"></i>
                        </div>
                        <div class="activity-content">
                            <div>Anda ditambahkan ke proyek <strong>Mobile App XYZ</strong></div>
                            <div class="activity-time">20 Mar 2025, 10:05</div>
                        </div>
                    </div>
                </div>
                
                <div id="jadwal" class="section">
                    <div class="section-header">
                        <h2 class="section-title">
                            <div class="section-icon">
                                <i class="fas fa-calendar-day"></i>
                            </div>
                            Jadwal Hari Ini
                        </h2>
                    </div>
                    <div class="schedule-item">
                        <div class="schedule-title">Meeting Kickoff Project</div>
                        <div class="schedule-meta">09:00 - 10:30 • Ruang Rapat Utama</div>
                    </div>
                    <div class="schedule-item">
                        <div class="schedule-title">Review UI Design</div>
                        <div class="schedule-meta">13:00 - 14:00 • Online (Zoom)</div>
                    </div>
                    <div class="schedule-item">
                        <div class="schedule-title">Daily Standup</div>
                        <div class="schedule-meta">16:00 - 16:30 • Online (Teams)</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">
                            <div class="section-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            Tim Saya
                        </h2>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">BS</div>
                        <div class="member-info">
                            <div class="member-name">Budi Santoso</div>
                            <div class="member-role">Project Manager</div>
                        </div>
                        <div class="member-tasks">5 tugas</div>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">SR</div>
                        <div class="member-info">
                            <div class="member-name">Siti Rahayu</div>
                            <div class="member-role">UI/UX Designer</div>
                        </div>
                        <div class="member-tasks">3 tugas</div>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">DP</div>
                        <div class="member-info">
                            <div class="member-name">Dian Permata</div>
                            <div class="member-role">Frontend Developer</div>
                        </div>
                        <div class="member-tasks">7 tugas</div>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">AP</div>
                        <div class="member-info">
                            <div class="member-name">Andi Pratama</div>
                            <div class="member-role">Backend Developer</div>
                        </div>
                        <div class="member-tasks">4 tugas</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="dashboard.js"></script>
</body>
</html>
