// define a name and show it on the screen
const name = 'Hermione';
const nameElement = document.getElementById('name')
nameElement.textContent = name;
console.log('name element', nameElement);

// define an age and show that on the screen
const age = '11';
const ageElement = document.getElementById('age');
ageElement.textContent = age;

// create css classes for is good/not
// show the right word/class styles on the screen depending
const isGood = false;
const goodClass = isGood ? 'good' : 'not-good';
const isGoodElement = document.getElementById('is-good');
isGoodElement.textContent = isGood;
isGoodElement.className = goodClass;