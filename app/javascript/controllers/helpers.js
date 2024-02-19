export const camelizeOptionsValue = (object) => {
  let options = object
  options = camelCaseForObjectKey(options)

  if (options.actions) {
    options.actions = options.actions.map((action) => {
      action = camelCaseForObjectKeyAndValue(action)
      return action
    })
  }
  if (options.events) {
    options.events = options.events.map((event) => {
      event = camelCaseForObjectKeyAndValue(event, 'id')
      return event
    })
  }
  if (options.position) {
    options.position = toCamelCase(options.position)
  }
  if (options.positionType) {
    options.positionType = toCamelCase(options.positionType)
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

export const changeObjectKey = (object, oldKey, newKey) => {
  object[newKey] = object[oldKey]
  delete(object[oldKey])
  return object
}

export const snakeCaseForObjectKey = (object, except) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    if (except !== undefined && except.includes(key)) {
      return {
        ...result,
        [key]: object[key]
      }
    }
    return {
    ...result,
    [toSnakeCase(key)]: object[key]
    }
  }, {})
  return objectResult
}

export const snakeCaseForObjectKeyAndValue = (object, except) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    if (except !== undefined && except.includes(key)) {
      return {
        ...result,
        [key]: object[key]
      }
    }
    return {
    ...result,
    [toSnakeCase(key)]: toSnakeCase(object[key])
    }
  }, {})
  return objectResult
}

export const camelCaseForObjectKey = (object, except) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    if (except !== undefined && except.includes(key)) {
      return {
        ...result,
        [key]: object[key]
      }
    }
    return {
    ...result,
    [toCamelCase(key)]: object[key]
    }
  }, {})
  return objectResult
}

export const camelCaseForObjectKeyAndValue = (object, except) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    if (except !== undefined && except.includes(key)) {
      return {
        ...result,
        [key]: object[key]
      }
    }
    return {
    ...result,
    [toCamelCase(key)]: toCamelCase(object[key])
    }
  }, {})
  return objectResult
}

export const deleteObjectKey = (object, condition) => {
  let newObject = object
  newObject = Object.keys(newObject).reduce((result, key) => {
    if (object[key] === condition) {
      return {
        ...result
      }
    } else {
      return {
        ...result,
        [key]: newObject[key]
      }
    }
  }, {})
  return newObject
}

export const objectOnlyKeys = (object, keys) => {
  let newObject = object
  newObject = Object.keys(newObject).reduce((result, key) => {
    if (keys.includes(key)) {
      return {
        ...result,
        [key]: object[key]
      }
    } else {
      return {
        ...result
      }
    }
  }, {})
  return newObject
}