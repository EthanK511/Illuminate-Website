const navButton = document.querySelector('[data-nav-button]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelectorAll('[data-nav-link]');

if (navButton && navToggle) {
  navButton.addEventListener('click', () => {
    navToggle.checked = !navToggle.checked;
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navToggle) {
      navToggle.checked = false;
    }
  });
});

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear();
}

// header hide on scroll (small, lightweight)
(() => {
  let lastY = window.scrollY || 0;
  const header = document.querySelector('.site-header');
  const delta = 10;
  if (!header) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY || 0;
    if (Math.abs(y - lastY) < delta) return;
    if (y > lastY && y > 80) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastY = y;
  }, { passive: true });
})();
