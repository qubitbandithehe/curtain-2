/**
 * Premium Luxury Curtain Factory - Main JavaScript
 * Handles navigation, interactive elements, form validation, and static submission fallbacks.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStickyHeader();
  initActiveNavSpy();
  initFormHandling();
  initCurrentYear();
  initImageFallbacks();
});

/* --------------------------------------------------------------------------
   NAVIGATION: Mobile Menu & Smooth Scrolling
   -------------------------------------------------------------------------- */
function initNavigation() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   STICKY HEADER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   ACTIVE NAV SPY (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   ENQUIRY FORM HANDLING & STATIC NOTIFICATION
   -------------------------------------------------------------------------- */
function initFormHandling() {
  const form = document.getElementById('enquiryForm');
  const modal = document.getElementById('feedbackModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const modalEmailBtn = document.getElementById('modalEmailBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset previous errors
    clearErrors();

    // Retrieve input values
    const fullName = document.getElementById('fullName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const locationArea = document.getElementById('locationArea').value.trim();
    const enquiryType = document.getElementById('enquiryType').value;
    const message = document.getElementById('message').value.trim();

    // Validation
    let isValid = true;

    if (!fullName || fullName.length < 2) {
      showError('fullName', 'Please enter your full name (at least 2 letters).');
      isValid = false;
    }

    const phoneRegex = /^[+0-9\s-]{7,16}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      showError('phoneNumber', 'Please enter a valid phone number.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress || !emailRegex.test(emailAddress)) {
      showError('emailAddress', 'Please enter a valid email address.');
      isValid = false;
    }

    if (!locationArea) {
      showError('locationArea', 'Please provide your location or area (e.g. Dwarka / Najafgarh).');
      isValid = false;
    }

    if (!enquiryType) {
      showError('enquiryType', 'Please select the type of enquiry.');
      isValid = false;
    }

    if (!message || message.length < 5) {
      showError('message', 'Please provide a brief message regarding your requirements.');
      isValid = false;
    }

    if (!isValid) return;

    // Populate modal with user summary
    document.getElementById('modalUserName').textContent = fullName;
    document.getElementById('modalType').textContent = enquiryType;
    document.getElementById('modalPhone').textContent = phoneNumber;
    document.getElementById('modalLocation').textContent = locationArea;
    document.getElementById('modalEmail').textContent = emailAddress;

    // Generate dynamic WhatsApp link
    const waText = encodeURIComponent(
      `Hello Curtain Factory,\n\n` +
      `New Enquiry Details:\n` +
      `• Name: ${fullName}\n` +
      `• Type: ${enquiryType}\n` +
      `• Phone: ${phoneNumber}\n` +
      `• Location: ${locationArea}\n` +
      `• Email: ${emailAddress}\n\n` +
      `Message: ${message}`
    );
    modalWaBtn.href = `https://wa.me/?text=${waText}`;

    // Generate dynamic Email link
    const emailSubject = encodeURIComponent(`[Enquiry] ${enquiryType} - ${fullName} (${locationArea})`);
    const emailBody = encodeURIComponent(
      `Dear Curtain Factory Team,\n\n` +
      `I am interested in connecting regarding:\n\n` +
      `• Enquiry Type: ${enquiryType}\n` +
      `• Name: ${fullName}\n` +
      `• Phone: ${phoneNumber}\n` +
      `• Email: ${emailAddress}\n` +
      `• Location: ${locationArea}\n\n` +
      `Requirement Details:\n${message}\n\n` +
      `Regards,\n${fullName}`
    );
    modalEmailBtn.href = `mailto:xyzcurtains@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open Modal
    modal.classList.add('open');

    // Show friendly Toast
    showToast('Enquiry summary created! Choose WhatsApp or Email to send.');

    // Optionally reset form
    form.reset();
  });

  // Modal Close Events
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
      }
    });
  }
}

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`${fieldId}Error`);
  if (input) input.classList.add('error');
  if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => {
    el.classList.remove('error');
  });
  document.querySelectorAll('.field-error').forEach(el => {
    el.textContent = '';
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* --------------------------------------------------------------------------
   GLOBAL PREFILL HELPERS (Used by CTA links across the page)
   -------------------------------------------------------------------------- */
window.prefillEnquiry = function(type) {
  const enquirySelect = document.getElementById('enquiryType');
  const messageArea = document.getElementById('message');

  if (type === 'dealership') {
    if (enquirySelect) enquirySelect.value = 'Dealership Enquiry';
    if (messageArea && !messageArea.value) {
      messageArea.value = 'Interested in curtain dealership and distribution opportunities in the Dwarka / Najafgarh region. Please share catalog, minimum order quantities, and wholesale pricing.';
    }
  } else if (type === 'samples') {
    if (enquirySelect) enquirySelect.value = 'Sample Swatches Request';
    if (messageArea && !messageArea.value) {
      messageArea.value = 'Please arrange fabric swatch catalogues and sample decks for our retail store / design firm.';
    }
  }

  // Smooth scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.getElementById('fullName')?.focus();
    }, 600);
  }
};

window.prefillProduct = function(productName) {
  const enquirySelect = document.getElementById('enquiryType');
  const messageArea = document.getElementById('message');

  if (enquirySelect) enquirySelect.value = 'Wholesale Order';
  if (messageArea) {
    messageArea.value = `Enquiring about wholesale availability, fabric specifications, and custom sizing options for: ${productName}.`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.getElementById('fullName')?.focus();
    }, 600);
  }
};

/* --------------------------------------------------------------------------
   CURRENT YEAR UPDATE
   -------------------------------------------------------------------------- */
function initCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   IMAGE FALLBACK HANDLING
   -------------------------------------------------------------------------- */
function initImageFallbacks() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Elegant luxury fallback gradient placeholder
      this.style.background = 'linear-gradient(135deg, #4A3428 0%, #2A1F18 100%)';
      this.style.minHeight = '240px';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.alt = 'Luxury curtain fabric collection';
    });
  });
}
