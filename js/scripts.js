console.log('OK');

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#stars path");

    stars.forEach(star => {
        function twinkle() {
            const duration = Math.random() * 1 + 1.5; 
            const delay = Math.random() * .5; 

            star.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            star.style.opacity = Math.random() * 1 + 0; 

            setTimeout(twinkle, duration * 1000 + delay * 1000); 
        }
        twinkle();
    });
});
