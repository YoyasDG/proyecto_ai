/* ==========================================================
   CONFIGURACIÓN
   Escribe aquí el número de WhatsApp del estudio con código
   de país y sin espacios ni signos. Ej. México: "5215512345678"
   ========================================================== */
const WHATSAPP = "";
const WHATSAPP_MSG = "¡Hola Möov! Me gustaría agendar una clase.";

// Enlaces de WhatsApp
document.querySelectorAll(".js-wa").forEach((a) => {
  if (WHATSAPP) {
    a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  } else {
    a.href = "https://www.instagram.com/moovaerialstudio/";
  }
});

// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
  menu.classList.toggle("open", !open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
  })
);

// Sombra del nav al hacer scroll
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Pestañas de horarios
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(tab));
  tab.addEventListener("keydown", (e) => {
    let n = null;
    if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
    if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
    if (n) { n.focus(); select(n); }
  });
});

// Aparición al hacer scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
