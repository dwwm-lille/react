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
