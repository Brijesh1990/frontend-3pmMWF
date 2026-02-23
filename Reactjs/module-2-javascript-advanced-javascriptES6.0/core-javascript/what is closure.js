// What is a Closure in JavaScript?

// A closure is a function that has access to variables from its own scope, the outer function's scope, and the global scope. Closures are created every time a function is created.

// Key Points:
// Inner function accessing outer variables - A closure allows an inner function to access variables from its parent (outer) function even after the outer function has returned.

// Persistent memory - Closures "remember" the environment in which they were created.

// Data privacy - Closures can be used to create private variables that cannot be accessed directly from outside.

// Example:
// Why are closures useful? They help with data encapsulation, creating private variables, and managing state in functions.

// Simple Closure Example

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

// The inner function "closes over" the count variable
// It remembers the value even after outer() has finished executing


// Practical Example: Data Privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500));   // 1500
console.log(myAccount.withdraw(200));  // 1300
console.log(myAccount.getBalance());   // 1300
// balance variable is private - cannot be accessed directly from outside
