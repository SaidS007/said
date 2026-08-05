
// Navigation douce et légère, sans dépendances externes.
document.addEventListener('DOMContentLoaded', () => {
  // Dark mode handling
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedMode = localStorage.getItem('theme');
  const isDark = storedMode === 'dark' || (!storedMode && prefersDark.matches);
  if (isDark) {
    document.body.classList.add('dark-mode');
  }

  // Toggle button
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  // Add toggle button to masthead-actions if exists
  const mastheadActions = document.querySelector('.masthead-actions');
  if (mastheadActions) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'button';
    toggleBtn.innerHTML = '🌙/☀️ Mode';
    toggleBtn.addEventListener('click', toggleDarkMode);
    mastheadActions.appendChild(toggleBtn);
  }

  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.story, .card, .info-box, .tag, .button, .timeline-item');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      
      if (elementTop < viewportHeight * 0.8 && elementBottom > viewportHeight * 0.2) {
        element.classList.add('visible');
      }
    });
  };

  // Run on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});
