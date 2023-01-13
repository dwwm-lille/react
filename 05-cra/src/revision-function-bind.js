// Récapitulatif fonctions en JavaScript
let ImAVariable = 5;

function ImAFunction() {
  return 10;
}

// Exécute la fonction avec ou sans paramètre et retourne un résultat
console.log(ImAFunction());

// N'exécute pas la fonction mais permet d'avoir sa "signature"
console.log(ImAFunction);

function showEvent(e) {
  console.log(e);
}

// On peut ranger le code d'un listener dans une fonction
window.addEventListener('click', showEvent);
window.addEventListener('click', (e) => showEvent(e));

// Bind
function hello(name, age) {
  console.log(this);
  return this + ' ' + name + ' ' + age;
}

let hello2 = hello.bind({ a: 1 }, 'Bianca');

console.log(hello('Fiorella', 3));
console.log(hello);
console.log(hello.bind());
console.log(hello2(10)); // hello2 a un bind sur le name

function showEvent2(name, e) {
  console.log(name, e);
}

window.addEventListener('click', showEvent2.bind(this, 'EVENT'));

// Callback - Une fonction peut être un paramètre d'une fonction
let numbers = [1, 2, 3];

console.log(numbers.map((value, index) => value * 2));

function goodBye(callback) {
  return callback(5);
}

goodBye((value) => console.log(value));

function map(array, callback) {
  for (let i in array) {
    callback(i, array[i]);
  }
}

map([1, 2, 3], (index, number) => console.log(index, number));
