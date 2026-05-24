// Simple i18n helper (EN/FR) for the portfolio
// - Button-less integration: use data-i18n attributes in HTML
// - Saves language in localStorage

(function () {
  const STORAGE_KEY = "lang";

  const dictionary = {
    en: {
      // Header / nav
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",

      // Hero
      hero_title: "Hi, I'm",
      hero_focus_label: "RIHAB",
      hero_focus_name: "MORAFIQ",
      hero_description:
        "Software Engineer focused on Full-Stack development, crafting scalable web applications with React and Laravel, combining clean architecture with intuitive user experiences.",
      hero_cta: "View My Work",

      // About
      about_heading_prefix: "About",
      about_heading_label: "Me",
      about_role: "Software Engineer | Full Stack Developer",
      about_p1:
        "I am a Software Engineer passionate about building modern, scalable, and user-focused web applications.",
      about_p2:
        "I specialize in front-end and back-end development using React.js, Laravel, and MySQL to build responsive and secure systems.",
      about_cv: "Download CV",

      // Skills
      skills_heading_prefix: "My",
      skills_heading_label: "Skills",

      // Projects
      projects_heading_prefix: "Featured",
      projects_heading_label: "Projects",

      proj1_title: "Mental Health Platform",
      proj1_desc:
        "A modern mental health platform focused on well-being, journaling, and self-care experiences.",
      proj2_title: "Ping Pong Game",
      proj2_desc: "A fun ping pong game developed using C#.",
      project_github: "GitHub",

      // Contact
      contact_heading_prefix: "Let's",
      contact_heading_label: "Connect",
      contact_text:
        "I'm open to opportunities, collaborations, and exciting projects. Feel free to connect with me.",
      contact_email: "Email",
      contact_location: "Location",
      contact_location_value: "Casablanca, Morocco",
      contact_linkedin_scan: "Scan to view LinkedIn",
      contact_github_scan: "Scan to view GitHub",
      contact_linkedin_btn: "Visit LinkedIn",
      contact_github_btn: "Visit GitHub",
    },
    fr: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_skills: "Compétences",
      nav_projects: "Projets",
      nav_contact: "Contact",

      hero_title: "Salut, je suis",
      hero_focus_label: "RIHAB",
      hero_focus_name: "MORAFIQ",
      hero_description:
        "Développeur logiciel axé sur le développement Full-Stack, créant des applications web évolutives avec React et Laravel, en combinant une architecture claire avec une expérience utilisateur intuitive.",
      hero_cta: "Voir mes projets",

      about_heading_prefix: "À propos",
      about_heading_label: "de moi",
      about_role: "Ingénieur logiciel | Développeur Full Stack",
      about_p1:
        "Je suis un ingénieur logiciel passionné par la création d'applications web modernes, évolutives et centrées sur l'utilisateur.",
      about_p2:
        "Je me spécialise dans le front-end et le back-end avec React.js, Laravel et MySQL pour développer des systèmes responsives et sécurisés.",
      about_cv: "Télécharger le CV",

      skills_heading_prefix: "Mes",
      skills_heading_label: "Compétences",

      projects_heading_prefix: "Projets",
      projects_heading_label: "Sélectionnés",

      proj1_title: "Plateforme de santé mentale",
      proj1_desc:
        "Une plateforme moderne de santé mentale axée sur le bien-être, le journal intime et l'auto-soin.",
      proj2_title: "Jeu de Ping Pong",
      proj2_desc: "Un jeu de ping pong amusant développé avec C#.",
      project_github: "GitHub",

      contact_heading_prefix: "On se",
      contact_heading_label: "connecte",
      contact_text:
        "Je suis ouvert aux opportunités, collaborations et projets passionnants. N'hésitez pas à me contacter.",
      contact_email: "Email",
      contact_location: "Localisation",
      contact_location_value: "Casablanca, Maroc",
      contact_linkedin_scan: "Scannez pour voir LinkedIn",
      contact_github_scan: "Scannez pour voir GitHub",
      contact_linkedin_btn: "Voir LinkedIn",
      contact_github_btn: "Voir GitHub",
    },
  };

  function getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") return saved;
    return "en";
  }

  function setSavedLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyLanguage(lang) {
    const strings = dictionary[lang] || dictionary.en;

    document.documentElement.lang = lang;

    // Update content
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = strings[key];
      if (value !== undefined) node.textContent = value;
    });

    // Update icon
    const toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "fr" ? "🇫🇷" : "🇬🇧";
  }

  // Close mobile menu on language toggle
  function closeMobileMenuIfOpen() {
    const panel = document.getElementById("mobile-nav-panel");
    if (panel) panel.classList.remove("active");
  }

  function initLanguageToggle() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    const current = getSavedLang();
    applyLanguage(current);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const next = getSavedLang() === "fr" ? "en" : "fr";
      setSavedLang(next);
      applyLanguage(next);
      closeMobileMenuIfOpen();
    });
  }

  // Auto-init on DOM ready
  window.addEventListener("DOMContentLoaded", () => {
    // Always apply stored language even if no toggle exists.
    applyLanguage(getSavedLang());
    initLanguageToggle();
  });
})();

