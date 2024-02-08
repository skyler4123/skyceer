export const camelizeOptionsValue = (optionsObject) => {
  let options = optionsObject
  options = Object.keys(options).reduce((result, key) => ({
    ...result,
    [camelize(key)]: options[key]
  }), {})
  if (options.actions) {
    options.actions = options.actions.map((action) => {
      return Object.keys(action).reduce((result, key) => ({
        ...result,
        [camelize(key)]: camelize(action[key])
      }), {})
    })
  }
  if (options.events) {
    options.events = options.events.map((event) => {
      return Object.keys(event).reduce((result, key) => {
        if (key === 'id') {
          return {
            ...result,
            [camelize(key)]: event[key]
          }
        }
        return {
          ...result,
          [camelize(key)]: camelize(event[key])
        }
      }, {})
    })
  }
  if (options.position) {
    options.position = camelize(options.position)
  }
  if (options.type) {
    options.type = camelize(options.type)
  }
  return options
}

export const camelize = (str) => {
  if (typeof str === 'string' || str instanceof String) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  } else {
    return str
  }
}

export const underscore = (str) => {
  let underscoreString = str.split('').reduce((result, val) => {
    if (val === val.toUpperCase()) {
        result += '_';
    }
    return result + val.toLowerCase();
  }, '');
  if (underscoreString[0] === '_') { underscoreString = underscoreString.replace(underscoreString[0], '') }
  return underscoreString
}

export const underscoreForObjectKey = (object) => {
  let objectResult = Object.keys(object).reduce((result, key) => ({
    ...result,
    [underscore(key)]: object(key)
  }))
}