
async function greet(name) {
  return `Hello, ${name}!`
}


// We'll go over how this works in a later session.
export default {
  name: 'greet',
  match: /^([^\s]+)$/,
  handler: greet,
  paramTypes: ['string'],
  usage: 'greet [name]'
}
