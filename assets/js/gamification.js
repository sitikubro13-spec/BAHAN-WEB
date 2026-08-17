/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * Sistem Gamifikasi, Poin & Penyimpanan LocalStorage
 */

const GamificationManager = {
  STORAGE_KEY: "tabayyun_digital_progress_v1",

  // Default State
  state: {
    studentName: "",
    points: 0,
    completedItems: {}, // e.g. { 'sim_1': 50, 'quiz_tf': 100, 'reflection': 50 }
    unlockedBadges: ["pemula"],
    lastUpdated: new Date().toISOString()
  },

  // Inisialisasi
  init() {
    this.loadState();
    this.updateUI();
  },

  // Memuat data dari localStorage
  loadState() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn("Gagal memuat progress dari localStorage:", e);
    }
  },

  // Menyimpan data ke localStorage
  saveState() {
    try {
      this.state.lastUpdated = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      this.updateUI();
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent("tabayyun-progress-updated", { detail: this.state }));
    } catch (e) {
      console.warn("Gagal menyimpan progress ke localStorage:", e);
    }
  },

  // Tambah Poin untuk aktivitas tertentu
  addPoints(activityId, amount, customMessage) {
    if (this.state.completedItems[activityId]) {
      // Sudah pernah diselesaikan, beri respon ringan tanpa menduplikasi poin berlebihan
      this.showToast(`Aktivitas sudah pernah diselesaikan! (+0 poin)`, "info");
      return false;
    }

    const previousRank = this.getCurrentRank();
    this.state.points += amount;
    this.state.completedItems[activityId] = amount;
    
    // Cek apakah ada rank baru yang terbuka
    const newRank = this.getCurrentRank();
    if (newRank.rankId !== previousRank.rankId && !this.state.unlockedBadges.includes(newRank.rankId)) {
      this.state.unlockedBadges.push(newRank.rankId);
      this.triggerRankUpModal(newRank);
    }

    this.saveState();

    const msg = customMessage || `Selamat! Anda mendapatkan +${amount} Poin Akhlak!`;
    this.showToast(msg, "success");
    return true;
  },

  // Dapatkan Rank Saat Ini Berdasarkan Total Poin
  getCurrentRank() {
    const pts = this.state.points || 0;
    const ranks = APP_DATA.gamificationRanks;
    for (let i = ranks.length - 1; i >= 0; i--) {
      if (pts >= ranks[i].minPoints) {
        return ranks[i];
      }
    }
    return ranks[0];
  },

  // Dapatkan persentase menuju rank berikutnya
  getNextRankProgress() {
    const pts = this.state.points || 0;
    const current = this.getCurrentRank();
    const ranks = APP_DATA.gamificationRanks;
    const currentIndex = ranks.findIndex(r => r.rankId === current.rankId);
    
    if (currentIndex === ranks.length - 1) {
      return { currentPts: pts, maxPts: current.minPoints, percent: 100, nextRankTitle: "Peringkat Tertinggi (Maksimal)" };
    }

    const nextRank = ranks[currentIndex + 1];
    const range = nextRank.minPoints - current.minPoints;
    const progressInCurrent = pts - current.minPoints;
    const percent = Math.min(100, Math.round((progressInCurrent / range) * 100));

    return {
      currentPts: pts,
      nextRankMin: nextRank.minPoints,
      neededPts: Math.max(0, nextRank.minPoints - pts),
      percent: Math.max(5, percent),
      nextRankTitle: nextRank.title
    };
  },

  // Perbarui UI pada header, navbar, dan floating widget
  updateUI() {
    const currentRank = this.getCurrentRank();
    const progress = this.getNextRankProgress();
    const pts = this.state.points || 0;

    // Header / Nav Poin Counters
    const pointDisplays = document.querySelectorAll(".js-point-count");
    pointDisplays.forEach(el => {
      el.textContent = `${pts} XP`;
    });

    // Rank Badge Displays
    const rankTitleDisplays = document.querySelectorAll(".js-rank-title");
    rankTitleDisplays.forEach(el => {
      el.textContent = currentRank.title;
    });

    const rankIconDisplays = document.querySelectorAll(".js-rank-icon");
    rankIconDisplays.forEach(el => {
      if (el.tagName === "IMG") {
        el.src = currentRank.badgeIcon;
        el.alt = currentRank.title;
      }
    });

    // Progress Bar
    const progressBars = document.querySelectorAll(".js-rank-progress-bar");
    progressBars.forEach(el => {
      el.style.width = `${progress.percent}%`;
    });

    const progressTexts = document.querySelectorAll(".js-rank-progress-text");
    progressTexts.forEach(el => {
      if (progress.neededPts !== undefined && progress.neededPts > 0) {
        el.textContent = `${progress.neededPts} XP lagi menuju ${progress.nextRankTitle}`;
      } else {
        el.textContent = `Lencana Tertinggi Diraih! ⭐`;
      }
    });
  },

  // Set Nama Siswa
  setStudentName(name) {
    if (!name || name.trim() === "") return;
    this.state.studentName = name.trim();
    this.saveState();
  },

  // Tampilkan Modal Peningkatan Peringkat
  triggerRankUpModal(newRank) {
    const modal = document.getElementById("rankUpModal");
    if (!modal) return;

    const modalRankTitle = modal.querySelector(".js-modal-rank-title");
    const modalRankIcon = modal.querySelector(".js-modal-rank-icon");
    const modalRankDesc = modal.querySelector(".js-modal-rank-desc");

    if (modalRankTitle) modalRankTitle.textContent = newRank.title;
    if (modalRankIcon) modalRankIcon.src = newRank.badgeIcon;
    if (modalRankDesc) modalRankDesc.textContent = newRank.description;

    modal.classList.add("is-active");
  },

  // Toast Notification Ringan & Interaktif
  showToast(message, type = "info") {
    let container = document.getElementById("tabayyun-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "tabayyun-toast-container";
      container.className = "tabayyun-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `tabayyun-toast tabayyun-toast--${type} animate-slide-up`;
    
    let iconSvg = "✨";
    if (type === "success") iconSvg = "🎉";
    if (type === "warning") iconSvg = "⚠️";
    if (type === "danger") iconSvg = "🛑";

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-text">${message}</div>
      <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("toast-fade-out");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  },

  // Reset Progress (Bermanfaat untuk demonstrasi atau mengulang belajar)
  resetProgress() {
    if (confirm("Apakah Anda yakin ingin mengulang seluruh progres belajar dan poin dari awal?")) {
      localStorage.removeItem(this.STORAGE_KEY);
      this.state = {
        studentName: "",
        points: 0,
        completedItems: {},
        unlockedBadges: ["pemula"],
        lastUpdated: new Date().toISOString()
      };
      this.updateUI();
      this.showToast("Progres berhasil direset. Selamat belajar kembali!", "info");
      window.location.reload();
    }
  }
};

// Auto inisialisasi ketika DOM siap
document.addEventListener("DOMContentLoaded", () => {
  GamificationManager.init();
});
