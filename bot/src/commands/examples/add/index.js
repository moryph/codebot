
async function add(num1, num2) {
  const sum = num1 + num2
  return `${num1} + ${num2} = ${sum}`
}

// We'll go over how this works in a later session.
export default {
  name: 'add',
  match: /^(-?\d+\.?\d*)\s(-?\d+\.?\d*)$/,
  handler: add,
  paramTypes: ['number', 'number'],
  usage: 'add [num1] [num2]'
}
