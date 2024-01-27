export const Camelize = (optionsObject) => {
  const camelizeObject = () => {
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
    return options
  }
  const camelize = (str) => {
    if (typeof str === 'string' || str instanceof String) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    } else {
      return str
    }
  }

  return camelizeObject()
}

