// Tambah ke keranjang
function tambahKeKeranjang(nama, harga) {
    let keranjang = JSON.parse(localStorage.getItem('keranjangRoti')) || [];
    let ada = keranjang.find(item => item.nama === nama);

    if (ada) ada.jumlah += 1;
    else keranjang.push({ nama, harga, jumlah: 1 });

    localStorage.setItem('keranjangRoti', JSON.stringify(keranjang));
    tampilkanPesan(`${nama} masuk ke keranjang `);
}

// Pesan notifikasi
function tampilkanPesan(teks) {
    const notif = document.createElement('div');
    notif.className = 'position-fixed bottom-3 end-3 bg-coklat text-white p-3 rounded shadow-lg';
    notif.style.zIndex = '9999';
    notif.textContent = teks;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
}

// Gulir halus
document.querySelectorAll('a[href^="#"]').forEach(tautan => {
    tautan.addEventListener('click', function (e) {
        e.preventDefault();
        const tujuan = document.querySelector(this.getAttribute('href'));
        if (tujuan) {
            window.scrollTo({
                top: tujuan.offsetTop - 70,
                behavior: 'smooth'
            });
            // Tutup menu HP
            let menu = document.querySelector('.navbar-collapse.show');
            if (menu) menu.classList.remove('show');
        }
    });
});