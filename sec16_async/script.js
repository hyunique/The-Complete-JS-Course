'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
////248///////////////////////////////////
const getCountryData = function (country) {
    const request = new XMLHttpRequest(); // oldschool way to use ajax
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send(); // sending the request

    // as soon as data arrives from our request, call back function below will be executed
    request.addEventListener('load', function () {
        // console.log(this.responseText); // logs JSON data
    
        // Parse data and destruct array to an object
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    })
};


// these data runs async : it arrives differnt speed/time/order.
// To make the order fixed, use callbacks and chain requests
// getCountryData('portugal');
// getCountryData('greece');
// getCountryData('netherlands');


//-----------------------------------------------------//
////250. Callbacks///////////////////////////////////

const renderCountry = function (data, className='') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
    
    // AJAX call country 1
    const request = new XMLHttpRequest(); // oldschool way to use ajax
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        
        // Render country 1
        renderCountry(data);

        // Get neighbour country 2
        const neighbour = data.borders?.[0]; // Optional chaining to account for countries with no borders property

        // AJAX call country 2
        const request2 = new XMLHttpRequest(); // oldschool way to use ajax
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText)

            renderCountry(data2, 'neighbour')
        })
    })
};

getCountryAndNeighbour('germany')

*/

const renderCountry = function (data, className='') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}
//-----------------------------------------------------//
////251. Promises and Fetch API///////////////////////////////////
// Newer & more modern way to 

const request = fetch('https://restcountries.com/v2/name/portugal');


const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`) //returns promise
        .then(response => response.json()) // if fulfilled promise, do this //parsing body data. this also returns promise
        .then(function (data) { // handle returned promise from json()
            renderCountry(data[0])
            const neighbour = data[0].borders?.[0]

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
            // By returning this fetch, we can chain method outside insted of writing callback hell
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err}`)// Handling errors
            renderError(`Something went wrong (┬┬﹏┬┬) ${err.message}. Try again!`)
        })
        .finally(() => {
            // This will be called for both fulfilled & failed fetch
            // Only works when there is a returned promise
            // e.g. loading spinner
            countriesContainer.style.opacity = 1; // fade-in no matter of fetch status
        }); 
}


btn.addEventListener('click', function () {
    getCountryData('portugal');
});

getCountryData('portugal');
