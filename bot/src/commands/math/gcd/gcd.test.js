import gcd from './index'

function formatOutput (num1, num2, gcd) {
  return `The GCD of ${num1} and ${num2} is equal to ${gcd}.`
}

test('Simple GCD Test', () => {
  expect(gcd.handler(5, 7)).toEqual(formatOutput(5, 7, 1))
  expect(gcd.handler(4, 8)).toEqual(formatOutput(4, 8, 4))
  expect(gcd.handler(16, 12)).toEqual(formatOutput(16, 12, 4))
  expect(gcd.handler(51, 29)).toEqual(formatOutput(29, 51, 1))
  expect(gcd.handler(1, 150)).toEqual(formatOutput(1, 150, 1))
})

test('Large Numbers Test', () => {
  expect(gcd.handler(58932,12453)).toEqual(formatOutput(58932,12453, 3))
  expect(gcd.handler(91784,21928)).toEqual(formatOutput(91784,21928, 8))
  expect(gcd.handler(91784,21923)).toEqual(formatOutput(91784,21923, 11))
  expect(gcd.handler(91780,21920)).toEqual(formatOutput(91780,21920, 20))
  expect(gcd.handler(91784,21921)).toEqual(formatOutput(91784,21921, 1))
})
