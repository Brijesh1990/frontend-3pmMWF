// Define a sample object and function
const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const greet = function(greeting, punctuation) {
    return `${greeting}, ${this.firstName}${punctuation}`;
};

// ===== CALL =====
// Calls function immediately with specific 'this' context
// Syntax: function.call(thisArg, arg1, arg2, ...)
console.log(greet.call(person, 'Hello', '!')); // "Hello, John!"

// ===== APPLY =====
// Similar to call, but arguments passed as an array
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
console.log(greet.apply(person, ['Hi', '?'])); // "Hi, John?"

// ===== BIND =====
// Returns a new function with fixed 'this' context
// Syntax: function.bind(thisArg, arg1, arg2, ...)
const greetJohn = greet.bind(person, 'Hey');
console.log(greetJohn('.')); // "Hey, John."

// Practical Example: Using bind with events
const button = {
    label: 'Click me',
    handleClick: function() {
        console.log(this.label);
    }
};

// Without bind, 'this' would be the button element
document.addEventListener('click', button.handleClick.bind(button));