// Higher-order function that takes a function as an argument
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Regular functions
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using higher-order function
console.log(applyOperation(5, 3, add));      // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15

// Higher-order function that returns a function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15

// Real-world examples: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]