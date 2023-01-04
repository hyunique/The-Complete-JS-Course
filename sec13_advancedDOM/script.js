'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); //=node list !=array

const openModal = function (e) {
    e.preventDefault(); // To prevent default nature of 'a' tag- load href
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section')
document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
document.getElementsByClassName('btn')


// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div')
message.classList.add('cookie-message');
// message.textContent = ' We use cookies for improved functionality and analytics.'
message.innerHTML = ' We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message); header.before(message)//attach item before header
header.append(message); //header.after(message) attach item after header
// header.append(message.cloneNode(true)); // copy and attach item after header

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove()
    // = message.parentElement.removeChild(message)
})