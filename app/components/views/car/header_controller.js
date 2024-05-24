import ApplicationController from "../../../javascript/controllers/application_controller";
import { icon, link, text } from "../../../javascript/controllers/components";

export default class extends ApplicationController {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  init() {
    this.element.innerHTML = `
    <div class="flex flex-row justify-between w-full h-full py-5 px-10">
      <div class="flex flex-row">
        <div>${icon({variant: ['outline', 'truck']})}</div>
        <div>Skycarr</div>
      </div>
      <div class="flex flex-row">
        <div>${link({label: 'Home', url: '/car_cars'})}</div>
        <div>${link({label: 'Sell', url: '/car_cars/new'})}</div>
      </div>
      <div class="flex flex-row gap-x-2">
        <div>
          ${link({label: 'Home', url: 'https://saaslit.com/blog'})}
        </div>
        <div>
          ${link({url: '/users/profile'}, () => {
            return text({type: ['cookie', 'email']})
          })}
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
  `
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  get variantClass() {
    return {
      default: {
        element: 'w-full h-full'
      }
    }
  }
}
