document.addEventListener('DOMContentLoaded', function() {
    // Video placeholder functionality
    const videoPlaceholder = document.querySelector('.video-container');
    const playButton = document.querySelector('.play-button');
    
    if (videoPlaceholder && playButton) {
        videoPlaceholder.addEventListener('click', function() {
            // This would normally load the actual YouTube video
            // For now, we'll just show an alert as a placeholder
            alert('Video would play here. Replace with actual YouTube embed in production.');
            
            // In production, you would replace the image with an iframe like this:
            // const iframe = document.createElement('iframe');
            // iframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1';
            // iframe.width = '100%';
            // iframe.height = '100%';
            // iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            // iframe.allowFullscreen = true;
            // 
            // videoPlaceholder.innerHTML = '';
            // videoPlaceholder.appendChild(iframe);
        });
    }
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
        const elements = document.querySelectorAll('.bullet-point, .cta-button, h1, h2, h3');
        
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
    
    // Form submission handling for the quiz/application
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // For now we'll prevent default and show an alert
            // In production, this would link to your actual quiz/application
            e.preventDefault();
            alert('Quiz application would open here. Link this button to your actual application form.');
        });
    });
});
