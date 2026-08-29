// ============================================================
// JungTech Portfolio — interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Année dynamique dans le footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Ferme le menu quand un lien est cliqué (mobile)
    nav.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Révélation discrète au scroll
  const revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .contact-card, .detail-block, .gallery-item, .objectives-list li, .test-item'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // Repli si IntersectionObserver n'est pas disponible
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
});
