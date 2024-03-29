import { Picker } from 'emoji-mart'
import ApplicationController from "../javascript/controllers/application_controller";

export default class PopoverController extends ApplicationController {
  static values = {
    ...super.values,
    isOpen: { type: Boolean, default: false },
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }
  
  initializeHTML() {
    if (this.type === 'emoji') {
      const pickerOptions = { onEmojiSelect: console.log }
      const picker = new Picker(pickerOptions)
      this.element.appendChild(picker)
    }
  }

  // initializeClass() {
  //   this.mergeClass(this.element, this.positionClass[this.insideOrOutside][this.position])
  //   super.initializeClass()
  // }

  get isShowAfterInitialize() {
    return false
  }
  // get insideOrOutside() {
  //   return this.paramsValue.insideOrOutside || 'outside'
  // }
  get position() {
    return this.paramsValue.position || ['outside', 'bottomCenter']
  }
  get positionClass() {
    return {
      outside: {
        bottomLeft: {
          element: 'open:flex absolute justify-center items-center left-0 bottom-0 translate-y-full py-2',
        },
        bottomCenter: {
          element: 'open:flex absolute justify-center items-center right-1/2 bottom-0 translate-y-full translate-x-1/2 py-2',
        },
        bottomRight: {
          element: 'open:flex absolute justify-center items-center right-0 bottom-0 translate-y-full py-2',
        },
        topRight: {
          element: 'open:flex absolute justify-center items-center top-0 right-0 -translate-y-full py-2',
        },
        topLeft: {
          element: 'open:flex absolute justify-center items-center top-0 left-0 -translate-y-full py-2',
        },
        topCenter: {
          element: 'open:flex absolute justify-center items-center top-0 left-1/2 -translate-y-full -translate-x-1/2 py-2',
        },
        leftTop: {
          element: 'open:flex absolute justify-center items-center left-0 top-0 -translate-x-full px-2',
        },
        leftBottom: {
          element: 'open:flex absolute justify-center items-center left-0 bottom-0 -translate-x-full px-2',
        },
        leftCenter: {
          element: 'open:flex absolute justify-center items-center left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2',
        },
        rightTop: {
          element: 'open:flex absolute justify-center items-center right-0 top-0 translate-x-full px-2',
        },
        rightBottom: {
          element: 'open:flex absolute justify-center items-center right-0 bottom-0 translate-x-full px-2',
        },
        rightCenter: {
          element: 'open:flex absolute justify-center items-center right-0 top-1/2 translate-x-full -translate-y-1/2 px-2',
        },
      },
      inside: {
        bottomLeft: {
          element: 'open:flex absolute justify-center items-center left-0 bottom-0 py-2',
        },
        bottomCenter: {
          element: 'open:flex absolute justify-center items-center right-1/2 bottom-0 translate-x-1/2 py-2',
        },
        bottomRight: {
          element: 'open:flex absolute justify-center items-center right-0 bottom-0 py-2',
        },
        topRight: {
          element: 'open:flex absolute justify-center items-center top-0 right-0 py-2',
        },
        topLeft: {
          element: 'open:flex absolute justify-center items-center top-0 left-0 py-2',
        },
        topCenter: {
          element: 'open:flex absolute justify-center items-center top-0 left-1/2 -translate-x-1/2 py-2',
        },
        leftTop: {
          element: 'open:flex absolute justify-center items-center left-0 top-0 px-2',
        },
        leftBottom: {
          element: 'open:flex absolute justify-center items-center left-0 bottom-0 px-2',
        },
        leftCenter: {
          element: 'open:flex absolute justify-center items-center left-0 top-1/2 -translate-y-1/2 px-2',
        },
        rightTop: {
          element: 'open:flex absolute justify-center items-center right-0 top-0 px-2',
        },
        rightBottom: {
          element: 'open:flex absolute justify-center items-center right-0 bottom-0 px-2',
        },
        rightCenter: {
          element: 'open:flex absolute justify-center items-center right-0 top-1/2 -translate-y-1/2 px-2',
        },
      }

    }
  }


}