// static/js/dashboard.js




// ============================================
// 💬 Typing Animation Logic for Hero Section
// ============================================

// List of phrases to cycle through
const phrases = [
  "Building full-stack apps with purpose.",
  "Turning code into creative solutions.",
  "Engineering elegant user experiences."
];

// Typing state variables
let current = 0;        // Index of the current phrase
let char = 0;           // Current character position in the phrase
let isDeleting = false; // Are we currently deleting?
let isPaused = false;   // Are we in a pause state?

// Target element to display the typing effect
const typed = document.getElementById("typed");

// ============================================
// 🔁 Typing Function
// --------------------------------------------
// Handles both typing and deleting logic
// Inserts delays between phrase changes
// ============================================
function type() {
  const text = phrases[current];

  // Don't proceed if we're paused
  if (isPaused) return;

  // ===========================
  // 🔙 Handle Deleting
  // ===========================
  if (isDeleting) {
    char--;
    typed.textContent = text.substring(0, char);

    if (char === 0) {
      isDeleting = false;
      current = (current + 1) % phrases.length;
    }
  }

  // ===========================
  // ⌨️ Handle Typing
  // ===========================
  else {
    char++;
    typed.textContent = text.substring(0, char);

    if (char === text.length) {
      // Pause after full phrase typed
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true; // Begin deleting after pause
        type(); // Call immediately to continue
      }, 5000); // ⏸ 5 second pause after full typing
      return;
    }
  }

  // Continue typing/deleting
  setTimeout(type, isDeleting ? 50 : 100);
}

// ============================================
// 🚀 Initialize on DOM load
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  type();
});

