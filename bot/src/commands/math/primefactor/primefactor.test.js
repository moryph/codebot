import primefactor from './index'

function formatOutput (n, primeFactors) {
  return `The prime factorization of ${num} is ${primefactors}.`
}

test('Prime Factor Test', async () => {
  expect(await primefactor.handler(231)).toEqual(formatOutput(231, [3, 7, 11]))
  expect(await primefactor.handler(1428)).toEqual(formatOutput(1428, [2, 2, 3, 7, 17]))
  expect(await primefactor.handler(98)).toEqual(formatOutput(98, [2, 7, 7]))
  expect(await primefactor.handler(81)).toEqual(formatOutput(81, [3, 3, 3, 3]))
  expect(await primefactor.handler(2)).toEqual(formatOutput(2, [2]))
})
