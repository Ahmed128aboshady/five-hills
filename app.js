/* ==========================================================================
   Dubai Luxury Real Estate Marketing Website - Frontend JavaScript Logic
   Includes: Global LTR/RTL Translation Engine, URL Query Search Sync,
             Dynamic Portfolio Filtering, Booking Modals, Lightbox,
             and Light/Dark Theme Switcher State Manager
   ========================================================================== */

// Unified translation dictionary for all pages (Home, Projects, About, Contact, Single Project)
const translations = {
    en: {
        langBtn: "العربية",
        logoText: "5 Hills",
        navHome: "Home",
        navFeatured: "Projects",
        navAbout: "About Us",
        navContact: "Contact",
        headerCtaBtn: "Inquire Now",
        
        // Homepage - Hero & Search
        heroTagline: "Exquisite Living in Dubai",
        heroTitle: "Find Your Masterpiece Property",
        heroSubtitle: "Explore premium off-plan developments and ready-to-move-in luxury residences in Dubai's most prestigious districts.",
        lblLocation: "Location",
        optAllLocations: "All Locations",
        lblPropType: "Property Type",
        optAllTypes: "All Types",
        lblPrice: "Price starting from",
        optAnyPrice: "Any Price",
        lblStatus: "Status",
        optAllStatus: "All Status",
        btnSearchText: "Search",

        // Homepage - Why Invest
        whyTagline: "Why Invest in Dubai",
        whyTitle: "The World's Premium Investment Hub",
        whyT1: "0% Property & Income Tax",
        whyD1: "Maximize your rental yields and capital gains. Dubai offers a complete tax-free environment for foreign property owners and investors.",
        whyT2: "10-Year Golden Visa",
        whyD2: "Secure long-term residency for yourself and your family. Obtain the prestigious Golden Visa with real estate investments of AED 2M+.",
        whyT3: "High Rental Yields",
        whyD3: "Dubai's property market regularly generates 6% to 9% annual rental yields, significantly higher than major European or American global hubs.",

        // Homepage - Teasers & Roadmap
        featuredTag: "Curated Collection",
        featuredTitle: "Featured Developments",
        btnViewAll: "View All Projects",
        howTagline: "How We Work",
        howTitle: "Your Journey to Ownership",
        stepT1: "Private Consultation",
        stepD1: "Identify your financial goals, preferred locations, and family lifestyle requirements with our real estate advisors.",
        stepT2: "Bespoke Curation",
        stepD2: "Receive a personalized portfolio of premium, off-market, or developer-exclusive projects matching your criteria.",
        stepT3: "Site Walkthrough",
        stepD3: "Tour selected projects in person or through an immersive 3D digital video showcase for remote international buyers.",
        stepT4: "Secure Acquisition",
        stepD4: "Enjoy direct developer-pricing, complete contract protection, and end-to-end support throughout registration.",

        // Homepage - Testimonials
        testTagline: "Client Experiences",
        testTitle: "Testimonials of Trust",
        testRole1: "Investor, Munich",
        testRole2: "Business Owner, Abu Dhabi",
        testRole3: "CEO, London",

        // Projects Portfolio Page
        projectsBannerTitle: "Luxury Portfolio",
        projectsBannerSubtitle: "Explore Dubai's most prestigious real estate projects",
        lblPropertiesFound: "Properties Found",

        // About Us Page
        aboutBannerTitle: "About Our Agency",
        aboutBannerSubtitle: "Defining luxury real estate with integrity and trust",
        aboutStoryTag: "Our Legacy",
        aboutStoryTitle: "Bespoke Real Estate Curation",
        aboutStoryDesc1: "Five Hills is a premier boutique brokerage based in Dubai Marina. Since our establishment, we have focused exclusively on bridging high-net-worth international investors with off-market private listings and premier developer releases.",
        aboutStoryDesc2: "We do not believe in generic listings. Our brokers curate tailored investments that secure strong rental returns, capital appreciation, and full compliance with Dubai's regulatory framework (RERA).",
        statLbl1: "Transactions",
        statLbl2: "Years Exp.",
        statLbl3: "Client Satisfaction",
        valuesTag: "Core Pillars",
        valuesTitle: "Our Principles",
        valT1: "Absolute Trust",
        valD1: "We value transparency above all else. Every lease, purchase, and payment plan is fully documented and secure.",
        valT2: "Bespoke Services",
        valD2: "No two investors are identical. We customize every portfolio according to tax constraints, residency goals, and risk profiles.",
        valT3: "Direct Partnerships",
        valD3: "Enjoy early VVIP access to new project launches by partnering directly with Dubai's top tier master developers.",
        valT4: "Seamless Experience",
        valD4: "From local airport pickups and luxury site tours to Golden Visa legal processing, we manage the entire lifecycle.",

        // Contact Page
        contactBannerTitle: "Contact Us",
        contactBannerSubtitle: "Reach out to our luxury property specialists in Dubai",
        ccT1: "Direct Phone",
        ccD1: "Speak to a licensed broker instantly. Available 9 AM - 9 PM GST.",
        ccT2: "Email Inquiries",
        ccD2: "Send us your portfolio requests. We reply within 2 hours.",
        ccT3: "Dubai Office",
        ccV3: "Marina Plaza, Suite 2402",
        ccD3: "Dubai Marina, Dubai, United Arab Emirates. Valet parking available.",
        cfTitle: "Request Bespoke Portfolio",
        cfSubtitle: "Please submit your details and our team will prepare a customized catalog matching your requirements.",
        clblName: "Full Name",
        clblEmail: "Email Address",
        clblPhone: "Phone Number",
        clblBudget: "Investment Budget",
        clblMessage: "Inquiry details",
        btnSubmitContact: "Send Message",

        // Single Project Page (Knightsbridge)
        projectTitle: "Knightsbridge Phase 1",
        metaLoc: "Meydan, District 11, Dubai",
        metaDev: "LEOS Developments",
        lblStartingPrice: "Starting From",
        projectPrice: "AED 8,500,000",
        statLabelType: "Property Type",
        statValType: "Luxury Villas",
        statLabelStatus: "Project Status",
        statValStatus: "Off-Plan",
        statLabelDate: "Handover Date",
        statValDate: "Q2 2028",
        statLabelPlan: "Payment Plan",
        statValPlan: "60/40 Plan",
        descTitle: "About The Development",
        descText1: "Knightsbridge Phase 1 redefines British elegance in Dubai's heart. Set in District 11, Meydan, this master development merges classic English classical architecture with modern climate-smart technologies.",
        descText2: "Each villa features high-ceiling spaces, private swimming pools, internal elevators, smart home automation, and views of beautiful gardens and clear blue lagoons. Perfect for investors and families seeking privacy, sustainability, and high ROI in Dubai's premier residential area.",
        amenitiesTitle: "Premium Amenities",
        amSmart: "Smart Home System",
        amPool: "Private Pool",
        amGym: "State-of-the-art Gym",
        amSecurity: "24/7 Security & CCTV",
        amParking: "Covered Parking",
        amConcierge: "24/7 Concierge Service",
        galleryTitle: "Project Gallery",
        floorPlanTitle: "Floor Plans",
        btnDownloadBrochure: "Download Brochure",
        tabBtn4: "4 Bedroom Villa",
        tabBtn5: "5 Bedroom Villa",
        lblSuiteArea: "Suite Area",
        lblBalconyArea: "Balcony Area",
        lblTotalArea: "Total Built Up Area",
        lblSuiteArea5: "Suite Area",
        lblBalconyArea5: "Balcony Area",
        lblTotalArea5: "Total Built Up Area",
        bookingPanelTitle: "Schedule a Consultation",
        bookingPanelDesc: "Speak directly with our Dubai Real Estate experts. Book a private site walkthrough or an online Zoom video consultation today.",
        btnBookOnline: "Book Online Meeting",
        btnBookVisit: "Book Site Visit",
        sidebarTitle: "Register Interest",
        sidebarSubtitle: "Get pricing sheets, floor plan packages, and developer discounts.",
        lblLeadName: "Full Name",
        lblLeadEmail: "Email Address",
        lblLeadPhone: "Phone Number",
        lblLeadMessage: "Custom Inquiry",
        btnSubmitLead: "Request Details",
        lblPrivacy: "Your data is secured under Dubai Real Estate regulatory norms.",
        mlblName: "Your Name",
        mlblEmail: "Email",
        mlblDate: "Preferred Date",
        mlblTime: "Preferred Time",
        mSubmitBtn: "Confirm Appointment",
        waText: "Inquire on WhatsApp",

        // Footer & Common elements
        footerDesc: "5 Hills is a luxury boutique real estate agency in Dubai, dedicated to curating ultra-premium residences, villas, and off-plan assets for global high-net-worth investors.",
        fTitleQuick: "Quick Links",
        flHome: "Home",
        flProjects: "Projects Portfolio",
        flAbout: "About Our Agency",
        flContact: "Contact Us",
        fTitleAreas: "Key Areas",
        fTitleContact: "Contact Info",
        fPhone: "Phone: +971 4 555 0000",
        fEmail: "Email: info@fivehills.ae",
        fAddress: "Office: Marina Plaza, Suite 2402, Dubai Marina, Dubai, UAE",
        fCopy: "© 2026 5 Hills Real Estate. All rights reserved. Registered with RERA No. 12849.",
        fDevelop: "Designed & Programmed by Antigravity Developer"
    },
    ar: {
        langBtn: "English",
        logoText: "5 هيلز",
        navHome: "الرئيسية",
        navFeatured: "المشاريع",
        navAbout: "من نحن",
        navContact: "اتصل بنا",
        headerCtaBtn: "استفسر الآن",
        
        // Homepage - Hero & Search
        heroTagline: "حياة راقية في دبي",
        heroTitle: "اعثر على عقارك المثالي الاستثنائي",
        heroSubtitle: "استكشف أرقى المشاريع العقارية قيد الإنشاء والجاهزة للسكن في أفخم مناطق دبي.",
        lblLocation: "الموقع",
        optAllLocations: "جميع المواقع",
        lblPropType: "نوع العقار",
        optAllTypes: "جميع الأنواع",
        lblPrice: "السعر يبدأ من",
        optAnyPrice: "أي سعر",
        lblStatus: "الحالة",
        optAllStatus: "جميع الحالات",
        btnSearchText: "بحث",

        // Homepage - Why Invest
        whyTagline: "لماذا الاستثمار في دبي",
        whyTitle: "العاصمة العالمية للاستثمار العقاري",
        whyT1: "0% ضرائب على الدخل والعقارات",
        whyD1: "عظم عوائدك الإيجارية وأرباح رأس المال. تقدم دبي بيئة خالية تماماً من الضرائب للمستثمرين وأصحاب العقارات الأجانب.",
        whyT2: "الإقامة الذهبية لمدة 10 سنوات",
        whyD2: "اضمن إقامة طويلة الأجل لك ولعائلتك. احصل على الإقامة الذهبية المرموقة عند استثمارك في العقارات بقيمة 2 مليون درهم فما فوق.",
        whyT3: "عوائد إيجار مرتفعة",
        whyD3: "يحقق سوق العقارات في دبي بانتظام عوائد إيجارية سنوية تتراوح بين 6% و 9%، وهي نسبة أعلى بكثير من العواصم العالمية الأخرى.",

        // Homepage - Teasers & Roadmap
        featuredTag: "مجموعة مختارة",
        featuredTitle: "أحدث المشاريع المعروضة",
        btnViewAll: "عرض كافة المشاريع",
        howTagline: "كيف نعمل",
        howTitle: "رحلتك لامتلاك العقار",
        stepT1: "استشارة خاصة",
        stepD1: "حدد أهدافك المالية، مناطقك المفضلة، ومتطلبات نمط حياة عائلتك مع مستشارينا العقاريين ذوي الخبرة.",
        stepT2: "تنسيق مخصص",
        stepD2: "احصل على محفظة عقارية مخصصة تحتوي على مشاريع حصرية أو مطروحة حديثاً من المطورين تناسب متطلباتك بدقة.",
        stepT3: "معاينة ميدانية للموقع",
        stepD3: "قم بزيارة المشاريع المختارة شخصياً أو من خلال جولة فيديو رقمية ثلاثية الأبعاد مخصصة للمشترين الدوليين عن بعد.",
        stepT4: "استحواذ آمن وسهل",
        stepD4: "استمتع بأسعار المطور المباشرة وحماية العقود بالكامل ودعم متكامل طوال فترة التسجيل والتعاقد.",

        // Homepage - Testimonials
        testTagline: "آراء عملائنا",
        testTitle: "شهادات نعتز بها",
        testRole1: "مستثمر، ميونخ",
        testRole2: "سيدة أعمال، أبوظبي",
        testRole3: "رئيس تنفيذي، لندن",

        // Projects Portfolio Page
        projectsBannerTitle: "المحفظة العقارية",
        projectsBannerSubtitle: "استكشف أرقى وأحدث المشاريع العقارية في دبي",
        lblPropertiesFound: "عقارات تم العثور عليها",

        // About Us Page
        aboutBannerTitle: "من نحن",
        aboutBannerSubtitle: "نرسم ملامح العقارات الفاخرة بالنزاهة والثقة",
        aboutStoryTag: "مسيرتنا العريقة",
        aboutStoryTitle: "رعاية عقارية حصرية",
        aboutStoryDesc1: "فايف هيلز هي وكالة عقارية رائدة وحصرية تقع في دبي مارينا. منذ تأسيسنا، ركزنا بشكل كامل على ربط المستثمرين الدوليين بالعقارات الفاخرة والمشاريع الحصرية غير المعروضة في السوق العام.",
        aboutStoryDesc2: "لا نؤمن بالعروض العشوائية؛ حيث يقوم مستشارونا بتنسيق استثمارات مصممة لضمان عوائد إيجارية قوية ونمو رأسمالي ممتاز، مع الالتزام التام باللوائح التنظيمية لمؤسسة التنظيم العقاري بدبي (RERA).",
        statLbl1: "إجمالي المعاملات",
        statLbl2: "سنوات من الخبرة",
        statLbl3: "رضا العملاء",
        valuesTag: "ركائزنا الأساسية",
        valuesTitle: "مبادئنا الراسخة",
        valT1: "الثقة المطلقة",
        valD1: "نحن نقدر الشفافية فوق كل شيء. جميع العقود، عمليات الشراء، وخطط الدفع موثقة بالكامل وبأعلى معايير الأمان.",
        valT2: "خدمات مصممة لك",
        valD2: "لا يوجد مستثمران متطابقان؛ لهذا نصمم محفظتك الاستثمارية بناءً على وضعك المالي وأهداف الإقامة الخاصة بك.",
        valT3: "شراكات مباشرة",
        valD3: "استمتع بالأولوية والوصول الحصري لأحدث إطلاقات المشاريع الفاخرة بفضل علاقتنا المباشرة مع كبار المطورين العقاريين في دبي.",
        valT4: "تجربة خالية من المتاعب",
        valD4: "من استقبالك الفخم في المطار وجولات المعاينة الخاصة، إلى تخليص الإجراءات القانونية للإقامة الذهبية، نتكفل بكل شيء.",

        // Contact Page
        contactBannerTitle: "اتصل بنا",
        contactBannerSubtitle: "تواصل مع مستشاري العقارات الفاخرة في دبي",
        ccT1: "الاتصال المباشر",
        ccD1: "تحدث مع وسيط مرخص فوراً. متواجدون من 9 صباحاً حتى 9 مساءً بتوقيت دبي.",
        ccT2: "الاستفسارات البريدية",
        ccD2: "أرسل لنا متطلبات محفظتك العقارية. نقوم بالرد خلال ساعتين فقط.",
        ccT3: "مكتبنا في دبي",
        ccV3: "مارينا بلازا، جناح 2402",
        ccD3: "دبي مارينا، دبي، الإمارات العربية المتحدة. تتوفر خدمة صف السيارات.",
        cfTitle: "طلب محفظة عقارية مخصصة",
        cfSubtitle: "يرجى تعبئة بياناتك وسيقوم فريقنا بإعداد كتالوج مخصص بالكامل متوافق مع متطلباتك.",
        clblName: "الاسم الكامل",
        clblEmail: "البريد الإلكتروني",
        clblPhone: "رقم الهاتف",
        clblBudget: "ميزانية الاستثمار",
        clblMessage: "تفاصيل الاستفسار",
        btnSubmitContact: "إرسال الرسالة",

        // Single Project Page (Knightsbridge)
        projectTitle: "نايتسبريدج المرحلة الأولى",
        metaLoc: "ميدان، المنطقة 11، دبي",
        metaDev: "ليوس للتطوير العقاري",
        lblStartingPrice: "الأسعار تبدأ من",
        projectPrice: "8,500,000 درهم",
        statLabelType: "نوع العقار",
        statValType: "فيلات فاخرة",
        statLabelStatus: "حالة المشروع",
        statValStatus: "قيد الإنشاء",
        statLabelDate: "تاريخ التسليم",
        statValDate: "الربع الثاني 2028",
        statLabelPlan: "خطة الدفع",
        statValPlan: "خطة 60/40",
        descTitle: "عن المشروع العقاري",
        descText1: "يعيد مشروع نايتسبريدج المرحلة الأولى تعريف الأناقة البريطانية الكلاسيكية في قلب دبي. يقع في المنطقة 11 بميدان، ويدمج هذا المشروع الرئيسي بين الفن المعماري البريطاني العريق والتقنيات الذكية الصديقة للبيئة.",
        descText2: "تتميز كل فيلا بأسقف مرتفعة، وحمامات سباحة خاصة، ومصاعد داخلية، وأنظمة أتمتة منزلية ذكية، وإطلالات خلابة على الحدائق المورقة والبحيرات الصافية. مثالي للمستثمرين والعائلات التي تبحث عن الخصوصية والعائد العالي على الاستثمار.",
        amenitiesTitle: "المرافق والخدمات الفاخرة",
        amSmart: "منزل ذكي متكامل",
        amPool: "حمام سباحة خاص",
        amGym: "صالة رياضية مجهزة بالكامل",
        amSecurity: "حراسة وكاميرات مراقبة 24/7",
        amParking: "مواقف مغطاة للسيارات",
        amConcierge: "خدمة كونسيرج على مدار الساعة",
        galleryTitle: "معرض الصور",
        floorPlanTitle: "مخططات الطوابق",
        btnDownloadBrochure: "تحميل الكتيب التفصيلي",
        tabBtn4: "فيلا 4 غرف نوم",
        tabBtn5: "فيلا 5 غرف نوم",
        lblSuiteArea: "مساحة الجناح",
        lblBalconyArea: "مساحة الشرفة",
        lblTotalArea: "إجمالي المساحة المبنية",
        lblSuiteArea5: "مساحة الجناح",
        lblBalconyArea5: "مساحة الشرفة",
        lblTotalArea5: "إجمالي المساحة المبنية",
        bookingPanelTitle: "احجز جلسة استشارية مجانية",
        bookingPanelDesc: "تحدث مباشرة مع خبرائنا العقاريين في دبي. احجز جولة معاينة خاصة للموقع أو موعد اجتماع افتراضي عبر زووم اليوم.",
        btnBookOnline: "حجز اجتماع افتراضي عبر الإنترنت",
        btnBookVisit: "حجز معاينة ميدانية للمشروع",
        sidebarTitle: "تسجيل الاهتمام",
        sidebarSubtitle: "احصل على قوائم الأسعار الحصرية ومخططات الطوابق وخصومات المطور المباشرة.",
        lblLeadName: "الاسم الكامل",
        lblLeadEmail: "البريد الإلكتروني",
        lblLeadPhone: "رقم الهاتف",
        lblLeadMessage: "تفاصيل الاستفسار",
        btnSubmitLead: "طلب التفاصيل الكاملة",
        lblPrivacy: "بياناتك محمية بالكامل وفقاً للقوانين واللوائح التنظيمية في دبي.",
        mlblName: "الاسم",
        mlblEmail: "البريد الإلكتروني",
        mlblDate: "التاريخ المفضل",
        mlblTime: "الوقت المفضل",
        mSubmitBtn: "تأكيد الموعد الاستشاري",
        waText: "تواصل معنا عبر واتساب",

        // Footer & Common elements
        footerDesc: "فايف هيلز هي وكالة عقارية فاخرة ورائدة في دبي، متخصصة في توفير أفخم الوحدات السكنية والفيلات والمشاريع قيد الإنشاء لشبكة عملائنا من كبار المستثمرين دولياً.",
        fTitleQuick: "روابط سريعة",
        flHome: "الرئيسية",
        flProjects: "المحفظة العقارية",
        flAbout: "من نحن",
        flContact: "اتصل بنا",
        fTitleAreas: "أهم المناطق",
        fTitleContact: "بيانات الاتصال",
        fPhone: "الهاتف: +971 4 555 0000",
        fEmail: "البريد: info@fivehills.ae",
        fAddress: "المكتب: مارينا بلازا، جناح 2402، دبي مارينا، دبي، إ.ع.م",
        fCopy: "© 2026 5 هيلز العقارية. جميع الحقوق محفوظة. ترخيص ريرا رقم 12849.",
        fDevelop: "تصميم وبرمجة مطور انتي جرافيتي"
    }
};

let currentLang = 'en';

// Translate All Page Elements dynamically
function updateUI() {
    const langData = translations[currentLang];
    
    // Set HTML Dir and Lang
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Toggle button text
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) langBtn.innerText = langData.langBtn;

    // Loop through all keys in translation dictionary and map to element IDs
    for (const key in langData) {
        const el = document.getElementById(key);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = langData[key];
            } else if (key === 'btnSearch') {
                const searchBtnText = document.getElementById('btnSearchText');
                if (searchBtnText) searchBtnText.innerText = langData[key];
            } else {
                el.innerHTML = langData[key];
            }
        }
    }

    // Specific translation logic for forms placeholders/values
    const leadName = document.getElementById('leadName');
    if (leadName) leadName.placeholder = currentLang === 'ar' ? "الاسم الكامل" : "Full Name";

    // Load dynamic project details first
    loadSingleProjectDetails();

    // Update lead message with active project name
    const leadMessage = document.getElementById('leadMessage');
    if (leadMessage) {
        const projectTitleEl = document.getElementById('projectTitle');
        const activeProjName = projectTitleEl ? projectTitleEl.innerText : "";
        leadMessage.value = currentLang === 'ar' 
            ? `أود الاستفسار عن مشروع ${activeProjName}. يرجى إرسال التفاصيل والأسعار.` 
            : `I would like to inquire about ${activeProjName}. Please send me the price sheets and brochure.`;
    }

    // Dynamic WhatsApp updates
    updateWhatsAppLink();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('five_hills_lang', currentLang);
    updateUI();
}

// Update WhatsApp Floating Link
function updateWhatsAppLink() {
    const waBtn = document.getElementById('whatsappFloatingBtn');
    if (!waBtn) return;
    
    const projectTitleEl = document.getElementById('projectTitle');
    const projectName = projectTitleEl ? projectTitleEl.innerText : "Dubai Luxury Properties";
    
    const phoneNumber = "971500000000";
    const arabicText = `مرحباً، أنا مهتم بمشروع ${projectName}. يرجى تزويدي بالتفاصيل المتاحة والأسعار.`;
    const englishText = `Hello, I am interested in ${projectName}. Please send me the pricing sheets and floor plans.`;
    
    const prefilledText = currentLang === 'ar' ? encodeURIComponent(arabicText) : encodeURIComponent(englishText);
    waBtn.href = `https://wa.me/${phoneNumber}?text=${prefilledText}`;
}

// Dynamic Single Project Page loader
function loadSingleProjectDetails() {
    const projectTitleEl = document.getElementById('projectTitle');
    if (!projectTitleEl) return; // not on single-project.html
    
    const params = new URLSearchParams(window.location.search);
    let projectId = params.get('project');
    
    if (!projectId || !projectsData[projectId]) {
        projectId = Object.keys(projectsData)[0] || "Knightsbridge_P1";
    }
    
    const data = projectsData[projectId];
    if (!data) return;
    
    const langData = data[currentLang] || data.en;
    
    projectTitleEl.innerText = langData.title;
    
    const locEl = document.getElementById('projectLoc');
    if (locEl) locEl.innerText = langData.locationText;
    
    const devEl = document.getElementById('projectDev');
    if (devEl) devEl.innerText = langData.developer;
    
    const priceEl = document.getElementById('projectPrice');
    if (priceEl) priceEl.innerText = langData.price;
    
    const typeEl = document.getElementById('statValType');
    if (typeEl) typeEl.innerText = langData.type;
    
    const statusEl = document.getElementById('statValStatus');
    if (statusEl) statusEl.innerText = langData.status;
    
    const dateEl = document.getElementById('statValDate');
    if (dateEl) dateEl.innerText = langData.handover;
    
    const planEl = document.getElementById('statValPlan');
    if (planEl) planEl.innerText = langData.plan;
    
    const descBlock = document.getElementById('projectDesc');
    if (descBlock) {
        descBlock.innerHTML = `<p>${langData.desc}</p>`;
    }
    
    const heroImg = document.getElementById('projectHeroImg');
    if (heroImg && data.images.length > 0) {
        heroImg.src = data.images[0];
        heroImg.alt = langData.title;
    }
    
    const galleryContainer = document.getElementById('galleryContainer');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        data.images.forEach(imgSrc => {
            const item = document.createElement('div');
            item.className = 'gallery-grid-item';
            item.onclick = () => openLightbox(imgSrc);
            item.innerHTML = `<img src="${imgSrc}" alt="${langData.title}">`;
            galleryContainer.appendChild(item);
        });
    }
}

// AJAX Portfolio Search & Filter logic (runs on projects.html)
function applyPortfolioFilters() {
    const location = document.getElementById('filterLocation')?.value || '';
    const propType = document.getElementById('filterType')?.value || '';
    const price = document.getElementById('filterPrice')?.value || '';
    const status = document.getElementById('filterStatus')?.value || '';

    const cards = document.querySelectorAll('.property-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        let match = true;
        
        if (location && card.dataset.location !== location) match = false;
        if (propType && card.dataset.type !== propType) match = false;
        if (price && parseInt(card.dataset.price) < parseInt(price)) match = false;
        if (status && card.dataset.status !== status) match = false;

        if (match) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transition = 'opacity 0.4s ease';
            }, 50);
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update Found Results Count
    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.innerText = visibleCount;
}

// URL Parameter Sync: carry search parameters from Homepage to Portfolio page
function syncSearchFromURL() {
    const params = new URLSearchParams(window.location.search);
    const loc = params.get('location');
    const type = params.get('type');
    const price = params.get('price');
    const status = params.get('status');

    if (loc && document.getElementById('filterLocation')) {
        document.getElementById('filterLocation').value = loc;
    }
    if (type && document.getElementById('filterType')) {
        document.getElementById('filterType').value = type;
    }
    if (price && document.getElementById('filterPrice')) {
        document.getElementById('filterPrice').value = price;
    }
    if (status && document.getElementById('filterStatus')) {
        document.getElementById('filterStatus').value = status;
    }

    if (loc || type || price || status) {
        applyPortfolioFilters();
    }
}

// Floor Plan Tab Switcher
function switchFloorTab(event, tabId) {
    const tabBtns = document.querySelectorAll('.tab-nav-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    const panels = document.querySelectorAll('.tab-content-panel');
    panels.forEach(p => p.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Lightbox Photo Viewers with Carousel Support
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(src) {
    const lightbox = document.getElementById('galleryLightbox');
    const img = document.getElementById('lightboxImg');
    if (!lightbox || !img) return;

    // Get current project ID from URL
    const params = new URLSearchParams(window.location.search);
    let projectId = params.get('project');
    
    // Check if projectsData exists and contains this projectId
    if (typeof projectsData !== 'undefined' && projectId && projectsData[projectId]) {
        const data = projectsData[projectId];
        if (data && data.images && data.images.length > 0) {
            currentLightboxImages = data.images;
            const index = currentLightboxImages.indexOf(src);
            currentLightboxIndex = index !== -1 ? index : 0;
        } else {
            currentLightboxImages = [src];
            currentLightboxIndex = 0;
        }
    } else {
        // Fallback for pages that might not have active projects (e.g. index/about)
        currentLightboxImages = [src];
        currentLightboxIndex = 0;
    }

    img.src = currentLightboxImages[currentLightboxIndex];
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) lightbox.classList.remove('active');
}

function prevLightboxImage(event) {
    if (event) event.stopPropagation(); // Prevent closing backdrop
    if (currentLightboxImages.length <= 1) return;

    currentLightboxIndex--;
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxImages.length - 1;
    }
    
    const img = document.getElementById('lightboxImg');
    if (img) img.src = currentLightboxImages[currentLightboxIndex];
}

function nextLightboxImage(event) {
    if (event) event.stopPropagation(); // Prevent closing backdrop
    if (currentLightboxImages.length <= 1) return;

    currentLightboxIndex++;
    if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }
    
    const img = document.getElementById('lightboxImg');
    if (img) img.src = currentLightboxImages[currentLightboxIndex];
}

// Dual Booking Modals
let activeBookingType = 'online';

function openBookingModal(type) {
    activeBookingType = type;
    const modal = document.getElementById('bookingModal');
    const title = document.getElementById('mTitle');
    const subtitle = document.getElementById('mSubtitle');
    const submitBtn = document.getElementById('mSubmitBtn');

    if (modal && title && subtitle && submitBtn) {
        const langData = translations[currentLang];
        
        if (type === 'online') {
            title.innerText = currentLang === 'ar' ? "حجز اجتماع افتراضي عبر الإنترنت" : "Book Online Meeting";
            subtitle.innerText = currentLang === 'ar' ? "يرجى اختيار الوقت المفضل لمقابلة عبر زووم أو جوجل ميت." : "Please select your preferred time slot for a Google Meet / Zoom session.";
            submitBtn.innerText = currentLang === 'ar' ? "تأكيد موعد الاجتماع الافتراضي" : "Confirm Online Appointment";
        } else {
            title.innerText = currentLang === 'ar' ? "حجز معاينة ميدانية للمشروع" : "Book Site Visit";
            subtitle.innerText = currentLang === 'ar' ? "يرجى تحديد التاريخ لمرافقتكم في جولة خاصة بالموقع مع أحد مستشارينا." : "Select a date to arrange an exclusive guided tour of the site with our agent.";
            submitBtn.innerText = currentLang === 'ar' ? "تأكيد موعد الجولة الميدانية" : "Confirm Tour Appointment";
        }
        modal.classList.add('active');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
}

// Theme Switcher State Manager
function updateThemeUI() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    
    const headerLogoImg = document.querySelector('.site-header .site-logo img');
    const footerLogoImg = document.querySelector('.site-footer .site-logo img');
    
    if (document.body.classList.contains('light-theme')) {
        themeBtn.innerText = '🌙'; // Click to go Dark
        if (headerLogoImg) {
            headerLogoImg.src = 'images/project-images/logo.png'; // Square logo for Light Theme
        }
        if (footerLogoImg) {
            footerLogoImg.src = 'images/project-images/logo-wide-dark.png'; // Dark wide logo for Light Theme Footer
        }
    } else {
        themeBtn.innerText = '☀️'; // Click to go Light
        if (headerLogoImg) {
            headerLogoImg.src = 'images/project-images/logo-wide.png'; // Wide white logo for Dark Theme
        }
        if (footerLogoImg) {
            footerLogoImg.src = 'images/project-images/logo-wide.png'; // Wide white logo for Dark Theme Footer
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('five_hills_theme', isLight ? 'light' : 'dark');
    updateThemeUI();
}

// Form Handlers (Simulated Lead Capture Webhooks / CRM integrations)
function submitLeadForm() {
    const name = document.getElementById('leadName').value;
    const email = document.getElementById('leadEmail').value;
    const phone = document.getElementById('leadPhone').value;
    const message = document.getElementById('leadMessage').value;

    const successMsg = currentLang === 'ar' 
        ? `شكرًا لك يا ${name}. تم تسجيل اهتمامك بنجاح. سيتواصل معك أحد وكلاءنا العقاريين خلال 15 دقيقة.` 
        : `Thank you, ${name}. Your registration of interest was submitted. A luxury property advisor will contact you within 15 minutes.`;

    alert(successMsg);
    console.log("Lead captured:", { name, email, phone, message, project: document.getElementById('projectTitle')?.innerText || "General" });
    document.getElementById('projectLeadForm').reset();
}

function submitGeneralContactForm() {
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const phone = document.getElementById('cPhone').value;
    const budget = document.getElementById('cBudget').value;
    const message = document.getElementById('cMessage').value;

    const successMsg = currentLang === 'ar'
        ? `شكرًا لتواصلك معنا يا ${name}. لقد استلمنا استفسارك وسيقوم أحد خبرائنا العقاريين بإعداد الملفات المطلوبة وتزويدك بها قريباً.`
        : `Thank you for contacting us, ${name}. We have received your query and are preparing your customized property catalog.`;

    alert(successMsg);
    console.log("Contact Inquiry captured:", { name, email, phone, budget, message });
    document.getElementById('contactForm').reset();
}

function submitBookingForm() {
    const name = document.getElementById('bookName').value;
    const email = document.getElementById('bookEmail').value;
    const date = document.getElementById('bookDate').value;
    const time = document.getElementById('bookTime').value;

    const successMsg = currentLang === 'ar'
        ? `تم حجز موعدك بنجاح يا ${name} بتاريخ ${date} الساعة ${time}. تم إرسال رابط تأكيد التقويم إلى بريدك الإلكتروني.`
        : `Appointment scheduled successfully, ${name}! Your ${activeBookingType === 'online' ? 'Online Meeting' : 'Site Visit'} is set for ${date} at ${time}. Check your email for the calendar invitation.`;

    alert(successMsg);
    console.log("Consultation booked:", { name, email, date, time, type: activeBookingType });
    
    document.getElementById('modalBookingForm').reset();
    closeBookingModal();
}

// Initialise features on DOM Load
window.addEventListener('DOMContentLoaded', () => {
    // Persistent language check
    const savedLang = localStorage.getItem('five_hills_lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // Persistent theme check
    const savedTheme = localStorage.getItem('five_hills_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    updateUI();
    updateThemeUI();
    syncSearchFromURL();
    
    // Backdrop click modal dismiss
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeBookingModal();
        });
    }
});
