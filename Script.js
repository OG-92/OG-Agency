document.addEventListener('DOMContentLoaded', () => {
    // Solution anti-scroll horizontal robuste
    function preventHorizontalScroll() {
        if (window.scrollX !== 0) {
            window.scrollTo(0, window.scrollY);
        }
    }

    // Vérification périodique
    setInterval(preventHorizontalScroll, 100);

    // Blocage supplémentaire
    window.addEventListener('scroll', preventHorizontalScroll);
    window.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

    // Animation au défilement existante
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => observer.observe(element));
    }
});