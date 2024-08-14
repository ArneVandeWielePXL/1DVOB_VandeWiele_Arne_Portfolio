document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    document.querySelector('.prev-slide').addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.next-slide').addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
});