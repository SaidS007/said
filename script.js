document.addEventListener('DOMContentLoaded', () => {
  // 1. Gestion du thème persistant et vérification du système
  const savedTheme = localStorage.getItem('themePreference');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const themeToggleBtn = document.getElementById('theme-toggle');

  const updateToggleIcon = () => {
    if (themeToggleBtn) {
      const isLight = document.body.classList.contains('light-theme');
      themeToggleBtn.textContent = isLight ? ' ☀️' : ' 🌙';
    }
  };

  // Application du thème sauvegardé ou par défaut (dark)
  if (savedTheme) {
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateToggleIcon();
  } else {
    // Par défaut, le site est en mode sombre.
    // Si le système est en thème clair et qu'aucun choix n'est sauvegardé, on propose
    if (systemPrefersLight) {
      showThemePrompt();
    }
    updateToggleIcon();
  }

  // Toggle du bouton
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('themePreference', isLight ? 'light' : 'dark');
      updateToggleIcon();
    });
  }

  function showThemePrompt() {
    // Vérifier si la bannière existe déjà
    if (document.querySelector('.theme-popup-banner')) return;

    const banner = document.createElement('div');
    banner.className = 'theme-popup-banner';
    banner.innerHTML = `
      <p>Un thème clair a été détecté sur votre système. Souhaitez-vous basculer le site en thème clair ?</p>
      <div class="theme-popup-banner-buttons">
        <button id="accept-light">Oui, passer au clair</button>
        <button id="dismiss-theme">Garder le sombre</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('accept-light').addEventListener('click', () => {
      document.body.classList.add('light-theme');
      localStorage.setItem('themePreference', 'light');
      updateToggleIcon();
      banner.remove();
    });

    document.getElementById('dismiss-theme').addEventListener('click', () => {
      localStorage.setItem('themePreference', 'dark');
      updateToggleIcon();
      banner.remove();
    });
  }

  // 2. Navigation fluide avec offset dynamique
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navSticky = document.querySelector('.nav-sticky');
        const navHeight = navSticky ? navSticky.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Animation d'apparition discrète au scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Cibler les cartes et sections pour l'animation
  const animatedElements = document.querySelectorAll('.card-tech, .project-card, .box, .contact-box, .cert-item-card, .project-detail-card');
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });

  // 4. Menu de Navigation Mobile — injection et logique centralisées
  initMobileNav();

  function initMobileNav() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    if (!hamburgerBtn) return; // Pas de bouton → on ne fait rien

    // Détecter la page courante pour marquer le bon lien comme actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Construire le drawer et l'overlay dynamiquement
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    overlay.id = 'mobile-nav-overlay';

    const drawer = document.createElement('nav');
    drawer.className = 'mobile-nav-drawer';
    drawer.id = 'mobile-nav-drawer';
    drawer.setAttribute('aria-label', 'Menu de navigation mobile');
    drawer.setAttribute('role', 'dialog');

    const links = [
      { href: 'index.html',        icon: '🏠', label: 'Accueil' },
      { href: 'cv.html',           icon: '📄', label: 'Dossier CV' },
      { href: 'realisations.html', icon: '⚙️',  label: 'Réalisations' },
      { href: 'certifs.html',      icon: '🏅', label: 'Certifications' },
    ];

    const linksHTML = links.map(({ href, icon, label }) => {
      const isActive = currentPage === href ? 'class="active"' : '';
      return `<a href="${href}" ${isActive}><span class="nav-icon">${icon}</span>${label}</a>`;
    }).join('');

    const isLight = document.body.classList.contains('light-theme');

    drawer.innerHTML = `
      <div class="mobile-nav-header">
        <a href="index.html" class="mobile-nav-brand">&lt;SaidSarr /&gt;</a>
        <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Fermer le menu">✕</button>
      </div>
      <div class="mobile-nav-links">
        ${linksHTML}
        <a href="index.html#contact" class="mobile-cta">✉️ Me contacter</a>
      </div>
      <div class="mobile-nav-footer">
        <button class="mobile-theme-toggle" id="mobile-theme-toggle">
          <span class="theme-label">
            <span>${isLight ? '☀️' : '🌙'}</span>
            <span>Thème ${isLight ? 'clair' : 'sombre'}</span>
          </span>
          <span style="font-size:0.75rem; font-family: var(--font-mono); color: var(--text-muted);">Changer →</span>
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // --- Fonctions open / close ---
    function openMenu() {
      drawer.classList.add('is-open');
      overlay.classList.add('is-visible');
      hamburgerBtn.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }

    function closeMenu() {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }

    // --- Événements ---
    hamburgerBtn.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    document.getElementById('mobile-nav-close').addEventListener('click', closeMenu);

    // Fermer avec Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Toggle thème depuis le drawer
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    mobileThemeToggle.addEventListener('click', () => {
      const nowLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('themePreference', nowLight ? 'light' : 'dark');
      updateToggleIcon();
      // Mettre à jour le libellé dans le drawer
      mobileThemeToggle.innerHTML = `
        <span class="theme-label">
          <span>${nowLight ? '☀️' : '🌙'}</span>
          <span>Thème ${nowLight ? 'clair' : 'sombre'}</span>
        </span>
        <span style="font-size:0.75rem; font-family: var(--font-mono); color: var(--text-muted);">Changer →</span>
      `;
    });

    // Fermer le menu lors d'un clic sur un lien interne (#anchor)
    drawer.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});