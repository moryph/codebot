import sqrt from './index'

function formatOutput (a, n, approxSqrt) {
  return `The square root of ${a} after ${n} iterations of Newton's Method is ${approxSqrt}`
}

test('Square Root Test', async () => {
  expect(await sqrt.handler(25, 7)).toEqual(formatOutput(25, 7, 5))
  expect(await sqrt.handler(37, 10)).toEqual(formatOutput(37, 10, 6.08276253029822))
  expect(await sqrt.handler(16, 9)).toEqual(formatOutput(16, 7, 4))
  expect(await sqrt.handler(2, 5)).toEqual(formatOutput(2, 5, 1.414213562373095))
  expect(await sqrt.handler(125, 4)).toEqual(formatOutput(125, 4, 12.524604842510673))
})
