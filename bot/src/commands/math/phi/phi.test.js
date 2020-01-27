import phi from './index'

function formatOutput (n, phiApprox) {
  return `The approximate value of phi given terms ${n} and ${n + 1} of the Fibonacci sequence is ${phiApprox}`
}

test('GCD Test', async () => {
  expect(await phi.handler(0)).toEqual(formatOutput(0, 1))
  expect(await phi.handler(1)).toEqual(formatOutput(1, 2))
  expect(await phi.handler(5)).toEqual(formatOutput(5, 13/8))
  expect(await phi.handler(10)).toEqual(formatOutput(10, 144/89))
  expect(await phi.handler(15)).toEqual(formatOutput(15, 987/610))
})
