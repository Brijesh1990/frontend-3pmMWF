/**
 * Destructuring in JavaScript allows you to unpack values from arrays or properties from objects into distinct variables.
 * 
 * Array destructuring syntax extracts elements from an array and assigns them to individual variables.
 * 
 * @example
 * // Basic array destructuring
 * const [first, second, third] = [1, 2, 3];
 * // first = 1, second = 2, third = 3
 * 
 * @example
 * // Skipping elements
 * const [first, , third] = [1, 2, 3];
 * // first = 1, third = 3
 * 
 * @example
 * // Using rest operator
 * const [first, ...rest] = [1, 2, 3, 4];
 * // first = 1, rest = [2, 3, 4]
 * 
 * @example
 * // With default values
 * const [first = 10, second = 20] = [5];
 * // first = 5, second = 20
 * 
 * @returns {void}
 */


const [first, second, third] = [1, 2, 3];
console.log(first);
console.log(second);
console.log(third);