import quadraticresidue from './index'

function formatOutput (p, residues) {
  return `The residues of ${p} are ${residues}`
}

test('Quadratic Residue Test', async () => {
  expect(await quadraticresidue.handler(20)).toEqual(formatOutput(20, [1, 4, 5, 9, 16]))
  expect(await quadraticresidue.handler(18)).toEqual(formatOutput(18, [1, 4, 7, 9, 10, 13, 16]))
  expect(await quadraticresidue.handler(14)).toEqual(formatOutput(14, [1, 2, 4, 7, 8, 9, 11]))
  expect(await quadraticresidue.handler(10)).toEqual(formatOutput(10, [1, 4, 5, 6, 9]))
  expect(await quadraticresidue.handler(7)).toEqual(formatOutput(7, [1, 2, 4]))
})
