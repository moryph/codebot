import ex2 from '../exercises/ex2'


test('Q1', () => {
  expect(ex2.q1()).toEqual(3)
})


test('Q2', () => {
  const results = ex2.q2()
  expect(results.color).toEqual('blue')
  expect(results.counter).toEqual(80)
  expect(results.cost).toEqual(21.55)
  expect(results.nothing).toEqual(null)
  expect(results.answer).toEqual(true)
})
