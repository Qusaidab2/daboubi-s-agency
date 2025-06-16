const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// Optional: swipe support for mobile
let startX = 0;

document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".carousel").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // Swipe left
    current = (current + 1) % images.length;
    showImage(current);
  } else if (endX - startX > 50) {
    // Swipe right
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
});
