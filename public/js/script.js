// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animation on Scroll
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled-into-view');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled-into-view');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Dynamic Hero Text Effect
const heroText = document.querySelector('.hero h1');
const heroMessages = [
  'Welcome to SFS - Sols-for-Startups',
  'Empowering Your Startup Journey',
  'Connecting Founders and Investors',
  'Unlocking Growth and Opportunities'
];
let messageIndex = 0;

const updateHeroText = () => {
  heroText.textContent = heroMessages[messageIndex];
  messageIndex = (messageIndex + 1) % heroMessages.length;
};

setInterval(updateHeroText, 3000);

// Toggle Dark Mode
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Light Mode';
  } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
  }
});

// Contact Form Validation & Submission
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent default form submission

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Simple Validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
    } else {
      // Here you would send the form data to a server or API
      alert('Thank you for contacting us! We will get back to you soon.');
      
      // Reset form after submission
      contactForm.reset();
    }
  });
}

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️ Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Year Update in Footer
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth Scroll for all anchor links (Optional)
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button Hover Effect
const buttons = document.querySelectorAll('.cta-button, .hero-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});
