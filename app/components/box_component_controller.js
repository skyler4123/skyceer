import ApplicationComponentController from './application_component_controller';

export default class BoxComponentController extends ApplicationComponentController {
  static targets = ['item', 'accordion', 'button', 'carousel', 'hr', 'icon', 'img', 'input', 'link', 'list', 'mockup', 'modal', 'popover', 'progress', 'skeleton', 'tab', 'text', 'toast', 'video']
  static values = {
    ...super.values,
    ratingIndex: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeValue()
    this.initializeClass()
    // this.initializeAction()

    this.initializeComplete()
  }

  initializeValue() {
    if (typeof this.optionsValue.isOpen != "undefined") {
      this.isOpenValue = this.optionsValue.isOpen
    }
    if (typeof this.optionsValue.ratingIndex != "undefined") {
      this.isFirstRatingIndexValueChanged = true
      this.ratingIndexValue = this.optionsValue.ratingIndex
    }
  }

  initializeClass() {
    if (this.position) {
      // this.element.className = this.twMerge(this.element.className, this.positionClass[this.positionType][this.position])
      this.mergeClass(this.element, this.positionClass[this.positionType][this.position])
    }
    if (this.type && this.border && this.color) {
      // this.element.className = this.twMerge(this.element.className, this.typeClass[this.type][this.border][this.color])
      this.mergeClass(this.element, this.typeClass[this.type][this.border][this.color])
    }
    // this.element.className = this.twMerge(this.element.className, this.klass)
    super.initializeClass()
  }

  rating(event) {
    this.ratingIndexValue = event.value
  }

  ratingIndexValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    let timeout = 0
    if (this.isFirstRatingIndexValueChanged) {
      timeout = 500
    }
    setTimeout(() => {
      for (let i = 0; i < this.iconTargets.length; i++) {
        const iconController = this.application.getControllerForElementAndIdentifier(this.iconTargets[i], 'icon-component')
        if (i <= this.ratingIndexValue) {
          iconController.open()
        } else {
          iconController.close()
        }
        this.isFirstRatingIndexValueChanged = false
      }
    }, timeout)
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "item")
    })
    setTimeout(() => {
      this.element.querySelectorAll('[data-controller*="accordion-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'accordion')
      })
      this.element.querySelectorAll('[data-controller*="button-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'button')
      })
      this.element.querySelectorAll('[data-controller*="carousel-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'carousel')
      })
      this.element.querySelectorAll('[data-controller*="hr-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'hr')
      })
      this.element.querySelectorAll('[data-controller*="icon-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'icon')
      })
      this.element.querySelectorAll('[data-controller*="img-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'img')
      })
      this.element.querySelectorAll('[data-controller*="input-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'input')
      })
      this.element.querySelectorAll('[data-controller*="link-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'link')
      })
      this.element.querySelectorAll('[data-controller*="list-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'list')
      })
      this.element.querySelectorAll('[data-controller*="mockup-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'mockup')
      })
      this.element.querySelectorAll('[data-controller*="modal-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'modal')
      })
      this.element.querySelectorAll('[data-controller*="popover-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'popover')
      })
      this.element.querySelectorAll('[data-controller*="progress-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'progress')
      })
      this.element.querySelectorAll('[data-controller*="skeleton-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'skeleton')
      })
      this.element.querySelectorAll('[data-controller*="tab-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'tab')
      })
      this.element.querySelectorAll('[data-controller*="text-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'text')
      })
      this.element.querySelectorAll('[data-controller*="toast-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'toast')
      })
      this.element.querySelectorAll('[data-controller*="video-component"]').forEach((target) => {
        target.setAttribute(`data-${this.identifier}-target`, 'video')
      })

    }, 500)
  }

  get border() {
    return this.optionsValue.border
  }
  get position() {
    return this.optionsValue.position
  }
  get positionType() {
    return this.optionsValue.positionType || 'inside'
  }
  get typeClass() {
    return {
      badge: {
        default: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
        },
        bordered: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
        },
        pill: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300",
        }
      },
      alert: {
        default: {
          blue: "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
          red: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
          green: "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
          yellow: "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
          dark: "p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
        },
        bordered: {
          blue: "flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
          red: "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
          green: "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
          yellow: "flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
          dark: "flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",
        },
      }
    }
  }

  get positionClass() {
    return {
      border: {
        topRight: 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
        rightTop: 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',

        topLeft: 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        leftTop: 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',

        bottomRight: 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
        rightBottom: 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',

        bottomLeft: 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        leftBottom: 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        
        topCenter: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        bottomCenter: 'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        rightCenter: 'absolute bottom-0 right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
        leftCenter: 'absolute bottom-0 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      },
      inside: {
        topRight: 'absolute top-0 right-0',
        rightTop: 'absolute top-0 right-0',

        topLeft: 'absolute top-0 left-0',
        leftTop: 'absolute top-0 left-0',

        bottomRight: 'absolute bottom-0 right-0',
        rightBottom: 'absolute bottom-0 right-0',

        bottomLeft: 'absolute bottom-0 left-0',
        leftBottom: 'absolute bottom-0 left-0',

        topCenter: 'absolute top-0 left-1/2 -translate-x-1/2',
        bottomCenter: 'absolute bottom-0 left-1/2 -translate-x-1/2',
        rightCenter: 'absolute bottom-0 right-0 top-1/2 -translate-y-1/2',
        leftCenter: 'absolute bottom-0 left-0 top-1/2 -translate-y-1/2',
        center: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      },
      outside: {
        topCenter: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full',
        topRight: 'absolute top-0 right-0 -translate-y-full',
        topLeft: 'absolute top-0 left-0 -translate-y-full',

        bottomCenter: 'absolute bottom-0 left-1/2 -translate-x-full translate-y-full',
        bottomRight: 'absolute bottom-0 right-0 translate-y-full',
        bottomLeft: 'absolute bottom-0 left-0 translate-y-full',

        rightCenter: 'absolute bottom-0 right-0 top-1/2 translate-x-full -translate-y-1/2',
        rightTop: 'absolute top-0 right-0 translate-x-full',
        rightBottom: 'absolute bottom-0 right-0 translate-x-full',

        leftCenter: 'absolute bottom-0 left-0 top-1/2 -translate-x-full -translate-y-1/2',
        leftTop: 'absolute top-0 left-0 -translate-x-full',
        leftBottom: 'absolute bottom-0 left-0 -translate-x-full',
      }
    }
  }




}
