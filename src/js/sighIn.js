const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const openSignIn = document.querySelector('#sign-in-icon');

openSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('active');
  modalInner.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalInner.classList.remove('active');
  }
});
