import { NotImplementedError } from '../../errors'
/**
 * Function quadraticresidue - Calculate the list of quadratic residues modulo a given value
 *
 * Quadratic residues are important values within the field of modular arithmetic. They are calculated the following way:
 *
 * Two values x and y are said to be "congruent mod p" if x mod p = y mod p. A quadratic residue q is a non-zero value
 * that is congruent to a perfect square. That is, there exists some integer x such that x^2 mod p = q mod p.
 *
 * Though in theory, all x values will need to be checked, in practice, x can only belong in the interval 0 < x <= floor(p/2),
 * therefore only these values will need to be checked. q can only belong to 0 < q < p. 1 is a quadratic residue of all numbers
 * since 1^2 mod p = 1 mod p for any p value > 1. If p is 1, 0 is technically the only quadratic residue. In such a case,
 * you can choose to specifically only return 0, or not return anything at all.
 *
 * Given a p value, provide an array of q values, stored in variable residues.
 *
 * @param p - The given p value
 * @return {response} - A formatted string response
 */
async function quadraticresidue(p) {
  let residues = []

  throw new NotImplementedError('quadraticresidue')

  return `The residues of ${p} are ${residues}`
}


// We'll go over how this works in a later session.
export default {
  name: 'quadraticresidue',
  match: /^(\d+)$/,
  paramTypes: ['number'],
  handler: quadraticresidue,
  usage: 'quadraticresidue [integer]'
}
