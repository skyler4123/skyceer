import { v4 as uuidv4 } from "uuid"
import { Box, Link, Popover, Text } from "../../../javascript/controllers/components"

export const userBox = () => {
  const eventId = uuidv4()
  return (
    Box({klass: 'relative flex justify-center items-center', event: {id: eventId, listener: 'hover', action: 'toggle'}}, () => {
      return [
        Link({url: '/users/profile'}, () => {
          return Text({type: ['cookie', 'email']})
        }),
        Popover({klass: 'hidden', position: ['outside', 'bottomCenter'], event: {id: eventId}}, () => {
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
