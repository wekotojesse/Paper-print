const carouselInner = document.querySelector('.mini-carousel-inner');
        const carouselItems = document.querySelectorAll('.mini-carousel-item');
        const totalItems = carouselItems.length;
        let currentIndex = 0;

        function updateCarousel() {
            const translateValue = -currentIndex * 100 + '%';
            carouselInner.style.transform = 'translateX(' + translateValue + ')';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }
