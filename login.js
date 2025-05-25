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


// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("login-form");
//     const adminLoginForm = document.getElementById("admin-login-form");
//     const errorMessage = document.getElementById("error-message");
//     const adminErrorMessage = document.getElementById("admin-error-message");
//     const loadingSpinner = document.getElementById("loading-spinner");
//     const adminSpinner = document.getElementById("admin-spinner");

//     const switchToAdmin = document.getElementById("switch-to-admin");
//     const switchToUser = document.getElementById("switch-to-user");
//     const adminSwitchSpinner = document.getElementById("admin-switch-spinner");
//     const userSwitchSpinner = document.getElementById("user-switch-spinner");

//     // Data login user & admin
//     // const validUsers = {
//     //     "kelompok8": "12345"
//     // };
//     const validAdmins = {
//         "admin": "12345"
//     };

//     // LOGIN USER
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             let username = document.getElementById("username").value.trim();
//             let password = document.getElementById("password").value.trim();

//             if (validUsers[username] === password) {
//                 errorMessage.style.display = "none";
//                 loadingSpinner.style.display = "block";

//                 setTimeout(() => {
//                     // alert("Login berhasil!");
//                     localStorage.setItem("isLoggedIn", "true");
//                     localStorage.setItem("username", username);
//                     window.location.href = "dashboard.html";
//                 }, 700);
//             } else {
//                 errorMessage.style.display = "block";
//                 errorMessage.innerText = "Username atau Password Salah";
//             }
//         });
//     }

//     // LOGIN ADMIN
//     if (adminLoginForm) {
//         adminLoginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             let username = document.getElementById("admin-username").value.trim();
//             let password = document.getElementById("admin-password").value.trim();

//             if (validAdmins[username] === password) {
//                 adminErrorMessage.style.display = "none";
//                 adminSpinner.style.display = "block";

//                 setTimeout(() => {
//                     localStorage.setItem("isLoggedIn", "true");
//                     localStorage.setItem("admin", username);
//                     window.location.href = "admin.html";
//                 }, 700);
//             } else {
//                 adminErrorMessage.style.display = "block";
//                 adminErrorMessage.innerText = "Username atau Password Salah";
//             }
//         });
//     }

//     // Pindah ke login admin dengan efek spinner
//     if (switchToAdmin) {
//         switchToAdmin.addEventListener("click", function (event) {
//             event.preventDefault();
//             userSwitchSpinner.style.display = "block";

//             setTimeout(() => {
//                 userSwitchSpinner.style.display = "none";
//                 window.location.href = "login-admin.html";
//             }, 500);
//         });
//     }

//     // Pindah ke login user dengan efek spinner
//     if (switchToUser) {
//         switchToUser.addEventListener("click", function (event) {
//             event.preventDefault();
//             adminSwitchSpinner.style.display = "block";

//             setTimeout(() => {
//                 adminSwitchSpinner.style.display = "none";
//                 window.location.href = "login.html";
//             }, 500);
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const loadingSpinner = document.getElementById("loading-spinner");
    const switchToAdmin = document.getElementById("switch-to-admin");
    const userSwitchSpinner = document.getElementById("user-switch-spinner");
    const switchToUser = document.getElementById("switch-to-user");
    const adminSwitchSpinner = document.getElementById("admin-switch-spinner");

    // Pindah antara Sign Up dan Sign In
    // if (registerBtn) {
    //     registerBtn.addEventListener('click', () => {
    //         container.classList.add("active");
    //     });
    // }

    // if (loginBtn) {
    //     loginBtn.addEventListener('click', () => {
    //         container.classList.remove("active");
    //     });
    // }

    // // Proses Login User
    // if (loginForm) {
    //     loginForm.addEventListener("submit", function (event) {
    //         event.preventDefault();

    //         let username = document.getElementById("username").value.trim();
    //         let password = document.getElementById("password").value.trim();

    //         if (!username || !password) {
    //             errorMessage.style.display = "block";
    //             errorMessage.innerText = "Username dan Password harus diisi!";
    //             return;
    //         }

    //         // Ambil data user dari localStorage
    //         const users = JSON.parse(localStorage.getItem("users")) || [];
    //         const user = users.find(u => u.name === username && u.password === password);

    //         if (user) {
    //             errorMessage.style.display = "none"; // Hapus pesan error

    //             // Tampilkan spinner
    //             loadingSpinner.style.display = "block";

    //             // Simulasikan loading dan alihkan ke halaman dashboard
    //             setTimeout(() => {
    //                 localStorage.setItem("isLoggedIn", "true");
    //                 localStorage.setItem("username", username);
    //                 window.location.href = "dashboard.html";
    //             }, 500); // Spinner muncul selama 500ms
    //         } else {
    //             // Tampilkan pesan error jika login gagal
    //             errorMessage.style.display = "block";
    //             errorMessage.innerText = "Username atau Password Salah";
    //         }
    //     });
    // }

    // // Registrasi User
    // const registerForm = document.getElementById("register-form");

    // if (registerForm) {
    //     registerForm.addEventListener("submit", function (event) {
    //         event.preventDefault();

    //         const formData = new FormData(registerForm);
    //         const newUser = {
    //             name: formData.get("name"),
    //             email: formData.get("email"),
    //             password: formData.get("password")
    //         };

    //         // Validasi form
    //         if (!newUser.name || !newUser.email || !newUser.password) {
    //             alert("Semua field harus diisi!");
    //             return;
    //         }

    //         // Ambil data user lama dari localStorage
    //         const users = JSON.parse(localStorage.getItem("users")) || [];

    //         // Cek apakah email sudah terdaftar
    //         const existingUser = users.find(user => user.email === newUser.email);
    //         if (existingUser) {
    //             alert("Email sudah terdaftar. Silakan gunakan email lain.");
    //             return;
    //         }

    //         // Tambahkan user baru ke array
    //         users.push(newUser);
    //         localStorage.setItem("users", JSON.stringify(users));

    //         loadingSpinner.style.display = "block";  // Tampilkan spinner

    //         setTimeout(() => {
    //             window.location.href = "login.html";  // Arahkan ke halaman login setelah 2 detik
    //         }, 1000);  // Tunda 1 detik untuk animasi spinner
    //     });
    // }


    // Pindah ke login admin
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


        



// This script ensures that if the form is submitted with errors, the error message is displayed
document.getElementById("login-form").addEventListener("submit", function(event) {
    let username = document.querySelector("input[name='username']").value.trim();
    let password = document.querySelector("input[name='password']").value.trim();

    // Display error message if username or password is empty
    if (!username || !password) {
        event.preventDefault(); // Prevent form submission
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.innerText = "Username dan Password harus diisi!";
    }
});
