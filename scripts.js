// Scroll-to-Top Button
const backToTopBtn = document.getElementById('backToTop');

// Show or hide the button when scrolling
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll the page back to top when button is clicked
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Adjust for navbar height
      behavior: "smooth"
    });
  });
});
// Get the toggle input and the current theme from localStorage
const modeToggle = document.getElementById('modeToggle');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  modeToggle.checked = true;
} else {
  document.body.classList.add('light-mode');
  modeToggle.checked = false;
}

// Add an event listener to the toggle button
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    // Switch to dark mode
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    // Switch to light mode
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
});
