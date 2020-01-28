import { NotImplementedError } from '../../errors'

/**
 * Function binomial - Calculate the binomial coefficient given two positive numbers
 * Given the two positive integer values n and k, calculate the binomial coefficient of the two numbers (or n choose k)
 *
 * You may use whatever calculation method you want, but the easiest way to do this is probably to use the factorial form
 * of calculation. (i.e. nCk = (n!)/(k!(n - k)!). You may assume small enough numbers that the factorials can be calculated.
 *
 * The return statement is already set up. Set the variable 'binomialCoefficient' to the relevant value.
 * @param n - The n value, as a positive integer
 * @param k - The k value, as a positive integer
 * @return {response} A string response with the binomial coefficient calculation.
 */
async function binomial(n, k) {
  let binomialCoefficient = 0

  throw new NotImplementedError('binomial')

  return `${n} choose ${k} is equal to ${binomialCoefficient}.`
}


// We'll go over how this works in a later session.
export default {
  name: 'binomial',
  match: /^([1-9]\d*)\s([1-9]\d*)$/,
  handler: binomial,
  paramTypes: ['number', 'number'],
  usage: 'binomial [positive integer 1] [positive integer 2]'
}
