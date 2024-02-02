import { twMerge } from 'tailwind-merge'
import ApplicationComponentController from './application_component_controller';

export default class extends ApplicationComponentController {
  static values = {
    ...super.values,
    isOpen: { type: Boolean, default: false },
  }

  initialize() {
    super.initialize()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  initializeComplete() {}
  
  initializeClass() {
    this.element.className = twMerge(this.element.className, this.positionClass[this.insideOrOutside][this.position], this.klass)
  }

  get insideOrOutside() {
    return this.optionsValue.insideOrOutside || 'outside'
  }
  get position() {
    return this.optionsValue.position || 'topCenter'
  }
  get positionClass() {
    return {
      outside: {
        'bottomLeft': 'open:flex absolute justify-center items-center left-0 bottom-0 translate-y-full py-2',
        'bottomCenter': 'open:flex absolute justify-center items-center right-1/2 bottom-0 translate-y-full translate-x-1/2 py-2',
        'bottomRight': 'open:flex absolute justify-center items-center right-0 bottom-0 translate-y-full py-2',

        'topRight': 'open:flex absolute justify-center items-center top-0 right-0 -translate-y-full py-2',
        'topLeft': 'open:flex absolute justify-center items-center top-0 left-0 -translate-y-full py-2',
        'topCenter': 'open:flex absolute justify-center items-center top-0 left-1/2 -translate-y-full -translate-x-1/2 py-2',

        'leftTop': 'open:flex absolute justify-center items-center left-0 top-0 -translate-x-full px-2',
        'leftBottom': 'open:flex absolute justify-center items-center left-0 bottom-0 -translate-x-full px-2',
        'leftCenter': 'open:flex absolute justify-center items-center left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2',

        'rightTop': 'open:flex absolute justify-center items-center right-0 top-0 translate-x-full px-2',
        'rightBottom': 'open:flex absolute justify-center items-center right-0 bottom-0 translate-x-full px-2',
        'rightCenter': 'open:flex absolute justify-center items-center right-0 top-1/2 translate-x-full -translate-y-1/2 px-2'
      },
      inside: {
        'bottomLeft': 'open:flex absolute justify-center items-center left-0 bottom-0 py-2',
        'bottomCenter': 'open:flex absolute justify-center items-center right-1/2 bottom-0 translate-x-1/2 py-2',
        'bottomRight': 'open:flex absolute justify-center items-center right-0 bottom-0 py-2',

        'topRight': 'open:flex absolute justify-center items-center top-0 right-0 py-2',
        'topLeft': 'open:flex absolute justify-center items-center top-0 left-0 py-2',
        'topCenter': 'open:flex absolute justify-center items-center top-0 left-1/2 -translate-x-1/2 py-2',

        'leftTop': 'open:flex absolute justify-center items-center left-0 top-0 px-2',
        'leftBottom': 'open:flex absolute justify-center items-center left-0 bottom-0 px-2',
        'leftCenter': 'open:flex absolute justify-center items-center left-0 top-1/2 -translate-y-1/2 px-2',

        'rightTop': 'open:flex absolute justify-center items-center right-0 top-0 px-2',
        'rightBottom': 'open:flex absolute justify-center items-center right-0 bottom-0 px-2',
        'rightCenter': 'open:flex absolute justify-center items-center right-0 top-1/2 -translate-y-1/2 px-2'
      }

    }
  }


}