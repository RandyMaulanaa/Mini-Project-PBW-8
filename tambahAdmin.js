document.addEventListener('DOMContentLoaded', function() {
    const addUserForm = document.getElementById('addUserForm');
    const successMessage = document.getElementById('successMessage');
    
    // Menangani klik pada semua tombol menu
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mendapatkan jenis menu dari class atau teks
            const menuType = this.querySelector('span').textContent.trim().toLowerCase();
            
            // Redirect ke halaman yang sesuai berdasarkan jenis menu
            switch(menuType) {
                case 'dashboard':
                    window.location.href = 'dashboard.html';
                    break;
                case 'proyek':
                    window.location.href = 'proyek.html';
                    break;
                case 'jadwal':
                    window.location.href = 'jadwal.html';
                    break;
                case 'pengguna':
                    window.location.href = 'pengguna.html';
                    break;
                case 'laporan':
                    window.location.href = 'laporan.html';
                    break;
                case 'pengaturan':
                    window.location.href = 'pengaturan.html';
                    break;
                case 'keluar':
                    window.location.href = 'login.html';
                    break;
                default:
                    // Jika tidak ada yang cocok, tetap di halaman yang sama
                    break;
            }
            
            // Untuk tampilan mobile, tutup sidebar setelah mengklik menu
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('active');
                document.querySelector('.main-content').classList.remove('sidebar-active');
                // Hapus overlay juga
                const overlay = document.querySelector('.sidebar-overlay');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            }
        });
    });
    
    // Toggle sidebar untuk tampilan mobile dengan overlay
    const toggleSidebarBtn = document.createElement('button');
    toggleSidebarBtn.className = 'toggle-sidebar';
    toggleSidebarBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header').prepend(toggleSidebarBtn);
    
    // Tambahkan overlay untuk sidebar
    const sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'sidebar-overlay';
    document.querySelector('.container').appendChild(sidebarOverlay);
    
    toggleSidebarBtn.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('sidebar-active');
        sidebarOverlay.classList.toggle('active');
    });
    
    // Tutup sidebar saat overlay diklik
    sidebarOverlay.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.main-content').classList.remove('sidebar-active');
        this.classList.remove('active');
    });
    
    // Validasi form
    addUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Reset error messages
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.style.display = 'none';
            element.textContent = '';
        });
        
        let isValid = true;
        
        // Validate first name
        const firstName = document.getElementById('firstName').value.trim();
        if (firstName === '') {
            showError('firstName', 'Nama depan wajib diisi');
            isValid = false;
        }
        
        // Validate last name
        const lastName = document.getElementById('lastName').value.trim();
        if (lastName === '') {
            showError('lastName', 'Nama belakang wajib diisi');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('email', 'Email wajib diisi');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Format email tidak valid');
            isValid = false;
        }
        
        // Validate password
        const password = document.getElementById('password').value;
        if (password === '') {
            showError('password', 'Kata sandi wajib diisi');
            isValid = false;
        } else if (password.length < 8) {
            showError('password', 'Kata sandi minimal 8 karakter');
            isValid = false;
        }
        
        // Validate confirm password
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (confirmPassword === '') {
            showError('confirmPassword', 'Konfirmasi kata sandi wajib diisi');
            isValid = false;
        } else if (confirmPassword !== password) {
            showError('confirmPassword', 'Kata sandi tidak cocok');
            isValid = false;
        }
        
        // Validate department
        const department = document.getElementById('department').value;
        if (department === '') {
            showError('department', 'Departemen wajib dipilih');
            isValid = false;
        }
        
        // If form is valid, submit
        if (isValid) {
            // Here you would normally send the data to the server
            // For this demo, we'll just show a success message
            // Clear form
            addUserForm.reset();
            // Show success message with animation
            successMessage.style.display = 'block';
            successMessage.classList.add('fade-in');
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    // Function to show error message
    function showError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}Error`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        // Add shake animation to the field
        const field = document.getElementById(fieldId);
        field.style.borderColor = 'var(--error-color)';
        // Remove error state after input change
        field.addEventListener('input', function() {
            errorElement.style.display = 'none';
            field.style.borderColor = '';
        }, { once: true });
    }
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    // Deteksi sentuhan untuk perangkat mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        const overlay = document.querySelector('.sidebar-overlay');
        
        // Swipe right to open sidebar
        if (touchEndX - touchStartX > 75 && !sidebar.classList.contains('active')) {
            sidebar.classList.add('active');
            mainContent.classList.add('sidebar-active');
            overlay.classList.add('active');
        }
        
        // Swipe left to close sidebar
        if (touchStartX - touchEndX > 75 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('sidebar-active');
            overlay.classList.remove('active');
        }
    }
    
    // Menangani responsivitas pada perubahan ukuran layar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.sidebar').classList.remove('active');
            document.querySelector('.main-content').classList.remove('sidebar-active');
            const overlay = document.querySelector('.sidebar-overlay');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    });
    
    // Aktifkan notifikasi saat diklik
    const notificationElement = document.querySelector('.notification');
    if (notificationElement) {
        notificationElement.addEventListener('click', function() {
            alert('Anda memiliki 3 notifikasi baru');
            // Implementasi dropdown notifikasi bisa ditambahkan di sini
        });
    }
});
