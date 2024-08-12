import { UsersApi } from "../../../javascript/controllers/api/users_api"
import ApplicationController from "../../../javascript/controllers/application_controller"
import { footer } from "../application/footer"
import { header } from "../application/header"
import { user } from "./user"

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initMain()
    this.initFooter()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }


  async initMain() {
    const response = await UsersApi.index()
    const usersData = response.data
    this.mainTarget.className = 'flex flex-col justify-center items-center w-full h-full'
    this.mainTarget.insertAdjacentHTML('beforeend', 
      usersData.map((userData, index) => {
        return user(userData)
      })
    )
  }
  

}
