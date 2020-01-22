/* Exercise 6: JavaScript Functions
 * Working with JavaScript Functions
 */

/* Q1: Function Calling
 * Given a function func, perform the following
 */
const q1 = (func) => {
  // Call func with no arguments

  // Call func with arguments 'str', 2, true (string, number and boolean arguments)

  // Set val to equal the return value of func called with arguments 2, 3 (number and number arguments)
  const val = 0

  return val
}

/* Q2: Function Creation
 * Create the given functions
 */

const q2 = () => {

  // A function that doesn't require any arguments, and always returns the number 4
  const randomNumber = 0

  // A function that accepts two number arguments, and returns their sum
  const adder = 0

  // A function that accepts one number argument, and returns -1 if the number is negative, 0 if it's 0, and 1 otherwise
  const normalizer = 0

  return {randomNumber, adder, normalizer}
}


export default { q1, q2 }
