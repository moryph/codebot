/* Exercise 3: JavaScript Operators and Type Coercion
 * Working with basic operators and type conversion
 */

/* Q1: Number operators
 * Given input variables num1 and num2, assuming they are both numbers, perform the following operations
 */

const q1 = (num1, num2) => {
  // Set variable sum to the sum of num1 and num2
  const sum = 0
  // Set variable product to the product of num1 and num2
  const product = 0
  // Set variable difference to the difference of num1 and num2
  const difference = 0
  // Set variable quotient to num1 divided by num2
  const quotient = 0
  // Set variable modulus to num1 mod num2
  const modulus = 0
  return {
    sum, product, difference, quotient, modulus
  }
}

/* Q2: String operators
 * Given the input variables str1 and str2, assuming they are both strings, perform the following operations
 */

const q2 = (str1, str2) => {
  // Set variable joined to the combined string with str1 first then str2
  const joined = 0
  // Set variable csv to the combined string with str1 first then str2, separated by a comma
  const csv = 0
  // Set variable reversed to the combined string with str2 first then str1 (the strings themselves do not have to reversed)
  const reversed = 0

  return {
    joined, csv, reversed
  }
}

/* Q3: Type Coercion
 * Given two input variables of any type, perform the following operations
 * Both explicit and implicit type coercion may be used.
 */

const q3 = (var1, var2) => {
  // Set equal to be true when they are equal in value
  const equal = 0
  // Set strictEqual to be true when they strictly equal
  const strictEqual = 0
  // Set stringified to the combined string representations of var1 first then var2
  const stringified = 0
  // Set bool to be equal to the boolean representation of var1
  const bool = 0
  return {
    equal, strictEqual, stringified, bool
  }
}

export default { q1, q2, q3 }
