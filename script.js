    <script src="script.js"></script>
    // Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Make section titles highlight on hover
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // 2. Add a subtle typing effect to the Rocxam title
    const rocxamTitle = document.querySelector('.content1 h1');
    if (rocxamTitle) {
        const originalText = rocxamTitle.textContent;
        rocxamTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                rocxamTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after 1 second
        setTimeout(typeWriter, 1000);
    }
    
    // 3. Make project items clickable with alert
    const projectItems = document.querySelectorAll('.box3 .placeholder');
    
    projectItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            const projectNames = ['TrendUs – Personal AI Project', 'Dance and Sing Uganda (DnS-Uganda)'];
            alert(`Opening: ${projectNames[index]}\nThis would show more details about the project.`);
        });
        
        // Simple hover effect
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        });
    });
    
    // 4. Make contact info copy to clipboard when clicked
    const contactItems = document.querySelectorAll('.box4 .contact-item');
    
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            const textToCopy = this.textContent.replace(/\n/g, ' ').trim();
            
            // Copy to clipboard
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Visual feedback
                    const originalColor = this.style.color;
                    this.style.color = '#FFD700'; // Gold color
                    this.style.transition = 'color 0.3s';
                    
                    setTimeout(() => {
                        this.style.color = originalColor;
                    }, 1000);
                    
                    console.log(`Copied: ${textToCopy}`);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    });
    
    // 5. Add current date to the page footer
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Create and add date element
    const dateElement = document.createElement('div');
    dateElement.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        font-family: Arial, sans-serif;
    `;
    dateElement.textContent = `Portfolio last updated: ${dateString}`;
    document.body.appendChild(dateElement);
    
    // 6. Simple console message
    console.log('🎯 Portfolio loaded successfully!');
    console.log('📞 Contact info is clickable to copy');
    console.log('💼 Projects are clickable for details');
});