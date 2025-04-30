document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("slideWrapper");
    const slides = wrapper.children;
    const totalSlides = slides.length;
    let currentSlide = 0;
  
    const dotsContainer = document.getElementById("dotsContainer");
  
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  
    function updateSlider() {
      wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[currentSlide]) dots[currentSlide].classList.add("active");
    }
  
    function changeSlide(n) {
      currentSlide = (currentSlide + n + totalSlides) % totalSlides;
      updateSlider();
    }
  
    function goToSlide(n) {
      currentSlide = n;
      updateSlider();
    }
  
    // Make changeSlide globally accessible
    window.changeSlide = changeSlide;
  
    updateSlider(); // Initialize
  });
  