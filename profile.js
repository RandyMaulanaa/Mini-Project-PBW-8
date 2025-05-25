// document.addEventListener('DOMContentLoaded', function() {
//     // Toggle sidebar on mobile
//     const menuToggle = document.getElementById('menu-toggle');
//     const sidebar = document.querySelector('.sidebar');
    
//     if (menuToggle) {
//         menuToggle.addEventListener('click', function() {
//             sidebar.classList.toggle('active');
//         });
//     }

//     // Toggle password visibility
//     const togglePasswordButtons = document.querySelectorAll('.toggle-password');
//     togglePasswordButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const targetId = this.getAttribute('data-target');
//             const passwordInput = document.getElementById(targetId);
            
//             if (passwordInput.type === 'password') {
//                 passwordInput.type = 'text';
//                 this.classList.remove('fa-eye');
//                 this.classList.add('fa-eye-slash');
//             } else {
//                 passwordInput.type = 'password';
//                 this.classList.remove('fa-eye-slash');
//                 this.classList.add('fa-eye');
//             }
//         });
//     });

//     // Handle profile image upload
//     const uploadPhoto = document.getElementById('upload-photo');
//     const profileImg = document.querySelector('.profile-avatar img');
    
//     if (uploadPhoto) {
//         uploadPhoto.addEventListener('change', function() {
//             const file = this.files[0];
//             if (file) {
//                 // Validasi file adalah gambar
//                 if (!file.type.match('image.*')) {
//                     showNotification('Hanya file gambar yang diperbolehkan', 'error');
//                     return;
//                 }
                
//                 // Validasi ukuran file (max 2MB)
//                 if (file.size > 2 * 1024 * 1024) {
//                     showNotification('Ukuran file terlalu besar (maksimal 2MB)', 'error');
//                     return;
//                 }
                
//                 // Menampilkan gambar yang dipilih
//                 const reader = new FileReader();
//                 reader.onload = function(e) {
//                     profileImg.src = e.target.result;
//                     showNotification('Foto profil berhasil diperbarui', 'success');
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }

//     // Form validation
//     const profileForm = document.getElementById('profile-form');
    
//     if (profileForm) {
//         profileForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Reset error messages
//             const errorMessages = document.querySelectorAll('.error-message');
//             errorMessages.forEach(msg => msg.textContent = '');
            
//             let isValid = true;
            
//             // Validate required fields
//             const fullname = document.getElementById('fullname');
//             const username = document.getElementById('username');
//             const email = document.getElementById('email');
            
//             if (!fullname.value.trim()) {
//                 document.getElementById('fullname-error').textContent = 'Nama lengkap harus diisi';
//                 isValid = false;
//             }
            
//             if (!username.value.trim()) {
//                 document.getElementById('username-error').textContent = 'Username harus diisi';
//                 isValid = false;
//             }
            
//             if (!email.value.trim()) {
//                 document.getElementById('email-error').textContent = 'Email harus diisi';
//                 isValid = false;
//             } else if (!isValidEmail(email.value)) {
//                 document.getElementById('email-error').textContent = 'Format email tidak valid';
//                 isValid = false;
//             }
            
//             // Validate phone number if entered
//             const phone = document.getElementById('phone');
//             if (phone.value.trim() && !isValidPhone(phone.value)) {
//                 document.getElementById('phone-error').textContent = 'Format nomor telepon tidak valid';
//                 isValid = false;
//             }
            
//             // Validate password if changing
//             const currentPassword = document.getElementById('current-password');
//             const newPassword = document.getElementById('new-password');
//             const confirmPassword = document.getElementById('confirm-password');
            
//             if (newPassword.value || confirmPassword.value) {
//                 if (!currentPassword.value) {
//                     document.getElementById('current-password-error').textContent = 'Password saat ini harus diisi';
//                     isValid = false;
//                 }
                
//                 if (newPassword.value.length < 6) {
//                     document.getElementById('new-password-error').textContent = 'Password minimal 6 karakter';
//                     isValid = false;
//                 }
                
//                 if (newPassword.value !== confirmPassword.value) {
//                     document.getElementById('confirm-password-error').textContent = 'Password tidak sama';
//                     isValid = false;
//                 }
//             }
            
//             if (isValid) {
//                 // Simulate form submission
//                 showNotification('Profil berhasil diperbarui!', 'success');
                
//                 // Reset password fields
//                 currentPassword.value = '';
//                 newPassword.value = '';
//                 confirmPassword.value = '';
//             }
//         });
//     }

//     // Cancel button functionality
//     const cancelButton = document.querySelector('.btn-cancel');
//     if (cancelButton) {
//         cancelButton.addEventListener('click', function() {
//             if (confirm('Apakah Anda yakin ingin membatalkan perubahan?')) {
//                 window.location.href = 'profile.html';
//             }
//         });
//     }

//     // Helper functions
//     function isValidEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
    
//     function isValidPhone(phone) {
//         const phoneRegex = /^[0-9]{10,13}$/;
//         return phoneRegex.test(phone);
//     }
    
//     function showNotification(message, type = 'info') {
//         // Create notification element
//         const notification = document.createElement('div');
//         notification.className = `notification ${type}`;
//         notification.innerHTML = `
//             <div class="notification-content">
//                 <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
//                 <span>${message}</span>
//             </div>
//             <button class="close-notification">
//                 <i class="fas fa-times"></i>
//             </button>
//         `;
        
//         // Add notification to DOM
//         document.body.appendChild(notification);
        
//         // Add styles dynamically
//         notification.style.position = 'fixed';
//         notification.style.bottom = '20px';
//         notification.style.right = '20px';
//         notification.style.backgroundColor = type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3';
//         notification.style.color = 'white';
//         notification.style.padding = '12px 20px';
//         notification.style.borderRadius = '4px';
//         notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//         notification.style.display = 'flex';
//         notification.style.alignItems = 'center';
//         notification.style.justifyContent = 'space-between';
//         notification.style.minWidth = '280px';
//         notification.style.zIndex = '9999';
//         notification.style.animation = 'slideIn 0.3s ease-out forwards';
        
//         // Create animation
//         const style = document.createElement('style');
//         style.innerHTML = `
//             @keyframes slideIn {
//                 from { transform: translateX(100%); opacity: 0; }
//                 to { transform: translateX(0); opacity: 1; }
//             }
//             @keyframes slideOut {
//                 from { transform: translateX(0); opacity: 1; }
//                 to { transform: translateX(100%); opacity: 0; }
//             }
//         `;
//         document.head.appendChild(style);
        
//         // Close notification on click
//         const closeButton = notification.querySelector('.close-notification');
//         closeButton.addEventListener('click', function() {
//             notification.style.animation = 'slideOut 0.3s ease-in forwards';
//             setTimeout(() => {
//                 notification.remove();
//             }, 300);
//         });
        
//         // Auto remove after 5 seconds
//         setTimeout(() => {
//             if (document.body.contains(notification)) {
//                 notification.style.animation = 'slideOut 0.3s ease-in forwards';
//                 setTimeout(() => {
//                     notification.remove();
//                 }, 300);
//             }
//         }, 5000);
//     }
// });

// // Responsive check for sidebar
// window.addEventListener('resize', function() {
//     const sidebar = document.querySelector('.sidebar');
//     if (window.innerWidth > 768) {
//         sidebar.classList.remove('active');
//     }
// });



