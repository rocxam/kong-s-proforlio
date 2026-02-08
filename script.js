console.log("✅ JavaScript file is loading!");

// Make section titles clickable
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM is loaded!");
    
    // Add click effects to section titles
    const titles = document.querySelectorAll('.section-title');
    console.log("Found", titles.length, "section titles");
    
    titles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function() {
            alert('You clicked: ' + this.textContent);
        });
    });
    
    // Simple hover effect
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});