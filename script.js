document.addEventListener('DOMContentLoaded', () => {
    // Hamburgermeny
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    if(burger) {
        burger.addEventListener('click', () => { nav.classList.toggle('active'); });
    }

    // Scroll Animasjon
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('active'); }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});