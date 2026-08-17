/**
 * Superadmin Logic - Tabayyun Digital
 */

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  
  // --- LOGIN PAGE LOGIC ---
  if (currentPath.includes('superadmin-login.html')) {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // Jika sudah login, redirect ke dashboard
    if (localStorage.getItem('superadmin_logged_in') === 'true') {
      window.location.href = 'superadmin-dashboard.html';
    }

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        // Validasi Kredensial Default
        if (user === 'superadmin' && pass === 'admin') {
          localStorage.setItem('superadmin_logged_in', 'true');
          window.location.href = 'superadmin-dashboard.html';
        } else {
          loginError.style.display = 'block';
          setTimeout(() => {
            loginError.style.display = 'none';
          }, 3000);
        }
      });
    }
  }

  // --- DASHBOARD PAGE LOGIC ---
  if (currentPath.includes('superadmin-dashboard.html')) {
    // 1. Cek Autentikasi
    if (localStorage.getItem('superadmin_logged_in') !== 'true') {
      window.location.href = 'superadmin-login.html';
      return; // Stop eksekusi script selanjutnya
    }

    // 2. Handle Logout
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        localStorage.removeItem('superadmin_logged_in');
        window.location.href = 'superadmin-login.html';
      });
    }

    // 3. Handle Sidebar Navigation (Tab Switching)
    const navItems = document.querySelectorAll('.nav-item');
    const reportPanels = document.querySelectorAll('.report-panel');
    const currentPanelTitle = document.getElementById('currentPanelTitle');

    const panelTitles = {
      'panel-bk': 'Laporan Guru BK',
      'panel-agama': 'Laporan Guru Agama',
      'panel-it': 'Laporan Ahli IT'
    };

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        // Hapus class active dari semua nav & panel
        navItems.forEach(n => n.classList.remove('active'));
        reportPanels.forEach(p => p.classList.remove('active'));

        // Tambah class active ke yang diklik
        item.classList.add('active');
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
        
        // Update Title Header
        if (currentPanelTitle && panelTitles[targetId]) {
          currentPanelTitle.textContent = panelTitles[targetId];
        }

        // Render chart jika masuk ke panel IT
        if (targetId === 'panel-it' && !window.chartsRendered) {
          renderITCharts();
          window.chartsRendered = true;
        }
      });
    });

    // 4. Populate Mock Data (Tabel BK & Agama)
    populateTables();
  }
});

// Fungsi Mengisi Tabel
function populateTables() {
  // Data Laporan BK
  const bkData = [
    { date: '12 Okt 2026', name: 'A.R. (X-MIPA 2)', category: 'Cyberbullying (Grup WA)', severity: 'Tinggi', status: 'Sedang Diproses' },
    { date: '10 Okt 2026', name: 'F.Z. (XI-IPS 1)', category: 'Pelecehan Lisan', severity: 'Sedang', status: 'Selesai (Mediasi)' },
    { date: '08 Okt 2026', name: 'S.M. (X-MIPA 1)', category: 'Pengucilan Sosial', severity: 'Rendah', status: 'Selesai (Pemantauan)' },
    { date: '05 Okt 2026', name: 'M.K. (XII-IPS 2)', category: 'Penyebaran Foto', severity: 'Tinggi', status: 'Pemanggilan Orang Tua' },
  ];

  const bkTableBody = document.getElementById('bkTableBody');
  if (bkTableBody) {
    bkTableBody.innerHTML = bkData.map(row => `
      <tr>
        <td>${row.date}</td>
        <td><strong>${row.name}</strong></td>
        <td>${row.category}</td>
        <td>${getSeverityBadge(row.severity)}</td>
        <td>${row.status}</td>
      </tr>
    `).join('');
  }

  // Data Laporan Agama
  const agamaData = [
    { class: 'Kelas X - Semua', avg: '82 Poin', weakness: 'Adab Bercanda (QS. Al-Hujurat 11)', action: 'Tugas Resume Tafsir' },
    { class: 'Kelas XI - Semua', avg: '88 Poin', weakness: 'Langkah Tabayyun Berita Online', action: 'Simulasi Analisis Hoaks' },
    { class: 'Kelas XII - Semua', avg: '92 Poin', weakness: 'Think Before Posting', action: 'Apresiasi & Pemantauan Mandiri' },
  ];

  const agamaTableBody = document.getElementById('agamaTableBody');
  if (agamaTableBody) {
    agamaTableBody.innerHTML = agamaData.map(row => `
      <tr>
        <td><strong>${row.class}</strong></td>
        <td>${row.avg}</td>
        <td>${row.weakness}</td>
        <td>${row.action}</td>
      </tr>
    `).join('');
  }
}

// Helper untuk Badge Keparahan
function getSeverityBadge(severity) {
  let badgeClass = 'badge-low';
  if (severity === 'Tinggi') badgeClass = 'badge-high';
  if (severity === 'Sedang') badgeClass = 'badge-medium';
  return `<span class="badge ${badgeClass}">${severity}</span>`;
}

// Fungsi Render Grafik Chart.js
function renderITCharts() {
  // Chart 1: Traffic
  const ctxTraffic = document.getElementById('trafficChart');
  if (ctxTraffic) {
    new Chart(ctxTraffic, {
      type: 'line',
      data: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        datasets: [{
          label: 'Kunjungan Edukasi Tabayyun',
          data: [120, 190, 150, 220, 180, 80, 110],
          borderColor: '#047857',
          backgroundColor: 'rgba(4, 120, 87, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  // Chart 2: Devices
  const ctxDevice = document.getElementById('deviceChart');
  if (ctxDevice) {
    new Chart(ctxDevice, {
      type: 'doughnut',
      data: {
        labels: ['Smartphone', 'Laptop/Desktop', 'Tablet'],
        datasets: [{
          data: [75, 20, 5],
          backgroundColor: ['#047857', '#fbbf24', '#3b82f6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' }
        }
      }
    });
  }
}
