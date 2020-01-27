import { NotImplementedError } from '../../errors'
/**
 * Function sqrt - Approximate square roots using Newton's Method
 *
 * Newton's Method uses the derivatives of a function to approximate values of that function. It also happens to be the
 * most common way to programmatically calculate square root approximations. Apply Newton's Method a certain number of times,
 * as specified, in order to approximate the square root of a given value.
 *
 * Newton's method involves starting with a guess, and then making that guess better by applying a formula to it. For square roots,
 * the formula is:
 *
 *  x_(n + 1) = (1/2)(x_(n) + a/(x_(n)))
 *
 *  Where x_(n + 1) is the improved guess, x_(n) is the old guess, and a is the value to find a square root for. Start with
 *  an initial guess value of 1. Store the final approximate value in approxSqrt.
 *
 * @param a - The value to find a square root for
 * @param n - The total number of iterations to run for
 * @return {response} - A formatted string response
 */
async function sqrt(a, n) {
  let approxSqrt = 0



  throw new NotImplementedError('sqrt')

  return `The square root of ${a} after ${n} iterations of Newton's Method is ${approxSqrt}`
}


// We'll go over how this works in a later session.
export default {
  name: 'sqrt',
  match: /^(\d+)$/,
  paramTypes: ['number'],
  handler: sqrt,
  usage: 'sqrt [integer]'
}
