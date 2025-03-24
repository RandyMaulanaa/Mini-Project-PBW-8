document.addEventListener('DOMContentLoaded', function() {
    // Modals
    const addUserModal = document.getElementById('addUserModal');
    const addUserBtn = document.getElementById('addUserBtn');
    const closeModal = document.querySelector('.close-modal');
    
    // Form and validation
    const addUserForm = document.getElementById('addUserForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const departmentSelect = document.getElementById('department');
    
    // Error messages
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const departmentError = document.getElementById('departmentError');
    
    // Toast
    const successToast = document.getElementById('successToast');
    const toastClose = document.querySelector('.toast-close');

    // Show modal
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            addUserModal.classList.add('active');
        });
    }
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            addUserModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === addUserModal) {
            addUserModal.classList.remove('active');
        }
    });
    
    // Close toast
    if (toastClose) {
        toastClose.addEventListener('click', function() {
            successToast.classList.remove('active');
        });
    }
    
    // Form validation
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            
            // Reset errors
            resetErrors();
            
            // Validate first name
            if (!firstNameInput.value.trim()) {
                firstNameError.textContent = 'Nama depan harus diisi';
                isValid = false;
            }
            
            // Validate last name
            if (!lastNameInput.value.trim()) {
                lastNameError.textContent = 'Nama belakang harus diisi';
                isValid = false;
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email harus diisi';
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Format email tidak valid';
                isValid = false;
            }
            
            // Validate password
            if (!passwordInput.value) {
                passwordError.textContent = 'Kata sandi harus diisi';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Kata sandi minimal 6 karakter';
                isValid = false;
            }
            
            // Validate confirm password
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.textContent = 'Konfirmasi kata sandi tidak cocok';
                isValid = false;
            }
            
            // Validate department
            if (!departmentSelect.value) {
                departmentError.textContent = 'Silakan pilih departemen';
                isValid = false;
            }
            
            // If the form is valid, submit it or show success message
            if (isValid) {
                // Here you would typically send the data to the server
                // For demonstration, we're just showing a success message
                
                // Get the selected role
                const selectedRole = document.querySelector('input[name="userRole"]:checked').value;
                
                // Create a user object with the form data
                const newUser = {
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    email: emailInput.value,
                    role: selectedRole,
                    department: departmentSelect.value
                };
                
                // Log the new user data (would be sent to server in real app)
                console.log('New User Data:', newUser);
                
                // Show success toast
                successToast.classList.add('active');
                
                // Hide toast after 3 seconds
                setTimeout(function() {
                    successToast.classList.remove('active');
                }, 3000);
                
                // Close the modal
                addUserModal.classList.remove('active');
                
                // Reset the form
                addUserForm.reset();
            }
        });
    }
    
    // Helper functions
    function resetErrors() {
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        departmentError.textContent = '';
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // User Actions
    const editButtons = document.querySelectorAll('.action-btn.edit');
    const deleteButtons = document.querySelectorAll('.action-btn.delete');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the user data from the table row
            const row = this.closest('tr');
            const userName = row.querySelector('.user-info span').textContent;
            
            // Show a message for demonstration
            alert(`Edit user: ${userName}`);
            
            // In a real application, you would open a modal with the user's data
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the user data from the table row
            const row = this.closest('tr');
            const userName = row.querySelector('.user-info span').textContent;
            
            // Confirm deletion
            if (confirm(`Apakah Anda yakin ingin menghapus pengguna ${userName}?`)) {
                // In a real application, you would send a request to delete the user
                // For demonstration, we're just removing the row from the table
                row.remove();
                
                // Show success toast
                successToast.querySelector('.toast-message').textContent = 'Pengguna berhasil dihapus!';
                successToast.classList.add('active');
                
                // Hide toast after 3 seconds
                setTimeout(function() {
                    successToast.classList.remove('active');
                }, 3000);
            }
        });
    });

    // Simulate data for charts or reports in a real application
    // This would be replaced with actual data fetching and visualization
    function initDashboard() {
        console.log('Dashboard initialized');
        // Here you would initialize charts, fetch project data, etc.
    }

    // Initialize the dashboard
    initDashboard();
});