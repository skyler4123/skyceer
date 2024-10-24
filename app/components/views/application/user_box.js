import { v4 as uuidv4 } from "uuid"
import { Box, Link, Popover, Text } from "../../../javascript/controllers/components"

export const userBox = () => {
  const eventId = uuidv4()
  return (
    box({klass: 'relative flex justify-center items-center', event: {id: eventId, listener: 'hover', action: 'toggle'}}, () => {
      return [
        link({url: '/users/profile'}, () => {
          return text({type: ['cookie', 'email']})
        }),
        popover({klass: 'hidden', position: ['outside', 'bottomCenter'], event: {id: eventId}}, () => {
          return (
            `<div>
              <div>${Link({url: '/users/profile', label: 'Profile'})}</div>
              <div>${Link({url: '/sign_out', label: 'Sign Out'})}</div>
            </div>`
          )
        })
      ].join('')
    })
  )
}
