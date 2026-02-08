// SIMPLE TEST - If this works, you'll see an alert
console.log("✅ JavaScript is connected!");
alert("JavaScript is working!");

// Add red border to all section titles to see if JS is applying styles
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.style.border = '2px solid red';
    });
    console.log("Found", titles.length, "section titles");
});