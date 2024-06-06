import { button, icon, tab } from "../../../javascript/controllers/components"

export const uiDarkmodeButton = () => {
  return (
    button({klass: 'w-10 h-10', action: {listener: 'click', action: 'darkMode'}}, () => (
      tab({klass: 'w-full h-full', action: {listener: 'click', action: 'tabNext'}}, () => (
        `
          <div>${icon({variant: ['outline', 'moon']})}</div>
          <div>${icon({variant: ['outline', 'sun']})}</div>
        `
      ))
    ))
  )
}