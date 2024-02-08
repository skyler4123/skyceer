export const camelizeOptionsValue = (optionsObject) => {
  let options = optionsObject
  options = Object.keys(options).reduce((result, key) => ({
    ...result,
    [toCamelCase(key)]: options[key]
  }), {})
  if (options.actions) {
    options.actions = options.actions.map((action) => {
      return Object.keys(action).reduce((result, key) => ({
        ...result,
        [toCamelCase(key)]: toCamelCase(action[key])
      }), {})
    })
  }
  if (options.events) {
    options.events = options.events.map((event) => {
      return Object.keys(event).reduce((result, key) => {
        if (key === 'id') {
          return {
            ...result,
            [toCamelCase(key)]: event[key]
          }
        }
        return {
          ...result,
          [toCamelCase(key)]: toCamelCase(event[key])
        }
      }, {})
    })
  }
  if (options.position) {
    options.position = toCamelCase(options.position)
  }
  if (options.type) {
    options.type = toCamelCase(options.type)
  }
  return options
}

export const toCamelCase = (string) => {
  if (typeof string === 'string' || string instanceof String) {
    return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  } else {
    return string
  }
}

export const toSnakeCase = (string) => {
  return string.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

export const snakeCaseForObjectKey = (object) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    return {
    ...result,
    [toSnakeCase(key)]: object[key]
    }
  }, {})
  return objectResult
}