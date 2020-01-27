export class NotImplementedError extends Error {
  name = 'NotImplementedError'
  constructor(component) {
    super(`Not Implemented: ${component}`)
  }
}
