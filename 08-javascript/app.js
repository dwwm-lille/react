// https://innate-gerbil-c60.notion.site/R-visions-JavaScript-baf37acaadb1453c9db56b8d2cede822

// Exercice 1
const students = ['Fiorella', 'Marina', 'Toto', 'Alphonse Brown'];

// Version ES5
function filterArray2(array) {
    return array.filter(function (item) {
        return item.toLowerCase().includes('a');
    }).map(function (item) {
        return item.toUpperCase();
    });
}

// Version ES6
const filterArray = (array) => array
    .filter((item) => item.toLowerCase().includes('a'))
    .map((item) => item.toUpperCase());

document.querySelector('.exo1 p:first-child span').innerHTML = students;
document.querySelector('.exo1 p:last-child span').innerHTML = filterArray(students);

// Exercice 2
const runClock = document.querySelector('.run-clock');
const clock = document.querySelector('.clock');

let interval;

runClock.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(() => {
        let date = new Date();

        if (date.getSeconds() % 10 === 0) {
            clock.classList.add('bold');
        } else if (clock.classList.contains('bold')) {
            clock.classList.remove('bold');
        }

        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
});

// Exercice 3
const entryLetters = document.querySelector('.entry-letters');
const tweet = document.querySelector('.tweet');
const pLimit = entryLetters.parentElement; // Le p qui contient le span
const button = pLimit.nextElementSibling;
const image = document.querySelector('#image');
const label = image.previousElementSibling; // Le label avant l'image
let limit = 0;

const checkLimit = () => {
    limit = tweet.value.length + (image.checked ? 5 : 0);
    entryLetters.textContent = limit;

    // Changer le label de la photo
    label.innerHTML = (image.checked) ? '✓ Photo ajoutée': 'Pas de photo';

    // Désactiver le bouton et ajouter la classe
    if (limit > 10) {
        pLimit.classList.add('bold');
        button.disabled = true;
    } else if (pLimit.classList.contains('bold')) {
        pLimit.classList.remove('bold');
        button.disabled = false;
    }
}

tweet.addEventListener('input', () => checkLimit());
image.addEventListener('change', () => checkLimit());
button.addEventListener('click', () => alert(tweet.value));

// Exercice 4
const message = document.querySelector('.message');
const encode = document.querySelector('.encode');
const decode = document.querySelector('.decode');
const result = document.querySelector('.result');

encode.addEventListener('click', () => {
    // Version ES6
    // let encode = [...message.value].map(letter => letter.charCodeAt()).join('.');

    let encode = '';

    for (let letter of message.value) {
        encode += letter.charCodeAt()+'.';
    }

    result.innerHTML = encode;
});

decode.addEventListener('click', () => {
    // Version ES6
    // let decode = String.fromCharCode(...message.value.split('.'));

    let decode = '';

    // .split() transforme la chaine en tableau
    for (let number of message.value.split('.')) {
        decode += String.fromCharCode(number);
    }

    result.innerHTML = decode;
});

// Exercice 6
const cookie = document.querySelector('.cookie');
const countElement = document.querySelector('.count');
const cookiesByClicksElement = document.querySelector('.cookies-by-clicks');
const cookiesBySecondsElement = document.querySelector('.cookies-by-seconds');

let count = 2000;
let cookiesByClicks = 1; // Le gain par clics
let cookiesBySeconds = 0; // Le gain par secondes
let price1 = 25;
let price2 = 250;
let price3 = 50;
let price4 = 300;

// Déclenche le setInterval
countElement.innerHTML = count;
setInterval(() => {
    count += cookiesBySeconds;
    countElement.innerHTML = count;
}, 1000);

const buyOneClick = (event) => {
    if (count < price1) {
        alert('Pas assez de cookies');
        return;
    }

    // Augmente le nombre de clic
    cookiesByClicks += 1;
    cookiesByClicksElement.innerHTML = cookiesByClicks;

    // Réduit le nombre de cookies
    count -= price1;
    countElement.innerHTML = count;

    // On met à jour le span.price
    price1 = Math.floor(price1 * 2.5);
    event.target.children[0].innerHTML = price1;
};

const buyClicks = (value, event) => {
    if (count < price2) {
        alert('Pas assez de cookies');
        return;
    }

    // Augmente le nombre de clic
    cookiesByClicks += value;
    cookiesByClicksElement.innerHTML = cookiesByClicks;

    // Réduit le nombre de cookies
    count -= price2;
    countElement.innerHTML = count;

    // On met à jour le span.price
    price2 = Math.floor(price2 * 2.5);
    event.target.children[0].innerHTML = price2;
};

const buyOneSecond = (event) => {
    if (count < price3) {
        alert('Pas assez de cookies');
        return;
    }

    // Augmente le nombre de cookie par secondes
    cookiesBySeconds += 1;
    cookiesBySecondsElement.innerHTML = cookiesBySeconds;

    // Réduit le nombre de cookies
    count -= price3;
    countElement.innerHTML = count;

    // On met à jour le span.price
    price3 = Math.floor(price3 * 1.7);
    event.target.children[0].innerHTML = price3;
};

const buySeconds = (value, event) => {
    if (count < price4) {
        alert('Pas assez de cookies');
        return;
    }

    // Augmente le nombre de cookie par secondes
    cookiesBySeconds += 1;
    cookiesBySecondsElement.innerHTML = cookiesBySeconds;

    // Réduit le nombre de cookies
    count -= price4;
    countElement.innerHTML = count;

    // On met à jour le span.price
    price4 = Math.floor(price4 * 1.5);
    event.target.children[0].innerHTML = price4;
};

cookie.addEventListener('click', () => {
    count += cookiesByClicks;
    countElement.innerHTML = count;
});
