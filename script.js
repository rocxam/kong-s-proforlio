document.addEventListener('DOMContentLoaded', function() {
console.log("🎯 Portfolio scripts active — nav removed, floating layout enabled.");

document.addEventListener('DOMContentLoaded', function() {
    // Lightweight parallax: set CSS variables so transforms don't conflict with hover
    const boxes = document.querySelectorAll('.portfolio-box');
    boxes.forEach((box) => {
        box.style.willChange = 'transform';
        box.style.setProperty('--parallaxX', '0px');
        box.style.setProperty('--parallaxY', '0px');
    });

    const container = document.querySelector('.portfolio-container');
    if (container) {
        container.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            boxes.forEach((box, idx) => {
                const depth = (idx + 1) * 6; // sensitivity per box
                box.style.setProperty('--parallaxX', `${dx * depth}px`);
                box.style.setProperty('--parallaxY', `${dy * depth}px`);
            });
        });
        container.addEventListener('mouseleave', () => {
            boxes.forEach((box) => {
                box.style.setProperty('--parallaxX', '0px');
                box.style.setProperty('--parallaxY', '0px');
            });
        });
    }
});