/**
 * MADURAI M3 TECHNOLOGIES - Main Interactive Controller
 * High-performance, vanilla JavaScript for optimal speed and zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initSmoothScroll();
  initEstimator();
  initServiceButtons();
  initContactForm();
  initEmailCopy();
  initScrollSpy();
});

/* ==========================================================================
   1. Header Scroll Blur & Elevation
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* ==========================================================================
   2. Accessible Mobile Drawer Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  const toggleDrawer = (force) => {
    const isOpen = typeof force === 'boolean' ? force : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      const firstLink = drawer.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }
  };

  toggleBtn.addEventListener('click', () => toggleDrawer());

  // Close drawer on link click
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleDrawer(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. Smooth Scrolling for Internal Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   4. Interactive Scope & Architecture Estimator
   ========================================================================== */
function initEstimator() {
  const form = document.getElementById('scopeEstimatorForm');
  if (!form) return;

  const typeRadios = form.querySelectorAll('input[name="projType"]');
  const scopeChecks = form.querySelectorAll('input[name="scopeFeat"]');
  const platformRadios = form.querySelectorAll('input[name="platform"]');

  const outArch = document.getElementById('estArchitecture');
  const outTime = document.getElementById('estTimeline');
  const outSprints = document.getElementById('estSprints');
  const outStack = document.getElementById('estStack');
  const applyBtn = document.getElementById('applyEstimatorToContact');

  const recalculate = () => {
    let baseTimeWeeks = 3;
    let selectedType = 'Flutter Mobile App';
    let selectedPlatform = 'Android & iOS (Single Codebase)';

    typeRadios.forEach(r => {
      if (r.checked) {
        selectedType = r.value;
      }
    });

    platformRadios.forEach(p => {
      if (p.checked) {
        selectedPlatform = p.value;
      }
    });

    let featureCount = 0;
    const selectedFeatures = [];
    scopeChecks.forEach(c => {
      if (c.checked) {
        featureCount++;
        selectedFeatures.push(c.value);
      }
    });

    // Compute metrics
    if (selectedType === 'Web Application') baseTimeWeeks += 1;
    if (selectedType === 'Business ERP Suite') baseTimeWeeks += 3;
    if (selectedType === 'Admin Dashboard') baseTimeWeeks += 0;

    const totalWeeksMin = baseTimeWeeks + Math.floor(featureCount * 0.7);
    const totalWeeksMax = totalWeeksMin + 2;
    const sprints = Math.ceil(totalWeeksMax / 2);

    let stackDesc = 'Flutter 3.x, Dart, Riverpod / BLoC, Firebase / Node.js';
    if (selectedType === 'Web Application') {
      stackDesc = 'React 18 / Vite, TypeScript, Tailwind CSS, REST APIs';
    } else if (selectedType === 'Admin Dashboard') {
      stackDesc = 'Modern React Dashboard, Role-Based Access, Recharts, Cloud APIs';
    } else if (selectedType === 'Business ERP Suite') {
      stackDesc = 'Full-Stack: Flutter Desktop/Mobile + Node.js/PostgreSQL + Web Admin';
    }

    if (outArch) outArch.textContent = selectedType + ' (' + selectedPlatform + ')';
    if (outTime) outTime.textContent = `${totalWeeksMin} – ${totalWeeksMax} Weeks`;
    if (outSprints) outSprints.textContent = `${sprints} Agile Sprints`;
    if (outStack) outStack.textContent = stackDesc;
  };

  form.addEventListener('change', recalculate);
  recalculate();

  if (applyBtn) {
    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      let selectedType = 'Flutter Mobile App';
      typeRadios.forEach(r => { if (r.checked) selectedType = r.value; });

      const serviceSelect = document.getElementById('serviceSelect');
      const messageInput = document.getElementById('projectMessage');

      if (serviceSelect) {
        // Map project type to services
        if (selectedType.includes('Flutter')) serviceSelect.value = 'Flutter Mobile App Development';
        else if (selectedType.includes('Admin')) serviceSelect.value = 'Admin Dashboard Development';
        else if (selectedType.includes('Web')) serviceSelect.value = 'Web Application Development';
        else if (selectedType.includes('ERP')) serviceSelect.value = 'Business Management Software';
      }

      if (messageInput) {
        const outTimeVal = outTime ? outTime.textContent : '4-6 Weeks';
        const outArchVal = outArch ? outArch.textContent : selectedType;
        messageInput.value = `Hello Madurai M3 Technologies team,\n\nI used the online architecture estimator and would like to discuss our project:\n- Scope: ${outArchVal}\n- Estimated Delivery Window: ${outTimeVal}\n\nPlease share availability for an initial architecture discussion.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offset = 80;
        const topPos = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        if (messageInput) messageInput.focus();
      }
    });
  }
}

/* ==========================================================================
   5. Direct Service Card Inquiry Buttons
   ========================================================================== */
function initServiceButtons() {
  const buttons = document.querySelectorAll('.service-cta-btn');
  const serviceSelect = document.getElementById('serviceSelect');
  const contactSection = document.getElementById('contact');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      if (contactSection) {
        const offset = 80;
        const topPos = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        
        const messageInput = document.getElementById('projectMessage');
        if (messageInput) {
          messageInput.placeholder = `Tell us about your requirements for ${serviceName}...`;
          messageInput.focus();
        }
      }
    });
  });
}

/* ==========================================================================
   6. Contact Form Validation & Submission Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#clientName')?.value.trim();
    const email = form.querySelector('#clientEmail')?.value.trim();
    const service = form.querySelector('#serviceSelect')?.value;
    const message = form.querySelector('#projectMessage')?.value.trim();

    if (!name || !email || !service || !message) {
      showToast('Please fill in all required fields (Name, Email, Service, and Brief).', 'warning');
      return;
    }

    // Basic email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showToast('Please enter a valid business email address.', 'warning');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="btn-icon" style="animation: spin 1s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Transmitting Inquiry...
      `;
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      showToast('Inquiry received! Our Madurai engineering team will respond within 24 hours.', 'success');
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Send Project Inquiry</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }
    }, 1000);
  });
}

/* ==========================================================================
   7. Copy Business Email Helper
   ========================================================================== */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const email = 'admin@maduraim3technologies.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Business email: ' + email, 'info');
      });
    });
  });
}

/* ==========================================================================
   8. ScrollSpy Active Link Tracking
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link, .mobile-drawer .mobile-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else if (link.getAttribute('href')?.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Utility: Accessible Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let toast = document.getElementById('toastAlert');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastAlert';
    toast.className = 'toast-alert';
    document.body.appendChild(toast);
  }

  const iconSvg = type === 'success' 
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// Add CSS keyframe for spinner
const style = document.createElement('style');
style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
