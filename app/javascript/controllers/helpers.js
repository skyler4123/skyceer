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
  if (options.variant) {
    if (isString(options.variant)) {
      options.variant = toCamelCase(options.variant)
    }
    if (isArray(options.variant)) {
      options.variant = camelCaseForArray(options.variant)
    }
  }
  if (options.position) {
    if (isString(options.position)) {
      options.position = toCamelCase(options.position)
    }
    if (isArray(options.position)) {
      options.position = camelCaseForArray(options.position)
    }
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

export const camelCaseForArray = (array, exceptIndex) => {
  let result = array.reduce((result, key, currentIndex) => {
    if (exceptIndex !== undefined && exceptIndex === currentIndex) {
      return [...result, key]
    } else {
      return [...result, toCamelCase(key)]
    }
  }, [])

  return result
}

export const snakeCaseForArray = (array, exceptIndex) => {
  let result = array.reduce((result, key, currentIndex) => {
    if (exceptIndex !== undefined && exceptIndex === currentIndex) {
      return [...result, key]
    } else {
      return [...result, toSnakeCase(key)]
    }
  }, [])

  return result
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

export const isObject = (x) => {
  return typeof x === 'object' && !Array.isArray(x) && x !== null
}

export const isObjectEmpty = (object) => {
  return Object.keys(object) === 0
}

export const isString = (x) => {
  return (typeof x === 'string' || x instanceof String)
}

export const isDefined = (x) => {
  return typeof x !== 'undefined'  
}

export const isUndefined = (x) => {
  return typeof x === 'undefined'  
}

export const getKeyEndWith = (object, string) => {
  return Object.keys(object).filter((key) => key.endsWith(string))
}

export const isArrayHasNull = (array) => {
  return array.includes(null)
}

export const isArraytNull = (array) => {
  return array.every((element) => element === null)
}

export const isObjectHasNull = (object) => {
  return this.isArrayHasNull(Object.values(object))
}

export const isObjectNull = (object) => {
  return this.isArraytNull(Object.values(object))
}

export const isArray = (x) => {
  return Array.isArray(x)
}

export const getChildObjectByKeys = (object, keys) => {
  let value = object
  keys.forEach((key) => {
    value = value[key]
  })
  return value
}

export const sortNumberArray = (array) => {
  return array.sort((a, b) => (a - b));
}

export const sortReverseNumberArray = (array) => {
  return sortNumberArray(array).reverse()
}