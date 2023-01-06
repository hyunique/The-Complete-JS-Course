'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); //=node list !=array
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')
const tabs = document.querySelectorAll('operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav')

///////////////////////////////////////
// Modal window
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

///////////////////////////////////////
// Scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: 'smooth' }) // only available in modern browsers
    // window.scrollTo({
    //     left: s1coords.left,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });  
});


///////////////////////////////////////
// Page navigation with event delegation
// Add event listener to common parent element, and determin what element originated the event
// Use this technique to prevent copying same function for multiple elements
document.querySelector('.nav__links').addEventListener('click', function (e) {
    console.log(e.target);
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('.nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    } 
});
/*Page navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    })
})*/

///////////////////////////////////////
// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
    // Activate tab
    clicked.classList.add('operations__tab--active');
  
    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

 // Passing "argument" into handler
 //mouseover is similar to mouseenter, but enter does not bubble
 nav.addEventListener('mouseover',handleHover.bind(0.5))
 nav.addEventListener('mouseover',handleHover.bind(1))
// nav.addEventListener('mouseover', function (e) {
//     handleHover(e, 0.5)
// })
// nav.addEventListener('mouseout', function (e) {
//     handleHover(e, 1)
//  })

///////////////////////////////////////
// Sticky navigation
const initialCoords = section1.getBoundingClientRect()
window.addEventListener('scroll', function () {
    if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky')
    else nav.classList.remove('sticky');
})


//----------------------------------------------------//
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

/* 187. Styles. Attributes and Classes
// Styles
message.style.backgroundColor = '#373839';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'gray')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt, logo.src, logo.className)

// Data attributes
// attributes starting with'data'
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add('c','j')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')
*/



const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 555)},rgb(${randomInt(0, 555)},rgb(${randomInt(0, 555)})`;
document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    //e.stopPropagation(); // to stop event bubbling
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
  
})
document.querySelector('.nav').addEventListener('click', function (e) {
    
})