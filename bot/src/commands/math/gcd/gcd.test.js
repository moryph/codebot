import gcd from './index'

function formatOutput (num1, num2, gcd) {
  return `The GCD of ${num1} and ${num2} is equal to ${gcd}.`
}

test('GCD Test', async () => {
  expect(await gcd.handler(5, 7)).toEqual(formatOutput(5, 7, 1))
  expect(await gcd.handler(0, 5)).toEqual(formatOutput(0, 5, 5))
  expect(await gcd.handler(4, 8)).toEqual(formatOutput(4, 8, 4))
  expect(await gcd.handler(16, 12)).toEqual(formatOutput(16, 12, 4))
  expect(await gcd.handler(51, 29)).toEqual(formatOutput(29, 51, 1))
  expect(await gcd.handler(1, 150)).toEqual(formatOutput(1, 150, 1))
  expect(await gcd.handler(58932,12453)).toEqual(formatOutput(58932,12453, 3))
  expect(await gcd.handler(91784,21928)).toEqual(formatOutput(91784,21928, 8))
  expect(await gcd.handler(91784,21923)).toEqual(formatOutput(91784,21923, 11))
  expect(await gcd.handler(91780,21920)).toEqual(formatOutput(91780,21920, 20))
  expect(await gcd.handler(91784,21921)).toEqual(formatOutput(91784,21921, 1))
})
