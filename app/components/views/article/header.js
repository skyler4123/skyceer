import { Icon, Link } from "../../../javascript/controllers/components"
import { Views_Global_DarkmodeComponent } from "../global/darkmode_controller"

export const Views_Article_Header = () => {
  return `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      <div>
        ${Link({url: "/"}, () => {
          return `
            <div class="flex flex-row gap-x-2 justify-center items-center">
              ${Icon({variant: ["outline", "rectangle-group"], klass: "h-10 w-10"})}
              <div>Skyceer</div>
            </div>
          `
        })}
      </div>
      <div class="flex flex-row gap-x-2">
        <div>${Link({label: 'Condominium', url: "/estate_condos"})}</div>
        <div>${Link({label: 'Hotel', url: "/estate_hotels"})}</div>
      </div>
      <div class="flex flex-row">
        ${Views_Global_DarkmodeComponent()}
        Authentication
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
  `
}