document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();  // Mencegah form submit default

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const wisata = document.getElementById('wisata').value;
            const tanggalKunjungan = document.getElementById('tanggal-kunjungan').value;

            // Memastikan semua field terisi
            if (!nama || !email || !wisata || !tanggalKunjungan) {
                alert('Harap lengkapi semua field.');
                return;
            }

            // Menampilkan alert konfirmasi
            alert(`Tiket berhasil dipesan untuk:\nNama: ${nama}\nEmail: ${email}\nTempat Wisata: ${wisata}\nTanggal Kunjungan: ${tanggalKunjungan}`);
            
            // Mereset form setelah alert
            bookingForm.reset();
        });
    }
});