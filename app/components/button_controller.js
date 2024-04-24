import morphdom from "morphdom"
import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from "../javascript/controllers/application_controller";

export default class ButtonController extends ApplicationController {
  static targets = ['label', 'toggle']
  static values = {
    ...super.values,
  }

  init() {
    // super.initialize()
    this.initHTML()
    // this.initializeComplete()
  }
  connect() {
    super.connect()
    useClickOutside(this)
  }

  initHTML() {
    if (this.hasLabelParams) {
      this.element.innerHTML = this.labelParams
      return
    }
    if (Object.keys(this.typeHTML).includes(this.typeParams)) {
      this.element.innerHTML = this.typeHTML[this.typeParams]
    }
  }

  initAction() {
    // super.initializeAction()
    if (this.typeParams === 'toggle') {
      this.element.dataset.action = this.dataAction + ' ' + `click->${this.identifier}#toggle`
    }
  }

  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.typeParams === 'toggle') {
      if (this.isOpenValue) {
        this.toggleTarget.setAttribute('open', '')
      } else {
        this.toggleTarget.removeAttribute('open')
      }
    }
  }

  runActionOnOtherControllers(action) {
    this.controllers.forEach((controller) => {
      if (this === controller) { return }
      if (typeof controller[action] !== 'undefined') {
        controller[action]()
      }
    })
  }

  darkMode() {
    this.htmlTag.classList.toggle('dark')
  }

  upToTop() {
    document.scrollingElement.scrollTo(0, 0)
  }
  
  // get isRememberMe() {
  //   return this.paramsValue.isRememberMe || false
  // }
  get typeHTML() {
    return {
      toggle: `<div data-${this.identifier}-target='toggle'></div>`
    }
  }
  get typeClass() {
    return {
      toggle: {
        element: 'bg-gray-200 open:bg-blue-600 relative w-11 h-6 rounded-full cursor-pointer duration-200 ease-out',
        toggleTarget: 'bg-white absolute w-5 h-5 ml-0.5 rounded-full top-1/2 left-0 -translate-y-1/2 open:translate-x-full duration-200 ease-out'
      }
    }
  }
  get variantClass() {
    return {
      default: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      },
      pill: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      },
      gradientMonochrome: {
        element: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      gradientDuotone: {
        element: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      gradientOutline: {
        element: 'relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
      },
      coloredShadows: {
        element: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
      },
      outline: {
        element: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800',
      },
    }
  }

}
