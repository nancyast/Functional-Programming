// Side effect
// Each statement has a main effect
let a = 2 + 1;
// Statements may have side-effects
let b = a++;

// Should not use this partern
const basket = [];

function addElement(name, price) {
  basket.push({ name, price });
}

addElement('Biscuits', 1);
console.log('basket ', basket);
// => main effect is add element that causes side effect is mutate the value of basket.

// Should use this partern
const basketF = [];

function addElementF(name, price) {
  return [...basketF, { name, price }];
}

const basket1 = addElementF('Biscuits', 1);
console.log('basket1 ', basket1);
// => no side effect

// Programming in Functional Style in javascript
/*
Break down the problem using functional decomposition
Recursion instead of loops
Higher order functions
Functional Javascript constructs
Currying and partial evaluation
*/
