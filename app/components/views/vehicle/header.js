
import { link } from "../../../javascript/controllers/components"
import { darkmodeButton } from "../application/darkmode_button"
import { languageButton } from "../application/language_button"
import { userBox } from "../application/user_box"
import { Vehicle_Logo } from "./logo"

export const header = () => {
  return `
    <div class="flex flex-row justify-between items-center w-full h-full py-5 px-10">
      <div class="flex flex-row">
        ${Vehicle_Logo()}
      </div>
      <div class="flex flex-row gap-x-4">
        <div>${link({label: 'Find Your Car', url: '/vehicle_cars', data: {'language-target': 'text'}})}</div>
        <div>${link({label: 'Post Your Car', url: '/vehicle_cars/new', data: {'language-target': 'text'}})}</div>
        <div>${link({label: 'News', url: '/vehicle_news/new', data: {'language-target': 'text'}})}</div>
      </div>
      <div class="flex flex-row gap-x-2">
        ${languageButton()}
        ${darkmodeButton()}
        ${userBox()}
      </div>
    </div>
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700"></hr>
  `
}