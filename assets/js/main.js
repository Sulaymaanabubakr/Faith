const header = document.querySelector('.site-header');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.querySelector('.scroll-top');
const fadeElements = document.querySelectorAll('.fade-in');
const dropdownParents = document.querySelectorAll('.has-dropdown');

const setHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const closeMobileNav = () => {
  navLinks?.classList.remove('open');
  mobileToggle?.classList.remove('active');
  document.body.classList.remove('nav-open');
};

const toggleMobileNav = () => {
  if (!navLinks || !mobileToggle) return;
  const isOpen = navLinks.classList.toggle('open');
  mobileToggle.classList.toggle('active', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
};

const handleAnchorClick = (event) => {
  const targetId = event.currentTarget.getAttribute('href');
  if (!targetId || !targetId.startsWith('#')) return;
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;
  event.preventDefault();
  closeMobileNav();
  const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
};

const observeFadeElements = () => {
  if (!fadeElements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeElements.forEach((el) => observer.observe(el));
};

const handleScrollTop = () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 240) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
};

const initMediaFilter = () => {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');
  if (!filterButtons.length || !filterItems.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const activeFilter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      filterItems.forEach((item) => {
        if (activeFilter === 'all' || item.dataset.category === activeFilter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
};

const initDropdowns = () => {
  if (!dropdownParents.length) return;
  dropdownParents.forEach((parent) => {
    parent.addEventListener('touchstart', () => {
      parent.classList.toggle('dropdown-open');
    });
  });
};

const bindNavigation = () => {
  mobileToggle?.addEventListener('click', toggleMobileNav);
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', handleAnchorClick);
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
};

const initScrollTop = () => {
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const init = () => {
  setHeaderState();
  handleScrollTop();
  observeFadeElements();
  initMediaFilter();
  initDropdowns();
  bindNavigation();
  initScrollTop();
};

window.addEventListener('scroll', () => {
  setHeaderState();
  handleScrollTop();
});

document.addEventListener('DOMContentLoaded', init);
