/* ==========================================================================
   Dubai Luxury Real Estate Marketing Website - Frontend JavaScript Logic
   Includes: Global LTR/RTL Translation Engine, URL Query Search Sync,
             Dynamic Portfolio Filtering, Booking Modals, Lightbox,
             and Light/Dark Theme Switcher State Manager
   ========================================================================== */

// Unified translation dictionary for all pages (Home, Projects, About, Contact, Single Project)
function getAssetPath(path) {
    const isAr = window.location.pathname.includes('/ar/');
    if (isAr && path && !path.startsWith('http') && !path.startsWith('data:') && !path.startsWith('../')) {
        return '../' + path;
    }
    return path;
}

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
        fPhone: "<strong>Phone:</strong> +971 50 893 0996",
        fEmail: "Email: info@fivehills.ae",
        fAddress: "Office: Marina Plaza, Suite 2402, Dubai Marina, Dubai, UAE",
        fCopy: "© 2026 5 Hills Real Estate. All rights reserved. Registered with RERA No. 12849.",
        fWhatsapp: '<strong>WhatsApp:</strong> <a href="https://wa.me/971564622103?text=Hello" target="_blank" style="color: inherit; text-decoration: underline;">+971 56 462 2103</a>',
        ccT1_wa: "WhatsApp Support",
        ccD1_wa: "Chat with our online support team for instant property listings.",

        // Team / Leadership Page
        navTeam: "Our Team",
        flTeam: "Our Leadership",
        teamHeroTag: "Our Leadership",
        teamHeroTitle: "The Visionaries Behind 5 Hills",
        teamHeroSubtitle: "Two pioneers united by a shared mission — to redefine luxury real estate investment in Dubai with integrity, innovation, and unmatched expertise.",
        teamStat1: "In Curated Transactions",
        teamStat2: "Years Combined Experience",
        teamStat3: "Client Satisfaction Rate",
        founderBadge1: "Co-Founder",
        founderName1: "Ashraf El Shenawy",
        founderRole1: "Real Estate & Financial Advisor",
        founderBio1: "Ashraf El Shenawy is a seasoned Real Estate & Financial Advisor with over a decade of hands-on experience in Dubai's dynamic property market. Beyond brokerage, he is a proven portfolio manager overseeing 20+ premium properties — including residential towers, luxury villas, and a commercial retail mall — totalling 500+ managed units across Dubai. His expertise spans asset acquisition, tenant management, rental yield optimization, and full-cycle property operations, making him an unmatched partner for investors seeking both ownership and seamless long-term management.",
        founderStat1A: "Years Exp.",
        founderStat1B: "Properties Managed",
        founderStat1C: "Units Under Mgmt",
        founderBadge2: "Founder",
        founderName2: "Amal Ahmed",
        founderRole2: "Founder & Chief Executive",
        founderBio2: "Amal is the entrepreneurial force who founded 5 Hills with a bold vision: to create Dubai's most trusted boutique brokerage. Her strategic leadership, combined with an innate ability to connect with global investors, has established 5 Hills as a benchmark for excellence, trust, and bespoke real estate advisory in the UAE.",
        founderStat2A: "Years Exp.",
        founderStat2B: "Portfolio Value",
        founderStat2C: "Happy Clients",

        // Property Management Section (About page)
        mgmtTag: "Full-Service Management",
        mgmtTitle: "We Manage Everything For You",
        mgmtDesc: "From luxury residential towers and private villas to commercial retail malls — 5 Hills manages every aspect of your property portfolio so you earn more and worry less.",
        mgmtStat1Lbl: "Properties Managed",
        mgmtStat2Lbl: "Residential & Commercial Units",
        mgmtStat3Lbl: "Asset Classes",
        mgmtStat4Lbl: "Occupancy Rate",
        mgmtCard1Title: "Residential Towers",
        mgmtCard1Desc: "We manage full residential buildings across Dubai — handling tenant sourcing, lease agreements, maintenance coordination, and monthly owner reporting.",
        mgmtCard2Title: "Luxury Villas",
        mgmtCard2Desc: "From short-term holiday lets to long-term leases, we provide white-glove management for private villas — maximizing yield while preserving your asset's prestige.",
        mgmtCard3Title: "Commercial Mall",
        mgmtCard3Desc: "Our commercial management team handles retail tenant mix, lease negotiations, common area upkeep, and footfall growth strategies for your retail asset.",
        mgmtServicesTitle: "What We Handle For You",
        mgmtSvc1: "Tenant Sourcing & Screening",
        mgmtSvc2: "Lease Drafting & Renewals",
        mgmtSvc3: "Rent Collection & Disbursement",
        mgmtSvc4: "Maintenance & Facility Management",
        mgmtSvc5: "Monthly Financial Reporting",
        mgmtSvc6: "RERA & Legal Compliance",
        mgmtSvc7: "Vacancy Marketing & Listings",
        mgmtSvc8: "Commercial Tenant Mix Strategy",
        mgmtCta: "Discuss Your Portfolio",

        // Blog Navigation & Structure
        navBlog: "Blog",
        flBlog: "Real Estate Blog",
        blogBannerTitle: "Dubai Real Estate Blog",
        blogBannerSubtitle: "Expert insights, guides, and investment analyses from Dubai's leading advisors",
        lblGuideTag: "GUIDE",
        lblAnalysisTag: "ANALYSIS",
        lblReviewTag: "REVIEW",
        art1Title: "How to Secure the Dubai Golden Visa via Property",
        art1Desc: "Learn the step-by-step requirements to obtain a 10-year residency Golden Visa in the UAE through real estate investments of AED 2M+.",
        art1Btn: "Read Article",
        art2Title: "Off-Plan vs. Ready Properties: Which has Better ROI?",
        art2Desc: "An in-depth analysis of rental yields, capital appreciation rates, and tax-free returns between ready and off-plan assets in Dubai.",
        art2Btn: "Read Article",
        art3Title: "Top 5 Luxury Areas in Dubai to Buy a Family Villa",
        art3Desc: "Exploring Meydan, Dubai Marina, Zabeel Park, Downtown Dubai, and Zabeel for premium family villa investments.",
        art3Btn: "Read Article",
        
        // Article - Golden Visa
        visaTitle: "Dubai Golden Visa Guide",
        visaSubtitle: "Secure your 10-year residency through smart property acquisition",
        visaH1: "Investment Criteria",
        visaP1: "The Dubai Golden Visa program is one of the most successful residency-by-investment programs globally. Under current RERA and Dubai Land Department rules, foreign investors who buy property worth a minimum of AED 2 Million ($544,500 USD) are eligible for a 10-year renewable residency visa.",
        visaH2: "Key Requirements:",
        visaReq1: "Minimum Valuation: The total value of your property portfolio must be AED 2 Million or higher. Multiple properties can be combined.",
        visaReq2: "Mortgaged Assets: If the property is mortgaged, the bank must provide a No Objection Certificate (NOC), and the owner must have paid at least AED 2 Million of the total value directly.",
        visaReq3: "Joint Ownership: Spouses can jointly own a single property worth AED 2 Million to qualify.",
        visaH3: "Step-by-Step Process",
        visaP2: "1. Property Purchase: Acquire an eligible ready or off-plan asset (with a developer registered under Escrow regulations).\n2. Title Deed Issuance: Obtain the official Title Deed from the Dubai Land Department (DLD).\n3. Application: Apply through the DLD or the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).\n4. Medical & Security: Complete the local medical fitness test and biometric scans. Receive your Emirates ID and 10-year residency visa sticker.",
        visaCta: "Consult a Golden Visa Broker",
        
        // Article - ROI
        roiTitle: "Off-Plan vs. Ready Properties",
        roiSubtitle: "Analyzing the highest yields and capital appreciation in Dubai",
        roiH1: "Ready Properties: Instant Rental Income",
        roiP1: "Ready properties (key-in-hand) are highly attractive for traditional income-focused investors. By buying a completed property in established areas like Dubai Marina or Downtown Dubai, you can tenant the unit and receive rental payments immediately. Dubai Marina regularly yields 6% to 8% gross annual rents, which is higher than international benchmarks.",
        roiH2: "Off-Plan Properties: Maximum Capital Gains",
        roiP2: "Off-plan properties (under construction) offer the highest potential for capital appreciation. Investors buy directly from developers at pre-launch pricing (VVIP releases), with structured payment plans (e.g. 60/40 or 70/30) extending throughout construction. As the community develops, the property value increases significantly by handover.",
        roiComparisonTitle: "Quick Comparison:",
        thMetric: "Metric",
        thOffplan: "Off-Plan",
        thReady: "Ready",
        tdPrice: "Entry Price",
        tdPriceVal1: "Lower (Pre-launch rates)",
        tdPriceVal2: "Premium market rates",
        tdYield: "Rental Yield",
        tdYieldVal1: "Delayed (At handover)",
        tdYieldVal2: "Immediate (6%-8% annual)",
        tdCap: "Capital Gain",
        tdCapVal1: "Higher (20%-35% appreciation)",
        tdCapVal2: "Steady (Based on market growth)",
        roiCta: "Get ROI Projections",
        
        // Article - Luxury Areas
        areasTitle: "Top 5 Luxury Areas in Dubai",
        areasSubtitle: "The best premium communities to buy family villas and custom estates",
        areasH1: "1. Meydan (District 11)",
        areasP1: "Meydan represents the next generation of luxury villa living. Home to top-tier developments like Knightsbridge, it offers vast spaces, green parklands, and crystal lagoons just 15 minutes away from Downtown Dubai. Highly recommended for families seeking sustainable, high-tech smart villas.",
        areasH2: "2. Dubai Marina",
        areasP2: "For those who prefer waterfront properties and yacht club access, Dubai Marina provides exclusive penthouses and custom marina-villas. It boasts strong rental yields, direct beach access, and immediate proximity to Dubai's primary commercial and retail zones.",
        areasH3: "3. Zabeel Park / Wasl 1",
        areasP3: "Providing a unique bridge between Old and New Dubai, Zabeel and Wasl 1 offer luxury apartments and townhouses with views of Zabeel Park and the Dubai Frame. It combines central connectivity with green open-space living.",
        areasCta: "Explore Exclusive Villa Listings",

        fDevelop: 'Designed & Programmed by <span id="marketingTeamBtn" style="cursor: pointer; text-decoration: underline; color: var(--color-accent); font-weight: 500; transition: opacity 0.2s;">Marketing Team</span>'
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
        fPhone: "<strong>الهاتف:</strong> +971 50 893 0996",
        fEmail: "البريد: info@fivehills.ae",
        fAddress: "المكتب: مارينا بلازا، جناح 2402، دبي مارينا، دبي، إ.ع.م",
        fCopy: "© 2026 5 هيلز العقارية. جميع الحقوق محفوظة. ترخيص ريرا رقم 12849.",
        fWhatsapp: '<strong>واتساب:</strong> <a href="https://wa.me/971564622103?text=Hello" target="_blank" style="color: inherit; text-decoration: underline;">+971 56 462 2103</a>',
        ccT1_wa: "الدعم عبر الواتساب",
        ccD1_wa: "تواصل مع فريق الدعم المباشر للحصول على أحدث قوائم العقارات فوراً.",

        // Team / Leadership Page
        navTeam: "فريقنا",
        flTeam: "قيادتنا",
        teamHeroTag: "قيادتنا",
        teamHeroTitle: "العقول المبدعة وراء 5 هيلز",
        teamHeroSubtitle: "رائدان متحدان برسالة مشتركة — إعادة تعريف الاستثمار العقاري الفاخر في دبي بالنزاهة والابتكار والخبرة المتميزة.",
        teamStat1: "في المعاملات العقارية المنتقاة",
        teamStat2: "سنوات من الخبرة المشتركة",
        teamStat3: "معدل رضا العملاء",
        founderBadge1: "المؤسس المشارك",
        founderName1: "أشرف الشناوي",
        founderRole1: "مستشار عقاري ومالي",
        founderBio1: "أشرف الشناوي مستشار عقاري ومالي ذو خبرة واسعة تمتد لأكثر من عقد في سوق دبي العقاري. بالإضافة لعمله كوسيط، يقود إدارة محفظة عقارية ضخمة تضم أكثر من 20 عقاراً رئيسياً — تشمل أبراجاً سكنية، فللاً فاخرة، ومركزاً تجارياً — بإجمالي يتجاوز 500 وحدة مدارة بالكامل في دبي. وتغطي خبرته الاستحواذ على الأصول، وإدارة المستأجرين، وتعظيم عوائد الإيجار، والعمليات العقارية كاملة الدورة.",
        founderStat1A: "سنوات خبرة",
        founderStat1B: "عقار تحت الإدارة",
        founderStat1C: "وحدة تحت الإدارة",
        founderBadge2: "المؤسسة",
        founderName2: "أمل أحمد",
        founderRole2: "المؤسسة والرئيسة التنفيذية",
        founderBio2: "أمل هي القوة الريادية التي أسست 5 هيلز برؤية جريئة: إنشاء وساطة عقارية صغيرة الحجم الأكثر موثوقية في دبي. قيادتها الاستراتيجية وقدرتها على التواصل مع المستثمرين العالميين أرسخت مكانة 5 هيلز كمعيار للتميز والثقة.",
        founderStat2A: "سنوات خبرة",
        founderStat2B: "قيمة المحفظة",
        founderStat2C: "عملاء سعداء",

        // Property Management Section (About page)
        mgmtTag: "إدارة متكاملة",
        mgmtTitle: "ندير كل شيء نيابةً عنك",
        mgmtDesc: "من الأبراج السكنية الفاخرة والفلل الخاصة إلى مراكز التسوق التجارية — تتولى 5 هيلز إدارة كل جانب من جوانب محفظتك العقارية لتربح أكثر وتقلق أقل.",
        mgmtStat1Lbl: "عقار تحت الإدارة",
        mgmtStat2Lbl: "وحدة سكنية وتجارية",
        mgmtStat3Lbl: "فئات أصول عقارية",
        mgmtStat4Lbl: "معدل الإشغال",
        mgmtCard1Title: "الأبراج السكنية",
        mgmtCard1Desc: "ندير المباني السكنية الكاملة في دبي — من استقطاب المستأجرين وعقود الإيجار إلى تنسيق الصيانة والتقارير الشهرية للملاك.",
        mgmtCard2Title: "الفلل الفاخرة",
        mgmtCard2Desc: "من الإيجارات السياحية قصيرة المدى إلى العقود الطويلة، نوفر إدارة احترافية شاملة للفلل الخاصة تحقق أعلى عائد مع الحفاظ على مكانة أصلك.",
        mgmtCard3Title: "المول التجاري",
        mgmtCard3Desc: "يتولى فريقنا التجاري إدارة المزيج الإيجاري الأمثل، والتفاوض على العقود، وصيانة المناطق المشتركة، واستراتيجيات رفع حركة العملاء.",
        mgmtServicesTitle: "ما نتولاه نيابةً عنك",
        mgmtSvc1: "استقطاب المستأجرين وفحصهم",
        mgmtSvc2: "صياغة العقود وتجديدها",
        mgmtSvc3: "تحصيل الإيجارات وصرفها",
        mgmtSvc4: "الصيانة وإدارة المرافق",
        mgmtSvc5: "التقارير المالية الشهرية",
        mgmtSvc6: "الامتثال لأنظمة ريرا والقوانين",
        mgmtSvc7: "تسويق الوحدات الشاغرة",
        mgmtSvc8: "استراتيجية المزيج التجاري",
        mgmtCta: "ناقش محفظتك العقارية معنا",

        // Blog Navigation & Structure
        navBlog: "المدونة",
        flBlog: "المدونة العقارية",
        blogBannerTitle: "المدونة العقارية في دبي",
        blogBannerSubtitle: "رؤى الخبراء، والتقارير الاستثمارية، وأحدث أدلة السوق العقاري من كبار مستشارينا",
        lblGuideTag: "دليل عقاري",
        lblAnalysisTag: "تحليل السوق",
        lblReviewTag: "مراجعة المنطقة",
        art1Title: "كيف تحصل على الإقامة الذهبية في دبي عبر العقار",
        art1Desc: "تعرف على المتطلبات الكاملة والخطوات اللازمة للحصول على تأشيرة الإقامة الذهبية لمدة 10 سنوات في الإمارات عبر شراء عقار بقيمة 2 مليون درهم فما فوق.",
        art1Btn: "اقرأ المقال بالكامل",
        art2Title: "العقارات قيد الإنشاء ضد الجاهزة: أيهما أفضل للاستثمار؟",
        art2Desc: "تحليل عميق لعوائد الإيجار ومعدلات زيادة رأس المال والأرباح المعفاة من الضرائب بين العقارات الجاهزة وقيد الإنشاء في دبي.",
        art2Btn: "اقرأ المقال بالكامل",
        art3Title: "أفضل 5 مناطق فاخرة في دبي لشراء فيلا عائلية",
        art3Desc: "استكشاف مناطق ميدان ودبي مارينا وزعبيل وداون تاون دبي لشراء الفلل والعقارات العائلية الفاخرة.",
        art3Btn: "اقرأ المقال بالكامل",
        
        // Article - Golden Visa
        visaTitle: "دليل الإقامة الذهبية في دبي",
        visaSubtitle: "أمّن إقامتك لمدة 10 سنوات من خلال الاستثمار العقاري الذكي",
        visaH1: "معايير الاستثمار والتأهل",
        visaP1: "يعد برنامج الإقامة الذهبية في دبي أحد أنجح برامج الإقامة عبر الاستثمار عالمياً. وفقاً للوائح دائرة الأراضي والأملاك ومؤسسة التنظيم العقاري (RERA)، يتأهل المستثمرون الأجانب للحصول على إقامة ذهبية متجددة لمدة 10 سنوات عند شراء عقار أو محفظة عقارية بقيمة لا تقل عن 2 مليون درهم إماراتي (حوالي 544,500 دولار أمريكي).",
        visaH2: "المتطلبات الأساسية:",
        visaReq1: "الحد الأدنى للقيمة: يجب أن تكون القيمة الإجمالية لمحفظتك العقارية 2 مليون درهم أو أكثر. يمكن الجمع بين عقارات متعددة للتأهل.",
        visaReq2: "العقارات المرهونة: في حال رهن العقار، يجب توفير خطاب عدم ممانعة (NOC) من البنك، شريطة أن يكون المالك قد سدد 2 مليون درهم كدفعة مباشرة من قيمة العقار.",
        visaReq3: "الملكية المشتركة: يمكن للزوجين المشاركة في ملكية عقار واحد بقيمة 2 مليون درهم فما فوق للتأهل معاً.",
        visaH3: "خطوات التقديم بالتفصيل",
        visaP2: "1. شراء العقار: تملك عقار جاهز أو قيد الإنشاء (لدى مطور مسجل وله حساب ضمان معتمد).\n2. إصدار الملكية: الحصول على سند الملكية الرسمي من دائرة الأراضي والأملاك في دبي (DLD).\n3. تقديم الطلب: تقديم المعاملة عبر تطبيق الدائرة أو الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP).\n4. الفحص الطبي والتبصيم: إجراء الفحص الطبي في المراكز المعتمدة والتبصيم لإصدار الهوية الإماراتية وتثبيت الإقامة.",
        visaCta: "استشر وسيط الإقامة الذهبية الآن",
        
        // Article - ROI
        roiTitle: "العقارات قيد الإنشاء ضد الجاهزة",
        roiSubtitle: "تحليل عوائد الإيجار ونمو رأس المال في دبي",
        roiH1: "العقارات الجاهزة: دخل إيجاري فوري مباشر",
        roiP1: "تعد العقارات الجاهزة (المسلمة مفتاحاً) خياراً جذاباً جداً للمستثمرين التقليديين الباحثين عن الدخل المستمر. من خلال شراء عقار جاهز في مناطق راسخة مثل دبي مارينا أو داون تاون دبي، يمكنك تأجير الوحدة فوراً وتلقي عوائد الإيجار. تحقق دبي مارينا عوائد إيجارية إجمالية تتراوح بين 6% و 8% سنويًا، وهي أعلى بكثير من الأسواق العالمية.",
        roiH2: "العقارات قيد الإنشاء: الحد الأقصى لأرباح نمو رأس المال",
        roiP2: "تتميز العقارات قيد الإنشاء (تحت التطوير) بأعلى احتمالية لنمو قيمة رأس المال. يشتري المستثمرون مباشرة من المطورين بأسعار الإطلاق الأولى (مبيعات كبار الشخصيات VVIP)، مع خطط سداد ميسرة (مثل 60/40 أو 70/30) تمتد طوال فترة البناء. ومع تطور المنطقة، تزداد قيمة العقار بنسبة كبيرة جداً عند التسليم.",
        roiComparisonTitle: "مقارنة سريعة:",
        thMetric: "المعيار الاستثماري",
        thOffplan: "قيد الإنشاء",
        thReady: "عقار جاهز",
        tdPrice: "سعر الدخول",
        tdPriceVal1: "أقل (أسعار ما قبل الإطلاق)",
        tdPriceVal2: "أسعار السوق الحالية",
        tdYield: "العائد الإيجاري",
        tdYieldVal1: "مؤجل (عند اكتمال التسليم)",
        tdYieldVal2: "فوري (6%-8% سنويًا)",
        tdCap: "نمو رأس المال",
        tdCapVal1: "أعلى (20% إلى 35% زيادة قيمة)",
        tdCapVal2: "مستقر (حسب نمو السوق العام)",
        roiCta: "احصل على جدول دراسات الجدوى",
        
        // Article - Luxury Areas
        areasTitle: "أفضل 5 مناطق فاخرة في دبي",
        areasSubtitle: "أرقى المجمعات السكنية لشراء الفلل العائلية والعقارات الخاصة",
        areasH1: "1. ميدان (المجمع الحادي عشر - District 11)",
        areasP1: "تمثل منطقة ميدان الجيل القادم للعيش الفاخر في الفلل. تحتضن مجمعات رائدة مثل Knightsbridge، وتوفر مساحات خضراء وبحيرات كريستالية شاسعة على بعد 15 دقيقة فقط من داون تاون دبي. نوصي بها للعائلات التي تبحث عن الفلل الذكية المستدامة.",
        areasH2: "2. دبي مارينا",
        areasP2: "لعشاق الإطلالات البحرية ونوادي اليخوت، توفر دبي مارينا شقق بنتهاوس حصرية وفللاً شاطئية مخصصة. تتميز بعوائد إيجارية عالية، وقرب مباشر من الشاطئ والمناطق الحيوية والتجارية في الإمارة.",
        areasH3: "3. حديقة زعبيل / وصل 1",
        areasP3: "تعتبر وصلاً فعالاً بين دبي القديمة والجديدة، وتوفر مجمعات شقق فاخرة تطل مباشرة على حديقة زعبيل وبرواز دبي، مما يجمع العيش الهادئ مع الاتصال المركزي بكافة الطرق الرئيسية.",
        areasCta: "تصفح الفلل الحصرية المتوفرة",

        fDevelop: 'Designed & Programmed by <span id="marketingTeamBtn" style="cursor: pointer; text-decoration: underline; color: var(--color-accent); font-weight: 500; transition: opacity 0.2s;">Marketing Team</span>'
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

    // Translate mobile menu links dynamically
    const mobHome = document.getElementById('mobNavHome');
    if (mobHome) mobHome.innerText = langData.navHome;
    
    const mobFeatured = document.getElementById('mobNavFeatured');
    if (mobFeatured) mobFeatured.innerText = langData.navFeatured;
    
    const mobAbout = document.getElementById('mobNavAbout');
    if (mobAbout) mobAbout.innerText = langData.navAbout;
    
    const mobContact = document.getElementById('mobNavContact');
    if (mobContact) mobContact.innerText = langData.navContact;
    
    // Translate mobile action buttons
    const mobLangBtn = document.getElementById('langToggleBtnMobile');
    if (mobLangBtn) mobLangBtn.innerText = langData.langBtn;
    
    const mobCtaBtn = document.getElementById('headerCtaBtnMobile');
    if (mobCtaBtn) mobCtaBtn.innerText = langData.headerCtaBtn;

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
    const isAr = window.location.pathname.includes('/ar/');
    const pathParts = window.location.pathname.split('/');
    const filename = pathParts.pop() || 'index.html';
    const search = window.location.search;
    
    if (isAr) {
        // Go to English (parent folder)
        window.location.href = '../' + filename + search;
    } else {
        // Go to Arabic (ar subfolder)
        window.location.href = 'ar/' + filename + search;
    }
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
        heroImg.src = getAssetPath(data.images[0]);
        heroImg.alt = langData.title;
    }
    
    const galleryContainer = document.getElementById('galleryContainer');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        data.images.forEach(imgSrc => {
            const item = document.createElement('div');
            item.className = 'gallery-grid-item';
            item.onclick = () => openLightbox(imgSrc);
            item.innerHTML = `<img src="${getAssetPath(imgSrc)}" alt="${langData.title}">`;
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

    img.src = getAssetPath(currentLightboxImages[currentLightboxIndex]);
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
    if (img) img.src = getAssetPath(currentLightboxImages[currentLightboxIndex]);
}

function nextLightboxImage(event) {
    if (event) event.stopPropagation(); // Prevent closing backdrop
    if (currentLightboxImages.length <= 1) return;

    currentLightboxIndex++;
    if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }
    
    const img = document.getElementById('lightboxImg');
    if (img) img.src = getAssetPath(currentLightboxImages[currentLightboxIndex]);
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
    const themeBtnMob = document.getElementById('themeToggleBtnMobile');
    
    const headerLogoImg = document.querySelector('.site-header .site-logo img');
    const footerLogoImg = document.querySelector('.site-footer .site-logo img');
    
    if (document.body.classList.contains('light-theme')) {
        if (themeBtn) themeBtn.innerText = '🌙';
        if (themeBtnMob) themeBtnMob.innerText = '🌙';
        if (headerLogoImg) {
            headerLogoImg.src = getAssetPath('images/project-images/logo.webp');
        }
        if (footerLogoImg) {
            footerLogoImg.src = getAssetPath('images/project-images/logo222-dark.webp');
        }
    } else {
        if (themeBtn) themeBtn.innerText = '☀️';
        if (themeBtnMob) themeBtnMob.innerText = '☀️';
        if (headerLogoImg) {
            headerLogoImg.src = getAssetPath('images/project-images/logo-wide.webp');
        }
        if (footerLogoImg) {
            footerLogoImg.src = getAssetPath('images/project-images/logo222.webp');
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('five_hills_theme', isLight ? 'light' : 'dark');
    updateThemeUI();
}

// Premium Success Notification System
function showNotification(title, message) {
    let toast = document.getElementById('customToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'customToast';
        toast.className = 'custom-toast';
        document.body.appendChild(toast);
    }
    
    // Support RTL direction
    if (currentLang === 'ar') {
        document.body.classList.add('rtl-mode');
    } else {
        document.body.classList.remove('rtl-mode');
    }
    
    toast.innerHTML = `
        <div class="custom-toast-icon">✓</div>
        <div class="custom-toast-content">
            <h5>${title}</h5>
            <p>${message}</p>
        </div>
    `;
    
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 5000);
}

// Form Handlers (Simulated Lead Capture Webhooks / CRM integrations)
function submitLeadForm() {
    const name = document.getElementById('leadName').value;
    const email = document.getElementById('leadEmail').value;
    const phone = document.getElementById('leadPhone').value;
    const message = document.getElementById('leadMessage').value;
    const project = document.getElementById('projectTitle')?.innerText || "General";

    const textMsg = `Hello 5 Hills,\n\nI want to Register Interest in *${project}*:\n- *Name:* ${name}\n- *Email:* ${email}\n- *Phone:* ${phone}\n- *Inquiry:* ${message}`;
    const encoded = encodeURIComponent(textMsg);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/971564622103?text=${encoded}`, '_blank');

    const successMsg = currentLang === 'ar' 
        ? `شكرًا لك يا ${name}. تم توجيهك إلى الواتساب لإرسال بياناتك وحجز اهتمامك.` 
        : `Thank you, ${name}. You are being redirected to WhatsApp to submit your inquiry.`;

    showNotification(currentLang === 'ar' ? 'تم التوجيه للواتساب' : 'WhatsApp Redirect', successMsg);
    document.getElementById('projectLeadForm').reset();
}

function submitGeneralContactForm() {
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const phone = document.getElementById('cPhone').value;
    const budget = document.getElementById('cBudget').value;
    const message = document.getElementById('cMessage').value;

    const textMsg = `Hello 5 Hills,\n\nI have a general website inquiry:\n- *Name:* ${name}\n- *Email:* ${email}\n- *Phone:* ${phone}\n- *Budget:* ${budget}\n- *Message:* ${message}`;
    const encoded = encodeURIComponent(textMsg);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/971564622103?text=${encoded}`, '_blank');

    const successMsg = currentLang === 'ar'
        ? `شكرًا لتواصلك معنا يا ${name}. تم توجيهك إلى الواتساب لإرسال استفسارك عقارياً.`
        : `Thank you, ${name}. You are being redirected to WhatsApp to send your inquiry.`;

    showNotification(currentLang === 'ar' ? 'تم التوجيه للواتساب' : 'WhatsApp Redirect', successMsg);
    document.getElementById('contactForm').reset();
}

function submitBookingForm() {
    const name = document.getElementById('bookName').value;
    const email = document.getElementById('bookEmail').value;
    const date = document.getElementById('bookDate').value;
    const time = document.getElementById('bookTime').value;

    const textMsg = `Hello 5 Hills,\n\nI would like to book a consultation (${activeBookingType === 'online' ? 'Online Meeting' : 'Site Visit'}):\n- *Name:* ${name}\n- *Email:* ${email}\n- *Date:* ${date}\n- *Time:* ${time}`;
    const encoded = encodeURIComponent(textMsg);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/971564622103?text=${encoded}`, '_blank');

    const successMsg = currentLang === 'ar'
        ? `تم توجيهك للواتساب يا ${name} لإتمام حجز الموعد بتاريخ ${date} الساعة ${time}.`
        : `Thank you, ${name}. Redirecting to WhatsApp to finalize your consultation booking for ${date} at ${time}.`;

    showNotification(currentLang === 'ar' ? 'تم التوجيه للواتساب' : 'WhatsApp Redirect', successMsg);
    
    document.getElementById('modalBookingForm').reset();
    closeBookingModal();
}

// Initialise features on DOM Load
window.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle & Drawer Injection ---
    const headerContainer = document.querySelector('.header-container');
    if (headerContainer && !document.getElementById('mobileMenuToggle')) {
        // Create hamburger button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-menu-toggle';
        toggleBtn.id = 'mobileMenuToggle';
        toggleBtn.setAttribute('aria-label', 'Toggle Navigation');
        toggleBtn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
        headerContainer.appendChild(toggleBtn);
        
        // Create drawer overlay
        const drawerHTML = `
        <div class="mobile-nav-drawer" id="mobileNavDrawer">
            <ul class="mobile-nav-links">
                <li><a href="index.html" id="mobNavHome">Home</a></li>
                <li><a href="projects.html" id="mobNavFeatured">Projects</a></li>
                <li><a href="about.html" id="mobNavAbout">About Us</a></li>
                <li><a href="team.html" id="mobNavTeam">Our Team</a></li>
                <li><a href="contact.html" id="mobNavContact">Contact</a></li>
            </ul>
            <div class="mobile-nav-actions">
                <button class="lang-switch" id="langToggleBtnMobile" onclick="toggleLanguage()"></button>
                <button class="theme-switch-btn" id="themeToggleBtnMobile" onclick="toggleTheme()"></button>
                <a href="contact.html" class="btn-gold" style="padding: 10px 20px; font-size: 0.8rem; width: 100%; text-align: center;" id="headerCtaBtnMobile">Inquire Now</a>
            </div>
        </div>
        `;
        const drawerWrapper = document.createElement('div');
        drawerWrapper.innerHTML = drawerHTML;
        document.body.appendChild(drawerWrapper.firstElementChild);
        
        const drawer = document.getElementById('mobileNavDrawer');
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            drawer.classList.toggle('active');
        });
        
        // Active link highlighting for mobile drawer
        const currentPath = window.location.pathname;
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/index.html')))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
                drawer.classList.remove('active');
            });
        });
    }

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


// --- Dynamic Injection of Marketing Team Modal ---
document.addEventListener('DOMContentLoaded', () => {
    const modalHTML = `
    <div class="marketing-modal-backdrop" id="marketingModal">
        <div class="marketing-modal-card">
            <button class="marketing-modal-close" id="closeMarketingModal">&times;</button>
            <div class="marketing-modal-header">
                <h3>Marketing & Web Development Team</h3>
            </div>
            <div class="marketing-team-list">
                <!-- Hadeer -->
                <div class="team-member-item">
                    <div class="member-avatar">HM</div>
                    <div class="member-info">
                        <div class="member-name">Hadeer Moustafa</div>
                        <div class="member-role">Digital Marketing Manager</div>
                    </div>
                    <a href="https://www.linkedin.com/in/hadeer-moustafa-030271183/" target="_blank" class="member-linkedin" title="LinkedIn Profile">
                        <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </div>
                <!-- Ahmed Nasr -->
                <div class="team-member-item">
                    <div class="member-avatar">AN</div>
                    <div class="member-info">
                        <div class="member-name">Ahmed Nasr</div>
                        <div class="member-role">Senior Graphic Designer</div>
                    </div>
                    <a href="https://www.linkedin.com/in/ahmednasrahmed/" target="_blank" class="member-linkedin" title="LinkedIn Profile">
                        <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </div>
                <!-- Ahmed Abu Shady -->
                <div class="team-member-item">
                    <div class="member-avatar">AA</div>
                    <div class="member-info">
                        <div class="member-name">Ahmed Aboshady</div>
                        <div class="member-role" style="font-size: 0.72rem; line-height: 1.3;">SEO & Growth Specialist | Web & Odoo Dev</div>
                    </div>
                    <a href="https://www.linkedin.com/in/ahmed-yousef-55751023a" target="_blank" class="member-linkedin" title="LinkedIn Profile">
                        <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Create and append the modal elements
    const modalWrapper = document.createElement('div');
    modalWrapper.innerHTML = modalHTML;
    document.body.appendChild(modalWrapper.firstElementChild);
    // --- Dynamic Injection of Floating Social Dock ---
    const socialHTML = `
    <div class="floating-social-dock" id="socialFloatingDock">
        <a href="https://wa.me/971564622103?text=Hello,%20I%20am%20interested%20in%20Dubai%20Luxury%20Properties" target="_blank" class="social-dock-item whatsapp" title="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.805-1.45L0 24zm6.59-4.846c1.785 1.058 3.549 1.59 5.41 1.591 5.474 0 9.928-4.448 9.932-9.921.002-2.651-1.03-5.143-2.906-7.021C17.156 1.92 14.661.888 12.016.888c-5.467 0-9.92 4.448-9.924 9.922a9.852 9.852 0 0 0 1.5 5.147l-.985 3.593 3.69-.968zm11.562-7.79c-.316-.158-1.87-.923-2.158-1.028-.288-.105-.499-.158-.709.158-.21.316-.81 1.028-.993 1.238-.184.21-.368.237-.684.079-.316-.158-1.336-.493-2.544-1.57-1.028-.917-1.636-2.164-1.838-2.507-.202-.343-.022-.528.136-.685.143-.142.316-.368.474-.553.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.553-.079-.158-.709-1.71-.972-2.34-.256-.615-.517-.53-.709-.54-.184-.01-.395-.01-.605-.01-.21 0-.553.079-.842.395-.288.316-1.104 1.079-1.104 2.632 0 1.553 1.132 3.053 1.29 3.263.158.21 2.228 3.4 5.397 4.766.753.325 1.342.52 1.8.663.757.241 1.446.207 1.99.125.607-.09 1.87-.763 2.133-1.463.263-.7 2.63-1.62 2.63-1.62-.263-.079-.526-.158-.842-.316z"/></svg>
        </a>
        <a href="https://www.instagram.com/5hills.ae" target="_blank" class="social-dock-item instagram" title="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="https://www.facebook.com/fivehills.ae" target="_blank" class="social-dock-item facebook" title="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://www.tiktok.com/@fivehills.ae" target="_blank" class="social-dock-item tiktok" title="TikTok">
            <svg viewBox="0 0 24 24"><path d="M12.53.07C13.73.03 14.93.01 16.14 0c.05 1.54.49 3.09 1.4 4.3 1.09 1.45 2.67 2.45 4.4 2.8v3.42c-1.63-.04-3.23-.52-4.6-1.42-.31-.2-.59-.44-.86-.69v7.91c0 4.29-3.46 7.78-7.75 7.78-4.29 0-7.78-3.49-7.78-7.78 0-4.29 3.49-7.78 7.78-7.78.38 0 .75.03 1.12.09v3.46c-.37-.08-.75-.12-1.12-.12-2.38 0-4.32 1.94-4.32 4.32s1.94 4.32 4.32 4.32c2.34 0 4.25-1.87 4.29-4.2l.03-14.77Z"/></svg>
        </a>
    </div>
    `;
    const socialWrapper = document.createElement('div');
    socialWrapper.innerHTML = socialHTML;
    document.body.appendChild(socialWrapper.firstElementChild);

    
    // Grab DOM references
    const modal = document.getElementById('marketingModal');
    const trigger = document.getElementById('marketingTeamBtn');
    const closeBtn = document.getElementById('closeMarketingModal');
    
    // Set up click events using Event Delegation (bulletproof against translation refreshes)
    document.body.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'marketingTeamBtn') {
            e.preventDefault();
            const targetModal = document.getElementById('marketingModal');
            if (targetModal) {
                targetModal.classList.add('active');
            }
        }
    });
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});


// Brochure modal controllers
function openBrochureModal() {
    const modal = document.getElementById('brochureModal');
    if (modal) modal.classList.add('active');
}

function closeBrochureModal() {
    const modal = document.getElementById('brochureModal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('modalBrochureForm')?.reset();
    }
}

// Brochure Download Modal Handler - manual validation + direct click window.open
function submitBrochureModalForm() {
    const nameInput = document.getElementById('brochureName');
    const phoneInput = document.getElementById('brochurePhone');
    if (!nameInput || !phoneInput) return;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const isAr = currentLang === 'ar';

    if (!name) {
        showNotification(isAr ? 'خطأ' : 'Error', isAr ? 'يرجى إدخال الاسم' : 'Please enter your name');
        nameInput.focus();
        return;
    }

    // Strict validation regex for international phone numbers
    const phoneRegex = /^(?:\+?[1-9]\d{7,14}|0\d{8,10})$/;
    
    // Clear previous custom validations first
    phoneInput.setCustomValidity('');
    nameInput.setCustomValidity('');

    if (!name) {
        nameInput.setCustomValidity(isAr ? 'يرجى إدخال الاسم' : 'Please enter your name');
        nameInput.reportValidity();
        return;
    }

    if (!phone || !phoneRegex.test(phone)) {
        phoneInput.setCustomValidity(isAr 
            ? 'الرجاء إدخال رقم هاتف صحيح مع رمز الدولة (مثال: +971501234567)' 
            : 'Please enter a valid phone number with country code (e.g., +971501234567)'
        );
        phoneInput.reportValidity();
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project') || 'Knightsbridge_P1';
    const projectTitle = document.getElementById('projectTitle')?.innerText || 'General';

    // Map project ID to brochure filename
    let brochureFile = 'knightsbridge-brochure.pdf';
    const pid = projectId.toLowerCase();
    if (pid.includes('1 residences') || pid.includes('1residences') || pid.includes('wasl')) {
        brochureFile = '1-residences-brochure.pdf';
    } else if (pid.includes('cedarwood')) {
        brochureFile = 'cedarwood-estates-south-brochure.pdf';
    } else if (pid.includes('avenue') || pid.includes('park tower')) {
        brochureFile = 'avenue-park-towers-brochure.pdf';
    } else if (pid.includes('core')) {
        brochureFile = 'core-villas-brochure.pdf';
    } else if (pid.includes('park gate')) {
        brochureFile = 'park-gate-residence-brochure.pdf';
    }

    // Resolve relative path (ar/ subdir needs ../)
    const brochurePath = (isAr ? '../brochures/' : 'brochures/') + brochureFile;

    // 1. Open the PDF in a new tab synchronously (allowed because it runs inside direct onclick user action)
    window.open(brochurePath, '_blank');

    // 2. Close modal and show notification
    closeBrochureModal();
    const successMsg = isAr
        ? 'تم فتح الكتيب بنجاح، جاري تحويلك للواتساب...'
        : 'Brochure opened successfully! Redirecting you to WhatsApp...';
    showNotification(isAr ? 'تم التحميل' : 'Downloading', successMsg);

    // 3. Redirect the current tab to WhatsApp (failsafe, doesn't get blocked by popup blockers)
    const textMsg = `Hello 5 Hills,\n\nI just downloaded the brochure for *${projectTitle}*:\n- *Name:* ${name}\n- *Phone:* ${phone}`;
    const encoded = encodeURIComponent(textMsg);
    setTimeout(() => {
        window.location.href = `https://wa.me/971564622103?text=${encoded}`;
    }, 1000);
}

// Register real-time validation clearing on input
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('input', (e) => {
        if (e.target && (e.target.id === 'brochurePhone' || e.target.id === 'brochureName')) {
            e.target.setCustomValidity('');
        }
    });
});
