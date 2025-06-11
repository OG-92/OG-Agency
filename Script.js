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

    // Désactiver le sticky sur mobile si nécessaire
    function handleStickyBehavior() {
        const stickyElement = document.querySelector('.sticky-element');
        if (!stickyElement) return;

        if (window.innerWidth <= 1024) {
            stickyElement.style.position = 'static';
        } else {
            stickyElement.style.position = 'sticky';
        }
    }

    // Vérifier au chargement et lors du redimensionnement
    window.addEventListener('load', handleStickyBehavior);
    window.addEventListener('resize', handleStickyBehavior);
});