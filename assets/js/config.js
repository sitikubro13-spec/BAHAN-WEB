/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * File Konfigurasi Identitas Resmi Sekolah & Tema
 * 
 * Anda dapat memperbarui data identitas sekolah, logo, tagline, 
 * dan warna tema resmi di sini tanpa mengubah logika aplikasi.
 */

const SCHOOL_CONFIG = {
  // Identitas Utama
  schoolName: "MA Shirothul Fuqoha’",
  schoolShortName: "MA Shirothul Fuqoha’",
  schoolType: "Madrasah Aliyah Berbasis Pesantren",
  
  // Aset Logo Resmi (Ganti path file jika aset logo baru telah tersedia)
  // Contoh: "assets/images/logo-resmi-ma-shirothul-fuqoha.png"
  schoolLogo: "assets/images/logo-ma-shirothul-fuqoha.svg",
  schoolLogoAlt: "Logo Resmi MA Shirothul Fuqoha’",

  // Judul & Branding Program
  appTitle: "TABAYYUN DIGITAL",
  appFullTitle: "TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’",
  programBadge: "PROGRAM EDUKASI DIGITAL — MA SHIROTHUL FUQOHA’",
  
  // Tagline & Slogan
  tagline: "Cerdas Bermedia, Berakhlak, dan Bersahabat Tanpa Bullying.",
  subTagline: "Cerdas Memeriksa Informasi, Bijak Berkomentar, dan Berakhlak Tanpa Bullying.",
  hookQuote: "Berhenti sejenak sebelum mengetik, berpikir sebelum percaya, dan berakhlak sebelum berbagi.",
  footerTagline: "Belajar Tabayyun, Menjaga Lisan, Menguatkan Persahabatan.",
  
  slogans: [
    "STOP BULLYING.",
    "THINK BEFORE POSTING.",
    "TABAYYUN BEFORE SHARING.",
    "AKHLAK BEFORE COMMENTING."
  ],

  // Kontak Bantuan & Konseling Internal Sekolah
  counseling: {
    title: "Layanan Bantuan & Bimbingan MA Shirothul Fuqoha’",
    description: "Ruang aman dan rahasia bagi seluruh santri & pelajar untuk berdiskusi serta mencari solusi atas perundungan digital maupun fisik.",
    counselors: [
      { role: "Guru BK / Konseling Madrasah", contact: "Ruang BK MA Shirothul Fuqoha’" },
      { role: "Wali Kelas & Ustadz/Ustadzah Pendamping", contact: "Kantor Asatidz / Madrasah" },
      { role: "Tim Pengasuhan Pesantren", contact: "Biro Pengasuhan Santri" }
    ]
  },

  // Token Tema Warna Resmi (Mudah dikonfigurasi)
  themeColors: {
    primaryGreen: "#047857",    // Emerald Hijau Khas Madrasah & Pesantren
    primaryDark: "#064e3b",     // Deep Forest Green
    accentGold: "#f59e0b",      // Gold / Amber Berilmu
    accentGoldDark: "#d97706",
    mintLight: "#ecfdf5",
    slateDark: "#0f172a",
    dangerRed: "#ef4444"
  }
};

// Export untuk penggunaan modular
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCHOOL_CONFIG;
}
