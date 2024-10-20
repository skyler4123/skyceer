import { Tab } from "../../../javascript/controllers/components"


export const languageButton = () => {
  return tab({action: {listener: 'click', action: 'tabNext'}, klass: 'flex justify-center items-center cursor-pointer'}, () => {
    return `
      <div data-action="click->language#translate" data-language-language-param="vietnamese">EN</div>
      <div data-action="click->language#translate" data-language-language-param="english">VN</div>
    `
  })
}