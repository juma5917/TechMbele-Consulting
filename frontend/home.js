
AOS.init();
function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "/navbar.html");
    loadComponent("footer", "/footer.html");
  });


  //implementing slider functionality
  const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider > div');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let index = 0;

// Function to update the slider position
const updateSlider = () => {
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(-${index * width}px)`;
};

// Next button
next.addEventListener('click', () => {
  index = (index + 1) % slides.length; // Loop back to the start
  updateSlider();
});

// Prev button
prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length; // Loop to the end
  updateSlider();
});

// Automatic Sliding
const autoSlide = () => {
  index = (index + 1) % slides.length; // Loop back to the start
  updateSlider();
};

// Start automatic sliding
let slideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds

// Pause auto-slide on hover
const sliderContainer = document.querySelector('.relative');
sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderContainer.addEventListener('mouseleave', () => slideInterval = setInterval(autoSlide, 5000));

// Initialize slider position
window.addEventListener('resize', updateSlider);


// Sliding logic for the testimonials
let testimonialSlider = document.getElementById("testimonial-slider");
let currentIndex = 0;

// Auto-slide every 10 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % 3; // Number of testimonials
  testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 10000);