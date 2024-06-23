import { button, icon, tab } from "../../../javascript/controllers/components"

export const darkmodeButton = () => {
  return (
    button({klass: 'w-10 h-10', action: {listener: 'click', action: 'darkMode'}}, () => (
      tab({klass: 'flex justify-center items-center w-full h-full', action: {listener: 'click', action: 'tabNext'}}, () => (
        `
          <div>${icon({variant: ['outline', 'moon']})}</div>
          <div>${icon({variant: ['outline', 'sun']})}</div>
        `
      ))
    ))
  )
}