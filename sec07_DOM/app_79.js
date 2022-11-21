'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal')

for (let btn of btnShowModal){
    btn.addEventListener('click', function () {
        modal.classList.remove('hidden')
    })
}
btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden')
})