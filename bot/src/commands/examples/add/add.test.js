import add from './index'

function formatOutput (num1, num2, sum) {
  return `${num1} + ${num2} = ${sum}`
}

test('Greet Test', async () => {
  expect(await add.handler(1, 1)).toEqual(formatOutput(1, 1, 2))
  expect(await add.handler(10, -10)).toEqual(formatOutput(10, -10, 0))
  expect(await add.handler(313, 291)).toEqual(formatOutput(313, 291, 604))
  expect(await add.handler(1.5, 3.4)).toEqual(formatOutput(1.5, 3.4, 4.9))
  expect(await add.handler(90, 90)).toEqual(formatOutput(90, 90, 180))
})
