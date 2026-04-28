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
