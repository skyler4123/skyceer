
import { darkmodeButton } from "../application/darkmode_button"
import { userBox } from "../application/user_box"
import { logo } from "./logo"
import { nav } from "./nav"


export const header = () => {
  return `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      <div class="flex flex-row">
        ${logo()}
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