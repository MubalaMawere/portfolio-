// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Download button alert
  document.querySelectorAll('a[download]').forEach(button => {
    button.addEventListener('click', () => {
      alert('Click OK to confirm download!');
    });
  });
  
  // Typing animation
  const roles = ["Computer Engineering Student", "Prompt Engineer", "Modern AI Learner At Cisco academy", "Entrepreneur"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 70;
  const erasingDelay = 40;
  const newTextDelay = 1500;
  
  function type() {
    const currentRole = roles[roleIndex];
    const typingText = document.getElementById("typing-text");
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
  
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(type, isDeleting ? erasingDelay : typingDelay);
    }
  }
  
  // Create particles
  function createParticles() {
    const particles = 50;
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
      document.querySelector(".hero").appendChild(particle);
    }
  }
  
  // Animate progress bars on scroll
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 500);
    });
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay);
    createParticles();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
        }
      });
    }, {threshold: 0.5});
    
    observer.observe(document.querySelector('.about'));
  });


 // Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Toggle icon between bars and close
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (mobile only)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      const icon = menuToggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  });
});
