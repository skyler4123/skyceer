import ApplicationController from "../../../javascript/controllers/application_controller";
import { icon, link, text } from "../../../javascript/controllers/components";

export default class extends ApplicationController {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

  init() {
    this.element.innerHTML = `
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <div>${icon({variant: ['outline', 'truck']})}</div>
          <div>Skycarr</div>
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

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  get variantClass() {
    return {
      default: {
        element: 'w-10/12 h-full'
      }
    }
  }
}
