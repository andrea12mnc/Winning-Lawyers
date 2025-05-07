document.addEventListener('DOMContentLoaded', function() {
    // Video è già incorporato come iframe YouTube
    
    // Smooth scrolling only for anchor links within the same page
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.bullet-point, .bullet-icon, .cta-button, h1, h2, h3');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation check on initial load
    animateOnScroll();
    
    // Non blocchiamo più i pulsanti CTA perché ora abbiamo una pagina reale a cui collegarli
});
