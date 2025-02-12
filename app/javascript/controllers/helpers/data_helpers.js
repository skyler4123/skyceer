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

export const isArraytNull = (array) => {
  return array.every((element) => element === null)
}

export const isObjectNull = (object) => {
  return isArraytNull(Object.values(object))
}

export const isArray = (x) => {
  return Array.isArray(x)
}

export const onlyUniqueArray = (value, index, array) => {
  return array.indexOf(value) === index;
}

export const unique = (array) => {
  return array.filter(onlyUniqueArray)
}

export const difference = (array1, array2) => {
  let result = {}
  result["add"] = array1.filter((item) => !array2.includes(item));
  result["subtract"] = array2.filter((item) => !array1.includes(item));
  return result
}

export const isNumber = (x) => {
  return typeof x === "number"
}

export const isNumberString = (x) => {
  return !isNaN(x)
}

export const isNumberOrNumberString = (x) => {
  return isNumber(x) || isNumberString(x)
}

export const pluck = (object, key) => {
  return object.map(x => x[key])
}

export const minTime = (times) => {
  const minTime = times.reduce((min, current) => {
    return current < min ? current : min;
  }, times[0]);
  return minTime
}

export const maxTime = (times) => {
  const maxTime = times.reduce((max, current) => {
    return current > max ? current : max;
  }, times[0]);
  return maxTime
}

export const randomID = () => {
  return Math.random().toString(36).substr(2, 9);
}

export const isEmpty = (x) => {
  if (isObject(x)) { return isObjectNull(x) }
  if (isArray(x)) { return x.length === 0 }
  if (isString(x)) { return x === "" }
  if (isNumber(x)) { return false }
  return true
}

export const transferToValue = (value) => {
  let newValue = JSON.stringify(value).replace(/"/g, '&quot;')
  return newValue
}

export const identifier = (controller) => {
  let identifier
  identifier = controller.name
  identifier = identifier.replace('Controller', '')
  identifier = identifier.replaceAll('_', 'NAMESPACE')
  identifier = identifier
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('-');
  identifier = identifier.replaceAll('namespace', '')
  return identifier
}

export const isBoolean = (x) => {
  return typeof x === 'boolean'
}

export const isBooleanString = (x) => {
  return x === 'true' || x === 'false'
}

export const csrfToken = () => {
  const csrf = document.querySelector('meta[name="csrf-token"]')
  return csrf.content
}

// findBy with a key value pair for array of objects
export const findBy = (array, key, value) => {
  return array.find(object => object[key] === value)
}





// COOKIE

// // get Cookie object
export const Cookies = (name) => {
  let cookie = {}
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = decodeURIComponent(v);
  })
  if (name) {
    return cookie[name]
  } else {
    return cookie
  }
}

// set Cookie object
export const setCookie = (name, value, days) => {
  let expires = ""
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + (days*24*60*60*1000))
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + value + expires + "; path=/"
}

// check isSignedIn by check email in cookie
export const isSignedIn = () => {
  return Cookies('email').length > 0
}