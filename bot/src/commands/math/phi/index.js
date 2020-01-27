import { NotImplementedError } from '../../errors'
/**
 * Function phi - Approximate the golden ratio from the Fibonacci Sequence
 *
 * It is proven that the ratio between two consecutive numbers in the Fibonacci Sequence approaches the golden ratio,
 * phi, as the index of the numbers increases. Use this relationship to approximate the value of phi given the index of
 * the lower of the two Fibonacci numbers.
 *
 *
 *
 * @param n - The n value used above
 * @return {response} - A string response containing the calculated value.
 */
async function phi(n) {
  let phiApprox = 0

  throw new NotImplementedError('phi')

  return `The approximate value of phi given terms ${n} and ${n + 1} of the Fibonacci sequence is ${phiApprox}`
}


// We'll go over how this works in a later session.
export default {
  name: 'phi',
  match: /^(\d+)$/,
  handler: phi,
  paramTypes: ['number'],
  usage: 'phi [integer]'
}
