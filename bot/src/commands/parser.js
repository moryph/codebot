// Converts the params from strings to appropriate types
export const parseTypes = async (params, types) => {
  const parsedParams = []
  for (let i = 0; i < params.length; i++) {
    switch(types[i]) {
      case 'number':
        parsedParams.push(Number(params[i]))
        break
      case 'string':
        parsedParams.push(params[i])
    }
  }
  return parsedParams
}
