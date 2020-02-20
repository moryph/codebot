import ex6 from '../exercises/ex6'

test('Q1', () => {
  const func = jest.fn((a, b) => a + b)
  const result = ex6.q1(func)
  expect(func.mock.calls.length).toBe(3)
  expect(func.mock.calls[1][0]).toEqual('str')
  expect(func.mock.calls[1][1]).toEqual(2)
  expect(func.mock.calls[1][2]).toEqual(true)
  expect(func.mock.calls[2][0]).toEqual(2)
  expect(func.mock.calls[2][1]).toEqual(3)
  expect(result).toEqual(5)
})

test('Q2', () => {
  const results = ex6.q2()
  expect(results.randomNumber()).toEqual(4)
  expect(results.adder(1, 2)).toEqual(3)
  expect(results.adder(3, 4)).toEqual(7)
  expect(results.adder(-5, 2)).toEqual(-3)
  expect(results.normalizer(-100)).toEqual(-1)
  expect(results.normalizer(0)).toEqual(0)
  expect(results.normalizer(100)).toEqual(1)
})
