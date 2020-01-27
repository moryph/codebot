export class NotImplementedError extends Error {
  constructor(component) {
    super(`Not Implemented - ${component}`)
    this.name = 'NotImplementedError'
  }
}
