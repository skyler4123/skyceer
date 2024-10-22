import { Button, Icon, Tab } from "../../../javascript/controllers/components"

export const darkmodeButton = () => {
  return (
    button({klass: 'w-10 h-10', action: {listener: 'click', action: 'darkMode'}}, () => (
      tab({klass: 'flex justify-center items-center w-full h-full', action: {listener: 'click', action: 'tabNext'}}, () => (
        `
          <div>${Icon({variant: ['outline', 'moon']})}</div>
          <div>${Icon({variant: ['outline', 'sun']})}</div>
        `
      ))
    ))
  )
}