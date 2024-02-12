const burgerBtn = document.querySelector('.header-burger-btn');
const closeBtn = document.querySelector('.modal-header-close-btn');

burgerBtn.addEventListener('click', function () {
  document
    .querySelector('.modal-container')
    .classList.remove('visually-hidden');
  document.querySelector('.header-burger-btn').style.display = 'none';
});

closeBtn.addEventListener('click', function () {
  document.querySelector('.modal-container').classList.add('visually-hidden');
  document.querySelector('.header-burger-btn').style.display = 'block';
});
