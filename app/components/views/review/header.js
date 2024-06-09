
import { uiDarkmodeButton } from "../ui/darkmode_button"
import { uiUserBox } from "../ui/user_box"
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
          ${uiDarkmodeButton()}
        </div>
        <div>
          ${uiUserBox()}
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
  `
}