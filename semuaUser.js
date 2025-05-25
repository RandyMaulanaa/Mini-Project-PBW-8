document.addEventListener('DOMContentLoaded', function() {
    const successToast = document.getElementById('successToast');
    const toastClose = document.querySelector('.toast-close');
    const deleteButtons = document.querySelectorAll('.action-btn.delete');

    // Menambahkan event listener untuk tombol Hapus
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userId = this.dataset.id;
            const userName = this.closest('tr').querySelector('td:nth-child(2)').textContent;
            
            if (confirm(`Apakah Anda yakin ingin menghapus pengguna ${userName}?`)) {
                // Menghapus baris dari tabel
                this.closest('tr').remove();
                
                // Menampilkan toast
                successToast.classList.add('active');
                setTimeout(function() {
                    successToast.classList.remove('active');
                }, 3000);
            }
        });
    });

    // Menutup toast
    toastClose.addEventListener('click', function() {
        successToast.classList.remove('active');
    });
});



