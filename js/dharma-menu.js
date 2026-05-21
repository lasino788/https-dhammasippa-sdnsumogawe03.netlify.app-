// ===== IMPORT DATA =====
// Data akan diimpor dari dharma-content.js

// ===== FUNGSI UNTUK SYAIR DHAMMAPADA =====
function displayDhammapada() {
    const container = document.getElementById('dhammapada-content');
    if (!container) return;
    
    const dhammapada = window.dhammapada || [];
    
    let html = '<div class="dharma-grid">';
    dhammapada.forEach(item => {
        html += `
            <div class="dharma-card" onclick="showDhammapadaDetail(${item.id})">
                <h3>Ayat ${item.ayat}</h3>
                <p class="kategori-tag">${item.kategori}</p>
                <p class="preview">"${item.syair.substring(0, 100)}..."</p>
                <button class="btn-selengkapnya">Selengkapnya →</button>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function showDhammapadaDetail(id) {
    const item = window.dhammapada.find(d => d.id === id);
    if (!item) return;
    
    const modal = document.getElementById('dharma-modal');
    document.getElementById('modal-title').innerText = `Syair Dhammapada Ayat ${item.ayat}`;
    document.getElementById('modal-content').innerHTML = `
        <p class="kategori-badge">${item.kategori}</p>
        <h4>Syair:</h4>
        <p class="syair-text">"${item.syair}"</p>
        <h4>Makna:</h4>
        <p>${item.makna}</p>
    `;
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK CERITA JATAKA =====
function displayCeritaJataka() {
    const container = document.getElementById('jataka-content');
    if (!container) return;
    
    const jatakaStories = window.jatakaStories || [];
    
    let html = '<div class="dharma-grid">';
    jatakaStories.forEach(item => {
        html += `
            <div class="dharma-card" onclick="showJatakaDetail(${item.id})">
                <h3>${item.judul}</h3>
                <p class="kelas-tag">Kelas ${item.kelas}</p>
                <p class="preview">${item.deskripsi}</p>
                <button class="btn-selengkapnya">Baca Selengkapnya →</button>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function showJatakaDetail(id) {
    const item = window.jatakaStories.find(j => j.id === id);
    if (!item) return;
    
    const modal = document.getElementById('dharma-modal');
    document.getElementById('modal-title').innerText = item.judul;
    document.getElementById('modal-content').innerHTML = `
        <p class="kelas-badge">Untuk ${item.kelas}</p>
        <h4>Cerita:</h4>
        <p>${item.isi}</p>
        <h4>Pesan Moral:</h4>
        <p class="pesan-moral"><strong>${item.pesan}</strong></p>
    `;
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK RENUNGAN HARIAN =====
function displayRenunganHarian() {
    const container = document.getElementById('renungan-content');
    if (!container) return;
    
    const renunganHarian = window.renunganHarian || [];
    
    let html = '<div class="renungan-list">';
    renunganHarian.forEach(item => {
        html += `
            <div class="renungan-card" onclick="showRenunganDetail(${item.id})">
                <div class="hari-header">${item.hari}</div>
                <h3>${item.judul}</h3>
                <p class="sutta-info">📖 ${item.sutta}</p>
                <p class="preview">${item.isi.substring(0, 120)}...</p>
                <button class="btn-baca">Baca Selengkapnya →</button>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function showRenunganDetail(id) {
    const item = window.renunganHarian.find(r => r.id === id);
    if (!item) return;
    
    const modal = document.getElementById('dharma-modal');
    document.getElementById('modal-title').innerText = `${item.hari}: ${item.judul}`;
    document.getElementById('modal-content').innerHTML = `
        <p class="sutta-badge">📖 ${item.sutta}</p>
        <h4>Renungan:</h4>
        <p>${item.isi}</p>
        <h4>Refleksi Harian:</h4>
        <p class="refleksi"><em>${item.refleksi}</em></p>
    `;
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK KUIS DHARMA =====
function displayKuisDharma() {
    const container = document.getElementById('kuis-content');
    if (!container) return;
    
    const kuisDharma = window.kuisDharma || [];
    
    let html = '<div class="kuis-list">';
    kuisDharma.forEach((item, index) => {
        html += `
            <div class="kuis-card" onclick="showKuisDetail(${item.id})">
                <div class="soal-number">Soal ${index + 1}</div>
                <h4>${item.soal}</h4>
                <p class="kelas-info">📚 ${item.kelas}</p>
                <button class="btn-jawab">Lihat Jawaban →</button>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function showKuisDetail(id) {
    const item = window.kuisDharma.find(k => k.id === id);
    if (!item) return;
    
    const modal = document.getElementById('dharma-modal');
    document.getElementById('modal-title').innerText = 'Kuis Dharma';
    
    let pilihan = item.pilihan.map(p => {
        const isJawaban = p.charAt(0) === item.jawaban;
        return `<p class="pilihan-option ${isJawaban ? 'jawaban-benar' : ''}">${p}</p>`;
    }).join('');
    
    document.getElementById('modal-content').innerHTML = `
        <p class="kelas-badge">📚 ${item.kelas}</p>
        <h4>Soal:</h4>
        <p><strong>${item.soal}</strong></p>
        <h4>Pilihan Jawaban:</h4>
        <div class="pilihan-list">${pilihan}</div>
        <h4>Jawaban Benar: ${item.jawaban}</h4>
        <h4>Penjelasan:</h4>
        <p>${item.penjelasan}</p>
    `;
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK TANYA JAWAB =====
function displayTanyaJawab() {
    const container = document.getElementById('faq-content');
    if (!container) return;
    
    const tanyaJawab = window.tanyaJawab || [];
    
    let html = '<div class="faq-list">';
    tanyaJawab.forEach(item => {
        html += `
            <div class="faq-item">
                <div class="faq-pertanyaan" onclick="toggleFAQ(this)">
                    <h4>${item.pertanyaan}</h4>
                    <span class="toggle-icon">▼</span>
                </div>
                <div class="faq-jawaban" style="display: none;">
                    <p class="kategori-badge">${item.kategori}</p>
                    <p>${item.jawaban}</p>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function toggleFAQ(element) {
    const jawaban = element.nextElementSibling;
    jawaban.style.display = jawaban.style.display === 'none' ? 'block' : 'none';
    element.classList.toggle('active');
}

// ===== FUNGSI UNTUK GALERI KEGIATAN =====
function displayGaleriKegiatan() {
    const container = document.getElementById('galeri-content');
    if (!container) return;
    
    const galeriKegiatan = window.galeriKegiatan || [];
    
    let html = '<div class="galeri-grid">';
    galeriKegiatan.forEach(item => {
        html += `
            <div class="galeri-card" onclick="showGaleriDetail(${item.id})">
                <div class="galeri-image">
                    <img src="${item.gambar}" alt="${item.judul}">
                    <div class="kategori-overlay">${item.kategori}</div>
                </div>
                <div class="galeri-info">
                    <h4>${item.judul}</h4>
                    <p>${item.deskripsi}</p>
                    <p class="tanggal">📅 ${item.tanggal}</p>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function showGaleriDetail(id) {
    const item = window.galeriKegiatan.find(g => g.id === id);
    if (!item) return;
    
    const modal = document.getElementById('dharma-modal');
    document.getElementById('modal-title').innerText = item.judul;
    document.getElementById('modal-content').innerHTML = `
        <img src="${item.gambar}" alt="${item.judul}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
        <p class="kategori-badge">${item.kategori}</p>
        <p class="tanggal-badge">📅 ${item.tanggal}</p>
        <h4>Deskripsi:</h4>
        <p>${item.deskripsi}</p>
    `;
    modal.style.display = 'block';
}

// ===== FUNGSI UNTUK MODAL =====
function closeModal() {
    const modal = document.getElementById('dharma-modal');
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('dharma-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ===== INISIALISASI SAAT HALAMAN DIMUAT =====
document.addEventListener('DOMContentLoaded', function() {
    // Load data dari dharma-content.js
    const script = document.createElement('script');
    script.src = 'js/dharma-content.js';
    script.onload = function() {
        // Tampilkan konten sesuai tab yang aktif
        const hash = window.location.hash.substring(1);
        switch(hash) {
            case 'dhammapada':
                displayDhammapada();
                break;
            case 'jataka':
                displayCeritaJataka();
                break;
            case 'renungan':
                displayRenunganHarian();
                break;
            case 'kuis':
                displayKuisDharma();
                break;
            case 'faq':
                displayTanyaJawab();
                break;
            case 'galeri':
                displayGaleriKegiatan();
                break;
        }
    };
    document.head.appendChild(script);
});

// ===== FUNGSI UNTUK NAVIGASI ANTAR TAB =====
function navigateDharmaTab(tab) {
    const contentArea = document.getElementById('dharma-tabs-content');
    if (!contentArea) return;
    
    // Hide all content
    const allContents = contentArea.querySelectorAll('[id$="-content"]');
    allContents.forEach(el => el.innerHTML = '');
    
    // Show selected content
    switch(tab) {
        case 'dhammapada':
            displayDhammapada();
            break;
        case 'jataka':
            displayCeritaJataka();
            break;
        case 'renungan':
            displayRenunganHarian();
            break;
        case 'kuis':
            displayKuisDharma();
            break;
        case 'faq':
            displayTanyaJawab();
            break;
        case 'galeri':
            displayGaleriKegiatan();
            break;
    }
}
