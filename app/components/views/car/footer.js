import { link, text } from "../../../javascript/controllers/components"
import { logo } from "./logo"

export const footer = () => {
  return `
    <hr class="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    <div class="flex flex-row justify-between">
      <div class="flex flex-row">
        ${logo()}
      </div>
      <div class="flex flex-row">
        <div>© 2024 saaslit™. All Rights Reserved.</div>
        <div>${text({type: 'time'})}</div>
      </div>
      <div class="flex flex-row">
        <div>
          ${link({label: 'Home', url: 'https://saaslit.com/blog'})}
        </div>
        <div>
          ${link({label: 'Contact', url: 'https://saaslit.com/blog'})}
        </div>
        <div>
          ${link({label: 'About', url: 'https://saaslit.com/blog'})}
        </div>
      </div>
    </div>
  `
}