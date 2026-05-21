// ===== DATA SYAIR DHAMMAPADA =====
const dhammapada = [
    {
        id: 1,
        ayat: 1,
        syair: "Manolah panduan semua hal, manolah adalah unggul di semua hal. Jika seseorang berbicara atau berbuat dengan manolah yang murni, kebahagiaan akan mengikutinya seperti bayangan yang tidak pernah meninggalkan.",
        makna: "Pikiran adalah awal dari semua tindakan. Pikiran yang baik akan menghasilkan tindakan baik.",
        kategori: "Manolah (Pikiran)"
    },
    {
        id: 2,
        ayat: 2,
        syair: "Hati yang tulus ikhlas membawa ketenangan. Hati yang rakus membawa kegelisahan. Hati yang pemalas membawa kesengsaraan.",
        makna: "Keadaan hati menentukan kebahagiaan kita. Hati yang tulus akan merasakan kedamaian sejati.",
        kategori: "Hati (Citta)"
    },
    {
        id: 3,
        ayat: 3,
        syair: "Jangan berbuat keburukan meski keburukan itu menyenangkan. Sesudah keburukan terlalu lambat untuk menyesal.",
        makna: "Hindari perbuatan buruk meski terlihat menyenangkan, karena akibatnya akan menyakitkan di kemudian hari.",
        kategori: "Kebijaksanaan"
    },
    {
        id: 4,
        ayat: 4,
        syair: "Berbuat baik itu sulit bagi mereka yang malas, tetapi mudah bagi mereka yang rajin dan bersemangat.",
        makna: "Rajin dalam berbuat baik adalah kunci menuju kehidupan yang baik dan bahagia.",
        kategori: "Usaha (Viriya)"
    },
    {
        id: 5,
        ayat: 5,
        syair: "Jangan biarkan dirimu lalai, jangan biarkan nafsumu menguasai. Mereka yang selalu siap dan waspada akan mencapai nirvana.",
        makna: "Kesadaran diri dan kewaspadaan adalah jalan menuju pembebasan sejati.",
        kategori: "Kesadaran (Appamada)"
    }
];

// ===== DATA CERITA JATAKA =====
const jatakaStories = [
    {
        id: 1,
        judul: "Cerita Kelinci yang Berani",
        deskripsi: "Kelinci kecil yang berani menyelamatkan temannya dari bahaya dengan kebijaksanaan.",
        isi: "Ada seorang kelinci kecil yang hidup di hutan. Suatu hari, seekor singa lapar mengejar kelinci itu. Kelinci itu berlari sekencang mungkin dan bersembunyi di lubang pohon. Singa itu tidak bisa masuk karena tubuhnya terlalu besar. Kelinci itu mengeluarkan kepala perlahan-lahan. Singa itu kembali mengejar, tetapi kelinci itu menunjukkan celah jalan rahasia di hutan yang mengarah ke sungai. Singa itu mengikutinya, tetapi terjatuh ke sungai dan arus membawanya pergi. Kelinci itu selamat dan menyadari bahwa keberanian dan kebijaksanaan adalah senjata terbaik.",
        pesan: "Keberanian dan kebijaksanaan dapat mengalahkan kekuatan fisik.",
        kelas: "Kelas 1-2"
    },
    {
        id: 2,
        judul: "Cerita Monyet yang Rakus",
        deskripsi: "Monyet yang rakus menjadi pelajaran tentang akibat keserakahan.",
        isi: "Seorang monyet menemukan sebuah guci yang berisi kacang-kacangan. Dia memasukkan tangannya ke dalam guci untuk mengambil kacang-kacangan. Tetapi tangannya tidak bisa ditarik keluar karena menggenggam kacang-kacangan terlalu erat. Monyet itu menangis dan berteriak, tetapi tidak bisa lepas. Akhirnya, monyet itu melepaskan kacang-kacangan dari tangannya dan baru bisa keluar dari guci. Monyet itu menyadari bahwa keserakahan membawa duka.",
        pesan: "Keserakahan membawa kesengsaraan, sedangkan rela dan berbagi membawa kebahagiaan.",
        kelas: "Kelas 1-2"
    },
    {
        id: 3,
        judul: "Cerita Kura-Kura dan Kelinci",
        deskripsi: "Cerita tentang ketekunan dan kerendahan hati.",
        isi: "Kelinci yang cepat menantang kura-kura untuk berlomba lari. Kelinci itu yakin akan menang karena kecepatannya. Di tengah perjalanan, kelinci itu merasa lelah dan tidur di bawah pohon. Sementara kura-kura terus berjalan perlahan-lahan dengan semangat tinggi. Ketika kelinci itu bangun, kura-kura sudah sampai di garis finish. Kelinci itu kalah dan belajar bahwa ketekunan lebih penting daripada bakat alami.",
        pesan: "Ketekunan dan kerja keras lebih penting daripada bakat alami saja.",
        kelas: "Kelas 2-3"
    },
    {
        id: 4,
        judul: "Cerita Raja yang Adil",
        deskripsi: "Kisah tentang seorang raja yang memerintah dengan adil dan bijaksana.",
        isi: "Seorang raja berbudi baik dan adil dalam memerintah kerajaannya. Dia mendengarkan keluhan rakyat dan berusaha menyelesaikannya dengan bijaksana. Dia tidak pernah bersikap sewenang-wenang terhadap rakyatnya. Akhirnya, kerajaan itu menjadi makmur dan rakyatnya bahagia. Raja itu dihormati dan disayangi oleh semua orang.",
        pesan: "Keadilan dan kebijaksanaan membawa kemakmuran dan kebahagiaan bagi semua.",
        kelas: "Kelas 3-4"
    },
    {
        id: 5,
        judul: "Cerita Guru dan Murid",
        deskripsi: "Cerita tentang pentingnya hormat kepada guru dan kemauan untuk belajar.",
        isi: "Seorang murid yang tekun belajar dari seorang guru bijaksana. Murid itu tidak pernah malas bertanya dan selalu mendengarkan dengan seksama. Guru itu juga sabar dan penuh kasih sayang dalam mengajar. Akhirnya, murid itu menjadi cerdas dan berbudi luhur. Murid itu berhasil karena hormat kepada guru dan kemauan untuk belajar.",
        pesan: "Hormat kepada guru dan kemauan untuk belajar adalah kunci kesuksesan.",
        kelas: "Kelas 4-5"
    }
];

// ===== DATA RENUNGAN HARIAN (SUTTA) =====
const renunganHarian = [
    {
        id: 1,
        hari: "Senin",
        judul: "Tentang Kasih Sayang",
        sutta: "Metta Sutta (Sutta tentang Cinta Kasih)",
        isi: "Semua makhluk hidup menginginkan kebahagiaan dan menghindari penderitaan. Oleh karena itu, kita harus mengembangkan kasih sayang terhadap semua makhluk, termasuk musuh kita. Kasih sayang yang tulus ikhlas akan membawa kedamaian kepada kita dan orang lain.",
        refleksi: "Apakah hari ini saya telah menunjukkan kasih sayang kepada orang lain?"
    },
    {
        id: 2,
        hari: "Selasa",
        judul: "Tentang Kebijaksanaan",
        sutta: "Panna Sutta (Sutta tentang Kebijaksanaan)",
        isi: "Kebijaksanaan adalah cahaya yang menerangi jalan kita. Dengan kebijaksanaan, kita dapat membedakan yang baik dan yang buruk, yang benar dan yang salah. Kebijaksanaan datang dari pembelajaran dan perenungan yang mendalam.",
        refleksi: "Apakah saya telah menggunakan kebijaksanaan dalam membuat keputusan hari ini?"
    },
    {
        id: 3,
        hari: "Rabu",
        judul: "Tentang Kesabaran",
        sutta: "Khanti Sutta (Sutta tentang Kesabaran)",
        isi: "Kesabaran adalah salah satu kebajikan tertinggi. Ketika kita sabar, kita tidak mudah marah dan dapat memahami orang lain dengan lebih baik. Kesabaran membawa kedamaian pikiran dan hubungan yang harmonis.",
        refleksi: "Apakah saya telah bersabar dalam menghadapi kesulitan hari ini?"
    },
    {
        id: 4,
        hari: "Kamis",
        judul: "Tentang Keseimbangan Hidup",
        sutta: "Upekkha Sutta (Sutta tentang Keseimbangan)",
        isi: "Keseimbangan dalam hidup adalah kunci kebahagiaan. Jangan terlalu obsesif dengan sesuatu, namun juga jangan bersikap acuh tak acuh. Keseimbangan antara kerja dan istirahat, antara serius dan santai, adalah penting.",
        refleksi: "Apakah saya telah menjaga keseimbangan dalam hidup saya?"
    },
    {
        id: 5,
        hari: "Jumat",
        judul: "Tentang Kebersihan Hati",
        sutta: "Citta Suddhi Sutta (Sutta tentang Kemurnian Hati)",
        isi: "Hati yang bersih dan murni adalah tempat berkembangnya kebaikan. Hati yang dipenuhi dengan keserakahan, kebencian, dan kebodohan adalah tempat berkembangnya kesengsaraan. Kita harus membersihkan hati kita dari hal-hal negatif.",
        refleksi: "Apakah saya telah membersihkan hati saya dari pikiran-pikiran negatif hari ini?"
    }
];

// ===== DATA KUIS DHARMA =====
const kuisDharma = [
    {
        id: 1,
        soal: "Apa yang dimaksud dengan Karma?",
        pilihan: [
            "A. Takdir yang tidak bisa diubah",
            "B. Perbuatan dan akibatnya",
            "C. Keberuntungan yang datang tiba-tiba",
            "D. Hukuman dari dewa"
        ],
        jawaban: "B",
        penjelasan: "Karma berarti perbuatan dan akibatnya. Setiap perbuatan kita akan memiliki akibat yang sesuai.",
        kelas: "Kelas 3-4"
    },
    {
        id: 2,
        soal: "Siapakah pendiri agama Buddha?",
        pilihan: [
            "A. Brahma",
            "B. Vishnu",
            "C. Siddhartha Gautama (Buddha)",
            "D. Shiva"
        ],
        jawaban: "C",
        penjelasan: "Buddha adalah gelar untuk Siddhartha Gautama yang menemukan jalan menuju Nirvana.",
        kelas: "Kelas 1-2"
    },
    {
        id: 3,
        soal: "Berapa jumlah Sila (Peraturan Moral) dalam agama Buddha?",
        pilihan: [
            "A. 3 Sila",
            "B. 5 Sila",
            "C. 7 Sila",
            "D. 10 Sila"
        ],
        jawaban: "B",
        penjelasan: "Lima Sila adalah: (1) Tidak membunuh, (2) Tidak mencuri, (3) Tidak berbuat asusila, (4) Tidak berdusta, (5) Tidak minum minuman keras.",
        kelas: "Kelas 2-3"
    },
    {
        id: 4,
        soal: "Apa tujuan utama hidup dalam agama Buddha?",
        pilihan: [
            "A. Menjadi kaya raya",
            "B. Mencapai Nirvana",
            "C. Menjadi pemimpin",
            "D. Memiliki banyak teman"
        ],
        jawaban: "B",
        penjelasan: "Tujuan utama hidup dalam agama Buddha adalah mencapai Nirvana, yaitu pembebasan dari penderitaan.",
        kelas: "Kelas 4-5"
    },
    {
        id: 5,
        soal: "Apa yang dimaksud dengan Empat Kebenaran Mulia?",
        pilihan: [
            "A. Empat perintah dari Buddha",
            "B. Kebenaran tentang penderitaan, penyebab, penghapusan, dan jalan menuju penghapusan penderitaan",
            "C. Empat dewa dalam agama Buddha",
            "D. Empat jenis karma"
        ],
        jawaban: "B",
        penjelasan: "Empat Kebenaran Mulia adalah inti ajaran Buddha tentang penderitaan dan cara mengatasinya.",
        kelas: "Kelas 5-6"
    }
];

// ===== DATA TANYA JAWAB (FAQ) =====
const tanyaJawab = [
    {
        id: 1,
        pertanyaan: "Apa itu agama Buddha?",
        jawaban: "Agama Buddha adalah ajaran tentang jalan menuju kebahagiaan sejati melalui kedisiplinan pikiran, ucapan, dan perbuatan. Buddha mengajarkan bahwa kebahagiaan sejati datang dari dalam diri kita, bukan dari luar.",
        kategori: "Umum"
    },
    {
        id: 2,
        pertanyaan: "Siapa itu Buddha?",
        jawaban: "Buddha adalah gelar untuk Siddhartha Gautama yang lahir pada tahun 623 SM di Nepal. Dia adalah pendiri agama Buddha dan dianggap sebagai guru spiritual tertinggi.",
        kategori: "Tokoh Penting"
    },
    {
        id: 3,
        pertanyaan: "Apa perbedaan antara agama Buddha dengan agama lain?",
        jawaban: "Agama Buddha tidak menyembah dewa, tetapi fokus pada pengembangan diri pribadi dan pencapaian Nirvana. Buddha adalah guru, bukan dewa. Setiap orang bisa menjadi Buddha jika mengikuti ajarannya dengan sungguh-sungguh.",
        kategori: "Perbandingan Agama"
    },
    {
        id: 4,
        pertanyaan: "Bagaimana cara menjadi Buddha?",
        jawaban: "Untuk menjadi Buddha, kita perlu mengikuti Delapan Jalan Mulia yang terdiri dari: pandangan benar, niat benar, ucapan benar, perbuatan benar, pencaharian benar, usaha benar, perhatian benar, dan konsentrasi benar.",
        kategori: "Pembelajaran"
    },
    {
        id: 5,
        pertanyaan: "Apa itu Nirvana?",
        jawaban: "Nirvana adalah keadaan bebas dari penderitaan, keserakahan, dan kebencian. Ini adalah tujuan akhir dalam agama Buddha, yaitu kedamaian dan kebahagiaan sejati yang abadi.",
        kategori: "Konsep Penting"
    },
    {
        id: 6,
        pertanyaan: "Bagaimana cara berbudi pekerti baik menurut agama Buddha?",
        jawaban: "Berbudi pekerti baik dimulai dari niat yang tulus ikhlas. Kita harus jujur, tidak mencuri, tidak membunuh, tidak berzina, dan tidak minum minuman keras. Selain itu, kita juga harus menunjukkan kasih sayang dan kemurahan hati kepada semua makhluk.",
        kategori: "Budi Pekerti"
    },
    {
        id: 7,
        pertanyaan: "Mengapa kita harus menghormati guru?",
        jawaban: "Guru adalah pembimbing kita dalam menempuh jalan kesuksesan. Guru memberikan ilmu, kebijaksanaan, dan bimbingan untuk mengembangkan potensi kita. Menghormati guru adalah wujud terima kasih atas dedikasi mereka.",
        kategori: "Budi Pekerti"
    },
    {
        id: 8,
        pertanyaan: "Apa hubungan antara Karma dan takdir?",
        jawaban: "Karma adalah perbuatan kita dan akibatnya. Takdir bukan sesuatu yang tidak bisa diubah. Masa depan kita ditentukan oleh karma kita sendiri. Oleh karena itu, kita memiliki kekuatan untuk mengubah nasib kita melalui perbuatan baik.",
        kategori: "Konsep Penting"
    }
];

// ===== DATA GALERI KEGIATAN =====
const galeriKegiatan = [
    {
        id: 1,
        judul: "Kegiatan Belajar Agama Buddha Kelas 1",
        deskripsi: "Siswa kelas 1 belajar tentang dasar-dasar agama Buddha dengan metode yang menyenangkan dan interaktif.",
        kategori: "Pembelajaran",
        gambar: "https://via.placeholder.com/300x200?text=Kelas+1+Buddha",
        tanggal: "21 Mei 2026"
    },
    {
        id: 2,
        judul: "Upacara Hari Raya Waisak",
        deskripsi: "Seluruh siswa dan guru SDN Sumogawe 03 mengikuti upacara peringatan Hari Raya Waisak yang penuh khidmat.",
        kategori: "Keagamaan",
        gambar: "https://via.placeholder.com/300x200?text=Upacara+Waisak",
        tanggal: "15 Mei 2026"
    },
    {
        id: 3,
        judul: "Kegiatan Meditasi Bersama",
        deskripsi: "Siswa melakukan meditasi bersama untuk mengembangkan kesadaran diri dan ketenangan pikiran.",
        kategori: "Pembelajaran",
        gambar: "https://via.placeholder.com/300x200?text=Meditasi",
        tanggal: "10 Mei 2026"
    },
    {
        id: 4,
        judul: "Kunjungan ke Vihara Buddha",
        deskripsi: "Siswa kelas 4-5 mengunjungi vihara Buddha untuk belajar langsung tentang tempat ibadah dan aturan-aturan dalam vihara.",
        kategori: "Kunjungan Edukasi",
        gambar: "https://via.placeholder.com/300x200?text=Kunjungan+Vihara",
        tanggal: "05 Mei 2026"
    },
    {
        id: 5,
        judul: "Diskusi Budi Pekerti",
        deskripsi: "Siswa berdiskusi tentang pentingnya budi pekerti baik dalam kehidupan sehari-hari dan dampaknya bagi masyarakat.",
        kategori: "Pembelajaran",
        gambar: "https://via.placeholder.com/300x200?text=Diskusi+Budi+Pekerti",
        tanggal: "01 Mei 2026"
    },
    {
        id: 6,
        judul: "Kegiatan Berbagi dan Membantu",
        deskripsi: "Siswa melakukan kegiatan berbagi makanan dan membantu teman yang membutuhkan sebagai wujud kasih sayang.",
        kategori: "Kegiatan Sosial",
        gambar: "https://via.placeholder.com/300x200?text=Berbagi+Makanan",
        tanggal: "28 April 2026"
    }
];

// Export data
export { dhammapada, jatakaStories, renunganHarian, kuisDharma, tanyaJawab, galeriKegiatan };
