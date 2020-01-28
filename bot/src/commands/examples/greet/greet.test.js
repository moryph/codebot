import greet from './index'

function formatOutput (name) {
  return `Hello, ${name}!`
}

test('Greet Test', async () => {
  expect(await greet.handler('me')).toEqual(formatOutput('me'))
  expect(await greet.handler('you')).toEqual(formatOutput('you'))
  expect(await greet.handler('Bob')).toEqual(formatOutput('Bob'))
  expect(await greet.handler('JOHN')).toEqual(formatOutput('JOHN'))
  expect(await greet.handler('Bill123')).toEqual(formatOutput('Bill123'))
})
