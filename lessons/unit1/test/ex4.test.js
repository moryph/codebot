import ex4 from '../exercises/ex4'

test('Q1', () => {
  const input = [2, 4, 6, 8, 10, 12, 14, 18]
  const results = ex4.q1(input)
  expect(results.firstFive).toEqual([1, 2, 3, 4, 5])
  expect(results.val).toEqual(6)
  expect(results.difference).toEqual(16)
  expect(input[2]).toEqual(7)
})

test('Q2', () => {
  const input = {
    color: 'blue',
    key: 'hi'
  }
  const inputKey = 'key'
  const results = ex4.q2(input, inputKey)
  expect(results.myObj.color).toEqual('blue')
  expect(results.myObj.val).toEqual('hi')
  expect(input).toMatchObject({ key: 'hi' })

})
