/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * Logika Interaktif Seluruh Modul Edukasi, Simulasi Kasus & Kuis
 */

const InteractiveModule = {
  // State Internal
  state: {
    jokingCaseIndex: 0,
    simulationIndex: 0,
    tabayyunStepIndex: 0,
    quizIndex: 0,
    quizScore: 0,
    quizAnswers: {},
    checklistState: {},
    reflectionAnswers: {}
  },

  init() {
    this.renderBullyingCards();
    this.renderJokingGame();
    this.renderQuranicCards();
    this.renderTabayyunStepper();
    this.renderSimulationCase();
    this.renderThinkChecklist();
    this.renderTrueFalseQuiz();
    this.renderActionDilemmas();
    this.renderSelfReflections();
    this.setupEventListeners();
  },

  // ==========================================
  // 1. RENDER KENALI BULLYING CARDS
  // ==========================================
  renderBullyingCards() {
    const container = document.getElementById("bullyingCardsGrid");
    if (!container) return;

    container.innerHTML = APP_DATA.bullyingCategories.map((cat, idx) => `
      <div class="card-bullying" style="--card-accent: ${cat.color}; --card-bg: ${cat.bgColor};" data-cat-id="${cat.id}">
        <div class="card-bullying__header">
          <span class="card-bullying__badge" style="background-color: ${cat.color}20; color: ${cat.color};">
            ${cat.badge}
          </span>
          <span class="card-bullying__num">0${idx + 1}</span>
        </div>
        <h3 class="card-bullying__title">${cat.title}</h3>
        <p class="card-bullying__desc">${cat.description}</p>
        
        <div class="card-bullying__examples">
          <div class="card-bullying__subheading">Contoh Nyata:</div>
          <ul>
            ${cat.examples.map(ex => `<li>${ex}</li>`).join("")}
          </ul>
        </div>

        <div class="card-bullying__islamic-box">
          <div class="islamic-tag">📖 Tinjauan Nilai Islam</div>
          <p>${cat.islamicView}</p>
        </div>

        <button class="btn btn--outline-sm btn--full js-open-bullying-detail" data-cat-index="${idx}">
          Pelajari Lebih Dalam 🔍
        </button>
      </div>
    `).join("");
  },

  // ==========================================
  // 2. RENDER GAME "BULLYING ATAU BERCANDA?"
  // ==========================================
  renderJokingGame() {
    const container = document.getElementById("jokingGameContainer");
    if (!container) return;

    const currentCase = APP_DATA.bullyingOrJokingCases[this.state.jokingCaseIndex];
    const total = APP_DATA.bullyingOrJokingCases.length;

    container.innerHTML = `
      <div class="interactive-game-card">
        <div class="game-card__header">
          <span class="badge-pill badge-pill--gold">Kasus ${this.state.jokingCaseIndex + 1} dari ${total}</span>
          <span class="game-card__points">+${currentCase.points} XP</span>
        </div>

        <div class="game-card__scenario-box">
          <div class="scenario-icon">💬</div>
          <p class="scenario-text">“${currentCase.scenario}”</p>
        </div>

        <div class="game-card__question">Bagaimana menurutmu? Apakah ini termasuk bercanda atau bullying?</div>

        <div class="game-card__options" id="jokingOptions">
          ${currentCase.options.map((opt) => `
            <button class="game-opt-btn js-joking-opt" data-opt-key="${opt.key}">
              <span class="game-opt-btn__key">${opt.key}</span>
              <span class="game-opt-btn__text">${opt.text}</span>
            </button>
          `).join("")}
        </div>

        <div class="game-card__feedback" id="jokingFeedback" style="display: none;"></div>

        <div class="game-card__footer">
          <button class="btn btn--secondary btn--sm" id="btnPrevJoking" ${this.state.jokingCaseIndex === 0 ? "disabled" : ""}>
            ← Kasus Sebelumnya
          </button>
          <button class="btn btn--primary btn--sm" id="btnNextJoking" ${this.state.jokingCaseIndex === total - 1 ? "disabled" : ""}>
            Kasus Berikutnya →
          </button>
        </div>
      </div>
    `;

    // Pasang handler tombol pilihan
    const optButtons = container.querySelectorAll(".js-joking-opt");
    optButtons.forEach(btn => {
      btn.addEventListener("click", () => this.handleJokingAnswer(btn.dataset.optKey));
    });

    const prevBtn = document.getElementById("btnPrevJoking");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.state.jokingCaseIndex > 0) {
          this.state.jokingCaseIndex--;
          this.renderJokingGame();
        }
      };
    }

    const nextBtn = document.getElementById("btnNextJoking");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.state.jokingCaseIndex < total - 1) {
          this.state.jokingCaseIndex++;
          this.renderJokingGame();
        }
      };
    }
  },

  handleJokingAnswer(selectedKey) {
    const currentCase = APP_DATA.bullyingOrJokingCases[this.state.jokingCaseIndex];
    const feedbackBox = document.getElementById("jokingFeedback");
    const optButtons = document.querySelectorAll(".js-joking-opt");
    if (!feedbackBox) return;

    optButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.optKey === currentCase.correctAnswer) {
        btn.classList.add("game-opt-btn--correct");
      } else if (btn.dataset.optKey === selectedKey) {
        btn.classList.add("game-opt-btn--wrong");
      }
    });

    const isCorrect = selectedKey === currentCase.correctAnswer;
    feedbackBox.style.display = "block";
    feedbackBox.className = `game-card__feedback ${isCorrect ? "feedback--correct" : "feedback--explanation"}`;

    feedbackBox.innerHTML = `
      <div class="feedback-title">${isCorrect ? "🎉 TEPAT SEKALI!" : "💡 PENJELASAN EDUKATIF:"}</div>
      <div class="feedback-desc">${currentCase.explanation}</div>
    `;

    if (isCorrect) {
      GamificationManager.addPoints(`joking_case_${currentCase.id}`, currentCase.points, `Jawaban Tepat! +${currentCase.points} XP Akhlak diperoleh.`);
    }
  },

  // ==========================================
  // 3. RENDER AYAT UNTUK AKHLAK DIGITAL
  // ==========================================
  renderQuranicCards() {
    const container = document.getElementById("quranicCardsGrid");
    if (!container) return;

    container.innerHTML = APP_DATA.quranicVerses.map((verse, idx) => `
      <div class="card-quranic ${idx === 0 ? 'card-quranic--primary' : 'card-quranic--secondary'}">
        <div class="card-quranic__header">
          <span class="quranic-surah-badge">📜 ${verse.surah}</span>
          <span class="quranic-theme-badge">${verse.theme}</span>
        </div>

        <div class="card-quranic__arabic">${verse.arabic}</div>
        <div class="card-quranic__translit">"${verse.transliteration}"</div>
        <div class="card-quranic__trans">${verse.translation}</div>

        <div class="card-quranic__message-box">
          <div class="message-tag">✨ Pesan Pokok untuk Pelajar:</div>
          <p class="message-text">${verse.simpleMessage}</p>
        </div>

        <div class="card-quranic__context">
          <div class="context-title">📱 Konteks Kehidupan &amp; Dunia Digital:</div>
          <div class="context-tags">
            ${verse.digitalContext.map(ctx => `<span class="context-pill">${ctx}</span>`).join("")}
          </div>
        </div>

        <div class="card-quranic__reflection">
          <div class="reflection-label">🤔 Pertanyaan Refleksi Pribadi:</div>
          <div class="reflection-quote">${verse.reflectionQuestion}</div>
        </div>
      </div>
    `).join("");
  },

  // ==========================================
  // 4. RENDER MODUL 6 LANGKAH TABAYYUN DIGITAL (T-A-B-A-Y-Y)
  // ==========================================
  renderTabayyunStepper() {
    const navContainer = document.getElementById("tabayyunStepNav");
    const contentContainer = document.getElementById("tabayyunStepContent");
    if (!navContainer || !contentContainer) return;

    const currentStep = APP_DATA.tabayyunSteps[this.state.tabayyunStepIndex];

    // Stepper Navigation Tabs
    navContainer.innerHTML = APP_DATA.tabayyunSteps.map((step, idx) => `
      <button class="step-nav-btn ${idx === this.state.tabayyunStepIndex ? 'is-active' : ''} ${idx < this.state.tabayyunStepIndex ? 'is-completed' : ''}" data-step-index="${idx}">
        <span class="step-nav-btn__circle">${step.letter}</span>
        <span class="step-nav-btn__title">${step.title}</span>
      </button>
    `).join("");

    // Stepper Detail Content
    contentContainer.innerHTML = `
      <div class="tabayyun-detail-card" style="border-top: 4px solid ${currentStep.color};">
        <div class="tabayyun-detail__header">
          <div class="tabayyun-detail__letter" style="background-color: ${currentStep.color}15; color: ${currentStep.color};">
            ${currentStep.letter}
          </div>
          <div>
            <span class="badge-pill badge-pill--green">${currentStep.tag}</span>
            <h3 class="tabayyun-detail__title">${currentStep.title} — <span style="font-weight: 500; color: #64748b;">${currentStep.subtitle}</span></h3>
            <p class="tabayyun-detail__main-desc">${currentStep.description}</p>
          </div>
        </div>

        <div class="tabayyun-detail__instruction">
          <div class="instruction-label">💡 Panduan Praktis Bagi Santri / Pelajar:</div>
          <p>${currentStep.instruction}</p>
        </div>

        <div class="tabayyun-detail__checklist">
          <div class="checklist-title">Checklist Penerapan:</div>
          <div class="checklist-items">
            ${currentStep.checklist.map(chk => `
              <div class="chk-item">
                <span class="chk-item__icon" style="color: ${currentStep.color};">✔</span>
                <span>${chk}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="tabayyun-detail__footer">
          <button class="btn btn--secondary btn--sm" id="btnPrevTabayyun" ${this.state.tabayyunStepIndex === 0 ? "disabled" : ""}>
            ← Langkah Sebelumnya
          </button>
          
          <div class="step-counter">${this.state.tabayyunStepIndex + 1} / ${APP_DATA.tabayyunSteps.length}</div>

          <button class="btn btn--primary btn--sm" id="btnNextTabayyun">
            ${this.state.tabayyunStepIndex === APP_DATA.tabayyunSteps.length - 1 ? "Selesaikan Modul 🎉" : "Langkah Berikutnya →"}
          </button>
        </div>
      </div>
    `;

    // Event listeners
    navContainer.querySelectorAll(".step-nav-btn").forEach(btn => {
      btn.onclick = () => {
        this.state.tabayyunStepIndex = parseInt(btn.dataset.stepIndex);
        this.renderTabayyunStepper();
      };
    });

    const prevBtn = document.getElementById("btnPrevTabayyun");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.state.tabayyunStepIndex > 0) {
          this.state.tabayyunStepIndex--;
          this.renderTabayyunStepper();
        }
      };
    }

    const nextBtn = document.getElementById("btnNextTabayyun");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.state.tabayyunStepIndex < APP_DATA.tabayyunSteps.length - 1) {
          this.state.tabayyunStepIndex++;
          this.renderTabayyunStepper();
        } else {
          // Selesai membaca 8 langkah Tabayyun
          GamificationManager.addPoints("tabayyun_steps_completed", 80, "Hebat! Anda telah memahami 8 Langkah Lengkap Tabayyun Digital T-A-B-A-Y-Y-U-N (+80 XP).");
        }
      };
    }
  },

  // ==========================================
  // 5. RENDER SIMULASI KASUS TABAYYUN (8 Skenario)
  // ==========================================
  renderSimulationCase() {
    const container = document.getElementById("simulationCaseContainer");
    if (!container) return;

    const currentCase = APP_DATA.simulationCases[this.state.simulationIndex];
    const total = APP_DATA.simulationCases.length;

    container.innerHTML = `
      <div class="simulation-screen">
        <!-- Mock Smartphone Chat / Forum Header -->
        <div class="sim-phone-header">
          <div class="sim-phone-sender">
            <span class="sim-avatar">📱</span>
            <div>
              <div class="sim-sender-name">${currentCase.sender}</div>
              <div class="sim-case-badge">${currentCase.badge} • ${currentCase.category}</div>
            </div>
          </div>
          <div class="sim-time">${currentCase.time}</div>
        </div>

        <!-- Chat Bubble Scenario -->
        <div class="sim-chat-area">
          <div class="sim-bubble sim-bubble--received">
            <div class="sim-bubble__author">${currentCase.sender}</div>
            <div class="sim-bubble__text">${currentCase.scenario}</div>
            <div class="sim-bubble__time">${currentCase.time} • Diteruskan berkali-kali</div>
          </div>
        </div>

        <!-- Decision Prompt -->
        <div class="sim-decision-box">
          <div class="sim-prompt-heading">Apa tindakan Tabayyun terbaik yang harus kamu lakukan?</div>
          
          <div class="sim-options-list" id="simOptionsList">
            ${currentCase.options.map((opt) => `
              <button class="sim-opt-btn js-sim-opt" data-opt-key="${opt.key}">
                <span class="sim-opt-key">${opt.key}</span>
                <span class="sim-opt-text">${opt.text}</span>
              </button>
            `).join("")}
          </div>

          <div class="sim-feedback-box" id="simFeedbackBox" style="display: none;"></div>

          <div class="sim-footer-controls">
            <button class="btn btn--secondary btn--sm" id="btnPrevSim" ${this.state.simulationIndex === 0 ? "disabled" : ""}>
              ← Kasus Sebelumnya
            </button>
            <div class="sim-progress-indicator">Kasus ${this.state.simulationIndex + 1} dari ${total}</div>
            <button class="btn btn--primary btn--sm" id="btnNextSim" ${this.state.simulationIndex === total - 1 ? "disabled" : ""}>
              Kasus Berikutnya →
            </button>
          </div>
        </div>
      </div>
    `;

    // Pasang handler opsi simulasi
    const optBtns = container.querySelectorAll(".js-sim-opt");
    optBtns.forEach(btn => {
      btn.onclick = () => this.handleSimulationAnswer(btn.dataset.optKey);
    });

    const prevBtn = document.getElementById("btnPrevSim");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.state.simulationIndex > 0) {
          this.state.simulationIndex--;
          this.renderSimulationCase();
        }
      };
    }

    const nextBtn = document.getElementById("btnNextSim");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.state.simulationIndex < total - 1) {
          this.state.simulationIndex++;
          this.renderSimulationCase();
        }
      };
    }
  },

  handleSimulationAnswer(selectedKey) {
    const currentCase = APP_DATA.simulationCases[this.state.simulationIndex];
    const chosenOpt = currentCase.options.find(o => o.key === selectedKey);
    const feedbackBox = document.getElementById("simFeedbackBox");
    const optButtons = document.querySelectorAll(".js-sim-opt");
    if (!feedbackBox || !chosenOpt) return;

    optButtons.forEach(btn => {
      btn.disabled = true;
      const optData = currentCase.options.find(o => o.key === btn.dataset.optKey);
      if (optData.isCorrect) {
        btn.classList.add("sim-opt-btn--correct");
      } else if (btn.dataset.optKey === selectedKey) {
        btn.classList.add("sim-opt-btn--wrong");
      }
    });

    feedbackBox.style.display = "block";
    feedbackBox.className = `sim-feedback-box ${chosenOpt.isCorrect ? "feedback--correct" : "feedback--wrong"}`;

    feedbackBox.innerHTML = `
      <div class="feedback-title">${chosenOpt.isCorrect ? "✅ PILIHAN CERDAS & BERAKHLAK!" : "⚠️ PERTIMBANGKAN KEMBALI:"}</div>
      <div class="feedback-desc">${chosenOpt.feedback}</div>
    `;

    if (chosenOpt.isCorrect) {
      GamificationManager.addPoints(`sim_case_${currentCase.id}`, chosenOpt.score, `Simulasi Berhasil! +${chosenOpt.score} XP Tabayyun diperoleh.`);
    }
  },

  // ==========================================
  // 6. RENDER THINK BEFORE YOU POST CHECKLIST & SANDBOX
  // ==========================================
  renderThinkChecklist() {
    const listContainer = document.getElementById("thinkChecklistItems");
    if (!listContainer) return;

    listContainer.innerHTML = APP_DATA.thinkChecklist.map((item) => `
      <label class="think-item-card" for="chk_${item.id}">
        <input type="checkbox" id="chk_${item.id}" class="think-checkbox js-think-chk" data-chk-id="${item.id}">
        <div class="think-item-content">
          <div class="think-item-text">${item.text}</div>
          <div class="think-item-helper">${item.helper}</div>
        </div>
      </label>
    `).join("");

    const chkInputs = listContainer.querySelectorAll(".js-think-chk");
    chkInputs.forEach(input => {
      input.onchange = () => this.evaluateThinkChecklist();
    });

    // Sandbox Simulator Hook
    const sandboxInput = document.getElementById("postSandboxInput");
    const sandboxBtn = document.getElementById("btnTestPost");
    if (sandboxBtn && sandboxInput) {
      sandboxBtn.onclick = () => this.analyzePostDraft(sandboxInput.value);
    }
  },

  evaluateThinkChecklist() {
    const chkInputs = document.querySelectorAll(".js-think-chk");
    let checkedCount = 0;
    const total = APP_DATA.thinkChecklist.length;

    chkInputs.forEach(inp => {
      if (inp.checked) checkedCount++;
    });

    const statusBanner = document.getElementById("thinkStatusBanner");
    if (!statusBanner) return;

    if (checkedCount === total) {
      statusBanner.className = "think-status-banner status--safe animate-pop";
      statusBanner.innerHTML = `
        <div class="status-icon">👍</div>
        <div>
          <div class="status-title">SIAP BERBAGI!</div>
          <div class="status-desc">Seluruh kriteria aman, terverifikasi, santun, dan bermanfaat. Postingan ini membawa kebaikan.</div>
        </div>
      `;
      GamificationManager.addPoints("think_checklist_master", 35, "Luar Biasa! Anda memahami 7 Kriteria Unggahan Aman (+35 XP).");
    } else {
      const remaining = total - checkedCount;
      statusBanner.className = "think-status-banner status--danger";
      statusBanner.innerHTML = `
        <div class="status-icon">🛑</div>
        <div>
          <div class="status-title">STOP! PERIKSA KEMBALI</div>
          <div class="status-desc">Masih ada <strong>${remaining} poin</strong> yang belum terpenuhi. Jangan terburu-buru membagikan jika belum yakin 100%.</div>
        </div>
      `;
    }
  },

  // Sandbox Tester
  analyzePostDraft(text) {
    const resultBox = document.getElementById("sandboxResultBox");
    if (!resultBox) return;

    if (!text || text.trim() === "") {
      resultBox.innerHTML = `<div class="sandbox-alert alert--info">Ketikkan draf pesan atau caption di atas terlebih dahulu untuk diuji.</div>`;
      return;
    }

    const lower = text.toLowerCase();
    const toxicKeywords = ["baper", "jelek", "bodoh", "goblok", "tolol", "cacat", "gendut", "gembrot", "anjing", "babi", "mati", "hina", "sialan", "cupu", "kampung"];
    const foundToxic = toxicKeywords.filter(k => lower.includes(k));
    const isAllCaps = text.length > 10 && text === text.toUpperCase() && /[A-Z]/.test(text);

    if (foundToxic.length > 0) {
      resultBox.innerHTML = `
        <div class="sandbox-alert alert--danger animate-shake">
          <strong>🛑 PERINGATAN ETIKA:</strong> Draf mengandung kata-kata yang berpotensi menyakiti atau mencela (<em>${foundToxic.join(", ")}</em>). Ingat QS. Al-Hujurat: 11 dan QS. Al-Isra: 53. Ubah kata-kata menjadi lebih santun.
        </div>
      `;
    } else if (isAllCaps) {
      resultBox.innerHTML = `
        <div class="sandbox-alert alert--warning">
          <strong>⚠️ CATATAN ETIKA:</strong> Penggunaan HURUF KAPITAL SEMUA di dunia digital seringkali diartikan sebagai bentakan atau kemarahan. Gunakan huruf kapital secara wajar dan bersahabat.
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <div class="sandbox-alert alert--success animate-pop">
          <strong>✅ BAHASA SANTUN:</strong> Draf pesan Anda tidak mengandung kata celaan kasar. Pastikan fakta di dalamnya sudah terverifikasi sebelum dikirim!
        </div>
      `;
    }
  },

  // ==========================================
  // 7. RENDER KUIS BENAR ATAU SALAH (10 Pertanyaan)
  // ==========================================
  renderTrueFalseQuiz() {
    const container = document.getElementById("trueFalseQuizContainer");
    if (!container) return;

    const total = APP_DATA.trueFalseQuiz.length;
    const currentQ = APP_DATA.trueFalseQuiz[this.state.quizIndex];

    container.innerHTML = `
      <div class="quiz-interactive-card">
        <div class="quiz-header">
          <div class="quiz-progress-text">Pertanyaan ${this.state.quizIndex + 1} dari ${total}</div>
          <div class="quiz-score-badge">Skor Anda: <strong>${this.state.quizScore} XP</strong></div>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${((this.state.quizIndex + 1) / total) * 100}%;"></div>
        </div>

        <div class="quiz-statement-box">
          <div class="quiz-statement-icon">💡</div>
          <div class="quiz-statement-text">“${currentQ.statement}”</div>
        </div>

        <div class="quiz-action-buttons">
          <button class="btn btn--quiz btn--true js-quiz-ans" data-val="true">
            <span class="btn-icon">✔</span> BENAR
          </button>
          <button class="btn btn--quiz btn--false js-quiz-ans" data-val="false">
            <span class="btn-icon">✖</span> SALAH
          </button>
        </div>

        <div class="quiz-feedback-box" id="quizFeedbackBox" style="display: none;"></div>

        <div class="quiz-nav-footer">
          <button class="btn btn--secondary btn--sm" id="btnPrevQuiz" ${this.state.quizIndex === 0 ? "disabled" : ""}>
            ← Soal Sebelumnya
          </button>
          <button class="btn btn--primary btn--sm" id="btnNextQuiz" style="display: none;">
            ${this.state.quizIndex === total - 1 ? "Lihat Hasil Akhir Kuis 🏆" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    `;

    const ansButtons = container.querySelectorAll(".js-quiz-ans");
    ansButtons.forEach(btn => {
      btn.onclick = () => this.handleQuizAnswer(btn.dataset.val === "true");
    });

    const prevBtn = document.getElementById("btnPrevQuiz");
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.state.quizIndex > 0) {
          this.state.quizIndex--;
          this.renderTrueFalseQuiz();
        }
      };
    }

    const nextBtn = document.getElementById("btnNextQuiz");
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.state.quizIndex < total - 1) {
          this.state.quizIndex++;
          this.renderTrueFalseQuiz();
        } else {
          this.renderQuizCompletion();
        }
      };
    }
  },

  handleQuizAnswer(studentAns) {
    const currentQ = APP_DATA.trueFalseQuiz[this.state.quizIndex];
    const isCorrect = studentAns === currentQ.answer;
    const feedbackBox = document.getElementById("quizFeedbackBox");
    const nextBtn = document.getElementById("btnNextQuiz");
    const ansButtons = document.querySelectorAll(".js-quiz-ans");
    if (!feedbackBox) return;

    ansButtons.forEach(btn => {
      btn.disabled = true;
      const val = btn.dataset.val === "true";
      if (val === currentQ.answer) {
        btn.classList.add("btn--quiz-correct");
      } else if (val === studentAns) {
        btn.classList.add("btn--quiz-wrong");
      }
    });

    if (isCorrect && !this.state.quizAnswers[currentQ.id]) {
      this.state.quizScore += 10;
      this.state.quizAnswers[currentQ.id] = true;
      GamificationManager.addPoints(`quiz_q_${currentQ.id}`, 10);
    }

    feedbackBox.style.display = "block";
    feedbackBox.className = `quiz-feedback-box ${isCorrect ? "feedback--correct" : "feedback--wrong"}`;
    feedbackBox.innerHTML = `
      <div class="feedback-title">${isCorrect ? "🎉 JAWABAN BENAR!" : "❌ KURANG TEPAT"}</div>
      <div class="feedback-desc">${currentQ.explanation}</div>
    `;

    if (nextBtn) nextBtn.style.display = "inline-flex";
  },

  renderQuizCompletion() {
    const container = document.getElementById("trueFalseQuizContainer");
    if (!container) return;

    const totalQ = APP_DATA.trueFalseQuiz.length;
    const maxScore = totalQ * 10;

    container.innerHTML = `
      <div class="quiz-completion-card animate-pop text-center">
        <div class="completion-icon">🏆</div>
        <h2>Kuis Selesai!</h2>
        <p class="completion-sub">Alhamdulillah, Anda telah menyelesaikan seluruh pertanyaan kuis Tabayyun Digital.</p>
        
        <div class="score-circle-display">
          <div class="score-number">${this.state.quizScore}</div>
          <div class="score-label">dari total ${maxScore} XP</div>
        </div>

        <p class="completion-congrats">
          Terus terapkan ilmu ini dalam percakapan sehari-hari di grup kelas dan media sosial!
        </p>

        <div class="completion-actions">
          <button class="btn btn--secondary" onclick="InteractiveModule.state.quizIndex = 0; InteractiveModule.renderTrueFalseQuiz();">
            Ulangi Kuis 🔄
          </button>
          <a href="#refleksi" class="btn btn--primary">
            Lanjut ke Refleksi Diri →
          </a>
        </div>
      </div>
    `;
  },

  // ==========================================
  // 8. RENDER APA YANG HARUS SAYA LAKUKAN? (Upstander Dilemmas)
  // ==========================================
  renderActionDilemmas() {
    const container = document.getElementById("actionDilemmasContainer");
    if (!container) return;

    container.innerHTML = APP_DATA.actionDilemmas.map((dil) => `
      <div class="dilemma-card">
        <div class="dilemma-situation">
          <div class="situation-badge">Situasi Nyata</div>
          <h3>“${dil.situation}”</h3>
        </div>

        <div class="dilemma-options">
          ${dil.options.map((opt, oIdx) => `
            <div class="dilemma-opt-item ${oIdx === dil.bestOptionIndex ? 'opt-item--best' : ''}">
              <div class="opt-num">${oIdx + 1}</div>
              <div class="opt-body">
                <div class="opt-text">${opt.text}</div>
                <div class="opt-note">${opt.note}</div>
              </div>
              ${oIdx === dil.bestOptionIndex ? '<span class="badge-best">Pilihan Terbaik ⭐</span>' : ''}
            </div>
          `).join("")}
        </div>

        <div class="dilemma-recommendation">
          <strong>💡 Sikap Santri Bijak:</strong> ${dil.recommendation}
        </div>
      </div>
    `).join("");
  },

  // ==========================================
  // 9. RENDER REFLEKSI DIRI (7 Pertanyaan)
  // ==========================================
  renderSelfReflections() {
    const container = document.getElementById("selfReflectionList");
    if (!container) return;

    container.innerHTML = APP_DATA.selfReflections.map((ref, idx) => `
      <div class="reflection-item-card">
        <div class="reflection-num">${idx + 1}</div>
        <div class="reflection-content">
          <div class="reflection-question">${ref.question}</div>
          <div class="reflection-hint">${ref.hint}</div>
        </div>
        <div class="reflection-choice-radios">
          <label class="radio-label">
            <input type="radio" name="ref_${ref.id}" value="ya" class="js-ref-radio" data-ref-id="${ref.id}">
            <span>Pernah</span>
          </label>
          <label class="radio-label">
            <input type="radio" name="ref_${ref.id}" value="tidak" class="js-ref-radio" data-ref-id="${ref.id}">
            <span>Tidak / Sudah Berubah</span>
          </label>
        </div>
      </div>
    `).join("");

    const radios = container.querySelectorAll(".js-ref-radio");
    radios.forEach(r => {
      r.onchange = () => this.evaluateReflectionProgress();
    });
  },

  evaluateReflectionProgress() {
    const total = APP_DATA.selfReflections.length;
    const answeredCount = document.querySelectorAll('.js-ref-radio:checked').length;
    const resultBox = document.getElementById("reflectionResultBox");

    if (answeredCount >= total && resultBox) {
      resultBox.style.display = "block";
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      GamificationManager.addPoints("reflection_completed", 50, "Alhamdulillah! Anda telah menyelesaikan Refleksi Diri (+50 XP).");
    }
  },

  setupEventListeners() {
    // Incident helper copy button
    const btnGenerateReport = document.getElementById("btnGenerateReportDraft");
    if (btnGenerateReport) {
      btnGenerateReport.onclick = () => this.generateIncidentReportDraft();
    }
  },

  // Helper Pembuat Draf Laporan Privat Siswa (Tidak dikirim ke server luar)
  generateIncidentReportDraft() {
    const category = document.getElementById("reportCategory")?.value || "Perundungan Siber";
    const target = document.getElementById("reportTargetRole")?.value || "Guru BK MA Shirothul Fuqoha’";
    const chronology = document.getElementById("reportChronology")?.value || "";
    const resultArea = document.getElementById("reportDraftResult");
    const outputText = document.getElementById("reportDraftText");

    if (!chronology || chronology.trim() === "") {
      alert("Mohon tuliskan penjelasan singkat kronologi kejadian terlebih dahulu.");
      return;
    }

    const template = `Assalamu'alaikum Wr. Wb.

Yth. ${target},

Saya santri/pelajar MA Shirothul Fuqoha’ ingin berkonsultasi dan menyampaikan kronologi kejadian yang membutuhkan bantuan serta bimbingan:

Kategori Masalah: ${category}
Waktu/Kronologi:
"${chronology.trim()}"

Mohon kesediaan waktu Bapak/Ibu untuk berdiskusi mencari solusi terbaik dan aman. Terima kasih atas bimbingannya.

Wassalamu'alaikum Wr. Wb.`;

    if (outputText && resultArea) {
      outputText.value = template;
      resultArea.style.display = "block";
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  InteractiveModule.init();
});
