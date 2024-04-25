import ApplicationController from "../javascript/controllers/application_controller";

export default class BoxController extends ApplicationController {
  static targets = ['item', 'accordion', 'button', 'carousel', 'hr', 'icon', 'img', 'input', 'link', 'list', 'mockup', 'modal', 'popover', 'progress', 'skeleton', 'tab', 'text', 'toast', 'video']
  static values = {
    ...super.values
  }

  init() {
    this.initTarget()
  }

  initTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, "item")
    })
  }

  get variantClass() {
    return {
      default: {
        element: 'flex p-3 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-600'
      },
      onlyBorder: {
        element: 'flex border rounded-lg p-3'
      },
      onlyBg: {
        element: 'flex bg-gray-100 p-3 rounded-lg dark:bg-gray-700'
      },
      badge: {
        default: {
          blue: {
            element: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
          },
          dark: {
            element: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
          },
          red: {
            element: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
          },
          green: {
            element: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
          },
          yellow: {
            element: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
          },
          indigo: {
            element: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
          },
          purple: {
            element: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
          },
          pink: {
            element: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
          },
        },
        bordered: {
          blue: {
            element: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
          },
          dark: {
            element: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
          },
          red: {
            element: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
          },
          green: {
            element: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
          },
          yellow: {
            element: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",
          },
          indigo: {
            element: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
          },
          purple: {
            element: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
          },
          pink: {
            element: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
          },
        },
        pill: {
          blue: {
            element: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300",
          },
          dark: {
            element: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
          },
          red: {
            element: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300",
          },
          green: {
            element: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",
          },
          yellow: {
            element: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
          },
          indigo: {
            element: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
          },
          purple: {
            element: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300",
          },
          pink: {
            element: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300",
          },
        }

      },
      alert: {
        default: {
          blue: {
            element: "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
          },
          red: {
            element: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
          },
          green: {
            element: "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
          },
          yellow: {
            element: "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
          },
          dark: {
            element: "p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
          },
        },
        bordered: {
          blue: {
            element: "flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
          },
          red: {
            element: "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
          },
          green: {
            element: "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
          },
          yellow: {
            element: "flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
          },
          dark: {
            element: "flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",
          },
        },

      },

    }
  }

  get positionClass() {
    return {
      border: {
        topRight: {
          element: 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
        },
        rightTop: {
          element: 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
        },
        topLeft: {
          element: 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        },
        leftTop: {
          element: 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        },
        bottomRight: {
          element: 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
        },
        rightBottom: {
          element: 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
        },
        bottomLeft: {
          element: 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        },
        leftBottom: {
          element: 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        },
        topCenter: {
          element: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        },
        bottomCenter: {
          element: 'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        },
        rightCenter: {
          element: 'absolute bottom-0 right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
        },
        leftCenter: {
          element: 'absolute bottom-0 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
        },
      },
      inside: {
        topRight: {
          element: 'absolute top-0 right-0',
        },
        rightTop: {
          element: 'absolute top-0 right-0',
        },
        topLeft: {
          element: 'absolute top-0 left-0',
        },
        leftTop: {
          element: 'absolute top-0 left-0',
        },
        bottomRight: {
          element: 'absolute bottom-0 right-0',
        },
        rightBottom: {
          element: 'absolute bottom-0 right-0',
        },
        bottomLeft: {
          element: 'absolute bottom-0 left-0',
        },
        leftBottom: {
          element: 'absolute bottom-0 left-0',
        },
        topCenter: {
          element: 'absolute top-0 left-1/2 -translate-x-1/2',
        },
        bottomCenter: {
          element: 'absolute bottom-0 left-1/2 -translate-x-1/2',
        },
        rightCenter: {
          element: 'absolute bottom-0 right-0 top-1/2 -translate-y-1/2',
        },
        leftCenter: {
          element: 'absolute bottom-0 left-0 top-1/2 -translate-y-1/2',
        },
        center: {
          element: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        },
      },
      outside: {
        topCenter: {
          element: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full',
        },
        topRight: {
          element: 'absolute top-0 right-0 -translate-y-full',
        },
        topLeft: {
          element: 'absolute top-0 left-0 -translate-y-full',
        },
        bottomCenter: {
          element: 'absolute bottom-0 left-1/2 -translate-x-full translate-y-full',
        },
        bottomRight: {
          element: 'absolute bottom-0 right-0 translate-y-full',
        },
        bottomLeft: {
          element: 'absolute bottom-0 left-0 translate-y-full',
        },
        rightCenter: {
          element: 'absolute bottom-0 right-0 top-1/2 translate-x-full -translate-y-1/2',
        },
        rightTop: {
          element: 'absolute top-0 right-0 translate-x-full',
        },
        rightBottom: {
          element: 'absolute bottom-0 right-0 translate-x-full',
        },
        leftCenter: {
          element: 'absolute bottom-0 left-0 top-1/2 -translate-x-full -translate-y-1/2',
        },
        leftTop: {
          element: 'absolute top-0 left-0 -translate-x-full',
        },
        leftBottom: {
          element: 'absolute bottom-0 left-0 -translate-x-full',
        },
      }
    }
  }




}
