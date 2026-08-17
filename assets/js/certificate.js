/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * Generator Sertifikat Digital & Ikrar Pelajar Berakhlak Mulia
 */

const CertificateModule = {
  init() {
    this.setupListeners();
  },

  setupListeners() {
    const btnGenerate = document.getElementById("btnGenerateCertificate");
    const nameInput = document.getElementById("studentPledgeName");

    if (btnGenerate && nameInput) {
      btnGenerate.onclick = () => {
        const name = nameInput.value.trim();
        if (!name) {
          alert("Silakan masukkan nama lengkap Anda untuk dicantumkan pada sertifikat resmi.");
          nameInput.focus();
          return;
        }

        GamificationManager.setStudentName(name);
        this.renderCertificate(name);
      };
    }

    const btnPrint = document.getElementById("btnPrintCertificate");
    if (btnPrint) {
      btnPrint.onclick = () => {
        window.print();
      };
    }
  },

  renderCertificate(studentName) {
    const certWrapper = document.getElementById("certificateDisplayArea");
    if (!certWrapper) return;

    const rank = GamificationManager.getCurrentRank();
    const points = GamificationManager.state.points || 0;
    const today = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const certHtml = `
      <div class="official-certificate-card" id="printableCertificate">
        <!-- Certificate Frame & Corner Ornaments -->
        <div class="cert-inner-frame">
          <!-- Header Branding -->
          <div class="cert-header">
            <div class="cert-school-badge">
              <img src="${SCHOOL_CONFIG.schoolLogo}" alt="${SCHOOL_CONFIG.schoolName}" class="cert-logo-img">
            </div>
            <div class="cert-school-title">${SCHOOL_CONFIG.schoolName.toUpperCase()}</div>
            <div class="cert-school-sub">MADRASAH ALIYAH BERBASIS PESANTREN</div>
            <div class="cert-program-label">PROGRAM EDUKASI TABAYYUN DIGITAL &amp; ANTI-BULLYING</div>
          </div>

          <!-- Main Certificate Title -->
          <div class="cert-main-heading">SERTIFIKAT APRESIASI</div>
          <div class="cert-given-to">Diberikan dengan penuh rasa bangga kepada:</div>

          <!-- Student Name -->
          <div class="cert-student-name">${studentName}</div>

          <!-- Description -->
          <div class="cert-statement">
            Telah berhasil menyelesaikan seluruh modul pembelajaran, simulasi kasus, serta refleksi etika komunikasi digital pada program <strong>“TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’”</strong> dengan predikat:
          </div>

          <!-- Rank & Points Badge -->
          <div class="cert-rank-box">
            <img src="${rank.badgeIcon}" alt="${rank.title}" class="cert-rank-icon">
            <div>
              <div class="cert-rank-title">${rank.title.toUpperCase()}</div>
              <div class="cert-rank-points">Total Capaian: ${points} Poin Akhlak Digital</div>
            </div>
          </div>

          <!-- Quranic Motto -->
          <div class="cert-motto-quote">
            “Cerdas Memeriksa Informasi, Bijak Berkomentar, dan Berakhlak Tanpa Bullying”
            <br>
            <small style="color: #64748b; font-size: 0.85em;">(QS. Al-Hujurat: 11 &bull; QS. Al-Isra: 53)</small>
          </div>

          <!-- Signatures & School Seal -->
          <div class="cert-footer-grid">
            <div class="cert-sign-col">
              <div class="cert-date">Diterbitkan: ${today}</div>
              <div class="cert-sign-role">Tim Pembina Karakter Digital</div>
              <div class="cert-sign-space">
                <span class="cert-digital-signature">Tervalidasi Digital ✔</span>
              </div>
              <div class="cert-sign-name">MA Shirothul Fuqoha’</div>
            </div>

            <!-- Official Seal Stamp -->
            <div class="cert-seal-col">
              <div class="cert-stamp">
                <div class="stamp-circle">
                  <div class="stamp-inner">
                    <span>MA SHIROTHUL FUQOHA’</span>
                    <small>RESMI</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="cert-sign-col">
              <div class="cert-date">Kepala Madrasah / Pengasuh</div>
              <div class="cert-sign-role">MA Shirothul Fuqoha’</div>
              <div class="cert-sign-space">
                <span class="cert-digital-signature">Mubarok &amp; Sah ✔</span>
              </div>
              <div class="cert-sign-name">Keluarga Besar MA Shirothul Fuqoha’</div>
            </div>
          </div>
        </div>
      </div>
    `;

    certWrapper.innerHTML = certHtml;
    certWrapper.style.display = "block";
    
    const controls = document.getElementById("certificateControls");
    if (controls) controls.style.display = "block";

    certWrapper.scrollIntoView({ behavior: "smooth" });

    GamificationManager.addPoints("cert_issued", 50, "Sertifikat Resmi Berhasil Diterbitkan! (+50 XP)");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  CertificateModule.init();
});
