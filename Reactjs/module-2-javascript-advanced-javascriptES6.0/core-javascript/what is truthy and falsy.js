// Falsy values
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy values
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(-1));         // true

// Practical usage in conditionals
if ("hello") {
    console.log("This runs - non-empty string is truthy");
}

if (0) {
    console.log("This won't run - 0 is falsy");
} else {
    console.log("This runs - 0 is falsy");
}