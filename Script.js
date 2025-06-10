// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-back',
    offset: 100
});

// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: [
            'Communication Digital Disruptive',
            'Stratégie sur-mesure',
            'Solutions 360° innovantes'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: false
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('fixed');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.add('hidden');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});
