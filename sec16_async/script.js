'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
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
getCountryData('portugal');
getCountryData('greece');
getCountryData('netherlands');