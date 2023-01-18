'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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




//-----------------------------------------------------//
////251. Promises and Fetch API///////////////////////////////////
// Newer & more modern way to 

const request = fetch('https://restcountries.com/v2/name/portugal');

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`) //returns promise
        .then(response => {
            if (!response.ok) // if ok property is false, throw error & msg
                throw new Error(`Country not found ${response.status}`) 
            return response.json();
        }) // if fulfilled promise, do this //parsing body data. this also returns promise
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

getCountryData('pordfetugadsrll');


//-----------------------------------------------------//
// 259. Building a simple promise
// Promise constructor needs 'executer function' as argument
const lotteryPromise = new Promise(function (resolve, reject) {
   
    setTimeout(function () {
        console.log('Lotter draw is happening 🔮')
        if (Math.random() >= 0.5) {
            resolve('You WIN 🎉') // =means this promise is fulfilled
        } else {
            reject(new Error('You lost your money')) // promise is rejected
        }
    }, 2000)
});

// Consuming promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))
// logs You WIN 🎉 / You lost your money depends on task status


// Real-world example : Promisifying setTimeout 
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2).then(() => {
    console.log('2 seconds passed');
    return wait(1);
}).then(() => console.log('1 second passed'))

*/
//-----------------------------------------------------//
// 262. Consuming promises with Async/Await
const whereAmI = async function (country) {
    try {
        // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
   
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!res.ok) throw new Error('Problem getting country')
        const dataGeo = await resGeo.json()
    
    // Country data
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)
    console.log(res);
    /* 2 lines above are exactly the same as below;
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => console.log(res))
*/
    const data = await res.json()
    console.log(data);
        renderCountry(data[0])
    } catch (err) {
        console.error(err)
        renderError(`${err.message}`);
    }
};
whereAmI()
whereAmI()
whereAmI()
console.log('first')


//-----------------------------------------------------//
// 265. Running Promises in parallel
/* Whenever you need to do multiple async tasks at the same time, 
and when each task does not depend on each other, always run them in parallel.*/

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1]= await getJson(`https://restcountries.com/v2/name/${c1}`)
        // const [data2]= await getJson(`https://restcountries.com/v2/name/${c2}`)
        // const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`)
        const data = await Promise.all(
            [getJson(`https://restcountries.com/v2/name/${c1}`),
            getJson(`https://restcountries.com/v2/name/${c2}`),
            getJson(`https://restcountries.com/v2/name/${c3}`)
            ]
        );
        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.error(err);
    }
};

get3Countries('portugal', 'canada', 'tanzania')



//-----------------------------------------------------//
// 266. Promises combinators : race, allSettled, any

/* Promise.race
 : receives and returns an array of promise
 : this promise is settled(value is available) as soon as one of the input promises settled.
 : we only get one result(the fastest one), not array of all 
*/
    (async function () {
        const res = await Promise.race([
            getJson(`https://restcountries.com/v2/name/italy`),
            getJson(`https://restcountries.com/v2/name/japan`),
            getJson(`https://restcountries.com/v2/name/mexico`)
        ]);
    })()

/* .race can be useful e.g. when user has very slow internet, 
reject when it passes certain amount of time to load */
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'))
        }, s * 1000);
    })
};
Promise.race(
    [getJson(`https://restcountries.com/v2/name/ethiopia`), timeout(1)
    ]).then(res => console.log(res[0]))
    .catch(err => console.log(err));



// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success again'),
]).then(res => console.log(res))


Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success again'),
]).then(res => console.log(res))
    .catch(err => console.log(err));


// Promise.any [ES2021]
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success again'),
]).then(res => console.log(res))
    .catch(err => console.log(err));