// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.classList.add('hidden');

  // Remove loading screen from DOM after animation completes
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500);
});

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});

// Scroll Section Active Link ⬆⬇
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href*='${id}']`).classList.add("active");
      });
    }
  });

  // Scroll Reveal Animation
  reveal();
};

// Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ['Frontend Developer', 'Web Designer', 'UI/UX Designer', 'Creative Coder'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const typingSpeed = isDeleting ? 100 : 200;
  setTimeout(type, typingSpeed);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', type);

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Initialize reveal on page load
document.addEventListener('DOMContentLoaded', reveal);

// Progress Bars Animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach((bar) => {
    const windowHeight = window.innerHeight;
    const barTop = bar.getBoundingClientRect().top;
    const barVisible = 150;

    if (barTop < windowHeight - barVisible) {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress;
    }
  });
}

// Initialize progress bars animation
window.addEventListener('scroll', animateProgressBars);
document.addEventListener('DOMContentLoaded', animateProgressBars);

// Stats Counter Animation
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-container');

  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();
    });

    // Remove event listener after animation starts
    window.removeEventListener('scroll', animateStats);
  }
}

// Initialize stats animation
window.addEventListener('scroll', animateStats);
document.addEventListener('DOMContentLoaded', animateStats);

// On Click Menu Icon
let menuIcon = document.getElementById("icon-bar");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("show");
};
navLinks.forEach((sec) => {
  sec.onclick = () => {
    navbar.classList.remove("show");
    menuIcon.classList.remove("fa-xmark");
  };
});
