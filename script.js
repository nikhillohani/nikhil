// Custom cursor
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor animation
  function animate() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
    
    requestAnimationFrame(animate);
  }

  animate();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  // Add hover effect to interactive elements
  const interactiveElements = document.querySelectorAll('button, .experience-card, .work-item, .team-photo, .brand');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px) scale(1.5)`;
      cursor.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px) scale(1)`;
      cursor.style.backgroundColor = 'transparent';
    });
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Download CV button
  document.querySelector('.cta-button').addEventListener('click', () => {
    // Add your CV download logic here
    alert('Download CV functionality will be implemented here');
  });

  // View Project buttons
  document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', () => {
      // Add your project view logic here
      alert('Project view functionality will be implemented here');
    });
  });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});