
import { link } from "../../../javascript/controllers/components"
import { languageButton } from "../language_button"
import { uiDarkmodeButton } from "../ui/darkmode_button"
import { uiUserBox } from "../ui/user_box"
import { logo } from "./logo"

export const header = () => {
  return `
    <div class="flex flex-row justify-between items-center w-full h-full py-5 px-10">
      <div class="flex flex-row">
        ${logo()}
      </div>
      <div class="flex flex-row gap-x-4">
        <div>${link({label: 'Find Your Car', url: '/car_cars', data: {'language-target': 'text'}})}</div>
        <div>${link({label: 'Post Your Car', url: '/car_cars/new', data: {'language-target': 'text'}})}</div>
        <div>${link({label: 'News', url: '/car_news/new', data: {'language-target': 'text'}})}</div>
      </div>
      <div class="flex flex-row gap-x-2">
        ${languageButton()}
        ${uiDarkmodeButton()}
        ${uiUserBox()}
      </div>
    </div>
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700"></hr>
  `
}