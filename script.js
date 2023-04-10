var carousel = document.getElementById('post-carousel');
var wrapper = carousel.querySelector('.carousel-wrapper');
var prev = carousel.querySelector('.carousel-prev');
var next = carousel.querySelector('.carousel-next');
var items = carousel.querySelectorAll('.carousel-item');
var slideWidth = items[0].offsetWidth;
var currentIndex = 0;

function slideTo(index) {
  wrapper.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
  currentIndex = index;
}

prev.addEventListener('click', function() {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  }
});

next.addEventListener('click', function() {
  if (currentIndex < items.length - 3) {
    slideTo(currentIndex + 1);
  }
});

slideTo(0);
