import ex5 from '../exercises/ex5'

test('Q1', () => {
  const testCases = [1, -50, 10, 1000, -1048, 0, -3]
  const expected = [0.5, 1, 3, 500, 1, 2, 1]
  for (const [idx, test] of testCases.entries()) {
    const result = ex5.q1(test)
    expect(result).toEqual(expected[idx])
  }
})

test('Q2', () => {
  const input = [2, 3, 1, 4, 2, 1, 10, 5, 234, 135, 39, 1, 67, 49, 392, 20, 18, 52, 64 , 75, 35, 25]
  let subsetSum = 0
  for (let x = 0; x < 10; x++) {
    subsetSum += input[x]
  }
  let fullSum = 0
  for (const y of input) {
    fullSum += y
  }
  const result = ex5.q2(input)

  expect(result.subsetSum).toEqual(subsetSum)
  expect(result.fullSum).toEqual(fullSum)
})

test('Q3', () => {
  const testCases = [1, 10, 489072, 3918, -3, 4218, 582, 193, 432, 194, -1000]
  for (const test of testCases) {
    let counter = 0
      let val = test
      while (val > 0) {
          counter++
          val = (val / 2) - 1
      }
    expect(ex5.q3(test)).toEqual(counter)
  }
})
