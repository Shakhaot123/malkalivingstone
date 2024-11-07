    // Accordion 
    function toggleAccordion(id) {
        // Close all accordion contents and reset icons
        const contents = document.querySelectorAll('[id^="accordion-content-"]');
        const icons = document.querySelectorAll('[id^="accordion-icon-"]');
        contents.forEach((content, index) => {
          if (index + 1 !== id) {
            content.classList.add("hidden"); // Close other contents
            icons[index].classList.remove("rotate-180"); // Reset other icons
          }
        });
  
        // Toggle the selected accordion content and icon
        const content = document.getElementById(`accordion-content-${id}`);
        const icon = document.getElementById(`accordion-icon-${id}`);
        content.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
    }
    



    

  
    let currentIndex = 0;

    function showSlide(index) {
      const slides = document.getElementById('carousel-slides');
      const totalSlides = slides.children.length;
      currentIndex = (index + totalSlides) % totalSlides; // Loop back around if out of bounds
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }
