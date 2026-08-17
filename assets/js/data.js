/**
 * TABAYYUN DIGITAL — MA SHIROTHUL FUQOHA’
 * Data Edukasi Interaktif, Kasus Simulasi, Kuis & Landasan Al-Qur'an
 */

const APP_DATA = {
  // 1. DATA KENALI BULLYING
  bullyingCategories: [
    {
      id: "fisik",
      title: "Bullying Fisik",
      badge: "Kekerasan Fisik",
      icon: "hand",
      color: "#ef4444",
      bgColor: "#fef2f2",
      description: "Tindakan agresi yang melibatkan kontak fisik langsung dan dapat melukai tubuh atau merusak barang milik orang lain.",
      examples: [
        "Memukul atau menampar",
        "Menendang atau menjegal teman",
        "Mendorong dengan sengaja",
        "Merusak, menyembunyikan, atau merampas barang teman"
      ],
      impact: "Menyebabkan luka fisik, rasa takut masuk sekolah, trauma berkepanjangan, dan rasa tidak aman.",
      islamicView: "Islam melarang keras segala bentuk menyakiti fisik sesama Muslim. Seorang Muslim sejati adalah yang orang lain selamat dari tangan dan lisannya (HR. Bukhari & Muslim)."
    },
    {
      id: "verbal",
      title: "Bullying Verbal",
      badge: "Lisan & Celaan",
      icon: "message-square-x",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      description: "Penindasan menggunakan kata-kata, suara, atau tulisan yang merendahkan, menghina martabat, dan melukai hati seseorang.",
      examples: [
        "Mengejek dan mencela kekurangan orang lain",
        "Memanggil dengan julukan buruk (gelar penghinaan)",
        "Merendahkan fisik (body shaming) atau kemampuan belajar",
        "Menghina orang tua atau latar belakang keluarga"
      ],
      impact: "Menghancurkan rasa percaya diri, menyebabkan kecemasan sosial, depresi, dan luka batin mendalam.",
      islamicView: "Terkait langsung dengan QS. Al-Hujurat ayat 11: Larangan keras mengolok-olok, mencela diri sendiri/orang lain, dan memanggil dengan panggilan buruk."
    },
    {
      id: "sosial",
      title: "Bullying Sosial",
      badge: "Relasional & Pengucilan",
      icon: "users-x",
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      description: "Upaya merusak hubungan pertemanan, reputasi, atau status sosial seseorang dengan sengaja menyingkirkannya dari pergaulan.",
      examples: [
        "Mengucilkan dan melarang teman lain mendekati korban",
        "Menyebarkan gosip atau desas-desus yang tidak terbukti",
        "Mempermalukan seseorang di hadapan banyak orang",
        "Membuat kelompok eksklusif untuk memusuhi seseorang"
      ],
      impact: "Korban merasa kesepian ekstrem, merasa tidak berharga, kehilangan lingkungan pertemanan, dan menarik diri.",
      islamicView: "Rasulullah SAW bersabda: 'Janganlah kalian saling membenci, saling mendengki, dan saling membelakangi. Jadilah kalian hamba-hamba Allah yang bersaudara.' (HR. Bukhari)."
    },
    {
      id: "cyberbullying",
      title: "Cyberbullying",
      badge: "Perundungan Digital",
      icon: "smartphone-alert",
      color: "#065f46",
      bgColor: "#ecfdf5",
      description: "Perundungan yang terjadi di ruang digital (media sosial, aplikasi perpesanan WhatsApp, game online, kolom komentar).",
      examples: [
        "Menulis komentar menghina di medsos atau chat grup kelas",
        "Menyebarkan foto atau video aib/memalukan tanpa izin",
        "Membuat meme untuk bahan tertawaan yang menjatuhkan teman",
        "Menyebarkan tangkapan layar (screenshot) pribadi tanpa izin",
        "Membuat akun palsu (fake account) untuk menyerang seseorang"
      ],
      impact: "Jangkauannya sangat luas, jejak digital sulit dihapus, korban merasa diteror 24 jam bahkan di dalam rumahnya sendiri.",
      islamicView: "Menyebarkan aib orang lain diharamkan dalam Islam. Allah memperingatkan siksaan pedih bagi orang yang senang menyebarkan berita buruk tentang orang beriman (QS. An-Nur: 19)."
    }
  ],

  // 2. DATA BULLYING ATAU BERCANDA? (7 Skenario Interaktif)
  bullyingOrJokingCases: [
    {
      id: 1,
      scenario: "Temanmu dipanggil dengan nama julukan yang membuatnya malu. Teman-teman sekelas tertawa, tetapi dia tertunduk sedih.",
      options: [
        { key: "A", text: "Hanya bercanda santai antarteman", isCorrect: false },
        { key: "B", text: "Bisa termasuk bullying verbal", isCorrect: true },
        { key: "C", text: "Bukan masalah selama tidak memukul", isCorrect: false },
        { key: "D", text: "Harus ikut tertawa agar kompak", isCorrect: false }
      ],
      correctAnswer: "B",
      explanation: "Bercanda adalah ketika KEDUA belah pihak merasa senang dan tertawa bersama. Jika salah satu pihak merasa sedih, malu, atau terluka, itu sudah bukan bercanda melainkan bullying verbal. QS. Al-Hujurat: 11 melarang memanggil dengan gelar-gelar yang buruk.",
      points: 25
    },
    {
      id: 2,
      scenario: "Di grup WhatsApp kelas, seseorang mengirim stiker mengejek bentuk tubuh (body shaming) seorang teman dengan dalih 'cuma seru-seruan'.",
      options: [
        { key: "A", text: "Termasuk cyberbullying & merendahkan martabat", isCorrect: true },
        { key: "B", text: "Bercanda wajar di grup anak muda", isCorrect: false },
        { key: "C", text: "Korban terlalu bawa perasaan (baper)", isCorrect: false },
        { key: "D", text: "Boleh asalkan tidak disebut namanya", isCorrect: false }
      ],
      correctAnswer: "A",
      explanation: "Mengolok-olok fisik seseorang di ruang digital adalah bentuk cyberbullying dan body shaming. Mencela ciptaan Allah sama dengan merendahkan martabat manusia yang dimuliakan oleh-Nya.",
      points: 25
    },
    {
      id: 3,
      scenario: "Seseorang diam-diam memotret temannya saat tidur di kelas dengan pose lucu lalu menyebarkannya ke status WhatsApp tanpa izin.",
      options: [
        { key: "A", text: "Wajar untuk meramaikan status medsos", isCorrect: false },
        { key: "B", text: "Pelanggaran privasi dan berpotensi cyberbullying", isCorrect: true },
        { key: "C", text: "Bukan masalah karena dilakukan sesama teman", isCorrect: false },
        { key: "D", text: "Bagus agar temannya menjadi terkenal", isCorrect: false }
      ],
      correctAnswer: "B",
      explanation: "Setiap orang berhak atas privasinya. Mengunggah foto orang lain tanpa izin apalagi berpotensi mempermalukannya adalah pelanggaran etika digital dan menyakiti hati teman.",
      points: 25
    },
    {
      id: 4,
      scenario: "Saat kerja kelompok, sekelompok siswa sengaja tidak mengajak satu teman dan membuat grup chat baru khusus tanpa dirinya.",
      options: [
        { key: "A", text: "Hak pribadi memilih siapa saja temannya", isCorrect: false },
        { key: "B", text: "Bullying sosial / relasional berupa pengucilan", isCorrect: true },
        { key: "C", text: "Hal biasa dalam dinamika sekolah", isCorrect: false },
        { key: "D", text: "Cara melatih kemandirian teman tersebut", isCorrect: false }
      ],
      correctAnswer: "B",
      explanation: "Sengaja mengucilkan dan mengisolasi seseorang dari lingkungan sosial adalah bentuk bullying sosial. Hal ini menimbulkan luka psikologis yang dalam bagi yang dikucilkan.",
      points: 25
    },
    {
      id: 5,
      scenario: "Seseorang menulis komentar sarkas dan kasar di postingan temannya: 'Muka pas-pasan gaya selangit, mending hapus akun!'",
      options: [
        { key: "A", text: "Kritik jujur dan membangun", isCorrect: false },
        { key: "B", text: "Kebebasan berekspresi di internet", isCorrect: false },
        { key: "C", text: "Cyberbullying dan pelecehan verbal daring", isCorrect: true },
        { key: "D", text: "Hanya candaan warganet", isCorrect: false }
      ],
      correctAnswer: "C",
      explanation: "Komentar jahat yang merendahkan bukanlah kritik. Kritik disampaikan secara santun dan privat. Komentar bernada kebencian di ruang publik adalah cyberbullying murni.",
      points: 25
    },
    {
      id: 6,
      scenario: "Membuat meme berisi foto teman dengan teks mengejek, lalu disebarkan ke grup angkatan dan dijadikan bahan tertawaan.",
      options: [
        { key: "A", text: "Kreativitas digital yang harus diapresiasi", isCorrect: false },
        { key: "B", text: "Cyberbullying yang mempermalukan orang lain", isCorrect: true },
        { key: "C", text: "Bercandaan asyik asal korban tidak marah", isCorrect: false },
        { key: "D", text: "Tradisi wajar antarsahabat", isCorrect: false }
      ],
      correctAnswer: "B",
      explanation: "Kreativitas tidak boleh mengorbankan perasaan orang lain. Menggunakan wajah teman sebagai bahan lelucon tanpa kerelaannya adalah perundungan digital.",
      points: 25
    },
    {
      id: 7,
      scenario: "Seorang siswa meminta teman-temannya berhenti menyindirnya, namun mereka tetap melakukannya setiap hari sambil berkata 'kamu mah baperan!'.",
      options: [
        { key: "A", text: "Candaan biasa yang dibesar-besarkan", isCorrect: false },
        { key: "B", text: "Pasti bullying karena dilakukan berulang & diabaikan batasannya", isCorrect: true },
        { key: "C", text: "Salah korban karena terlalu sensitif", isCorrect: false },
        { key: "D", text: "Bukan urusan kita untuk ikut campur", isCorrect: false }
      ],
      correctAnswer: "B",
      explanation: "Ketika korban sudah menyatakan keberatan dan meminta berhenti namun pelaku terus mengulanginya, ini adalah bukti nyata tindakan perundungan (bullying) yang disengaja.",
      points: 25
    }
  ],

  // 3. DATA LANDASAN AL-QUR'AN (Dual Core Verses)
  quranicVerses: [
    {
      surah: "QS. Al-Hujurat: 11",
      arabic: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا يَسْخَرْ قَوْمٌ مِّنْ قَوْمٍ عَسٰٓى اَنْ يَّكُوْنُوْا خَيْرًا مِّنْهُمْ وَلَا نِسَاۤءٌ مِّنْ نِّسَاۤءٍ عَسٰٓى اَنْ يَّكُنَّ خَيْرًا مِّنْهُنَّۚ وَلَا تَلْمِزُوْٓا اَنْفُسَكُمْ وَلَا تَنَابَزُوْا بِالْاَلْقَابِۗ بِئْسَ الِاسْمُ الْفُسُوْقُ بَعْدَ الْاِيْمَانِۚ وَمَنْ لَّمْ يَتُبْ فَاُولٰٓئِكَ هُمُ الظّٰلِمُوْنَ",
      transliteration: "Yā ayyuhal-lażīna āmanū lā yaskhar qaumum min qaumin 'asā ay yakūnū khairam min-hum wa lā nisā'um min nisā'in 'asā ay yakunna khairam minhunn, wa lā talmizū anfusakum wa lā tanābazū bil-alqāb, bi'sal-ismul-fusūqu ba'dal-īmān, wa mal lam yatub fa ulā'ika humuẓ-ẓālimūn.",
      translation: "“Wahai orang-orang yang beriman! Janganlah suatu kaum mengolok-olok kaum yang lain (karena) boleh jadi mereka (yang diperolok-olokkan) lebih baik dari mereka (yang mengolok-olok)... dan janganlah kamu saling mencela satu sama lain, dan janganlah saling memanggil dengan gelar-gelar yang buruk...”",
      theme: "Larangan Menghina, Mencela, dan Merendahkan Martabat",
      simpleMessage: "“Jangan merendahkan orang lain, karena bisa jadi orang yang kita rendahkan justru lebih baik dan lebih mulia di sisi Allah daripada kita.”",
      values: [
        "Larangan mutlak mengolok-olok dan meremehkan orang lain.",
        "Larangan mencela aib sesama Muslim.",
        "Larangan memanggil dengan julukan buruk yang tidak disukai.",
        "Wajib menghormati dan menjaga kehormatan setiap manusia."
      ],
      digitalContext: [
        "Bullying verbal di lingkungan madrasah/pesantren",
        "Body shaming dan penghinaan fisik di media sosial",
        "Memberi julukan buruk di kontak atau grup WhatsApp",
        "Membuat konten/video untuk mempermalukan teman",
        "Komentar negatif yang menjatuhkan mental"
      ],
      reflectionQuestion: "“Apakah kata-kata dan komentar saya di dunia nyata maupun digital sudah membuat orang lain merasa dihargai, atau justru terluka?”"
    },
    {
      surah: "QS. Al-Isra: 53",
      arabic: "وَقُلْ لِّعِبَادِيْ يَقُوْلُوا الَّتِيْ هِيَ اَحْسَنُۗ اِنَّ الشَّيْطٰنَ يَنْزَغُ بَيْنَهُمْۗ اِنَّ الشَّيْطٰنَ كَانَ لِلْاِنْسَانِ عَدُوًّا مُّبِيْنًا",
      transliteration: "Wa qul li'ibādī yaqūlul-latī hiya aḥsan, inna sy-syaiṭāna yanzaghu bainahum, inna sy-syaiṭāna kāna lil-insāni 'aduwwam mubīnā.",
      translation: "“Dan katakanlah kepada hamba-hamba-Ku, hendaklah mereka mengucapkan perkataan yang lebih baik (benar). Sesungguhnya setan itu (selalu) menimbulkan perselisihan di antara mereka. Sungguh, setan itu adalah musuh yang nyata bagi manusia.”",
      theme: "Etika Berkata dan Berkomunikasi dengan Perkataan Terbaik",
      simpleMessage: "“Gunakan kata-kata yang terbaik dan santun, karena perkataan kita di lisan maupun ketikan jari dapat membawa kedamaian atau justru menyulut api permusuhan.”",
      values: [
        "Memilih kata-kata terbaik dalam setiap percakapan.",
        "Menjaga lisan dan jari dari perkataan yang menyulut pertikaian.",
        "Menghindari provokasi dan adu domba (namimah).",
        "Mengedepankan kesantunan dan akhlak mulia dalam bermedia."
      ],
      digitalContext: [
        "Menulis komentar di postingan Instagram, TikTok, YouTube",
        "Menjaga etika chat di grup kelas dan WhatsApp angkatan",
        "Menulis caption yang mendidik dan menyejukkan",
        "Berdebat secara sehat tanpa caci maki dan kata kotor",
        "Komunikasi yang saling menguatkan persaudaraan santri"
      ],
      reflectionQuestion: "“Apakah ketikan jari saya di dunia digital sudah mencerminkan akhlak santri yang santun dan membawa kedamaian?”"
    }
  ],

  // 4. DATA METODE 6 LANGKAH TABAYYUN DIGITAL (T-A-B-A-Y-Y)
  tabayyunSteps: [
    {
      letter: "T",
      title: "TAHAN",
      subtitle: "Pause & Reflect",
      tag: "Langkah 1",
      icon: "pause-circle",
      color: "#ef4444",
      description: "Jangan langsung percaya, membagikan (share), atau merespons dengan emosi.",
      instruction: "Begitu menerima informasi heboh atau mengejutkan, tarik napas dan jeda sejenak. Ingat bahwa tombol 'Kirim' atau 'Bagikan' memiliki konsekuensi nyata.",
      checklist: ["Tahan jari untuk tidak langsung forward", "Redam reaksi emosional sesaat", "Beri waktu untuk berpikir jernih"]
    },
    {
      letter: "A",
      title: "AMATI",
      subtitle: "Check the Source",
      tag: "Langkah 2",
      icon: "search",
      color: "#f59e0b",
      description: "Periksa siapa sumber pertama yang menyebarkan informasi tersebut.",
      instruction: "Apakah sumbernya akun resmi sekolah/madrasah, pihak berwenang, atau hanya akun anonim, pesan berantai tanpa nama, atau gosip?",
      checklist: ["Siapa penulis atau pengunggah pertamanya?", "Apakah akun tersebut resmi dan kredibel?", "Apakah ada identitas yang jelas dan bertanggung jawab?"]
    },
    {
      letter: "B",
      title: "BANDINGKAN",
      subtitle: "Cross Check Sources",
      tag: "Langkah 3",
      icon: "git-compare",
      color: "#3b82f6",
      description: "Bandingkan dengan sumber-sumber lain yang terpercaya dan terverifikasi.",
      instruction: "Jangan hanya berpaku pada satu postingan atau satu screenshot. Cari konfirmasi di website resmi, media terpercaya, atau tanyakan langsung pada guru/pihak berwenang.",
      checklist: ["Apakah ada portal berita terpercaya lain yang memberitakannya?", "Apakah pihak resmi sudah mengeluarkan klarifikasi?", "Apakah ada perbedaan narasi antarsumber?"]
    },
    {
      letter: "A",
      title: "ANALISIS",
      subtitle: "Examine Context & Proof",
      tag: "Langkah 4",
      icon: "cpu",
      color: "#8b5cf6",
      description: "Periksa tanggal, keaslian foto/video, kelengkapan konteks, dan bukti nyata.",
      instruction: "Banyak hoaks menggunakan foto lama yang diganti narasinya, atau screenshot chat yang dipotong untuk memfitnah orang lain.",
      checklist: ["Kapan peristiwa itu sebenarnya terjadi?", "Apakah foto/video hasil rekayasa atau potongan di luar konteks?", "Apakah informasinya masuk akal dan didukung data nyata?"]
    },
    {
      letter: "Y",
      title: "YAKINKAN",
      subtitle: "Verify the Truth",
      tag: "Langkah 5",
      icon: "check-circle-2",
      color: "#059669",
      description: "Pastikan kebenaran data secara utuh sebelum mengambil sikap.",
      instruction: "Jika informasi masih meragukan atau belum ada kepastian 100%, simpan sendiri dan jangan disebarluaskan.",
      checklist: ["Sudahkah mendapatkan bukti yang sah dan terkonfirmasi?", "Apakah fakta sudah jelas dan tidak simpang siur?", "Jika masih ragu, tahan dan jangan sebarkan!"]
    },
    {
      letter: "Y",
      title: "YAKINI AKHLAK",
      subtitle: "Uphold Moral & Ethics",
      tag: "Langkah 6",
      icon: "shield-check",
      color: "#047857",
      description: "Walaupun informasi itu BENAR, tetap gunakan bahasa yang baik dan jangan mempermalukan orang lain.",
      instruction: "Kebenaran bukan alasan untuk merendahkan aib orang lain. Pilihlah cara penyampaian yang menjaga kehormatan sesama sesuai tuntunan akhlak Islam.",
      checklist: ["Apakah penyampaian ini menjaga kehormatan orang lain?", "Apakah bermanfaat jika disebarkan?", "Apakah niatnya untuk kebaikan bersama, bukan mempermalukan?"]
    },
    {
      letter: "U",
      title: "UTAMAKAN MASLAHAT",
      subtitle: "Prioritize Benefit & Welfare",
      tag: "Langkah 7",
      icon: "heart-handshake",
      color: "#0284c7",
      description: "Pertimbangkan maslahat (kebaikan) dan mudharat (dampak buruk) sebelum membagikan informasi.",
      instruction: "Tidak semua fakta yang kita ketahui wajib disebarkan ke publik. Timbanglah apakah menyebarkannya membawa solusi dan kebaikan bersama, atau justru memicu kegaduhan dan fitnah.",
      checklist: ["Apakah menyebarkan info ini membawa manfaat nyata?", "Apakah ada potensi mudharat/keresahan yang ditimbulkan?", "Jika mudharat lebih besar, tahan dan jangan disebarluaskan!"]
    },
    {
      letter: "N",
      title: "NIATKAN KEBAIKAN",
      subtitle: "Sincere & Pure Intentions",
      tag: "Langkah 8",
      icon: "sparkles",
      color: "#065f46",
      description: "Luruskan niat dalam bermedia semata-mata untuk menebar kebaikan, ilmu, dan silaturahmi karena Allah SWT.",
      instruction: "Jadikan setiap ketikan dan interaksi di ruang digital sebagai ladang amal kebaikan. Hindari niat mencari sensasi, riya', memprovokasi, atau menjatuhkan martabat orang lain.",
      checklist: ["Luruskan niat hanya untuk kebaikan dan ridha Allah", "Jauhkan diri dari niat pamer (riya') atau mencari sensasi negatif", "Jadikan jejak digital sebagai amal jariyah yang menyejukkan"]
    }
  ],

  // 5. DATA SIMULASI KASUS TABAYYUN (8 Skenario Lengkap)
  simulationCases: [
    {
      id: 1,
      category: "Isu Pelanggaran Siswa",
      sender: "Grup WhatsApp Angkatan",
      badge: "Kasus 1",
      time: "10:30 WIB",
      scenario: "Di grup kelas muncul pesan berantai: 'Gawat! Si A katanya dikeluarkan dari sekolah hari ini karena melakukan pelanggaran berat! Pantesan tadi dipanggil ke ruang guru!'",
      options: [
        {
          key: "A",
          text: "Langsung teruskan (forward) pesan ini ke grup kelas lain agar semua tahu.",
          isCorrect: false,
          feedback: "Salah! Meneruskan kabar yang belum terverifikasi adalah penyebaran rumor/fitnah yang dapat menghancurkan nama baik teman.",
          score: 0
        },
        {
          key: "B",
          text: "Ikut menulis komentar negatif dan menghina A di grup.",
          isCorrect: false,
          feedback: "Sangat Salah! Ini merupakan cyberbullying dan melanggar QS. Al-Hujurat: 11.",
          score: 0
        },
        {
          key: "C",
          text: "Mengecek sumber informasi terlebih dahulu, tidak menyebarkannya, dan mengingatkan teman agar tidak bergosip.",
          isCorrect: true,
          feedback: "Bagus Sekali! Inilah penerapan Tabayyun sejati. Informasi pribadi seseorang tidak boleh disebarkan tanpa konfirmasi resmi dari pihak sekolah.",
          score: 50
        },
        {
          key: "D",
          text: "Membuat meme lucu tentang A dan mengirimnya ke status medsos.",
          isCorrect: false,
          feedback: "Salah! Menggunakan aib atau isu orang lain sebagai lelucon adalah bentuk cyberbullying.",
          score: 0
        }
      ]
    },
    {
      id: 2,
      category: "Tangkapan Layar Dipotong (Out of Context)",
      sender: "Status Media Sosial",
      badge: "Kasus 2",
      time: "14:15 WIB",
      scenario: "Beredar tangkapan layar (screenshot) chat seorang ustadz/guru yang seolah-olah bernada sangat marah dan tidak adil, namun teks percakapan di atas dan di bawahnya sengaja dipotong.",
      options: [
        {
          key: "A",
          text: "Ikut membagikan dan mencaci maki di kolom komentar.",
          isCorrect: false,
          feedback: "Salah! Screenshot yang dipotong seringkali dimanipulasi untuk menimbulkan fitnah.",
          score: 0
        },
        {
          key: "B",
          text: "Tahan diri, sadari konteksnya belum lengkap, dan tabayyun kepada pihak madrasah sebelum berasumsi buruk.",
          isCorrect: true,
          feedback: "Tepat! Sikap tabayyun menuntut kita memeriksa konteks utuh suatu percakapan dan berprasangka baik (husnudzon).",
          score: 50
        },
        {
          key: "C",
          text: "Menyebarkannya ke akun gosip sekolah anonim.",
          isCorrect: false,
          feedback: "Salah! Ini menyebarkan perselisihan (namimah) yang dilarang agama.",
          score: 0
        },
        {
          key: "D",
          text: "Menganggap semua screenshot pasti 100% fakta tanpa perlu dicek.",
          isCorrect: false,
          feedback: "Salah! Gambar dan teks digital sangat mudah dimanipulasi dan dipotong konteksnya.",
          score: 0
        }
      ]
    },
    {
      id: 3,
      category: "Pengumuman Libur Palsu",
      sender: "Pesan Berantai WhatsApp",
      badge: "Kasus 3",
      time: "20:00 WIB",
      scenario: "Malam hari ada pesan berantai: 'Kabar gembira! Besok MA Shirothul Fuqoha’ libur total karena ada rapat mendadak. Sebarkan ke yang lain!' Tanpa tanda tangan resmi kepala madrasah.",
      options: [
        {
          key: "A",
          text: "Langsung matikan alarm dan tidak bersiap berangkat sekolah.",
          isCorrect: false,
          feedback: "Salah! Anda bisa terlambat atau membolos karena termakan hoaks.",
          score: 0
        },
        {
          key: "B",
          text: "Kroscek pengumuman resmi ke website/akun resmi madrasah atau tanyakan langsung pada wali kelas.",
          isCorrect: true,
          feedback: "Tepat! Informasi akademik resmi hanya valid jika bersumber dari saluran resmi madrasah atau wali kelas.",
          score: 50
        },
        {
          key: "C",
          text: "Forward ke seluruh grup keluarga dan grup santri tanpa bertanya.",
          isCorrect: false,
          feedback: "Salah! Menyebarkan info palsu merugikan banyak orang.",
          score: 0
        },
        {
          key: "D",
          text: "Mengunggahnya ke story TikTok dengan musik heboh.",
          isCorrect: false,
          feedback: "Salah! Jangan menjadi agen penyebar disinformasi.",
          score: 0
        }
      ]
    },
    {
      id: 4,
      category: "Foto Diedit Menjadi Memalukan",
      sender: "Grup Obrolan Santri",
      badge: "Kasus 4",
      time: "16:45 WIB",
      scenario: "Seorang teman mengedit wajah santri lain menggunakan aplikasi AI/filter hingga terlihat konyol dan memalukan, lalu membagikannya ke grup dengan caption mengejek.",
      options: [
        {
          key: "A",
          text: "Mengingatkan pembuat stiker dengan sopan bahwa itu merendahkan martabat dan meminta untuk dihapus.",
          isCorrect: true,
          feedback: "Hebat! Anda menjadi Upstander (pembela kebaikan) yang berani menegur secara santun demi menjaga kehormatan sesama.",
          score: 50
        },
        {
          key: "B",
          text: "Menyimpan gambar tersebut dan menjadikannya foto profil untuk bahan ejekan.",
          isCorrect: false,
          feedback: "Salah! Ini memperparah perundungan dan menyakiti korban.",
          score: 0
        },
        {
          key: "C",
          text: "Diam saja pura-pura tidak melihat walau kasihan pada korban.",
          isCorrect: false,
          feedback: "Kurang Tepat! Diam saat melihat kezaliman bisa membuat pelaku merasa tindakannya diterima.",
          score: 15
        },
        {
          key: "D",
          text: "Membalas dengan mengedit wajah si pelaku agar dia merasakan hal yang sama.",
          isCorrect: false,
          feedback: "Salah! Membalas keburukan dengan keburukan bukan ajaran Islam. Selesaikan masalah dengan cara yang benar.",
          score: 0
        }
      ]
    },
    {
      id: 5,
      category: "Pesan Suara (Voice Note) Panik",
      sender: "Nomor Tidak Dikenal",
      badge: "Kasus 5",
      time: "11:20 WIB",
      scenario: "Ada voice note diteruskan berulang kali yang menyatakan ada razia mendadak dan kerusuhan di dekat madrasah, membuat para santri panik.",
      options: [
        {
          key: "A",
          text: "Panik dan langsung menelepon orang tua agar menjemput paksa.",
          isCorrect: false,
          feedback: "Salah! Kepanikan yang tidak berdasar membahayakan ketertiban.",
          score: 0
        },
        {
          key: "B",
          text: "Tenang, tahan untuk tidak meneruskan, dan laporkan rekaman suara tersebut kepada guru piket/asatidz untuk diklarifikasi.",
          isCorrect: true,
          feedback: "Sangat Bijak! Suara tanpa verifikasi pihak berwenang sering kali berupa hoaks lama atau rekaman di tempat lain.",
          score: 50
        },
        {
          key: "C",
          text: "Kirim voice note itu ke teman-teman di asrama lain agar ikut panik.",
          isCorrect: false,
          feedback: "Salah! Memicu kepanikan umum adalah perbuatan tercela.",
          score: 0
        },
        {
          key: "D",
          text: "Membuat status 'Madrasah sedang darurat!'",
          isCorrect: false,
          feedback: "Salah! Jangan menyebarkan informasi sebelum pasti.",
          score: 0
        }
      ]
    },
    {
      id: 6,
      category: "Tautan Penipuan (Phishing / Fake Giveaway)",
      sender: "Komentar Medsos",
      badge: "Kasus 6",
      time: "19:10 WIB",
      scenario: "Muncul tautan: 'Bagi-bagi kuota belajar 50GB gratis khusus pelajar madrasah, klik tautan ini dan masukkan nomor HP serta password akunmu!'.",
      options: [
        {
          key: "A",
          text: "Segera klik dan masukkan password akun medsos.",
          isCorrect: false,
          feedback: "Bahaya! Ini adalah penipuan (phishing) yang mencuri data pribadi dan akun Anda.",
          score: 0
        },
        {
          key: "B",
          text: "Waspada, tidak memasukkan data rahasia, dan memperingatkan teman bahwa tautan tersebut berbahaya.",
          isCorrect: true,
          feedback: "Bagus! Pelajar cerdas digital selalu menjaga kerahasiaan password dan tidak mudah tergiur iming-iming gratis.",
          score: 50
        },
        {
          key: "C",
          text: "Membagikan tautan tersebut ke semua grup agar dapat tambahan poin giveaway.",
          isCorrect: false,
          feedback: "Salah! Anda menjerumuskan teman-teman Anda ke dalam jebakan pencurian akun.",
          score: 0
        },
        {
          key: "D",
          text: "Mengisi data teman yang kita tidak sukai.",
          isCorrect: false,
          feedback: "Sangat Salah! Tindakan membahayakan orang lain adalah dosa dan pelanggaran berat.",
          score: 0
        }
      ]
    },
    {
      id: 7,
      category: "Provokasi & Adu Domba Antarsekolah",
      sender: "Instagram Story",
      badge: "Kasus 7",
      time: "15:00 WIB",
      scenario: "Sebuah akun anonim mengunggah video pendek dan memprovokasi: 'Sekolah sebelah menghina madrasah kita! Ayo serbu kolom komentarnya sekarang juga!'.",
      options: [
        {
          key: "A",
          text: "Langsung ikut menyerang kolom komentar dengan kata-kata kasar.",
          isCorrect: false,
          feedback: "Salah! Provokasi akun anonim seringkali sengaja dibuat untuk adu domba. Menghujat melanggar QS. Al-Isra: 53.",
          score: 0
        },
        {
          key: "B",
          text: "Tidak terpancing emosi, lakukan tabayyun, dan serahkan penanganan kepada pihak madrasah/guru.",
          isCorrect: true,
          feedback: "Luar Biasa! Santri berkarakter tidak mudah diadu domba oleh provokasi digital.",
          score: 50
        },
        {
          key: "C",
          text: "Mengajak teman-teman sekamar untuk tawuran online.",
          isCorrect: false,
          feedback: "Salah! Tawuran digital hanya membawa kemudharatan dan mencoreng nama baik madrasah.",
          score: 0
        },
        {
          key: "D",
          text: "Menyebarkan video itu dengan bumbu cerita yang lebih dramatis.",
          isCorrect: false,
          feedback: "Salah! Melebih-lebihkan fitnah adalah perbuatan dosa.",
          score: 0
        }
      ]
    },
    {
      id: 8,
      category: "Membocorkan Nilai Ujian Teman",
      sender: "Grup Kelas",
      badge: "Kasus 8",
      time: "13:00 WIB",
      scenario: "Seseorang mendapatkan foto daftar nilai ujian remedial kelas, lalu melingkari nama teman yang mendapat nilai terendah dan mengirimnya ke grup dengan emoji tertawa.",
      options: [
        {
          key: "A",
          text: "Mengingatkan bahwa nilai adalah privasi belajar, tidak boleh dijadikan bahan ejekan, dan menghapus postingan tersebut.",
          isCorrect: true,
          feedback: "Sangat Tepat! Menjaga perasaan dan kehormatan teman adalah wujud nyata akhlak mulia dan perlindungan dari bullying verbal.",
          score: 50
        },
        {
          key: "B",
          text: "Ikut menertawakan dan membandingkan dengan nilai kita yang lebih tinggi.",
          isCorrect: false,
          feedback: "Salah! Bersikap sombong dan merendahkan orang lain dilarang keras dalam Islam.",
          score: 0
        },
        {
          key: "C",
          text: "Menjadikannya stiker grup WhatsApp.",
          isCorrect: false,
          feedback: "Salah! Ini melukai hati teman dan memperluas perundungan.",
          score: 0
        },
        {
          key: "D",
          text: "Menyuruh teman yang nilainya jelek untuk keluar dari sekolah.",
          isCorrect: false,
          feedback: "Sangat Jahat! Ini perundungan yang dapat menyebabkan keputusasaan.",
          score: 0
        }
      ]
    }
  ],

  // 6. DATA CHECKLIST "THINK BEFORE YOU POST" (7 Kriteria Utama)
  thinkChecklist: [
    {
      id: "is_true",
      text: "Apakah informasi ini BENAR dan sudah terverifikasi?",
      helper: "Bukan kabar burung, bukan gosip yang belum terbukti, dan memiliki sumber yang sahih."
    },
    {
      id: "is_source_clear",
      text: "Apakah SUMBERNYA jelas dan dapat dipercaya?",
      helper: "Berasal dari institusi resmi, penanggung jawab yang jelas, atau saksi tepercaya."
    },
    {
      id: "is_context_complete",
      text: "Apakah informasi ini memiliki KONTEKS yang lengkap?",
      helper: "Bukan potongan obrolan (cherry-picking), bukan gambar lama yang dipelintir maknanya."
    },
    {
      id: "has_permission",
      text: "Apakah saya memiliki IZIN untuk membagikannya?",
      helper: "Tidak melanggar privasi orang lain, foto pribadi, nomor HP, atau dokumen rahasia."
    },
    {
      id: "wont_hurt",
      text: "Apakah postingan ini TIDAK MENYAKITI perasaan orang lain?",
      helper: "Tidak mengandung celaan, body shaming, fitnah, ejekan, atau sindiran negatif."
    },
    {
      id: "good_language",
      text: "Apakah BAHASA yang saya gunakan sudah baik dan santun?",
      helper: "Sesuai tuntunan QS. Al-Isra: 53, tidak memakai kata kotor, kasar, atau merendahkan."
    },
    {
      id: "is_beneficial",
      text: "Apakah postingan ini BERMANFAAT bagi yang membacanya?",
      helper: "Membawa kebaikan, ilmu, semangat, dan kedamaian, bukan sekadar membuang waktu atau memicu permusuhan."
    }
  ],

  // 7. DATA KUIS BENAR ATAU SALAH (10 Pertanyaan)
  trueFalseQuiz: [
    {
      id: 1,
      statement: "Informasi yang viral di media sosial pasti sudah terbukti benar.",
      answer: false,
      explanation: "SALAH. Viralitas tidak menjamin kebenaran. Banyak hoaks sengaja dibuat viral untuk mencari sensasi atau keuntungan materi."
    },
    {
      id: 2,
      statement: "Jika seseorang sudah meminta candaan dihentikan, kita wajib menghormatinya dan langsung berhenti.",
      answer: true,
      explanation: "BENAR. Candaan yang dilanjutkan setelah korban menyatakan keberatan telah berubah menjadi tindakan bullying."
    },
    {
      id: 3,
      statement: "Screenshot percakapan pribadi boleh disebarkan ke grup bebas tanpa izin pihak yang bersangkutan.",
      answer: false,
      explanation: "SALAH. Menyebarkan percakapan pribadi tanpa izin adalah pelanggaran privasi, amanah, dan berpotensi fitnah."
    },
    {
      id: 4,
      statement: "Komentar di media sosial tetap harus menggunakan bahasa yang santun dan berakhlak mulia.",
      answer: true,
      explanation: "BENAR. QS. Al-Isra: 53 memerintahkan kita mengucapkan perkataan terbaik di manapun, termasuk di dunia maya."
    },
    {
      id: 5,
      statement: "Kalau sebuah kabar heboh berasal dari teman dekat, kita tidak perlu memeriksa kebenarannya lagi.",
      answer: false,
      explanation: "SALAH. Teman dekat pun bisa menjadi korban hoaks dan meneruskannya tanpa sadar. Tabayyun wajib untuk semua kabar."
    },
    {
      id: 6,
      statement: "Menghapus komentar jahat dan meminta maaf jika salah adalah tanda keberanian dan akhlak mulia.",
      answer: true,
      explanation: "BENAR. Mengakui kesalahan dan bertaubat dari menyakiti orang lain adalah akhlak terpuji yang diajarkan Islam."
    },
    {
      id: 7,
      statement: "Memanggil teman dengan julukan fisik (misal: 'si gembrot', 'si pendek') boleh asal dia tidak menangis.",
      answer: false,
      explanation: "SALAH. QS. Al-Hujurat: 11 tegas melarang saling memanggil dengan gelar yang buruk apapun alasannya."
    },
    {
      id: 8,
      statement: "Melaporkan kejadian bullying kepada guru atau wali kelas bukan berarti mengadu (cepu), melainkan mencari pertolongan yang aman.",
      answer: true,
      explanation: "BENAR. Melaporkan bertujuan melindungi korban dan mencegah bahaya yang lebih besar terjadi di lingkungan sekolah."
    },
    {
      id: 9,
      statement: "Melawan pelaku bullying harus dengan cara membalas menghina dan mempermalukannya di media sosial.",
      answer: false,
      explanation: "SALAH. Membalas bullying dengan bullying baru hanya akan memperluas lingkaran kekerasan. Gunakan prosedur aman dan laporkan pada pihak berwenang."
    },
    {
      id: 10,
      statement: "Tabayyun adalah keterampilan memeriksa kebenaran informasi sebelum mempercayai atau membagikannya.",
      answer: true,
      explanation: "BENAR. Tabayyun merupakan prinsip Islam yang fundamental untuk menjaga keutuhan ukhuwah dan mencegah fitnah."
    }
  ],

  // 8. DATA "APA YANG HARUS SAYA LAKUKAN?" (Upstander Dilemmas)
  actionDilemmas: [
    {
      id: 1,
      situation: "Saya melihat teman saya dihina dan diejek di grup WhatsApp kelas.",
      recommendation: "Hentikan percakapan yang tidak baik secara santun, ingatkan etika grup, dukung teman yang disakiti, dan laporkan tangkapan layar kepada wali kelas/guru BK jika terus berlanjut.",
      bestOptionIndex: 3,
      options: [
        { text: "Ikut tertawa bersama anggota grup lain.", type: "danger", note: "Menjadi bystander pasif yang mendukung kezaliman." },
        { text: "Diam saja dan keluar dari grup.", type: "neutral", note: "Menghindar tetapi tidak menyelesaikan masalah perundungan." },
        { text: "Membela dengan membalas menghina si pelaku sekasar mungkin.", type: "warning", note: "Membuat api pertikaian semakin besar." },
        { text: "Mengingatkan dengan santun agar menghentikan ejekan dan melapor kepada guru/wali kelas.", type: "success", note: "Tindakan Upstander terbaik dan paling bertanggung jawab." }
      ]
    },
    {
      id: 2,
      situation: "Teman sekamar asrama terlihat murung dan mengurung diri karena menjadi sasaran gosip.",
      recommendation: "Ajak dia berbicara dari hati ke hati, dengarkan keluh kesahnya tanpa menghakimi, dan tawarkan bantuan untuk menemui Ustadz/Ustadzah atau konselor madrasah.",
      bestOptionIndex: 2,
      options: [
        { text: "Membiarkannya karena itu urusan pribadinya.", type: "neutral", note: "Kurang memiliki kepedulian sesama santri." },
        { text: "Membocorkan ceritanya ke santri kamar lain.", type: "danger", note: "Menambah luka dan memperluas gosip." },
        { text: "Menemaninya, menjadi pendengar yang baik, dan mendampinginya mencari bantuan ustadz/guru.", type: "success", note: "Mencerminkan ukhuwah islamiyah sejati." },
        { text: "Menyuruhnya untuk tidak usah dipikirkan.", type: "warning", note: "Mengabaikan beban psikologis korban." }
      ]
    }
  ],

  // 9. DATA REFLEKSI DIRI (7 Pertanyaan Reflektif)
  selfReflections: [
    {
      id: 1,
      question: "Apakah saya pernah mengejek atau menertawakan kekurangan teman?",
      hint: "Baik disengaja maupun terlontar saat bercanda."
    },
    {
      id: 2,
      question: "Apakah saya pernah memberi julukan yang membuat teman merasa malu atau tidak nyaman?",
      hint: "Mengingat larangan QS. Al-Hujurat: 11."
    },
    {
      id: 3,
      question: "Apakah saya pernah menyebarkan kabar heboh tanpa mengecek kebenarannya terlebih dahulu?",
      hint: "Meneruskan pesan tanpa tabayyun."
    },
    {
      id: 4,
      question: "Apakah saya pernah ikut tertawa atau memberi emoji saat seseorang dipermalukan di medsos?",
      hint: "Menjadi pendukung pasif perundungan siber."
    },
    {
      id: 5,
      question: "Apakah saya sudah menggunakan kata-kata yang santun dan baik ketika mengetik komentar atau chat?",
      hint: "Menerapkan tuntunan QS. Al-Isra: 53."
    },
    {
      id: 6,
      question: "Apakah saya berani menghentikan teman yang sedang melakukan perundungan terhadap orang lain?",
      hint: "Menjadi pembela kebaikan (upstander)."
    },
    {
      id: 7,
      question: "Apakah saya sudah terbiasa berpikir sebelum mengunggah (Think Before You Post)?",
      hint: "Menjaga jemari dan lisan di era digital."
    }
  ],

  // 10. DATA TINGKATAN REPUTASI / GAMIFIKASI
  gamificationRanks: [
    {
      rankId: "pemula",
      title: "Pemula Tabayyun",
      minPoints: 0,
      maxPoints: 100,
      badgeIcon: "assets/images/badge-pemula.svg",
      tagColor: "#10b981",
      description: "Langkah awal mengenali pentingnya etika berbicara dan menyaring informasi."
    },
    {
      rankId: "bijak",
      title: "Pelajar Bijak Digital",
      minPoints: 101,
      maxPoints: 250,
      badgeIcon: "assets/images/badge-bijak.svg",
      tagColor: "#3b82f6",
      description: "Mampu membedakan fakta, opini, dan menjauhi perilaku perundungan daring."
    },
    {
      rankId: "sahabat",
      title: "Sahabat Anti-Bullying",
      minPoints: 251,
      maxPoints: 400,
      badgeIcon: "assets/images/badge-sahabat.svg",
      tagColor: "#f59e0b",
      description: "Aktif menjaga teman, berani membela kebenaran, dan menciptakan ruang aman."
    },
    {
      rankId: "duta",
      title: "Duta Akhlak Digital",
      minPoints: 401,
      maxPoints: 9999,
      badgeIcon: "assets/images/badge-duta.svg",
      tagColor: "#9333ea",
      description: "Teladan santri MA Shirothul Fuqoha’ yang cerdas bermedia, santun, dan berakhlakul karimah."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_DATA;
}
