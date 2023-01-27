// https://innate-gerbil-c60.notion.site/R-visions-JavaScript-baf37acaadb1453c9db56b8d2cede822

// Exercice 1
const students = ['Fiorella', 'Marina', 'Toto', 'Alphonse Brown'];
const filterArray = (array) => array
    .filter(s => s.toLowerCase().includes('a'))
    .map(s => s.toUpperCase());

document.querySelector('.exo1 p:first-child span').innerHTML = students;
document.querySelector('.exo1 p:last-child span').innerHTML = filterArray(students);
