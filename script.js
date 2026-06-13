console.log("🎯 JavaScript is starting...");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Page is ready!");
    
    // TEST 1: Make section titles red (visible test)
    const titles = document.querySelectorAll('.section-title');
    console.log("Found " + titles.length + " section titles");
    
    if (titles.length > 0) {
        titles[0].style.color = 'red';
        titles[0].style.fontWeight = 'bold';
        console.log("✅ Changed first title to RED");
    }
    
    // TEST 2: Add click to first box
    const firstBox = document.querySelector('.box1');
    if (firstBox) {
        firstBox.style.cursor = 'pointer';
        firstBox.addEventListener('click', function() {
            alert('📦 Box 1 clicked!');
        });
        console.log("✅ Made Box 1 clickable");
    }
    
    // TEST 3: Simple hover on titles
    titles.forEach(function(title) {
        title.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        });
        title.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    console.log("✅ All JavaScript loaded successfully!");
});