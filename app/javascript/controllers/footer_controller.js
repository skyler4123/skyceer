import ApplicationController from "controllers/application_controller";


export default class FooterController extends ApplicationController {
  
  initialize() {
    this.element.className = "w-full"
    this.element.innerHTML = this.defaultHTML()
  }

  disconnect() {
    this.element.remove()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2">
        <div>Home</div>
        <div>Estate</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    `
  }
}
