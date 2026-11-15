/**
 * ROZGAR JAWAN (روزگار جوان) - Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggleBtn && navLinks) {
    mobileToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', false);
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // 2. Sticky Header shadow on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 3. WhatsApp Subscription / Alert form submission
  const alertForm = document.getElementById('alert-subscribe-form');
  if (alertForm) {
    alertForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneInput = document.getElementById('user-phone');
      if (phoneInput && phoneInput.value.trim() !== '') {
        showToast('Shukriya! Aapko WhatsApp Job Alerts list main shamil kar liya gaya hai.');
        phoneInput.value = '';
      }
    });
  }
});

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Publish Guide Modal Helpers
function openPublishGuideModal() {
  const modal = document.getElementById('publish-guide-modal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closePublishGuideModal() {
  const modal = document.getElementById('publish-guide-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Close modals on Escape key or outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePublishGuideModal();
    if (typeof closeJobModal === 'function') closeJobModal();
  }
});

window.addEventListener('click', (e) => {
  const guideModal = document.getElementById('publish-guide-modal');
  const jobModal = document.getElementById('job-detail-modal');
  if (e.target === guideModal) closePublishGuideModal();
  if (e.target === jobModal && typeof closeJobModal === 'function') closeJobModal();
});
