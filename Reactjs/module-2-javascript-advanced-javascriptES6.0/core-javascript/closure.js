
function outer() {
  let count = 0; // Variable in outer scope
  
  function inner() {
    count++; // Inner function accesses outer variable
    console.log(count);
  }
  
  return inner;
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3