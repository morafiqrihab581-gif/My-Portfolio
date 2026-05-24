// ================================
// Theme Toggle
// ================================



const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Save theme in localStorage
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    // Correct icon
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
}

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
});


// ================================
// Mobile Navigation
// ================================

const mobileBtn = document.getElementById("mobile-menu-btn");
const mobilePanel = document.getElementById("mobile-nav-panel");

mobileBtn.addEventListener("click", () => {
  mobilePanel.classList.toggle("active");
});

// Close mobile menu after click
const mobileLinks = document.querySelectorAll(
  "#mobile-nav-panel a"
);

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobilePanel.classList.remove("active");
  });
});


// ================================
// Navbar Scroll Effect
// ================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ================================
// Footer Year
// ================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});