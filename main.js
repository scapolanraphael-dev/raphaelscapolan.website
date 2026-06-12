// ===== Navigation : scroll state =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== Mobile menu =====
const burger = document.getElementById('navBurger');
const links  = document.getElementById('navLinks');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
    })
);

// ===== Reveal on scroll =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
