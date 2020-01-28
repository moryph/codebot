import { NotImplementedError } from '../../errors'

/**
 * Function gcd - Get the Greatest Common Denominator between two non-negative integer numbers
 * Use Euclid's Method for GCD calculation to accomplish this task. Note that there is no guarantee of the
 * first number being smaller than the second number. Make sure also to handle cases involving 0. You may set gcd
 * to 'undefined' in the case that both inputs are 0.
 *
 * The return statement is already set up. Set the variable 'gcd' to the relevant value.
 *
 * @param num1 - The first non-negative integer
 * @param num2 - The second non-negative integer
 * @return {response} A string response with the GCD calculation.
 */
async function gcd(num1, num2) {
  let gcd = 0

  throw new NotImplementedError('gcd')

  return `The GCD of ${num1} and ${num2} is equal to ${gcd}.`
}


// We'll go over how this works in a later session.
export default {
  name: 'gcd',
  match: /^(\d+)\s(\d+)$/,
  handler: gcd,
  paramTypes: ['number', 'number'],
  usage: 'gcd [non-negative integer 1] [non-negative integer 2]'
}
