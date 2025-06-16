
<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
</script>
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const total = images.length;

document.querySelector('.next').onclick = () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % total;
  images[currentIndex].classList.add('active');
};

document.querySelector('.prev').onclick = () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + total) % total;
  images[currentIndex].classList.add('active');
};
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
