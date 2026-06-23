/* ============================================================
   Sovereign — bilingual engine
   French is the default and is authored directly in the HTML.
   This file holds the English overrides + a small FR/EN switcher.
   Preference is stored in localStorage ("sov-lang"); default "fr".
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "sov-lang";
  var DEFAULT_LANG = "fr";

  /* English strings, keyed by data-i18n. French lives in the markup. */
  var EN = {
    /* ---- shared: navigation ---- */
    "nav.portfolio": "Portfolio",
    "nav.insights": "Insights",
    "nav.firm": "The Firm",
    "nav.contact": "Contact",
    "nav.menuAria": "Open menu",
    "nav.brandAria": "Sovereign home",

    /* ---- shared: footer ---- */
    "footer.tagline": "The software company behind Inventra, Calendra, Dentimo, and Restora.",
    "footer.headProducts": "Products",
    "footer.headFirm": "Firm",
    "footer.headLegal": "Legal",
    "footer.linkFirm": "The Firm",
    "footer.linkInsights": "Insights",
    "footer.linkContact": "Contact",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.rights": "Sovereign. All rights reserved.",
    "footer.cities": "Rabat, Morocco",

    /* ---- shared: contact CTA ---- */
    "cta.eyebrow": "Builders &amp; Operators",
    "cta.title": "Want to build<br />with us?",
    "cta.sub": "We're always looking for exceptional people to build and operate software that lasts — from the first line of code to category leadership.",
    "cta.btn": "Start a conversation",
    "common.visit": "Visit →",

    /* ---- index ---- */
    "idx.title": "Sovereign — Custom Enterprise Software | Rabat, Morocco",
    "idx.metaDesc": "Sovereign builds and operates durable enterprise software from Rabat: Inventra, Calendra, Dentimo, and Restora. Category-leading products, built for the decade, not the quarter.",
    "idx.heroEyebrow": "Software Company · Est. 2019",
    "idx.heroTitle": "The infrastructure<br />beneath modern enterprise.",
    "idx.heroSub": "From our base in Rabat, Sovereign builds and operates the software systems that quietly run businesses — from inventory and scheduling to healthcare and hospitality.",
    "idx.heroCta1": "View Portfolio",
    "idx.heroCta2": "About the Firm",
    "idx.scroll": "Scroll",
    "idx.statement": "We build a focused suite of software products — each a category leader in its discipline, each engineered for <span class=\"accent\">permanence over hype</span>. Discreet by design, exacting by principle.",
    "idx.metric1": "Products",
    "idx.metric2": "Businesses served",
    "idx.metric3": "Countries",
    "idx.metric4": "Uptime, since inception",
    "idx.secIndex1": "01 — Portfolio",
    "idx.secTitle1": "Four products. One standard.",
    "idx.secLead1": "Software built to be relied upon for a decade, not a quarter.",
    "idx.invSector": "Inventory &amp; Supply Intelligence",
    "idx.invDesc": "A precision inventory platform for distributors and manufacturers — real-time stock, demand forecasting, and warehouse orchestration in a single ledger.",
    "idx.invMeta": "Founded 2019",
    "idx.calSector": "Scheduling &amp; Workforce",
    "idx.calDesc": "Appointment, resource, and team scheduling for service businesses — elegant booking on the surface, rigorous operations underneath.",
    "idx.calMeta": "Launched 2021",
    "idx.denSector": "Practice Management · Health",
    "idx.denDesc": "The operating system for dental and clinical practices — patient records, billing, and recall, unified with the discretion healthcare demands.",
    "idx.denMeta": "Founded 2022",
    "idx.resSector": "Restaurant Management · Hospitality",
    "idx.resDesc": "A complete restaurant management system — point of sale, table and floor management, menu, and kitchen flow, brought together so service runs smoothly from front of house to back.",
    "idx.resMeta": "Launched 2024",
    "idx.secIndex2": "02 — Approach",
    "idx.secTitle2": "Builders first,<br />operators always.",
    "idx.secLead2": "We build what we run, and we run it for the long term.",
    "idx.prinTitle1": "Permanence",
    "idx.prinBody1": "We build to last. Our products are run for the long compound, free from the pressure of a forced exit.",
    "idx.prinTitle2": "Focus",
    "idx.prinBody2": "Each product solves one problem completely. Depth in a discipline beats breadth across many.",
    "idx.prinTitle3": "Discretion",
    "idx.prinBody3": "Our software handles the most sensitive operations of a business. Trust is the product.",
    "idx.prinTitle4": "Craft",
    "idx.prinBody4": "Restraint in design, rigor in engineering. The best systems are the ones you never have to think about.",
    "idx.secIndex3": "03 — The Firm",
    "idx.secTitle3": "The veil is intentional.",
    "idx.firmP1": "Sovereign is a privately held company that builds and operates enterprise software. Each of our products carries its own name and identity, while sharing the engineering leadership and operating discipline that defines how we build.",
    "idx.firmP2": "We are not a fund with a clock. We build for the long term, and we let the work speak.",

    /* ---- portfolio ---- */
    "prt.title": "Products — Inventra, Calendra, Dentimo, Restora | Sovereign",
    "prt.metaDesc": "Four category-leading software products built and operated by Sovereign: Inventra (inventory & POS), Calendra (scheduling), Dentimo (dental practices), and Restora (restaurants).",
    "prt.breadcrumb": "<a href=\"index.html\">Home</a> &nbsp;/&nbsp; Portfolio",
    "prt.eyebrow": "Portfolio",
    "prt.title2": "Four products. One standard.",
    "prt.lead": "Each product leads its discipline. Each is engineered for permanence over hype — software built to be relied upon for a decade, not a quarter.",
    "prt.invSector": "Inventory &amp; Supply Intelligence",
    "prt.invTitle": "The single ledger for physical goods.",
    "prt.invDesc": "Inventra is a precision inventory platform for distributors and manufacturers — real-time stock, demand forecasting, and warehouse orchestration unified in one system of record. Built from Sovereign's first line of code in 2019.",
    "prt.invBtn": "Visit Inventra",
    "prt.stFounded": "Founded",
    "prt.stWarehouses": "Warehouses",
    "prt.stIntegrations": "Integrations",
    "prt.calSector": "Scheduling &amp; Workforce",
    "prt.calTitle": "Elegant booking. Rigorous operations.",
    "prt.calDesc": "Calendra handles appointment, resource, and team scheduling for service businesses — a calm, considered interface on the surface, with a rigorous operations engine underneath. Built and launched in 2021 on the Sovereign model.",
    "prt.calBtn": "Visit Calendra",
    "prt.stLaunched": "Launched",
    "prt.stBookings": "Bookings / yr",
    "prt.stUptime": "Uptime",
    "prt.denSector": "Practice Management · Health",
    "prt.denTitle": "The operating system for the practice.",
    "prt.denDesc": "Dentimo unifies patient records, billing, and recall for dental and clinical practices — built with the discretion and compliance that regulated healthcare demands. Launched in 2022, our move into regulated software.",
    "prt.denBtn": "Visit Dentimo",
    "prt.stPractices": "Practices",
    "prt.stCompliant": "Compliant",
    "prt.resSector": "Restaurant Management · Hospitality",
    "prt.resTitle": "Run the floor and the kitchen as one.",
    "prt.resDesc": "Restora brings point of sale, table management, menu, and kitchen orchestration into a single system for restaurants — clear service on the floor, calm coordination in the kitchen. Launched in 2024, built for hospitality.",
    "prt.resBtn": "Visit Restora",
    "prt.stRestaurants": "Restaurants",
    "prt.stOrders": "Orders / yr",

    /* ---- the firm ---- */
    "frm.title": "The Firm — Sovereign | Software company in Rabat",
    "frm.metaDesc": "Sovereign is a privately held company founded in 2019 in Rabat, building and operating enterprise software for the long term — never on a clock.",
    "frm.breadcrumb": "<a href=\"index.html\">Home</a> &nbsp;/&nbsp; The Firm",
    "frm.eyebrow": "The Firm",
    "frm.title2": "We build to last.",
    "frm.lead": "Sovereign is a privately held company that builds and operates enterprise software — for the long compound, never on a clock.",
    "frm.secWho": "Who we are",
    "frm.secWhoTitle": "The veil is intentional.",
    "frm.copy1": "Each of our products carries its own name and identity, while sharing the engineering leadership and operating discipline that defines how we build. We are not a fund with a clock. We build for the long term.",
    "frm.copy2": "Founded in 2019, Sovereign builds a focused suite of category-defining software products. We let the work speak.",
    "frm.secLeadIdx": "Leadership",
    "frm.secLeadTitle": "The partnership.",
    "frm.secLeadLead": "Operators who have built, scaled, and stewarded enterprise software across two decades.",
    "frm.role1": "Managing Partner",
    "frm.bio1": "Founder of Sovereign. Previously built two B2B platforms across logistics and fintech.",
    "frm.role2": "Partner &amp; COO",
    "frm.bio2": "Twenty years operating enterprise SaaS. Leads product operations and the shared engineering group.",
    "frm.role3": "Partner, Engineering",
    "frm.bio3": "Former VP Engineering at a public infrastructure company. Stewards architecture and security across our products.",
    "frm.role4": "Chief Financial Officer",
    "frm.bio4": "Leads capital allocation and the long-term model that defines how we build.",
    "frm.role5": "Head of Talent",
    "frm.bio5": "Builds the leadership benches inside each product team. Believes culture compounds faster than capital.",
    "frm.role6": "General Counsel",
    "frm.bio6": "Oversees governance, privacy, and the discretion our software demands of us.",
    "frm.secHist": "History",
    "frm.secHistTitle": "A patient timeline.",
    "frm.ms1Title": "Sovereign is founded",
    "frm.ms1Body": "The company is established with a single conviction: build great software for the decade, not the quarter. Inventra is built from the first line of code.",
    "frm.ms2Title": "Calendra launches",
    "frm.ms2Body": "Our second product. The scheduling platform ships, built on the Sovereign engineering model.",
    "frm.ms3Title": "Dentimo is launched",
    "frm.ms3Body": "We move into regulated healthcare with a practice-management platform built for discretion and reliability.",
    "frm.ms5Title": "Restora is launched",
    "frm.ms5Body": "We move into hospitality with a restaurant management system — point of sale, tables, and the kitchen, run as one.",
    "frm.ms4Title": "Four products, one home in Rabat",
    "frm.ms4Body": "Our products now serve more than 1,200 businesses across the region — all built and run from our base in Rabat.",
    "frm.secOff": "Office",
    "frm.secOffTitle": "Where we work.",
    "frm.offTag1": "Headquarters",
    "frm.offCity1": "Rabat",
    "frm.offAddr1": "Avenue Annakhil, Hay Riad<br />Rabat 10100<br />Morocco",

    /* ---- insights ---- */
    "ins.title": "Insights — The Sovereign blog | Inventra & retail management",
    "ins.metaDesc": "Articles from Sovereign on retail management and Inventra: why an offline, subscription-free till suits shops — especially in Morocco.",
    "ins.breadcrumb": "<a href=\"index.html\">Home</a> &nbsp;/&nbsp; Insights",
    "ins.eyebrow": "Insights",
    "ins.title2": "Notes on the long hold.",
    "ins.lead": "Perspectives from the firm on building, owning, and operating enterprise software with patience.",
    "ins.featMeta": "Inventra · June 2026",
    "ins.featTitle": "Why Inventra is the best way to run your shop.",
    "ins.featBody": "For a shopkeeper, stock isn't a line in a spreadsheet — it's working capital. Inventra brings the till and the inventory into a single ledger that always tells the truth, with no subscription and no permanent connection.",
    "ins.featBtn": "Read the article",
    "ins.read": "Read →",
    "ins.c1Meta": "Inventra · June 2026",
    "ins.c1Title": "Built for Morocco, not Silicon Valley",
    "ins.c1Exc": "Network outages, cash-first trade, thin margins: why Inventra fits the reality of Moroccan retail.",
    "ins.c2Meta": "Inventra · June 2026",
    "ins.c2Title": "No subscription, no internet",
    "ins.c2Exc": "Two engineering choices that concretely change a shop's cash flow and peace of mind.",
    "ins.ctaEyebrow": "Stay close",
    "ins.ctaTitle": "In your inbox,<br />a few times a year.",
    "ins.ctaSub": "We write rarely, and only when we have something worth your time.",
    "ins.ctaBtn": "Subscribe",

    /* ---- blog: shared ---- */
    "blog.back": "← All insights",
    "blog.author": "The Inventra team",
    "b1.capCover": "At the counter, every sale has to be quick — without ever losing track of stock.",
    "b1.capFig": "Stock that's properly tracked is working capital that isn't sitting idle on the shelves.",
    "b2.capCover": "Moroccan retail, from the souk to the neighbourhood shop.",
    "b2.capFig": "Cash sales, thin margins, busy hours: the shopkeeper's daily reality.",
    "b3.capCover": "The neighbourhood grocery: open every day, with or without a network.",
    "b3.capFig": "Your data stays with you, on your counter — not on a distant server.",
    "tag.inventory": "Inventory",
    "tag.retail": "Retail",
    "tag.pos": "Point of sale",
    "tag.morocco": "Morocco",
    "tag.offline": "Offline",
    "tag.nosub": "No subscription",
    "tag.privacy": "Privacy",

    /* ---- blog 1: best solution ---- */
    "b1.title": "Why Inventra is the best way to run your shop — Sovereign",
    "b1.metaDesc": "A till and an inventory that always tell the truth, with no subscription and no permanent connection. Here's why shopkeepers choose Inventra.",
    "b1.cat": "Inventra · Retail",
    "b1.h1": "Why Inventra is the best way to run your shop.",
    "b1.meta": "June 2026 · 5 min read",
    "b1.lede": "For a shopkeeper, stock isn't a line in a spreadsheet — it's working capital sitting on shelves. Inventra was built around one simple idea: a till and an inventory that always tell the truth, without asking you for a monthly subscription or a permanent internet connection.",
    "b1.h2a": "One ledger, always right",
    "b1.pa1": "Most tools scatter the information: the till on one side, a stock notebook on the other, and a spreadsheet nobody keeps up to date. Inventra brings sales, purchasing, and inventory into a single ledger. When you sell an item, stock drops at that instant. When a delivery arrives, it goes up. No more reconciling three sources that contradict each other.",
    "b1.pa2": "The result: at any moment of the day, the number you see is the right one. That's what lets you reorder at the right time, avoid stock-outs on your fast movers, and spot what's gathering dust on the shelves.",
    "b1.h2b": "Built for the speed of the counter",
    "b1.pb1": "A good management tool must never slow down checkout. Inventra is fast where it matters:",
    "b1.li1": "<strong>Instant checkout</strong> — barcode, search by name, and a cart that responds with no lag.",
    "b1.li2": "<strong>Zero training time</strong> — the interface is clear within minutes, even for a new employee.",
    "b1.li3": "<strong>Runs on the hardware you already own</strong> — a computer, a tablet, a phone.",
    "b1.li4": "<strong>No outages</strong> — if the internet drops, the till keeps going. Everything syncs when the network returns.",
    "b1.h2c": "Margin first",
    "b1.pc1": "Many tools charge a subscription that nibbles at your margin month after month, whether business is good or not. Inventra takes the opposite stance: you pay once, the software is yours, and it runs on your own devices. Your profitability is no longer tied to a software rent.",
    "b1.quote": "“A good management tool goes unnoticed. It simply keeps telling the truth about your stock, your till, and your margin.”",
    "b1.close": "That's the conviction behind every decision in Inventra: precision over gadgets, ownership over subscription, and a tool that respects a shopkeeper's time as much as their margin. For many shops, that's exactly what separates being run by your operations from running them.",

    /* ---- blog 2: built for Morocco ---- */
    "b2.title": "Built for Morocco: why Inventra fits Moroccan businesses — Sovereign",
    "b2.metaDesc": "Network outages, cash trade, thin margins, two languages: Inventra is built for the reality of Moroccan retail, not for a Silicon Valley startup.",
    "b2.cat": "Inventra · Morocco",
    "b2.h1": "Built for Morocco, not Silicon Valley.",
    "b2.meta": "June 2026 · 6 min read",
    "b2.lede": "Most management software assumes a permanent fibre connection, a customer who pays by card, and a team trained on cloud tools. Moroccan retail works differently. Inventra was built for that reality — the souk, the neighbourhood shop, the corner grocery.",
    "b2.h2a": "The internet drops. Your till doesn't.",
    "b2.pa1": "In many neighbourhoods, the connection comes and goes. A fully online tool becomes useless the moment the network falls — and it's always at the worst time, in the middle of a rush. Inventra works locally first: your sales, your stock, and your prices live on your device. The network is only a convenience for syncing, never a condition for selling.",
    "b2.h2b": "The reality on the ground, built in",
    "b2.pb1": "Inventra doesn't ask the Moroccan shopkeeper to change how they work. It fits around them:",
    "b2.li1": "<strong>Cash first</strong> — cash stays the main payment method, and the till is built to move fast, give change, and close the day without friction.",
    "b2.li2": "<strong>Two languages</strong> — a clear interface in French, in a setting where the shopkeeper juggles Darija, Arabic, and French every day.",
    "b2.li3": "<strong>The dirham, no surprises</strong> — prices, margins, and totals in MAD, with no conversion or odd rounding.",
    "b2.li4": "<strong>The neighbourhood tab</strong> — track what a regular still owes, because the running tab is part of local trade.",
    "b2.h2c": "A margin to protect, not a subscription to pay",
    "b2.pc1": "For a local shop, every dirham counts. A software subscription in foreign currency, rising every year, is hard to justify. Inventra follows a different logic: you install it, it's yours, and it keeps working with no monthly rent. Technology should serve your margin, not nibble at it.",
    "b2.quote": "“A tool built for Morocco doesn't ask the shopkeeper to adapt to the software. The software adapts to the counter.”",
    "b2.close": "Sovereign was born in and operates from Rabat. Inventra isn't a foreign product hastily translated: it's a tool built with knowledge of the ground, for the shopkeepers who keep the country's real economy running — one shop, one day, one sale at a time.",

    /* ---- blog 3: no subscription, no internet ---- */
    "b3.title": "No subscription, no internet: management that respects your margin — Sovereign",
    "b3.metaDesc": "Why Inventra chooses one-time payment and offline operation — and what that concretely changes for a shopkeeper's cash flow and peace of mind.",
    "b3.cat": "Inventra · Model",
    "b3.h1": "No subscription, no internet: management that respects your margin.",
    "b3.meta": "June 2026 · 5 min read",
    "b3.lede": "Two phrases sum up Inventra's promise: <strong>no subscription</strong> and <strong>no internet</strong>. These aren't marketing lines — they're two engineering choices that concretely change a shop's day-to-day and its cash flow.",
    "b3.h2a": "No subscription: the software is yours",
    "b3.pa1": "The subscription model turns a tool into a permanent rent. Month after month, it takes its cut — whether business is strong or going through a lull. And the day you stop paying, you lose access to your own data.",
    "b3.pa2": "Inventra takes the opposite path: you install it once, and it's yours. No meter running, no feature held hostage behind a higher tier, no imposed annual increase. Your margin is no longer tied to a software rent, and your tool can't be taken away from you.",
    "b3.h2b": "No internet: your data stays with you",
    "b3.pb1": "Working offline isn't just about surviving outages. It's also a matter of ownership and privacy. With Inventra:",
    "b3.li1": "<strong>The till never stops</strong> — a network failure won't block a single sale.",
    "b3.li2": "<strong>Your numbers stay private</strong> — your stock, margins, and customers live on your device, not on a third party's server.",
    "b3.li3": "<strong>No dependency</strong> — no carrier, no foreign cloud that your shop's opening depends on.",
    "b3.li4": "<strong>Constant speed</strong> — everything is local, so everything responds instantly, even at peak hours.",
    "b3.h2c": "Two choices, one philosophy",
    "b3.pc1": "No subscription and no internet answer the same conviction: a shopkeeper should stay in control of their tool and their data. Technology is there to serve the business, quietly and durably — not to create a dependency billed every month.",
    "b3.quote": "“The best management software is the one you never have to think about: it's there, it works, and it asks nothing of you — no connection, no rent.”",
    "b3.close": "That's what makes Inventra more than just another till: a tool built to last, that respects a shopkeeper's time as much as their margin. The calmest way to run a shop is the one that costs you neither your connection nor your independence.",

    /* ---- contact ---- */
    "cnt.title": "Contact — Sovereign | Partnerships, press & offices in Rabat",
    "cnt.metaDesc": "Get in touch with Sovereign in Rabat — partnerships, press, and general enquiries. We read every message and aim to reply within two business days.",
    "cnt.breadcrumb": "<a href=\"index.html\">Home</a> &nbsp;/&nbsp; Contact",
    "cnt.eyebrow": "Contact",
    "cnt.title2": "Let's talk.",
    "cnt.lead": "Whether you're a founder, an operator, or a journalist — we read every message.",
    "cnt.asideTitle": "Reach the team.",
    "cnt.asideBody": "For partnership and product enquiries, please use the form or email us directly. We aim to respond within two business days.",
    "cnt.lblPartner": "Partnerships",
    "cnt.lblPress": "Press",
    "cnt.lblGeneral": "General",
    "cnt.lblHq": "Headquarters",
    "cnt.hqAddr": "Avenue Annakhil, Hay Riad, Rabat 10100",
    "cnt.fFirst": "First name",
    "cnt.fLast": "Last name",
    "cnt.fEmail": "Email",
    "cnt.fCompany": "Company",
    "cnt.fReason": "I'm reaching out about",
    "cnt.opt1": "A partnership",
    "cnt.opt2": "Joining a product team",
    "cnt.opt3": "Press &amp; media",
    "cnt.opt4": "Something else",
    "cnt.fMessage": "Message",
    "cnt.phMessage": "Tell us a little about what you're building…",
    "cnt.btnSubmit": "Send message",
    "cnt.formNote": "This is a demo form — submissions aren't stored or sent."
  };

  /* Map of which attribute each data-* hook targets. */
  var ATTR_HOOKS = [
    { sel: "[data-i18n-content]", key: "i18nContent", attr: "content" },
    { sel: "[data-i18n-placeholder]", key: "i18nPlaceholder", attr: "placeholder" },
    { sel: "[data-i18n-aria]", key: "i18nAria", attr: "aria-label" }
  ];

  /* Baseline (French) values captured from the DOM on first run. */
  var baseHTML = new Map(); // element -> original innerHTML
  var baseAttr = new Map(); // element -> { attr: originalValue }

  function captureBaseline() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      baseHTML.set(el, el.innerHTML);
    });
    ATTR_HOOKS.forEach(function (hook) {
      document.querySelectorAll(hook.sel).forEach(function (el) {
        var store = baseAttr.get(el) || {};
        store[hook.attr] = el.getAttribute(hook.attr);
        baseAttr.set(el, store);
      });
    });
  }

  function applyLang(lang) {
    var useEN = lang === "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = useEN && EN[key] != null ? EN[key] : baseHTML.get(el);
      if (value != null) el.innerHTML = value;
    });

    ATTR_HOOKS.forEach(function (hook) {
      document.querySelectorAll(hook.sel).forEach(function (el) {
        var key = el.dataset[hook.key];
        var fr = (baseAttr.get(el) || {})[hook.attr];
        var value = useEN && EN[key] != null ? EN[key] : fr;
        if (value != null) el.setAttribute(hook.attr, value);
      });
    });

    // keep <title> and document.title in sync
    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = titleEl.textContent;

    document.documentElement.setAttribute("lang", lang);

    // reflect active state on the switch buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // refresh the footer year (its span lives outside translated nodes,
    // but re-run defensively in case markup changed)
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    captureBaseline();

    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = saved === "en" || saved === "fr" ? saved : DEFAULT_LANG;

    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    // expose for the contact form's success message
    window.SovereignLang = { get: function () { return document.documentElement.lang; } };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
