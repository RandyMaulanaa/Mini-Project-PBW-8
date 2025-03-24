// admin.js - Functionality for Tugasln Admin Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Toast functionality
    const successToast = document.getElementById('successToast');
    const toastClose = document.querySelector('.toast-close');
    
    if (toastClose) {
        toastClose.addEventListener('click', function() {
            successToast.classList.remove('show');
        });
    }
    
    // Check if we came from a successful user addition
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('userAdded') === 'true') {
        showToast('Pengguna baru berhasil ditambahkan!');
    }
    
    // Edit buttons functionality
    const editButtons = document.querySelectorAll('.action-btn.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('.user-info span').textContent;
            editUser(userName);
        });
    });
    
    // Delete buttons functionality
    const deleteButtons = document.querySelectorAll('.action-btn.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('.user-info span').textContent;
            deleteUser(userName, row);
        });
    });
    
    // Card menu buttons (ellipsis)
    const menuButtons = document.querySelectorAll('.btn-outline');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            showCardMenu(this);
        });
    });
    
    // Menu items click handler
    const menuItems = document.querySelectorAll('.sidebar .menu li a');
    menuItems.forEach(item => {
        if (!isLogoutButton(item)) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all menu items
                menuItems.forEach(mi => mi.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Navigate to the corresponding page
                const menuText = this.querySelector('span').textContent;
                navigateToPage(menuText);
            });
        }
    });
    
    // Notification bell click handler
    const notificationBell = document.querySelector('.notification');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            showNotifications();
        });
    }
});

// Function to show toast message
function showToast(message) {
    const successToast = document.getElementById('successToast');
    const toastMessage = document.querySelector('.toast-message');
    
    if (toastMessage && message) {
        toastMessage.textContent = message;
    }
    
    successToast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(function() {
        successToast.classList.remove('show');
    }, 5000);
}

// Function to edit user
function editUser(userName) {
    showToast(`Memulai edit untuk pengguna: ${userName}`);
    
    // Redirect to edit user page with user ID/name as parameter
    // In a real app, this would use a user ID instead of name
    // window.location.href = `editUser.html?user=${encodeURIComponent(userName)}`;
    
    // For now, we'll just show a simulation
    showSimulatedPage('editUser', `Edit Pengguna: ${userName}`);
}

// Function to delete user
function deleteUser(userName, row) {
    if (confirm(`Apakah Anda yakin ingin menghapus pengguna "${userName}"?`)) {
        // Simulate deletion with animation
        row.style.backgroundColor = '#ffe6e6';
        setTimeout(function() {
            row.style.opacity = '0';
            setTimeout(function() {
                row.style.display = 'none';
                showToast(`Pengguna ${userName} telah dihapus`);
            }, 500);
        }, 300);
    }
}

// Function to show card menu
function showCardMenu(buttonElement) {
    const cardHeader = buttonElement.closest('.card-header');
    const cardTitle = cardHeader.querySelector('h3').textContent;
    
    // Create a popup menu
    let menu = document.querySelector('.card-popup-menu');
    if (menu) {
        document.body.removeChild(menu);
    }
    
    menu = document.createElement('div');
    menu.className = 'card-popup-menu';
    
    // Get button position
    const rect = buttonElement.getBoundingClientRect();
    
    menu.style.top = rect.bottom + 'px';
    menu.style.left = rect.left + 'px';
    
    // Add menu items
    const menuItems = [
        { text: 'Refresh', icon: 'fas fa-sync-alt' },
        { text: 'Export', icon: 'fas fa-file-export' },
        { text: 'Settings', icon: 'fas fa-cog' }
    ];
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
        
        menuItem.addEventListener('click', function() {
            showToast(`${item.text} untuk ${cardTitle}`);
            document.body.removeChild(menu);
        });
        
        menu.appendChild(menuItem);
    });
    
    document.body.appendChild(menu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function closeMenu(e) {
        if (!menu.contains(e.target) && e.target !== buttonElement) {
            if (document.body.contains(menu)) {
                document.body.removeChild(menu);
            }
            document.removeEventListener('click', closeMenu);
        }
    });
}

// Function to navigate to different pages
function navigateToPage(menuItem) {
    // Define page URLs based on menu items
    const pages = {
        'Dashboard': 'admin.html',
        'Proyek': 'proyek.html',
        'Tugas': 'tugas.html',
        'Pengguna': 'pengguna.html',
        'Laporan': 'laporan.html',
        'Pengaturan': 'pengaturan.html'
    };
    
    if (pages[menuItem]) {
        // For actual navigation in production:
        // window.location.href = pages[menuItem];
        
        // For simulation (replace with real navigation when pages exist)
        showSimulatedPage(menuItem.toLowerCase(), menuItem);
    }
}

// Function to show simulated page (for development/demo purposes)
function showSimulatedPage(pageName, pageTitle) {
    // Create a simulated page overlay
    let simulatedPage = document.querySelector('.simulated-page');
    if (simulatedPage) {
        document.body.removeChild(simulatedPage);
    }
    
    simulatedPage = document.createElement('div');
    simulatedPage.className = 'simulated-page';
    
    // Page header
    const header = document.createElement('div');
    header.className = 'simulated-header';
    header.innerHTML = `
        <h2>${pageTitle}</h2>
        <button class="close-btn">&times;</button>
    `;
    simulatedPage.appendChild(header);
    
    // Page content
    const content = document.createElement('div');
    content.className = 'simulated-content';
    
    // Different content based on page
    switch (pageName.toLowerCase()) {
        case 'proyek':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Daftar Proyek</h3>
                    <p>Halaman ini akan menampilkan daftar proyek dan statusnya.</p>
                    <ul>
                        <li>Website Redesign</li>
                        <li>Mobile App XYZ</li>
                        <li>Platform Integration</li>
                        <li>Marketing Campaign</li>
                    </ul>
                </div>
                <div class="simulated-card">
                    <h3>Tambah Proyek Baru</h3>
                    <p>Form untuk menambahkan proyek baru akan ditampilkan di sini.</p>
                </div>
            `;
            break;
        case 'tugas':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Daftar Tugas</h3>
                    <p>Halaman ini akan menampilkan daftar tugas yang perlu diselesaikan.</p>
                    <table class="simulated-table">
                        <tr>
                            <th>Tugas</th>
                            <th>Deadline</th>
                            <th>Prioritas</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Revisi dokumentasi API</td>
                            <td>25 Mar 2025</td>
                            <td>Tinggi</td>
                            <td>Selesai</td>
                        </tr>
                        <tr>
                            <td>Optimasi database</td>
                            <td>27 Mar 2025</td>
                            <td>Tinggi</td>
                            <td>Dalam Proses</td>
                        </tr>
                        <tr>
                            <td>Desain UI/UX untuk fitur baru</td>
                            <td>30 Mar 2025</td>
                            <td>Sedang</td>
                            <td>Belum Dimulai</td>
                        </tr>
                    </table>
                </div>
            `;
            break;
        case 'pengguna':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Manajemen Pengguna</h3>
                    <p>Halaman ini akan menampilkan daftar pengguna dan opsi pengelolaannya.</p>
                    <table class="simulated-table">
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Departemen</th>
                            <th>Peran</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Budi Santoso</td>
                            <td>budi.santoso@example.com</td>
                            <td>IT & Pengembangan</td>
                            <td>Admin</td>
                            <td>Aktif</td>
                        </tr>
                        <tr>
                            <td>Siti Rahayu</td>
                            <td>siti.rahayu@example.com</td>
                            <td>Pemasaran</td>
                            <td>Manajer</td>
                            <td>Aktif</td>
                        </tr>
                    </table>
                </div>
                <div class="simulated-card">
                    <h3>Tambah Pengguna Baru</h3>
                    <p>Form untuk menambahkan pengguna baru akan ditampilkan di sini.</p>
                </div>
            `;
            break;
        case 'laporan':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Laporan Performa Proyek</h3>
                    <p>Grafik dan statistik performa proyek akan ditampilkan di sini.</p>
                </div>
                <div class="simulated-card">
                    <h3>Laporan Produktivitas Tim</h3>
                    <p>Data produktivitas tim dan anggota akan ditampilkan di sini.</p>
                </div>
            `;
            break;
        case 'pengaturan':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Pengaturan Sistem</h3>
                    <p>Pengaturan umum sistem dapat dikelola di sini.</p>
                </div>
                <div class="simulated-card">
                    <h3>Pengaturan Akun</h3>
                    <p>Pengaturan akun dan profil dapat diubah di sini.</p>
                </div>
                <div class="simulated-card">
                    <h3>Notifikasi</h3>
                    <p>Pengaturan notifikasi dan pemberitahuan dapat diatur di sini.</p>
                </div>
            `;
            break;
        case 'edituser':
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Edit Informasi Pengguna</h3>
                    <form class="simulated-form">
                        <div class="form-group">
                            <label>Nama:</label>
                            <input type="text" value="${pageTitle.replace('Edit Pengguna: ', '')}" />
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" value="user@example.com" />
                        </div>
                        <div class="form-group">
                            <label>Departemen:</label>
                            <select>
                                <option>IT & Pengembangan</option>
                                <option>Pemasaran</option>
                                <option>Keuangan</option>
                                <option>SDM</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Peran:</label>
                            <select>
                                <option>Admin</option>
                                <option>Manajer</option>
                                <option>Pengguna</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Status:</label>
                            <select>
                                <option>Aktif</option>
                                <option>Nonaktif</option>
                            </select>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn-primary">Simpan Perubahan</button>
                            <button type="button" class="btn-outline cancel-btn">Batal</button>
                        </div>
                    </form>
                </div>
            `;
            break;
        default:
            content.innerHTML = `
                <div class="simulated-card">
                    <h3>Halaman ${pageTitle}</h3>
                    <p>Konten untuk halaman ${pageTitle} akan ditampilkan di sini.</p>
                    <p>Halaman ini masih dalam pengembangan.</p>
                </div>
            `;
    }
    
    simulatedPage.appendChild(content);
    document.body.appendChild(simulatedPage);
    
    // Close button functionality
    const closeBtn = simulatedPage.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(simulatedPage);
    });
    
    // Cancel button functionality (if exists)
    const cancelBtn = simulatedPage.querySelector('.cancel-btn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            document.body.removeChild(simulatedPage);
        });
    }
}

// Function to show notifications
function showNotifications() {
    // Create a notification panel
    let panel = document.querySelector('.notification-panel');
    if (panel) {
        document.body.removeChild(panel);
        return;
    }
    
    panel = document.createElement('div');
    panel.className = 'notification-panel';
    
    // Panel header
    const header = document.createElement('div');
    header.className = 'notification-header';
    header.innerHTML = '<h3>Notifikasi</h3><button class="close-btn">&times;</button>';
    panel.appendChild(header);
    
    // Notification items
    const notifications = [
        { text: 'Update dokumentasi API selesai', time: 'Hari ini, 09:45', icon: 'fas fa-check-circle' },
        { text: 'Siti Rahayu mengomentari tugas', time: 'Kemarin, 16:30', icon: 'fas fa-comment' },
        { text: 'Batas waktu proyek Website Redesign', time: 'Besok, 12:00', icon: 'fas fa-clock' },
        { text: 'Budi Santoso membuat tugas baru', time: 'Kemarin, 14:20', icon: 'fas fa-tasks' },
        { text: 'Pengguna baru ditambahkan ke sistem', time: '22 Mar 2025, 10:15', icon: 'fas fa-user-plus' }
    ];
    
    const notificationList = document.createElement('div');
    notificationList.className = 'notification-list';
    
    notifications.forEach(notif => {
        const item = document.createElement('div');
        item.className = 'notification-item';
        item.innerHTML = `
            <div class="notification-icon">
                <i class="${notif.icon}"></i>
            </div>
            <div class="notification-content">
                <p>${notif.text}</p>
                <span>${notif.time}</span>
            </div>
        `;
        
        item.addEventListener('click', function() {
            showToast(`Notifikasi dibuka: ${notif.text}`);
            document.body.removeChild(panel);
            
            // Navigate to related page based on notification type
            if (notif.text.includes('API')) {
                showSimulatedPage('proyek', 'Detail Proyek: API Documentation');
            } else if (notif.text.includes('tugas')) {
                showSimulatedPage('tugas', 'Detail Tugas');
            } else if (notif.text.includes('Pengguna baru')) {
                navigateToPage('Pengguna');
            }
        });
        
        notificationList.appendChild(item);
    });
    
    panel.appendChild(notificationList);
    
    // Panel footer
    const footer = document.createElement('div');
    footer.className = 'notification-footer';
    footer.innerHTML = '<a href="#">Lihat semua notifikasi</a>';
    panel.appendChild(footer);
    
    // Get notification bell position
    const bell = document.querySelector('.notification');
    const rect = bell.getBoundingClientRect();
    
    panel.style.top = rect.bottom + 10 + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    
    document.body.appendChild(panel);
    
    // Close button functionality
    const closeBtn = panel.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(panel);
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', function closePanel(e) {
        if (!panel.contains(e.target) && !bell.contains(e.target)) {
            if (document.body.contains(panel)) {
                document.body.removeChild(panel);
            }
            document.removeEventListener('click', closePanel);
        }
    });
}

// Helper function to check if a menu item is the logout button
function isLogoutButton(element) {
    return element.querySelector('i').classList.contains('fa-sign-out-alt');
}