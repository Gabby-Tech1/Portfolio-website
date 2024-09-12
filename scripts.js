function toggleNavbar() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('show');
  }
  
  function closeNavbar() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.remove('show');
  }
  
  window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image-container');

    heroText.classList.add('animate-slide-left');
    heroImage.classList.add('animate-slide-right');
});

function downloadCV() {
    const downloadUrl = './Assets/cv.pdf';
    window.open(downloadUrl, '_blank');
}
  
  // Typewriter effect
  const typeEffectElement = document.getElementById('type-effect');
  const roles = ['Mobile Developer', 'Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Programmer'];
  let roleIndex = 0;
  let charIndex = 0;
  
  function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
      typeEffectElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1400);
    }
  }
  
  function eraseEffect() {
    if (charIndex > 0) {
      typeEffectElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
  
  document.addEventListener('DOMContentLoaded', typeEffect);
  
  // Optional JavaScript to enable smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // JavaScript to dynamically insert skills data
const skills = [
    { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png' },
    { name: 'CSS3', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' },
    { name: 'GitHub', image: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
    { name: 'Firebase', image: 'https://cdn.freebiesupply.com/logos/thumbs/1x/firebase-1-logo.png' },
    { name: 'JavaScript', image: 'https://techstack-generator.vercel.app/js-icon.svg' },
    { name: 'TypeScript', image: 'https://techstack-generator.vercel.app/ts-icon.svg' },
    { name: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'Git', image: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Git.svg' },
    { name: 'React', image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' },
    { name: 'Python', image: 'https://cdn.freebiesupply.com/logos/thumbs/1x/python-3-logo.png' },
    { name: 'React Native', image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' },
    { name: 'Tailwind CSS', image: 'https://mythinkpond.com/img/logo/tailwindcss-logo.png' },
    { name: 'Bootstrap', image: 'https://them.es/starter-bootstrap/wp-content/uploads/sites/7/2021/05/bootstrap-logo-300x239.png' }
];

const skillsContainer = document.querySelector('.skills-container');

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');

    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = `${skill.name} logo`;
    skillImage.classList.add('skill-image');

    const skillName = document.createElement('span');
    skillName.textContent = skill.name;
    skillName.classList.add('skill-name');

    skillCard.appendChild(skillImage);
    skillCard.appendChild(skillName);
    skillsContainer.appendChild(skillCard);
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  on: {
    slideChange: () => console.log('Slide changed'),
    init: (swiper) => {
      console.log(swiper);
    },
  },
});

  document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
  
    try {
      const response = await fetch('https://formspree.io/f/moqgokdl', {
        method: 'POST',
        body: data,
      });
  
      if (response.ok) {
        form.reset();
        alert('Message sent successfully!');
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  });
  
  document.querySelectorAll('.input, .textarea').forEach(element => {
    element.addEventListener('input', (event) => {
      console.log('Form input changed:', event.target.name, event.target.value);
    });
  });
  