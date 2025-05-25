document.addEventListener("DOMContentLoaded", function () {
    const adminLoginForm = document.getElementById("admin-login-form");
    const adminErrorMessage = document.getElementById("admin-error-message");
    const adminSpinner = document.getElementById("admin-spinner");;
    const switchToUser = document.getElementById("switch-to-user");
    const adminSwitchSpinner = document.getElementById("admin-switch-spinner");

    const validAdmins = {
        "admin": "12345"  // Data login admin
    };

    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (event) {
            event.preventDefault();  // Mencegah reload halaman

            // Ambil username dan password
            let username = document.getElementById("admin-username").value.trim();
            let password = document.getElementById("admin-password").value.trim();

            // Cek apakah username dan password sesuai
            if (validAdmins[username] === password) {
                adminErrorMessage.style.display = "none"; // Sembunyikan pesan error jika login berhasil
                adminSpinner.style.display = "block";  // Tampilkan spinner

                setTimeout(() => {
                    // Simulasikan login berhasil
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("admin", username);  // Simpan username admin
                    window.location.href = "admin.html";  // Arahkan ke halaman admin
                }, 700);  // Tunda 700ms untuk animasi spinner
            } else {
                // Tampilkan pesan error jika login gagal
                adminErrorMessage.style.display = "block";
                adminErrorMessage.innerText = "Username atau Password Salah";
            }
        });
    }
    if (switchToUser) {
        switchToUser.addEventListener("click", function (event) {
            event.preventDefault();
            adminSwitchSpinner.style.display = "block";

            setTimeout(() => {
                adminSwitchSpinner.style.display = "none";
                window.location.href = "login.html";
            }, 500);
        });
    }
});
