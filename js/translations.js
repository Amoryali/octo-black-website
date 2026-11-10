/* ==========================================================================
   OCTO BLACK - TRANSLATIONS DATA DICTIONARY (EN & AR)
   ========================================================================== */

// Expose translations globally for i18n.js
window.translations = {
  en: {
    // Navigation
    "nav_home": "Home",
    "nav_features": "Features",
    "nav_systems": "Supported Systems",
    "nav_download": "Download",
    "nav_changelog": "Changelog",
    "nav_faq": "FAQ",
    "btn_download_apk": "Download APK",
    "lang_switch_label": "Arabic",

    // Hero Section
    "hero_tag": "Octo Black v1.0.3 Official Release",
    "hero_title": "YOUR RETRO WORLD. ONE EXPERIENCE.",
    "hero_desc": "Bring your classic gaming collection together with Octo Black, a unified Android retro gaming experience powered by high-performance Libretro cores.",
    "hero_btn_download": "Download Octo Black v1.0.3",
    "hero_btn_explore": "Explore Features",

    // Home Features Overview
    "home_features_title": "Built for Pure Gaming",
    "home_features_subtitle": "Engineered with precision for seamless emulation, sleek media organization, and zero clutter.",
    "feat_1_title": "Unified Core Architecture",
    "feat_1_desc": "Seamlessly emulates NES, SNES, N64, PlayStation, Game Boy Advance, PSP, NDS, and Dreamcast powered by optimized native Libretro cores.",
    "feat_2_title": "Automatic ROM Scanner",
    "feat_2_desc": "Scans your storage for retro game dumps, matching metadata, serial numbers, cover artwork, and system categories automatically.",
    "feat_3_title": "Integrated CWCheat Engine",
    "feat_3_desc": "Built-in CWCheat database with manual cheat code entry support for all integrated cores.",
    "feat_4_title": "Custom Virtual Touch Gamepad",
    "feat_4_desc": "Fully customizable touch controls with editor, analog throttling, and physical bluetooth gamepad auto-mapping.",

    // Systems Section
    "home_systems_title": "Supported Retro Systems",
    "home_systems_subtitle": "Explore runtime-verified systems and planned platforms in our catalog.",
    "filter_all": "All Systems",
    "filter_consoles": "Consoles",
    "filter_handhelds": "Handhelds",
    "filter_arcade": "Arcade",
    "filter_computers": "Computers",

    // App Screenshots Gallery
    "gallery_title": "Official App Interface",
    "gallery_subtitle": "Real screenshots captured directly from Octo Black running on Android.",
    "cap_1": "Sleek Dark Home Screen & System Carousel",
    "cap_2": "Game Details, Artwork & Options",
    "cap_3": "Image from inside one of the games",

    // Download Section
    "home_dl_title": "Ready to Play Your Classics?",
    "home_dl_desc": "Download Octo Black v1.0.3 for Android (ARM64). Free, lightweight, and pre-configured for instant retro gaming.",
    "dl_status_label": "Official GitHub Release Status:",
    "dl_status_active": "v1.0.3 Available for Download",
    "dl_req_title": "System Requirements:",
    "dl_req_desc": "Android 8.0 (Oreo) or higher • 64-bit ARM CPU (arm64-v8a)",

    // Features Page Detailed
    "page_features_title": "Advanced Features",
    "page_features_subtitle": "Discover everything Octo Black brings to your Android device.",
    "detail_feat_1_title": "High-Performance Emulation",
    "detail_feat_1_desc": "Pre-configured native Libretro cores including Snes9x, PCSX ReARMed, mGBA, PPSSPP, Mupen64Plus-Next, melonDS, flycast, and Stella 2023 for native 60 FPS performance.",
    "detail_feat_2_title": "Smart Storage & Folder Watcher",
    "detail_feat_2_desc": "Keeps your library up to date automatically when new games are added, with support for compressed archives and multi-disc games.",
    "detail_feat_3_title": "Audio & Video Fine-Tuning",
    "detail_feat_3_desc": "Custom audio muting options, aspect ratio adjustments, frame compositing, and smooth video previews.",
    "detail_feat_4_title": "Save & Restore Game States",
    "detail_feat_4_desc": "Never lose progress with reliable state management, instant save slots, and auto-resume features.",

    // Download Page Detailed
    "page_dl_title": "Official Download",
    "page_dl_subtitle": "Get the latest official Octo Black APK build directly from our GitHub Releases.",
    "dl_card_version": "Version 1.0.3 (Build 4)",
    "dl_card_date": "Released: Official Stable Build",
    "dl_card_arch": "Architecture: arm64-v8a",
    "dl_card_btn": "Download Octo Black v1.0.3 APK",
    "dl_install_guide_title": "How to Install on Android",
    "step_1": "1. Download the octo-black-1.0.3v-arm64-v8a.apk file to your Android device.",
    "step_2": "2. Open the downloaded file using your browser or file manager.",
    "step_3": "3. Allow installation from unknown sources if prompted by Android.",
    "step_4": "4. Launch Octo Black and grant storage access to scan your ROM collection.",

    // Changelog Page
    "page_changelog_title": "Version Changelog",
    "page_changelog_subtitle": "Track all updates, core improvements, and feature additions.",
    "v100_title": "v1.0.0 — Initial Official Release",
    "v100_date": "Released: November 4, 2026",
    "v100_item_1": "Official release of Octo Black Android frontend.",
    "v100_item_2": "Bundled 9 runtime-verified ARM64 emulator cores (NES, SNES, N64, PS1, Genesis, Atari 2600, GBA, PSP, NDS).",
    "v100_item_3": "Implemented automatic ROM directory scanner and media cache.",
    "v100_item_4": "Integrated CWCheat database and manual cheat entry.",
    "v100_item_5": "Custom touch gamepad layout editor with analog input throttling.",
    "v100_item_6": "Full English & Arabic bilingual support with RTL layout engine.",

    // v1.0.1 release notes
    "v101_title": "v1.0.1 — Dreamcast Widescreen & Controls Update",
    "v101_date": "Released: Early November 2026",
    "v101_item_1": "New — 16:9 widescreen mode for Dreamcast games, fitted perfectly to modern phone screens.",
    "v101_item_2": "Fixed — on-screen controller buttons for Dreamcast now respond correctly: START, A, and D-pad.",
    "v101_item_3": "Improved — overall stability and performance across all supported systems.",
    "v101_item_4": "Updated — version information and download files to v1.0.1 (build 2).",
    "v101_item_5": "Website — improved the bilingual changelog and fixed the Arabic/English language switcher.",

    // v1.0.2 release notes
    "v102_title": "v1.0.2 — Cheat Codes Redesign & Touch Layout Editor",
    "v102_date": "Previous Release",
    "v102_item_1": "New — a pencil button inside the gameplay screen pauses the emulator, opens the touch control layout editor, then resumes play from where it stopped.",
    "v102_item_2": "New — redesigned Cheat Codes screen with search, All/Active filters, an active counter, unified switches, Database and My Cheats sections, expandable code lines, and edit/delete for manual cheats with confirmation.",
    "v102_item_3": "Improved — both controller shoulder buttons unified into one symmetric position, with the default corner layout restored like classic consoles.",
    "v102_item_4": "Improved — library header and sorting options, plus removed the black backing from game cover artwork.",
    "v102_item_5": "Fixed — LateInitializationError when reloading runtime settings.",
    "v102_item_6": "Translation — full Arabic coverage for the cheat screens and the gameplay quick menu.",
    "v102_item_7": "New — the game covers are now a new 3D box style.",

    // v1.0.3 release notes
    "v103_title": "v1.0.3 — Nintendo Wii & Dolphin Update",
    "v103_date": "Current Release",
    "v103_item_1": "New — Nintendo Wii support via the official Dolphin Libretro core (arm64), with system files (Sys) extracted automatically on first launch — no BIOS required.",
    "v103_item_8": "Note — the Dolphin (Nintendo Wii) emulator does not work yet; it has only been added to the app and will be enabled in a future update.",
    "v103_item_2": "New — Nintendo Wii now appears on the home screen system strip.",
    "v103_item_3": "Improved — smarter ROM scanner: .wbfs/.gcz/.rvz/.wia/.ciso and .nkit.iso files are classified automatically, while ambiguous .iso files are identified only by a [Wii] token in the file name (never the folder name) so PSP dumps are never mislabeled.",
    "v103_item_4": "Fixed — previously saved ROM entries are re-classified correctly (e.g. .nkit.iso files stuck as Unknown).",
    "v103_item_5": "Fixed — Dolphin system files (Sys) now extract to the correct path on first launch.",
    "v103_item_6": "Improved — redesigned Developer card in Settings with a new WhatsApp contact button.",
    "v103_item_7": "Updated — version information and download files to v1.0.3 (build 4).",

    // FAQ Page
    "page_faq_title": "Frequently Asked Questions",
    "page_faq_subtitle": "Find answers to common questions about Octo Black emulator.",
    "faq_q1": "Does Octo Black include ROMs or BIOS files?",
    "faq_a1": "No. Octo Black is a clean frontend and emulator. You must provide your own legally dumped game ROMs and optional BIOS files (such as PlayStation BIOS).",
    "faq_q2": "Which Android devices are supported?",
    "faq_a2": "Octo Black requires Android 8.0 (API level 26) or higher and a 64-bit ARM processor (arm64-v8a).",
    "faq_q3": "How do I add games to the library?",
    "faq_a3": "Open Settings > Library, tap 'Add ROM Directory', choose the folder on your internal storage or SD card where your games are stored, and tap 'Scan Library'.",
    "faq_q4": "Does Octo Black support physical controllers?",
    "faq_a4": "Yes, Octo Black automatically maps standard Bluetooth and USB gamepads (Xbox, PlayStation, Ipega, etc.).",
    "faq_q5": "Are cheat codes supported?",
    "faq_a5": "Yes, Octo Black includes a bundled CWCheat database and supports manual cheat code entry for integrated cores.",

    // Store Badges (Download Page)
    "dl_stores_title": "Also Available On",
    "dl_stores_subtitle": "Choose your preferred store to download Octo Black.",
    "dl_stores_pending": "Store links are coming soon — Octo Black is currently downloadable from GitHub Releases.",
    "store_apkpure": "APKPure",
    "store_aptoide": "Aptoide",
    "store_uptodown": "Uptodown",
    "store_github": "GitHub",
    "store_mediafire": "MediaFire",

    // Global UI
    "ui_back_to_top": "Back to top",

    // Footer
    "footer_brand_desc": "Octo Black is a premium unified Android emulator frontend bringing your classic retro gaming collection together.",
    "footer_heading_navigation": "Navigation",
    "footer_heading_systems": "Systems",
    "footer_heading_project": "Project Info",
    "footer_link_github": "GitHub Repository",
    "footer_link_license": "Licenses & Terms",
    "footer_copyright": "© 2026 Octo Black. All rights reserved. Open source retro gaming frontend for Android."
  },

  ar: {
    // Navigation
    "nav_home": "الرئيسية",
    "nav_features": "المميزات",
    "nav_systems": "الأنظمة المدعومة",
    "nav_download": "التنزيل",
    "nav_changelog": "سجل التغييرات",
    "nav_faq": "الأسئلة الشائعة",
    "btn_download_apk": "تنزيل APK",
    "lang_switch_label": "English",

    // Hero Section
    "hero_tag": "الإصدار الرسمي Octo Black v1.0.3",
    "hero_title": "عالم الألعاب الكلاسيكية. في تجربة واحدة.",
    "hero_desc": "جمع مجموعتك الكلاسيكية في مكان واحد مع Octo Black، تجربة محاكاة شاملة وموحدة لنظام أندرويد مدعومة بنوى Libretro عالية الأداء.",
    "hero_btn_download": "تنزيل Octo Black v1.0.3",
    "hero_btn_explore": "استكشف المميزات",

    // Home Features Overview
    "home_features_title": "مصمم لعشاق الألعاب الأصيلة",
    "home_features_subtitle": "تم تطويره بدقة عالية ليمنحك محاكاة سلسة، وتنظيماً راقياً لمجموعتك، وبدون أي تعقيد.",
    "feat_1_title": "معمارية نوى موحدة",
    "feat_1_desc": "يحاكي بسلاسة أجهزة NES, SNES, N64, PlayStation, Game Boy Advance, PSP, NDS, و Dreamcast عبر نوى Libretro مجتمعة ومحدثة.",
    "feat_2_title": "ماسح ROMs تلقائي",
    "feat_2_desc": "يفحص وحدة التخزين تلقائياً لاكتشاف الألعاب وتصنيفها واستخراج الأغلفة والأرقام التسلسلية بكل سهولة.",
    "feat_3_title": "محرك CWCheat مضمن",
    "feat_3_desc": "يحتوي على قاعدة بيانات CWCheat مع إمكانية إدخال أكواد الغش يدويًا للنوى المدعومة.",
    "feat_4_title": "ذراع تحكم لمسي قابل للتخصيص",
    "feat_4_desc": "أزرار لمسية قابلة للتعديل بالكامل مع محرر موقع الأزرار، والتعرف التلقائي على أذرع التحكم اللاسلكية.",

    // Systems Section
    "home_systems_title": "الأنظمة الكلاسيكية المدعومة",
    "home_systems_subtitle": "استكشف الأجهزة المتحقق من تشغيلها والمنصات المدمجة في الكتالوج.",
    "filter_all": "جميع الأنظمة",
    "filter_consoles": "منصات الألعاب",
    "filter_handhelds": "الأجهزة المحمولة",
    "filter_arcade": "صالات الأركيد",
    "filter_computers": "الحواسب الآلية",

    // App Screenshots Gallery
    "gallery_title": "معاينة واجهات التطبيق الحقيقية",
    "gallery_subtitle": "لقطات شاشة حقيقية مأخوذة مباشرة من تطبيق Octo Black على الأندرويد.",
    "cap_1": "الشاشة الرئيسية الداكنة واستعراض الأنظمة",
    "cap_2": "تفاصيل اللعبة والأغلفة والخيارات",
    "cap_3": "صورة من داخل احدى اللعاب ",

    // Download Section
    "home_dl_title": "جاهز لاستعادة ذكريات الألعاب؟",
    "home_dl_desc": "حمل تطبيق Octo Black الإصدار 1.0.3 لنظام أندرويد (ARM64). مجاني، خفيف الوزن ومعد جاهزاً للتشغيل المباشر.",
    "dl_status_label": "حالة الإصدار على GitHub:",
    "dl_status_active": "الإصدار v1.0.3 متاح للتنزيل",
    "dl_req_title": "متطلبات التشغيل:",
    "dl_req_desc": "نظام أندرويد 8.0 (Oreo) أو أعلى • معالج 64-bit ARM (arm64-v8a)",

    // Features Page Detailed
    "page_features_title": "المميزات المتقدمة",
    "page_features_subtitle": "اكتشف كل ما يقدمه Octo Black لجهاز الأندرويد الخاص بك.",
    "detail_feat_1_title": "محاكاة فائقة الأداء",
    "detail_feat_1_desc": "نوى مضمنة ومجهزة من Snes9x, PCSX ReARMed, mGBA, PPSSPP, Mupen64Plus-Next, melonDS, flycast, و Stella 2023 لأداء ثابِت عند 60 إطاراً.",
    "detail_feat_2_title": "مراقب المجلدات الذكي",
    "detail_feat_2_desc": "يحدث مكتبتك تلقائياً عند إضافة ألعاب جديدة، مع دعم الملفات المضغوطة والأقراص المتعددة.",
    "detail_feat_3_title": "ضبط الصوت والصورة",
    "detail_feat_3_desc": "خيارات كتم الصوت الكامل، تعديل أبعاد الشاشة، ومعاينة الفيديوهات السلسة.",
    "detail_feat_4_title": "حفظ واسترجاع حالة اللعبة",
    "detail_feat_4_desc": "لا تفقد تقدمك أبداً مع فتحات الحفظ السريع وميزة الاستئناف الفوري.",

    // Download Page Detailed
    "page_dl_title": "التنزيل الرسمي",
    "page_dl_subtitle": "احصل على أحدث نسخة رسمية من تطبيق Octo Black مباشرة من إصدارات GitHub.",
    "dl_card_version": "الإصدار 1.0.3 (البنية 4)",
    "dl_card_date": "تاريخ النشر: الإصدار المستقر الرسمي",
    "dl_card_arch": "المعمارية: arm64-v8a",
    "dl_card_btn": "تنزيل ملف Octo Black v1.0.3 APK",
    "dl_install_guide_title": "طريقة التثبيت على الأندرويد",
    "step_1": "1. قم بتنزيل ملف octo-black-1.0.3v-arm64-v8a.apk على جهازك.",
    "step_2": "2. افتح الملف المُنزل باستخدام مدير الملفات أو المتصفح.",
    "step_3": "3. اسمح بالتثبيت من مصادر غير معروفة إذا طلب منك نظام الأندرويد.",
    "step_4": "4. افتح Octo Black وامنحه صلاحية التخزين لفحص ألعابك.",

    // Changelog Page
    "page_changelog_title": "سجل التغييرات والإصدارات",
    "page_changelog_subtitle": "تابع كافة التحديثات والتحسينات المضافة للتطبيق.",
    "v100_title": "v1.0.0 — الإصدار الرسمي الأول",
    "v100_date": "نُشر: 4 نوفمبر 2026",
    "v100_item_1": "الإطلاق الرسمي لواجهة Octo Black للأندرويد.",
    "v100_item_2": "تضمين 9 نوى محاكاة متحقق من تشغيلها (NES, SNES, N64, PS1, Genesis, Atari 2600, GBA, PSP, NDS).",
    "v100_item_3": "بناء ماسح مجلدات ROMs التلقائي مع كاش الوسائط والأغلفة.",
    "v100_item_4": "دمج قاعدة بيانات CWCheat وإمكانية إضافة الأكواد يدوياً.",
    "v100_item_5": "محرر ذراع التحكم اللمسي وشاشات التخصيص.",
    "v100_item_6": "دعم كامل للغتين العربية والإنجليزية مع تخطيط RTL.",

    "v101_title": "v1.0.1 — تحديث شاشة وأزرار دريم كاست",
    "v101_date": "نُشر: أوائل نوفمبر 2026",
    "v101_item_1": "جديد — وضع عرض 16:9 لألعاب دريم كاست، ملائم تماماً لشاشات الهواتف الحديثة.",
    "v101_item_2": "إصلاح — أزرار التحكم على الشاشة لدريم كاست تعمل الآن بشكل صحيح: START و A و الاتجاهات.",
    "v101_item_3": "تحسين — الاستقرار والأداء العام لجميع الأنظمة المدعومة.",
    "v101_item_4": "تحديث — معلومات الإصدار وملفات التنزيل إلى v1.0.1 (البنية 2).",
    "v101_item_5": "الموقع — تحسين سجل التغييرات ثنائي اللغة وتصحيح مبدّل اللغة العربية/الإنجليزية.",

    // ملاحظات إصدار v1.0.2
    "v102_title": "v1.0.2 — تجديد شاشة أكواد الغش ومحرر التخطيط",
    "v102_date": "الإصدار السابق",
    "v102_item_1": "جديد — زر قلم داخل شاشة اللعب يوقف المحاكي مؤقتاً، يفتح محرر تخطيط أزرار اللمس، ثم يستأنف اللعب من حيث توقف.",
    "v102_item_2": "جديد — إعادة تصميم شاشة أكواد الغش مع بحث ومرشحات (الكل/النشطة) وعدّاد للأكواد النشطة ومفاتيح موحّدة وأقسام قاعدة بيانات وكوداتي، وأكواد قابلة للتوسّع مع تعديل/حذف للكودات اليدوية بتأكيد.",
    "v102_item_3": "تحسين — توحيد زرّي كتف يد التحكم في موضع متماثل مع إعادة التخطيط الافتراضي للزوايا كالأجهزة الكلاسيكية.",
    "v102_item_4": "تحسين — رأس المكتبة وخيارات الفرز، إضافةً إلى إزالة الخلفية السوداء عن أغلفة الألعاب.",
    "v102_item_5": "إصلاح — خطأ LateInitializationError عند إعادة تحميل إعدادات التشغيل.",
    "v102_item_6": "ترجمة — تغطية عربية كاملة لشاشات الأكواد والقائمة السريعة أثناء اللعب.",
    "v102_item_7": "جديد — الأغلفة الآن بأسلوب 3D box جديد.",

    // ملاحظات إصدار v1.0.3
    "v103_title": "v1.0.3 — تحديث Nintendo Wii وDolphin",
    "v103_date": "الإصدار الحالي",
    "v103_item_1": "جديد — دعم Nintendo Wii عبر نواة Dolphin الرسمية (Libretro، معمارية arm64) مع استخراج ملفات النظام (Sys) تلقائياً عند أول تشغيل — بدون BIOS.",
    "v103_item_8": "ملاحظة — محاكي Dolphin (جهاز Nintendo Wii) لا يعمل حالياً؛ تمت إضافته فقط إلى التطبيق وسيتم تفعيله في تحديث قادم.",
    "v103_item_2": "جديد — ظهور Nintendo Wii في شريط الأنظمة بالشاشة الرئيسية.",
    "v103_item_3": "تحسين — ماسح رومات أذكى: الملفات .wbfs/.gcz/.rvz/.wia/.ciso و .nkit.iso تُصنَّف تلقائياً، بينما تُحدَّد ملفات .iso الغامضة فقط برمز [Wii] في اسم الملف (وليس اسم المجلد) حتى لا تُصنَّف رومات PSP خطأً.",
    "v103_item_4": "إصلاح — إعادة تصنيف الرومات المحفوظة سابقاً بشكل صحيح (مثل ملفات .nkit.iso العالقة كـ Unknown).",
    "v103_item_5": "إصلاح — استخراج ملفات نظام Dolphin (Sys) إلى المسار الصحيح عند أول تشغيل.",
    "v103_item_6": "تحسين — إعادة تصميم بطاقة المطوّر في الإعدادات مع زر تواصل جديد عبر واتساب.",
    "v103_item_7": "تحديث — معلومات الإصدار وملفات التنزيل إلى v1.0.3 (البنية 4).",

    // FAQ Page
    "page_faq_title": "الأسئلة الشائعة",
    "page_faq_subtitle": "إجابات على أكثر الأسئلة تكراراً حول محاكي Octo Black.",
    "faq_q1": "هل يحتوي Octo Black على ألعاب (ROMs) أو ملفات BIOS؟",
    "faq_a1": "لا. تطبيق Octo Black هو واجهة ومحاكي فقط. يجب أن تقوم بتوفير ألعابك الخاصة وملفات BIOS الاختيارية (مثل BIOS البلايستيشن) من طرفك.",
    "faq_q2": "ما هي أجهزة الأندرويد المدعومة؟",
    "faq_a2": "يتطلب Octo Black نظام أندرويد 8.0 (API 26) أو أحدث ومعالج بمعمارية 64-bit ARM (arm64-v8a).",
    "faq_q3": "كيف أضيف ألعابي إلى المكتبة؟",
    "faq_a3": "افتح الإعدادات > المكتبة، اضغط على 'إضافة مجلد ألعاب'، اختر المجلد الذي يحتوي على ألعابك ثم اضغط 'فحص المكتبة'.",
    "faq_q4": "هل يدعم المحاكي أذرع التحكم الخارجية؟",
    "faq_a4": "نعم، يتعرف Octo Black تلقائياً على أذرع التحكم اللاسلكية وبلوتوث القياسية (Xbox, PlayStation, Ipega وغيرها).",
    "faq_q5": "هل أكواد الغش (Cheats) مدعومة؟",
    "faq_a5": "نعم، يتضمن التطبيق قاعدة بيانات CWCheat مضمنة ويدعم الإدخال اليدوي للأكواد.",

    // شعارات المتاجر (صفحة التنزيل)
    "dl_stores_title": "متوفر أيضاً على",
    "dl_stores_subtitle": "اختر المتجر الذي تفضّله لتنزيل Octo Black.",
    "dl_stores_pending": "روابط المتاجر قادمة قريباً — Octo Black متاح للتنزيل حالياً من إصدارات GitHub.",
    "store_apkpure": "APKPure",
    "store_aptoide": "Aptoide",
    "store_uptodown": "Uptodown",
    "store_github": "GitHub",
    "store_mediafire": "MediaFire",

    // واجهة عامة
    "ui_back_to_top": "العودة إلى الأعلى",

    // Footer
    "footer_brand_desc": "Octo Black هو واجهة محاكاة راقية لأجهزة أندرويد تجمع كل ألعابك الكلاسيكية في منصة واحدة.",
    "footer_heading_navigation": "الصفحات",
    "footer_heading_systems": "الأنظمة",
    "footer_heading_project": "عن المشروع",
    "footer_link_github": "مستودع GitHub",
    "footer_link_license": "التراخيص والشروط",
    "footer_copyright": "© 2026 Octo Black. جميع الحقوق محفوظة. واجهة ألعاب كلاسيكية مفتوحة المصدر للأندرويد."
  }
};
