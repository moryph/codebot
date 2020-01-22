import ex3 from '../exercises/ex3'

test('Q1', () => {
  const testCases = [[5, 2], [394, 23], [84, 12], [583, 20], [194, 32]]
  for (const test of testCases) {
    const results = ex3.q1(test[0], test[1])
    expect(results.sum).toEqual(test[0] + test[1])
    expect(results.product).toEqual(test[0] * test[1])
    expect(results.difference).toEqual(test[0] - test[1])
    expect(results.quotient).toEqual(test[0] / test[1])
    expect(results.modulus).toEqual(test[0] % test[1])
  }
})

test('Q2', () => {
  const testCases = [['Hello', 'World'], ['Goodbye', 'Terra'], ['Extra', 'Extra2']]
  for (const test of testCases) {
    const results = ex3.q2(test[0], test[1])
    expect(results.joined).toEqual(test[0] + test[1])
    expect(results.csv).toEqual(test[0] + ',' + test[1])
    expect(results.reversed).toEqual(test[1] + test[0])
  }
})

test('Q3', () => {
  const testCases = [['str', 12], [true, 'str'], ['a', 'a'], [null, 'str'], ['33', 33]]

  for (const test of testCases) {
    const results = ex3.q3(test[0], test[1])
    expect(results.equal).toEqual((test[0] == test[1]))
    expect(results.strictEqual).toEqual((test[0] === test[1]))
    expect(results.stringified).toEqual('' + test[0] + test[1])
    expect(results.bool).toEqual(!!test[0])
  }
  
})
