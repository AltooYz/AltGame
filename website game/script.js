function mainkanGame(url) {
    const list = document.getElementById('game-list');
    const display = document.getElementById('game-display');
    const frame = document.getElementById('game-frame');

    list.style.display = 'none';
    display.style.display = 'block';
    frame.src = url;
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function tutupGame() {
    const list = document.getElementById('game-list');
    const display = document.getElementById('game-display');
    const frame = document.getElementById('game-frame');

    list.style.display = 'grid';
    display.style.display = 'none';
    
    // Trik penting: Hapus src agar game benar-benar mati (tidak ada suara tersisa)
    frame.src = '';
}


// Fungsi Pindah Tab
function switchTab(tabName) {
    const beranda = document.getElementById('tab-beranda');
    const leaderboard = document.getElementById('tab-leaderboard');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => item.classList.remove('active'));

    if (tabName === 'beranda') {
        beranda.style.display = 'block';
        leaderboard.style.display = 'none';
        navItems[0].classList.add('active');
    } else {
        beranda.style.display = 'none';
        leaderboard.style.display = 'block';
        navItems[1].classList.add('active');
    }
}

// Fungsi Search Game
function filterGames() {
    let input = document.getElementById('gameSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('game-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
// Carousel Logic - Updated with Manual Control
const carousel = document.getElementById('carousel');
const totalSlides = 1; // Single promo image
let currentSlide = 0;

// Fungsi untuk menggeser ke slide tertentu
function showSlide(index) {
    currentSlide = index;
    // Hitung persentase geseran berdasarkan slide saat ini
    const offset = currentSlide * -100;
    // Geser carousel (totalSlides digunakan untuk menghitung persentase lebar per gambar)
    carousel.style.transform = `translateX(${offset / totalSlides}%)`;
}

// Fungsi Tombol Kanan (Atau Otomatis)
function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= totalSlides) {
        nextIndex = 0; // Kembali ke awal
    }
    showSlide(nextIndex);
}

// Fungsi Tombol Kiri (Baru)
function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = totalSlides - 1; // Kembali ke akhir
    }
    showSlide(prevIndex);
}

// Mulai pergeseran otomatis (Sudah ada)
let autoSlide = setInterval(nextSlide, 5000);

// Fitur Tambahan Pro: Stop otomatis saat kursor di atas banner
const carouselWrapper = document.querySelector('.hero-banner-carousel');
carouselWrapper.addEventListener('mouseover', () => {
    clearInterval(autoSlide); // Berhenti otomatis
});

carouselWrapper.addEventListener('mouseout', () => {
    autoSlide = setInterval(nextSlide, 5000); // Mulai otomatis lagi
});
function ubahTampilan() {
    document.body.classList.toggle('mobile-view');
    const btn = document.getElementById('toggle-mode');
    if (document.body.classList.contains('mobile-view')) {
        btn.innerText = "💻 Mode Desktop";
        btn.style.backgroundColor = "#ffcc00";
    } else {
        btn.innerText = "📱 Mode Mobile";
        btn.style.backgroundColor = "";
    }
}
// Fungsi Membuka Profil
function openProfile() {
    document.getElementById("profileModal").style.display = "block";
}

// Fungsi Menutup Profil
function closeProfile() {
    document.getElementById("profileModal").style.display = "none";
}

// Menutup jendela jika user mengklik area di luar kotak profil
window.onclick = function(event) {
    let modal = document.getElementById("profileModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

