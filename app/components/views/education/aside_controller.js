import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static values = {
    // className: { type: String, default: "w-1/4 h-screen open:" },
    attributes: { type: Object, default: {
      open: true,
      role: "toggle",
      class: 'w-1/4 h-screen'
    } }
  }

  init() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <details class="border-2 border-dashed border-stone-500 p-4 [&_svg]:open:-rotate-180">
        <summary class="flex cursor-pointer list-none items-center gap-4 [&_svg]:open:-rotate-180">
          <div>
            <svg class="rotate-0 transform text-blue-700 transition-all duration-300" fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div>Open this box</div>
        </summary>
      </details>
    `
  }
}
