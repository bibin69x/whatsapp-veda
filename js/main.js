/**
 * AYUR VEDA MANTRA — Core JavaScript Logic
 * Handles WhatsApp pre-filled generation, mobile drawer, treatment filters, FAQs, and contact interactions.
 */

const AYUR_CONFIG = {
  phone: '9074255833',
  countryCode: '91',
  get fullPhone() {
    return `${this.countryCode}${this.phone}`;
  }
};

/**
 * Generate properly encoded WhatsApp Product URL
 * Format strictly adheres to problemStatement.md: I want "[Product Name]"
 */
function getWhatsAppProductUrl(productName) {
  const message = `I want "${productName}"`;
  return `https://wa.me/${AYUR_CONFIG.fullPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp Treatment Enquiry URL
 */
function getWhatsAppTreatmentUrl(treatmentName) {
  const message = `Hello Ayur Veda Mantra, I would like to book a consultation / enquire about "${treatmentName}".`;
  return `https://wa.me/${AYUR_CONFIG.fullPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate General Consultation WhatsApp URL
 */
function getWhatsAppGeneralUrl(customMessage) {
  const message = customMessage || "Hello Ayur Veda Mantra, I would like to enquire about your Ayurvedic consultations and treatments.";
  return `https://wa.me/${AYUR_CONFIG.fullPhone}?text=${encodeURIComponent(message)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Background Transition on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // 2. Mobile Drawer Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const drawerClose = document.querySelector('.drawer-close');

  const openDrawer = () => {
    if (drawer && drawerOverlay) {
      drawer.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (drawer && drawerOverlay) {
      drawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // 3. Dynamic WhatsApp Product & Treatment Trigger Binding
  document.querySelectorAll('[data-product-name]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.getAttribute('data-product-name');
      const url = getWhatsAppProductUrl(productName);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  document.querySelectorAll('[data-treatment-name]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const treatmentName = btn.getAttribute('data-treatment-name');
      const url = getWhatsAppTreatmentUrl(treatmentName);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  document.querySelectorAll('.whatsapp-general-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute('data-message');
      const url = getWhatsAppGeneralUrl(customMsg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // 4. Treatment Category Filter (on Treatments page)
  const filterButtons = document.querySelectorAll('.treatment-filters .filter-btn');
  const treatmentCards = document.querySelectorAll('.treatment-card');
  const categoryHeaders = document.querySelectorAll('.treatment-category-header');

  if (filterButtons.length > 0 && treatmentCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-filter');

        treatmentCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        categoryHeaders.forEach((header) => {
          const headerCategory = header.getAttribute('data-category');
          if (selectedCategory === 'all' || headerCategory === selectedCategory) {
            header.style.display = 'flex';
          } else {
            header.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. FAQ Accordion Interaction
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
      const parentItem = faqHeader.closest('.faq-item');
      const isActive = parentItem.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });

  // 6. Contact Form WhatsApp & Dispatch Handler
  const contactForm = document.getElementById('consultationContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim() || 'Visitor';
      const phone = document.getElementById('contactPhone')?.value.trim() || '';
      const email = document.getElementById('contactEmail')?.value.trim() || 'Not provided';
      const service = document.getElementById('contactService')?.value || 'General Consultation';
      const message = document.getElementById('contactMessage')?.value.trim() || '';

      const fullMessage = `Hello Ayur Veda Mantra,\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Interested In:* ${service}\n*Message/Concern:* ${message}`;
      const url = `https://wa.me/${AYUR_CONFIG.fullPhone}?text=${encodeURIComponent(fullMessage)}`;

      // Show temporary confirmation and redirect to WhatsApp
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Connecting to WhatsApp...';
      submitBtn.disabled = true;

      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        submitBtn.innerHTML = 'Enquiry Sent via WhatsApp!';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 500);
    });
  }
});
