// JavaScript for handling the image zoom effect
document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(image => {
        image.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);

            const lightboxContent = document.createElement('img');
            lightboxContent.classList.add('lightbox-content');
            lightboxContent.src = image.src;
            lightbox.appendChild(lightboxContent);

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = '&times;';
            lightbox.appendChild(closeBtn);

            closeBtn.addEventListener('click', function() {
                lightbox.remove();
            });

            lightbox.addEventListener('click', function(e) {
                if (e.target !== lightboxContent && e.target !== closeBtn) {
                    lightbox.remove();
                }
            });
        });
    });
});