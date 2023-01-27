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
