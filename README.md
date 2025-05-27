# Mini-Project-PBW-8

Anggota:
1. Randy Maulana - 2308107010054
2. Khairun Nisa - 2308107010074
3. Rahmatun Nisa - 2308107010016
4. Tinsari Rauhana - 2308107010038



kami membuat project dengan bahasa pemrograman html, css, java script, di ikuti dengan php untuk mengelola data dan koneksi ke database
kami membuat database dulu dengan nama (login_db) dengan query

CREATE DATABASE IF NOT EXISTS login_db;

USE login_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL
);
ini sebagai gambaran database yang di buat dengan value yang udah di input dari registrasi user:
![image](https://github.com/user-attachments/assets/26466bcb-adfd-4612-9555-de4e9272acf2)


1. Landing Page
![image](https://github.com/user-attachments/assets/6434bcbd-bb03-4fa4-87eb-dc2f560267ec)
Ini merupakan halaman landing page (index.html) yang dimana ada tombol "Let's See" untuk scroll kebawah menggunakan javaScript

2. Halaman Deskripsi & Anggota
![image](https://github.com/user-attachments/assets/cfc14f98-9032-4bb5-82c8-ace1c37f2232)
Disini ada sedikit deskripsi tentang web ini dan ada anggota yang menangani setiap page, kita klik "OUR PROJECTS" untuk direct ke halaman login

3. Login
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/rahmatun/image1.png?raw=true)
Halaman ini menampilkan form login dengan input username dan password, tombol Sign In, link Sign in as Admin, serta tombol Sign Up untuk pengguna baru.

5. Register
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/rahmatun/image2.png?raw=true)
Halaman ini menampilkan form registrasi dengan input First Name, Last Name, Username, Email, dan Password, serta tombol Sign Up. Di sebelah kiri terdapat tombol Sign In untuk kembali ke halaman login.

7. Dashboard User
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/rahmatun/image3.png?raw=true)
Halaman ini merupakan dashboard yang menampilkan tugas dan progres proyek user yang sedang login. Nama pengguna ditampilkan di pojok kanan atas sebagai identifikasi akun yang sedang login.

9. Halaman Profile
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/rahmatun/image4.png?raw=true)
Halaman ini merupakan halaman profil yang menampilkan informasi akun dari user yang sedang login. Inisial RA diambil dari randyy yang merupakan dua huruf pertama username user. Informasi seperti nama lengkap, username, dan email diambil langsung dari database. Halaman ini berbentuk form sehingga user dapat langsung mengubah datanya dan menyimpan perubahan melalui tombol "Simpan Perubahan".

5. Halaman Profile Setelah diubah
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/main/profilChanged.png)
Ini adalah contoh ketika data profil user telah diubah. Misalnya, nama lengkap, username, atau email yang ditampilkan di form bisa diedit dan disimpan langsung.

6. Dashboard Admin
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/main/dashboard-admin.png)
Halaman ini adalah dashboard khusus untuk admin. Di pojok kanan atas ada nama "admin sistem" sebagai username, lengkap dengan logo inisial dua huruf dari username tersebut. Di halaman ini admin dapat melihat dan mengelola data user.

7. Semua Data User
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/main/data-user.png)
Halaman ini menampilkan seluruh user yang telah terdaftar. Field yang ditampilkan antara lain: ID, nama, username, email, dan password. Untuk kolom password, terlihat sebagai angka acak karena sudah melalui proses hashing, yaitu teknik untuk menyembunyikan password agar tidak bisa dibaca langsung.

8. Aksi pada Data User
![image](https://github.com/RandyMaulanaa/Mini-Project-PBW-8/blob/main/profilChanged.png=true)
Di bagian ini tersedia tombol tindakan untuk hapus, edit, dan tambah user. Misalnya, saat user dengan ID = 3 bernama "ewae" dihapus, maka user lain akan naik satu posisi. Jadi, user yang sebelumnya ID = 4 akan menjadi ID = 3. ID akan selalu berurutan sesuai jumlah data yang tersisa.
