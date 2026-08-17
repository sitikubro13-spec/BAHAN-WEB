/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * Script Utama Aplikasi (Navigasi, Modal, Smooth Scroll & Sinkronisasi Identitas)
 */

const App = {
  init() {
    this.syncSchoolIdentity();
    this.setupNavbar();
    this.setupModals();
    this.setupScrollSpy();
    this.setupBackToTop();
  },

  // 1. Sinkronisasi Identitas Sekolah ke Semua Elemen DOM
  syncSchoolIdentity() {
    // School Name
    document.querySelectorAll(".js-school-name").forEach(el => {
      el.textContent = SCHOOL_CONFIG.schoolName;
    });

    // School Short Name
    document.querySelectorAll(".js-school-short").forEach(el => {
      el.textContent = SCHOOL_CONFIG.schoolShortName;
    });

    // School Logo Images
    document.querySelectorAll(".js-school-logo").forEach(el => {
      if (el.tagName === "IMG") {
        el.src = SCHOOL_CONFIG.schoolLogo;
        el.alt = SCHOOL_CONFIG.schoolLogoAlt;
      }
    });

    // Taglines
    document.querySelectorAll(".js-school-tagline").forEach(el => {
      el.textContent = SCHOOL_CONFIG.tagline;
    });

    document.querySelectorAll(".js-footer-tagline").forEach(el => {
      el.textContent = SCHOOL_CONFIG.footerTagline;
    });
  },

  // 2. Navigasi & Mobile Menu Drawer
  setupNavbar() {
    const hamburger = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const navLinks = document.querySelectorAll(".nav-link, .drawer-link");

    if (hamburger && mobileDrawer && drawerOverlay) {
      const toggleMenu = () => {
        const isOpen = mobileDrawer.classList.contains("is-open");
        if (isOpen) {
          mobileDrawer.classList.remove("is-open");
          drawerOverlay.classList.remove("is-visible");
          document.body.style.overflow = "";
        } else {
          mobileDrawer.classList.add("is-open");
          drawerOverlay.classList.add("is-visible");
          document.body.style.overflow = "hidden";
        }
      };

      hamburger.addEventListener("click", toggleMenu);
      drawerOverlay.addEventListener("click", toggleMenu);

      const closeDrawerBtn = document.getElementById("closeDrawerBtn");
      if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", toggleMenu);
      }
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            if (mobileDrawer && mobileDrawer.classList.contains("is-open")) {
              mobileDrawer.classList.remove("is-open");
              drawerOverlay.classList.remove("is-visible");
              document.body.style.overflow = "";
            }

            const headerOffset = 80;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      });
    });
  },

  // 3. Setup Modal Interaktif
  setupModals() {
    // Bullying Detail Modal
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-open-bullying-detail");
      if (btn) {
        const index = parseInt(btn.dataset.catIndex);
        const data = APP_DATA.bullyingCategories[index];
        if (data) {
          App.openBullyingModal(data);
        }
      }
    });

    // Generic Modal Closer
    document.querySelectorAll(".js-modal-close").forEach(btn => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal-backdrop");
        if (modal) modal.classList.remove("is-active");
      });
    });

    // Close on backdrop click
    document.querySelectorAll(".modal-backdrop").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("is-active");
        }
      });
    });
  },

  openBullyingModal(cat) {
    const modal = document.getElementById("bullyingDetailModal");
    if (!modal) return;

    const title = modal.querySelector(".js-modal-cat-title");
    const desc = modal.querySelector(".js-modal-cat-desc");
    const examples = modal.querySelector(".js-modal-cat-examples");
    const impact = modal.querySelector(".js-modal-cat-impact");
    const islamic = modal.querySelector(".js-modal-cat-islamic");

    if (title) title.textContent = cat.title;
    if (desc) desc.textContent = cat.description;
    if (impact) impact.textContent = cat.impact;
    if (islamic) islamic.textContent = cat.islamicView;
    if (examples) {
      examples.innerHTML = cat.examples.map(ex => `<li>${ex}</li>`).join("");
    }

    modal.classList.add("is-active");
  },

  // 4. Scroll Spy untuk Header Sticky
  setupScrollSpy() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header?.classList.add("site-header--scrolled");
      } else {
        header?.classList.remove("site-header--scrolled");
      }
    });
  },

  // 5. Back to Top Button
  setupBackToTop() {
    const backBtn = document.getElementById("backToTopBtn");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backBtn.classList.add("is-visible");
      } else {
        backBtn.classList.remove("is-visible");
      }
    });

    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
