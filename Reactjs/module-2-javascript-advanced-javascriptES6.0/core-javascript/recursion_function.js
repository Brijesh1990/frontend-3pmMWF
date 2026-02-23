/**
 * Calculates the factorial of a number using recursion.
 * 
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial of n
 * @throws {Error} If n is negative
 * 
 * @example
 * factorial(5); // Returns 120
 */
function factorial(n) 
{
    if (n < 0) throw new Error('Number must be non-negative');
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5))