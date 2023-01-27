// https://innate-gerbil-c60.notion.site/R-visions-JavaScript-baf37acaadb1453c9db56b8d2cede822

// Exercice 1
const students = ['Fiorella', 'Marina', 'Toto', 'Alphonse Brown'];
const filterArray = (array) => array
    .filter(s => s.toLowerCase().includes('a'))
    .map(s => s.toUpperCase());

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
const keepLetters = document.querySelector('.keep-letters');
const tweet = document.querySelector('.tweet');
const pLimit = keepLetters.parentElement;
const button = pLimit.nextElementSibling;
const image = document.querySelector('#image');
let limit = 0;

const checkLimit = () => {
    limit = tweet.value.length + (image.checked ? 5 : 0);
    keepLetters.textContent = limit;

    if (limit > 10) {
        pLimit.classList.add('bold');
        button.disabled = true;
    } else if (pLimit.classList.contains('bold')) {
        pLimit.classList.remove('bold');
        button.disabled = false;
    }
}

tweet.addEventListener('input', () => {
    checkLimit();
});

image.addEventListener('change', () => {
    checkLimit();
});

button.addEventListener('click', () => alert(tweet.value));

// Exercice 4
const message = document.querySelector('.message');
const encode = document.querySelector('.encode');
const decode = document.querySelector('.decode');
const result = document.querySelector('.result');

encode.addEventListener('click', () => {
    let encode = [...message.value].map(letter => letter.charCodeAt()).join('.');

    result.innerHTML = encode;
});

decode.addEventListener('click', () => {
    let decode = String.fromCharCode(...message.value.split('.'));

    result.innerHTML = decode;
});
