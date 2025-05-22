// static/js/base.js
// Dev: Caleb Willingham - Last Updated: 5/22/2025


// static/js/base.js
// Dev: Caleb Willingham - Last Updated: 5/22/2025

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize theme
const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
document.body.dataset.theme = currentTheme;

if (themeToggle) {
  themeToggle.checked = currentTheme === 'dark';
  themeIcon.textContent = themeToggle.checked ? '🌙' : '☀️';

  // Event: Toggle theme
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = themeToggle.checked ? '🌙' : '☀️';
  });
}
