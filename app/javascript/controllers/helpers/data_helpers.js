import { v4 as uuidv4 } from "uuid"

const DataHelpers = {
  normalizeParamsValue(object) {
    let params = object
    params = this.camelCaseForObjectKey(params)

    if (params.controller) {
      params.controllers ||= [params.controller]
      delete(params.controller)
    }
    
    if (params.action) {
      params.actions ||= [params.action]
      delete(params.action)
    }
    if (params.actions) {
      params.actions = params.actions.map((action) => {
        action = this.camelCaseForObjectKeyAndValue(action)
        return action
      })
    }
    if (params.eventId) {
      params.event = { id: params.eventId }
      delete(params.eventId)
    }
    if (params.event) {
      params.events ||= [params.event]
      delete(params.event)
    }
    if (params.dispatcher) {
      params.dispatchers ||= [params.dispatcher]
      delete(params.dispatcher)
    }
    if (params.dispatchers) {
      params.dispatchers = params.dispatchers.map((dispatcher) => {
        dispatcher = this.camelCaseForObjectKeyAndValue(dispatcher, 'id')
        return dispatcher
      })
    }
    if (params.receiver) {
      params.receivers ||= [params.receiver]
      delete(params.receiver)
    }
    if (params.events) {
      params.events = params.events.map((event) => {
        event = this.camelCaseForObjectKeyAndValue(event, 'id')
        return event
      })
    }
    if (params.variant) {
      if (this.isString(params.variant)) {
        params.variant = this.toCamelCase(params.variant)
      }
      if (this.isArray(params.variant)) {
        params.variant = this.camelCaseForArray(params.variant)
      }
    }
    if (params.position) {
      if (this.isString(params.position)) {
        params.position = this.toCamelCase(params.position)
      }
      if (this.isArray(params.position)) {
        params.position = this.camelCaseForArray(params.position)
      }
    }
    if (params.positionType) {
      params.positionType = this.toCamelCase(params.positionType)
    }
    if (params.type) {
      if (this.isString(params.type)) {
        params.type = this.toCamelCase(params.type)
      }
    }

    if (params.data) {
      if (!this.isArray(params.data)) {
        params.data = [params.data]
      }
      // params.data = this.kebabCaseForObjectKey(params.data)
      // params.data = this.camelCaseForObjectValue(params.data)
    }

    return params
  },
  
  changeObjectKey(object, oldKey, newKey) {
    object[newKey] = object[oldKey]
    delete(object[oldKey])
    return object
  },
  
  kebabCaseForObjectKey(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if ((except !== undefined && except.includes(key)) || key.includes('--')) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [this.toKebabCase(key)]: object[key]
      }
    }, {})
    return objectResult
  },

  snakeCaseForObjectKey(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if (except !== undefined && except.includes(key)) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [this.toSnakeCase(key)]: object[key]
      }
    }, {})
    return objectResult
  },
  
  snakeCaseForObjectKeyAndValue(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if (except !== undefined && except.includes(key)) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [this.toSnakeCase(key)]: this.toSnakeCase(object[key])
      }
    }, {})
    return objectResult
  },
  
  camelCaseForObjectKey(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if (except !== undefined && except.includes(key)) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [this.toCamelCase(key)]: object[key]
      }
    }, {})
    return objectResult
  },
  
  camelCaseForObjectValue(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if (except !== undefined && except.includes(key)) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [key]: this.toCamelCase(object[key])
      }
    }, {})
    return objectResult
  },

  camelCaseForObjectKeyAndValue(object, except) {
    let objectResult = Object.keys(object).reduce((result, key) => {
      if (except !== undefined && except.includes(key)) {
        return {
          ...result,
          [key]: object[key]
        }
      }
      return {
      ...result,
      [this.toCamelCase(key)]: this.toCamelCase(object[key])
      }
    }, {})
    return objectResult
  },
  
  camelCaseForArray(array, exceptIndex) {
    let result = array.reduce((result, key, currentIndex) => {
      if (exceptIndex !== undefined && exceptIndex === currentIndex) {
        return [...result, key]
      } else {
        return [...result, this.toCamelCase(key)]
      }
    }, [])
  
    return result
  },
  
  snakeCaseForArray(array, exceptIndex) {
    let result = array.reduce((result, key, currentIndex) => {
      if (exceptIndex !== undefined && exceptIndex === currentIndex) {
        return [...result, key]
      } else {
        return [...result, this.toSnakeCase(key)]
      }
    }, [])
  
    return result
  },
  
  deleteObjectKey(object, condition) {
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
  },
  
  objectOnlyKeys(object, keys) {
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
  },

  selectFromObjectByKeys(object, keys) {
    return this.objectOnlyKeys(object, keys)
  },

  selectFromObjectArrayByKeys(array, keys) {
    let result = array.reduce((result, element, currentIndex) => {
      return [...result, this.selectFromObjectByKeys(element, keys)]
    }, [])
    return result
  },

  findElementFromObjectArrayByObject(objectArray, object) {
    const result = objectArray.find((element) => element[this.getFirstKeyFromObject(object)] === object[this.getFirstKeyFromObject(object)]);
    return result
  },

  isObject(x) {
    return typeof x === 'object' && !Array.isArray(x) && x !== null
  },
  
  isObjectEmpty(object) {
    return Object.keys(object) === 0
  },
  
  isString(x) {
    return (typeof x === 'string' || x instanceof String)
  },
  
  isDefined(x) {
    return typeof x !== 'undefined'  
  },
  
  isUndefined(x) {
    return typeof x === 'undefined'  
  },
  
  getKeyEndWith(object, string) {
    return Object.keys(object).filter((key) => key.endsWith(string))
  },
  
  isArrayHasNull(array) {
    return array.includes(null)
  },
  
  isArraytNull(array) {
    return array.every((element) => element === null)
  },
  
  isObjectHasNull(object) {
    return this.isArrayHasNull(Object.values(object))
  },
  
  isObjectNull(object) {
    return this.isArraytNull(Object.values(object))
  },
  
  isArray(x) {
    return Array.isArray(x)
  },
  
  getChildObjectByKeys(object, keys) {
    let value = object
    let digArray = [keys].flat()
    digArray.forEach((key) => {
      value = value[key]
    })
    return value
  },
  
  sortNumberArray(array) {
    return array.sort((a, b) => (a - b));
  },
  
  sortReverseNumberArray(array) {
    return this.sortNumberArray(array).reverse()
  },
  
  toCamelCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    const s =
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
  },
  
  toCamelCaseForArray(array) {
    return array.map(element => {
      return this.toCamelCase(element)
    })
  },

  toPascalCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  },
  
  toPascalCaseForArray(array) {
    return array.map(element => {
      return this.toPascalCase(element)
    })
  },

  toKebabCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    return str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
  },

  toKebabCaseForArray(array) {
    return array.map(element => {
      return this.toKebabCase(element)
    })
  },

  toSnakeCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    return str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
  },
  
  toSnakeCaseForArray(array) {
    return array.map(element => {
      return this.toSnakeCase(element)
    })
  },

  toTitleCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
      .join(' ');
  
  },
  
  toSentenceCase(str) {
    if (this.isNumberOrNumberString(str)) { return str }
    const s =
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .join(' ');
    return s.slice(0, 1).toUpperCase() + s.slice(1);
  },
  
  convertCase(str, toCase = 'camel') {
    if (!str) return '';
    if (this.isNumberOrNumberString(str)) { return str }
  
    const delimiter =
      toCase === 'snake'
        ? '_'
        : toCase === 'kebab'
          ? '-'
          : ['title', 'sentence'].includes(toCase)
            ? ' '
            : '';
  
    const transform = ['camel', 'pascal'].includes(toCase)
      ? x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()
      : ['snake', 'kebab'].includes(toCase)
        ? x => x.toLowerCase()
        : toCase === 'title'
          ? x => x.slice(0, 1).toUpperCase() + x.slice(1)
          : x => x;
  
    const finalTransform =
      toCase === 'camel'
        ? x => x.slice(0, 1).toLowerCase() + x.slice(1)
        : toCase === 'sentence'
          ? x => x.slice(0, 1).toUpperCase() + x.slice(1)
          : x => x;
  
    const words = str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    );
  
    return finalTransform(words.map(transform).join(delimiter));
  },
  
  isNumber(x) {
    return typeof x === "number"
  },
  
  isNumberString(x) {
    return !isNaN(x)
  },
  
  isNumberOrNumberString(x) {
    return this.isNumber(x) || this.isNumberString(x)
  },

  dig({object, digArray}) {
    return this.getChildObjectByKeys(object, digArray)
  },

  pluck({object, key}) {
    return object.map(x => x[key])
  },

  getFirstKeyFromObject(object) {
    return Object.keys(object)[0]
  },
  
  getLastKeyFromObject(object) {
    return Object.keys(object)[Object.keys(object).length]
  },

  range({from = 0, to = 10, step = 1} = {}) {
    return Array.from({length: to}, (_, v) => v + (from))
  },

  sortAndGetNewIndex(array, direction = 'asc') {
    if (!this.isArray(array)) { return }

    let sortFunction = () => {}
    if (direction.toLowerCase() === 'asc') {
      sortFunction = (a, b) => a - b
    } else {
      sortFunction = (a, b) => b - a
    }
    let newArray = [...array]
    newArray.sort(sortFunction)
    let newIndex = newArray.map(element => array.indexOf(element))
    return [newArray, newIndex]
  },

  onlyUniqueArray(value, index, array) {
    return array.indexOf(value) === index;
  },

  unique(array) {
    return array.filter(this.onlyUniqueArray)
  },

  difference(array1, array2) {
    let result = {}
    result["add"] = array1.filter((item) => !array2.includes(item));
    result["subtract"] = array2.filter((item) => !array1.includes(item));
    return result
  },

  removeFromArray({array, item = undefined, index = undefined} = {}) {
    if (this.isDefined(item)) {
      const index = array.indexOf(item);
      if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
      }
      return array
    } else if (this.isDefined(index)) {
      if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
      }
      return array
    }
  },

  isEmpty(x) {
    if (this.isObject(x)) { return this.isObjectNull(x) }
    if (this.isArray(x)) { return x.length === 0 }
    if (this.isString(x)) { return x === "" }
    if (this.isNumber(x)) { return false }
  },

  newUUID() {
    if (this.protocol() === 'https') {
      return crypto.randomUUID()
    } else {
      return uuidv4()
    }
  }

}



export default DataHelpers;