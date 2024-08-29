import { Views_Global_DarkmodeComponent } from "../global/darkmode_controller"

export const Views_Rs_Header = () => {
  return `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      Header
    </div>
    ${Views_Global_DarkmodeComponent()}
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
  `
}