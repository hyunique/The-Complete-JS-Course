'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal')


const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let btn of btnShowModal){
    btn.addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// When key is pressed, let JS to execute a function. 
// When do so, pass in event object as an arguement.
document.addEventListener('keydown', function (e) {
    //e(event) is an object. To access properties, use dot or bracket
    console.log(e.key)
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
        closeModal()
    }
})