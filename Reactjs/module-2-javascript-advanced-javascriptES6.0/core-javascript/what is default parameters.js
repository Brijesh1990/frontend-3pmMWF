/**
 * Default parameters in JavaScript allow you to set initial values for function parameters.
 
 * If a parameter is not provided or is undefined when the function is called,
 * the default value will be used instead.
 * 
 * Syntax: function functionName(param1 = defaultValue1, param2 = defaultValue2) { }
 * 
 * @example
 * // Example 1: Simple default parameter
 * function greet(name = "Guest") {
 *   console.log(`Hello, ${name}!`);
 * }
 * greet(); // Output: Hello, Guest!
 * greet("Alice"); // Output: Hello, Alice!
 * 
 * @example
 * // Example 2: Multiple default parameters
 * function createUser(name = "Unknown", age = 0, role = "User") {
 *   return { name, age, role };
 * }
 * 
 * @example
 * // Example 3: Default parameter using expressions
 * function add(a, b = a * 2) {
 *   return a + b;
 * }
 * add(5); // Returns 15 (5 + 10)
 * 
 * @note Default parameters are evaluated at function call time, not at function definition time.
 * @note Default parameters only apply when arguments are undefined, not for other falsy values like null, 0, or "".
 */