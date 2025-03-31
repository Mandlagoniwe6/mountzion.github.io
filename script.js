// Hamburger Menu (Works on all pages)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth Scroll for Nav Links (Works on all pages)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Contact Form with EmailJS (Only for contact.html)
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('feedback-modal');

if (contactForm && submitBtn && modal) {
  const btnText = submitBtn.querySelector('.btn-text');
  const loader = submitBtn.querySelector('.loader');
  const modalMessage = document.getElementById('modal-message');
  const modalClose = document.getElementById('modal-close');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    btnText.style.display = 'none';
    loader.style.display = 'inline-block';
    submitBtn.disabled = true;

    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };

    console.log('Sending email with data:', formData);

    emailjs.send('service_azm5qha', 'template_szgeqrr', formData)
      .then((response) => {
        console.log('Email sent successfully:', response);
        btnText.style.display = 'inline';
        loader.style.display = 'none';
        submitBtn.disabled = false;
        modal.className = 'modal modal-success';
        modalMessage.textContent = 'Message sent successfully! We’ll get back to you soon.';
        modal.style.display = 'block';
        contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        btnText.style.display = 'inline';
        loader.style.display = 'none';
        submitBtn.disabled = false;
        modal.className = 'modal modal-error';
        modalMessage.textContent = 'Error sending message. Please try again later.';
        modal.style.display = 'block';
      });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Scroll Reveal (Works on all pages)
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const revealPoint = window.innerWidth < 768 ? 100 : 150;
    if (elementTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealSections);
revealSections();

// Particle Effect (Works on all pages)
const particles = document.getElementById('particles');
if (particles) {
  function createParticles() {
    particles.innerHTML = '';
    const particleCount = window.innerWidth < 400 ? 10 : window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.width = `${Math.random() * 3 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particles.appendChild(particle);
    }
  }
  createParticles();
  window.addEventListener('resize', createParticles);
}

// Nav Background on Scroll (Works on all pages)
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// Back to Top (Works on all pages)
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}