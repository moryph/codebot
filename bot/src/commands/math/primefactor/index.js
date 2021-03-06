import { NotImplementedError } from '../../errors'
/**
 * Function primefactor - Get the Prime Factorization of a given integer
 *
 * This has two main parts, a part to determine if a given integer is prime, and a part to determine if it is
 * possible to divide that integer into the provided integer num. The factors can be inserted into the `primefactors` array, return
 * statement automatically formats things. If some factors have a power greater than 1, you may repeat that
 * factor multiple times within the output array. For example, the prime factorization of 9 is 3^2, so the
 * output array can be [3, 3].
 *
 * The provided number will not be 0. If the number is 1, please return an empty array.
 *
 * Please sort the array in smallest first. Arrays have a method called sort() that will help with this.
 *
 * @param num - The input positive integer to factor
 * @return {response} - A string response containing the results of the factorization.
 */
async function primefactor(num) {
  let primefactors = []

  throw new NotImplementedError('num')

  return `The prime factorization of ${num} is ${primefactors}.`
}


// We'll go over how this works in a later session.
export default {
  name: 'primefactor',
  match: /^([1-9]\d*)$/,
  handler: primefactor,
  paramTypes: ['number'],
  usage: 'primefactor [positive integer]'
}
