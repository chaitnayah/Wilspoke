const leftButton = document.querySelector('.slider-btn.left');
const rightButton = document.querySelector('.slider-btn.right');
const logosContainer = document.querySelector('.partners-logos');

leftButton.addEventListener('click', () => {
  logosContainer.scrollBy({
    left: -100,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  logosContainer.scrollBy({
    left: 100,
    behavior: 'smooth'
  });
});
