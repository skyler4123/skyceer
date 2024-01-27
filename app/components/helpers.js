export const Camelize = (optionsObject) => {
  const camalizeObject = () => {
    let options = optionsObject
    options = Object.keys(options).reduce((result, key) => ({
      ...result,
      [camalize(key)]: options[key]
    }), {})
    if (options.actions) {
      options.actions = options.actions.map((action) => {
        return Object.keys(action).reduce((result, key) => ({
          ...result,
          [camalize(key)]: camalize(action[key])
        }), {})
      })
    }
    if (options.events) {
      options.events = options.events.map((event) => {
        return Object.keys(event).reduce((result, key) => {
          if (key === 'id') {
            return {
              ...result,
              [camalize(key)]: event[key]
            }
          }
          return {
            ...result,
            [camalize(key)]: camalize(event[key])
          }
        }, {})
      })
    }
    if (options.position) {
      options.position = camalize(options.position)
    }
    return options
  }
  const camalize = (str) => {
    if (typeof str === 'string' || str instanceof String) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    } else {
      return str
    }
  }

  return camalizeObject()
}

