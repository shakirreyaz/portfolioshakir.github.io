const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}


/* Subtle hero visual parallax */
const heroVisual = document.querySelector(".automation-hero-visual img");
const heroArea = document.querySelector(".hero");

if (
  heroVisual &&
  heroArea &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches
) {
  heroArea.addEventListener("mousemove", (event) => {
    const rect = heroArea.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroVisual.style.transform =
      `scale(1.055) translate(${x * 5}px, ${y * 3}px)`;
  });

  heroArea.addEventListener("mouseleave", () => {
    heroVisual.style.transform = "scale(1.035)";
  });
}
