import { Link, Text } from "../../../javascript/controllers/components"
import { Application_Logo } from "./logo"


export const footer = () => {
  return `
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row">
        ${Application_Logo()}
      </div>
      <div class="flex flex-row">
        <div>© 2024 saaslit™. All Rights Reserved.</div>
        <div>${Text({type: 'time'})}</div>
      </div>
      <div class="flex flex-row">
        <div>
          ${Link({label: 'Home', url: 'https://saaslit.com/blog'})}
        </div>
        <div>
          ${Link({label: 'Contact', url: 'https://saaslit.com/blog'})}
        </div>
        <div>
          ${Link({label: 'About', url: 'https://saaslit.com/blog'})}
        </div>
      </div>
    </div>
  `
}