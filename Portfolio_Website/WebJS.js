// ======================
// Smooth scrolling for navbar links
// ======================
const navLinks = document.querySelectorAll('.nav-items li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // adjust for navbar
                behavior: 'smooth'
            });
        }
    });
});

// ======================
// Highlight active section in navbar
// ======================
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ======================
// Project card hover animation
// ======================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px) scale(1)';
        card.style.transition = 'all 0.3s ease';
    });
});

// ======================
// Fade-in animation on scroll for sections
// ======================
const fadeSections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

fadeSections.forEach(section => {
    observer.observe(section);
});

// ======================
// Optional: Scroll to top button
// ======================
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.className = 'scroll-top-btn';
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});
