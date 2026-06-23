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
    "idx.title": "Sovereign — Enterprise Software",
    "idx.metaDesc": "Sovereign is the software company building and operating the systems that run the world's businesses.",
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
    "prt.title": "Portfolio — Sovereign",
    "prt.metaDesc": "The Sovereign portfolio — four category-leading software products.",
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
    "frm.title": "The Firm — Sovereign",
    "frm.metaDesc": "Sovereign is a privately held company that builds and operates enterprise software for the long term.",
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
    "ins.title": "Insights — Sovereign",
    "ins.metaDesc": "Perspectives from Sovereign on owning and operating enterprise software for the long term.",
    "ins.breadcrumb": "<a href=\"index.html\">Home</a> &nbsp;/&nbsp; Insights",
    "ins.eyebrow": "Insights",
    "ins.title2": "Notes on the long hold.",
    "ins.lead": "Perspectives from the firm on building, owning, and operating enterprise software with patience.",
    "ins.featMeta": "Letter from the Partnership · May 2026",
    "ins.featTitle": "Why we never set a clock.",
    "ins.featBody": "The exit-driven model optimizes for the wrong decade. We explain how permanent ownership changes what software companies are willing to build — and why our products are stronger for never being for sale.",
    "ins.featBtn": "Read the letter",
    "ins.read": "Read →",
    "ins.c1Meta": "Operating · Apr 2026",
    "ins.c1Title": "The shared services model, explained",
    "ins.c1Exc": "How a small central team lets each product stay focused on one problem completely.",
    "ins.c2Meta": "Engineering · Mar 2026",
    "ins.c2Title": "Boring infrastructure is a feature",
    "ins.c2Exc": "Why the best systems are the ones our customers never have to think about.",
    "ins.c3Meta": "Products · Mar 2026",
    "ins.c3Title": "Dentimo reaches 260 practices",
    "ins.c3Exc": "A quiet milestone for our healthcare platform.",
    "ins.c4Meta": "Capital · Feb 2026",
    "ins.c4Title": "Allocating for permanence",
    "ins.c4Exc": "Our framework for deciding where the next decade of compounding should go.",
    "ins.c5Meta": "Culture · Jan 2026",
    "ins.c5Title": "Culture compounds faster than capital",
    "ins.c5Exc": "Building leadership benches inside each product team, one hire at a time.",
    "ins.c6Meta": "Security · Dec 2025",
    "ins.c6Title": "Trust is the product",
    "ins.c6Exc": "How we approach privacy and security across software that runs sensitive operations.",
    "ins.ctaEyebrow": "Stay close",
    "ins.ctaTitle": "In your inbox,<br />a few times a year.",
    "ins.ctaSub": "We write rarely, and only when we have something worth your time.",
    "ins.ctaBtn": "Subscribe",

    /* ---- contact ---- */
    "cnt.title": "Contact — Sovereign",
    "cnt.metaDesc": "Get in touch with Sovereign — partnerships, press, and offices.",
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
