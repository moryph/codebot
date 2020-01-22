/* Exercise 5: JavaScript Conditionals and Loops
 * Working with if, for and while
 */

/* Q1: Conditionals
 * Given a number input, perform the following
 */
const q1 = (input) => {
  let output = 0

  // If the number is negative, set output to equal 1

  // If the number is 0, set the output to 2

  // If the number is 10, set the output to 3

  // Otherwise, set the output to half the input

  return output
}

/* Q2: For loops
 * Given an array of numbers arr, perform the following
 */
const q2 = (arr) => {
  // Set subsetSum to equal the sum of the first 10 numbers in arr
  let subsetSum = 0


  // Set fullSum to equal the sum of all the elements in arr
  let fullSum = 0

  return { subsetSum, fullSum }
}

/* Q3: While loops
 * Given an input number num, perform the following
 */

const q3 = (num) => {
  // Store in counter the number of times you can divide num by 2, followed by subtracting from it 1, while keeping
  // it positive.
  // (i.e. (num / 2)  - 1)
  let counter = 0


  return counter
}

export default { q1, q2, q3 }
