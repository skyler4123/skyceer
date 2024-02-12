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



  // if (options.calendarSchedules) {
  //   options.calendarSchedules = options.calendarSchedules.map((schedule) => {
  //     return Object.keys(schedule).reduce((result, key) => {
  //       if (key === 'id') {
  //         return {
  //           ...result
  //         }
  //       }
  //       return {
  //         ...result,
  //         [toCamelCase(key)]: schedule[key]
  //       }
  //     }, {})
  //   })
  // }
  // if (options.calendarEvents) {
  //   options.calendarEvents = options.calendarEvents.map((event) => {
  //     const newEvent = Object.keys(event).reduce((result, key) => {
  //       if (key === 'id') {
  //         return {
  //           ...result
  //         }
  //       }
  //       return {
  //         ...result,
  //         [toCamelCase(key)]: event[key]
  //       }
  //     }, {})
  //     return changeObjectKey(newEvent, 'calendarScheduleId', 'calendarId')
  //   })
  // }





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

export const snakeCaseForObjectKey = (object) => {
  let objectResult = Object.keys(object).reduce((result, key) => {
    return {
    ...result,
    [toSnakeCase(key)]: object[key]
    }
  }, {})
  return objectResult
}