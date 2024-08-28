import { DarkmodeComponent } from "../global/darkmode_controller"

export const header = () => {
  return `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      Header
    </div>
    ${DarkmodeComponent()}
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
  `
}