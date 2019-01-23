// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const a = 1;
const b = 2;
const c = 3;

function multiplyABC() {
  const d= 4;
  return a*b*c*d;
}
//This is a nice simple example of closure/scope, the function is able to access the global scope and use the value of 'a', 'b',
// and 'c'. It Can also access the value of d within its own scope. However, 'd' cannot be accessed outside of the scope of the function
console.log(multiplyABC());
//console.log(d);

// ==== Challenge 2: Create a counter function ====
//const counter = () => {
  
  // Return a function that when invoked increments and returns a counter variable.
//};
let counter = 0;
function newCounter() {
  return console.log(counter += 1);
}
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
