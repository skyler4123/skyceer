import { darkmodeButton } from "./darkmode_button"
import { Application_Logo } from "./logo"
import { nav } from "./nav"
import { userBox } from "./user_box"

export const header = () => {
  return `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      <div class="flex flex-row">
        ${Application_Logo()}
      </div>
      <div class="flex flex-row">
        ${nav()}
      </div>
      <div class="flex flex-row gap-x-2">
        <div>
          ${darkmodeButton()}
        </div>
        <div>
          ${userBox()}
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
  `
}