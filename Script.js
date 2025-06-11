document.addEventListener('DOMContentLoaded', () => {

    // --- CUSTOM CURSOR LOGIC ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const interactiveElements = document.querySelectorAll('.interactive');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        // Update dot position directly
        cursorDot.style.left = ${mouseX}px;
        cursorDot.style.top = ${mouseY}px;
        
        // Lerp (linear interpolation) for smooth outline movement
        // This creates the "lag" effect
        const speed = 0.1;
        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;
        cursorOutline.style.left = ${outlineX}px;
        cursorOutline.style.top = ${outlineY}px;

        requestAnimationFrame(animateCursor);
    };
    
    // Add hover effect on interactive elements
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });

    animateCursor();


    // --- SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

});