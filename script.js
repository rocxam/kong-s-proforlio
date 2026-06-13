document.addEventListener('DOMContentLoaded', function() {
console.log("🎯 Portfolio scripts active — nav removed, floating layout enabled.");

document.addEventListener('DOMContentLoaded', function() {
    // Add subtle floating motion using CSS transforms for each box
    const boxes = document.querySelectorAll('.portfolio-box');
    boxes.forEach((box, i) => {
        box.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
        box.addEventListener('mouseover', () => {
            box.style.transform = 'translateY(-12px)';
            box.style.boxShadow = '0 18px 50px rgba(0,0,0,0.6)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = '';
            box.style.boxShadow = '';
        });
    });

    // Optional: subtle parallax on mousemove for depth
    const container = document.querySelector('.portfolio-container');
    if (container) {
        container.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            boxes.forEach((box, idx) => {
                const depth = (idx + 1) * 2; // deeper boxes move more
                box.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
            });
        });
        container.addEventListener('mouseleave', () => {
            boxes.forEach((box) => box.style.transform = '');
        });
    }
});