import binomial from './index'

function formatOutput (n, k, binomialCoefficient) {
  return `${n} choose ${k} is equal to ${binomialCoefficient}.`
}

test('Binomial Test', async () => {
  expect(await binomial.handler(10, 3)).toEqual(formatOutput(10, 3, 120))
  expect(await binomial.handler(5, 3)).toEqual(formatOutput(5, 3, 10))
  expect(await binomial.handler(2, 2)).toEqual(formatOutput(2, 2, 1))
  expect(await binomial.handler(18, 5)).toEqual(formatOutput(18, 5, 8568))
  expect(await binomial.handler(9, 5)).toEqual(formatOutput(9, 5, 126))
  expect(await binomial.handler(9, 1)).toEqual(formatOutput(9, 1, 9))
})
