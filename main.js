const toggleBtn = document.querySelector('.navbar_toogleBtn');
const navbar_2 = document.querySelector('.navbar_2');

toggleBtn.addEventListener('click', () => {
  navbar_2.classList.toggle('active');
});
