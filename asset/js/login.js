document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("login-form");
//     const errorMessage = document.getElementById("error-message");
//     const loadingSpinner = document.getElementById("loading-spinner"); // Ambil spinner

//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Mencegah reload halaman

//         let username = document.getElementById("username").value.trim();
//         let password = document.getElementById("password").value.trim();

//         const validUsers = {
//             "kelompok8": "12345"
//         };

//         if (validUsers[username] === password) {
//             errorMessage.style.display = "none"; // Sembunyikan pesan error jika ada
//             loadingSpinner.style.display = "block"; // Tampilkan spinner

//             setTimeout(() => {
//                 alert("Login berhasil!");
//                 localStorage.setItem("isLoggedIn", "true");
//                 localStorage.setItem("username", username);
//                 window.location.href = "dashboard.html"; // Arahkan ke dashboard setelah 2 detik
//             }, 700);
//         } else {
//             errorMessage.style.display = "block";
//             errorMessage.innerText = "Username atau Password Salah";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const adminLoginForm = document.getElementById("admin-login-form");
    const errorMessage = document.getElementById("error-message");
    const adminErrorMessage = document.getElementById("admin-error-message");
    const loadingSpinner = document.getElementById("loading-spinner");
    const adminSpinner = document.getElementById("admin-spinner");

    const switchToAdmin = document.getElementById("switch-to-admin");
    const switchToUser = document.getElementById("switch-to-user");
    const adminSwitchSpinner = document.getElementById("admin-switch-spinner");
    const userSwitchSpinner = document.getElementById("user-switch-spinner");

    // Data login user & admin
    const validUsers = {
        "kelompok8": "12345"
    };
    const validAdmins = {
        "admin": "12345"
    };

    // LOGIN USER
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();

            if (validUsers[username] === password) {
                errorMessage.style.display = "none";
                loadingSpinner.style.display = "block";

                setTimeout(() => {
                    // alert("Login berhasil!");
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("username", username);
                    window.location.href = "dashboard.html";
                }, 700);
            } else {
                errorMessage.style.display = "block";
                errorMessage.innerText = "Username atau Password Salah";
            }
        });
    }

    // LOGIN ADMIN
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("admin-username").value.trim();
            let password = document.getElementById("admin-password").value.trim();

            if (validAdmins[username] === password) {
                adminErrorMessage.style.display = "none";
                adminSpinner.style.display = "block";

                setTimeout(() => {
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("admin", username);
                    window.location.href = "dashboard-admin.html";
                }, 700);
            } else {
                adminErrorMessage.style.display = "block";
                adminErrorMessage.innerText = "Username atau Password Salah";
            }
        });
    }

    // Pindah ke login admin dengan efek spinner
    if (switchToAdmin) {
        switchToAdmin.addEventListener("click", function (event) {
            event.preventDefault();
            userSwitchSpinner.style.display = "block";

            setTimeout(() => {
                userSwitchSpinner.style.display = "none";
                window.location.href = "login-admin.html";
            }, 500);
        });
    }

    // Pindah ke login user dengan efek spinner
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
