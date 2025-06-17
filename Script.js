document.addEventListener('DOMContentLoaded', () => {
    function preventHorizontalScroll() {
        if (window.scrollX !== 0) {
            window.scrollTo(0, window.scrollY);
        }
    }

    setInterval(preventHorizontalScroll, 100);

    window.addEventListener('scroll', preventHorizontalScroll);
    window.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

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

    function handleStickyBehavior() {
        const stickyElement = document.querySelector('.sticky-element');
        if (!stickyElement) return;

        if (window.innerWidth <= 1024) {
            stickyElement.style.position = 'static';
        } else {
            stickyElement.style.position = 'sticky';
        }
    }

    window.addEventListener('load', handleStickyBehavior);
    window.addEventListener('resize', handleStickyBehavior);
});

// Animation 3D pour les lettres "O.G."
const ogLetters = document.getElementById('ogLetters');
if (ogLetters) {
  let lastX = 0;
  let lastY = 0;
  let targetX = 0;
  let targetY = 0;
  let tilt = 0;
  let perspective = 1000;
  
  function animate() {
    // Lissage des mouvements
    lastX += (targetX - lastX) * 0.1;
    lastY += (targetY - lastY) * 0.1;
    
    ogLetters.style.transform = `
      rotateY(${lastX}deg) 
      rotateX(${lastY}deg) 
      rotateZ(${tilt}deg)
      translateZ(${Math.abs(lastX)/4}px)
    `;
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 60;
    targetY = (e.clientY / window.innerHeight - 0.5) * -60;
    tilt = (e.clientY / window.innerHeight - 0.5) * 10;
  });
  
  // Effet de profondeur avec la molette de la souris
  document.addEventListener('wheel', (e) => {
    perspective += e.deltaY * 5;
    perspective = Math.max(500, Math.min(2000, perspective));
    document.querySelector('.hero-title-container').style.perspective = `${perspective}px`;
  });
}