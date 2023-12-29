import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    color: { type: String, default: "blue" },
    type: { type: String, default: "default" },
    klass: { type: String, default: 'hidden' }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  static outlets = ['helper']
  static targets = ['template']
  initialize() {
    this.initializeOutlet()
  }
  initializeOutlet() {
    this.element.setAttribute(`data-${this.identifier}-helper-outlet`, "body")
  }
  helperOutletConnected() {
    this.helperOutlet.initTargetValueHTML(this)
    this.initializeFunction()
    this.helperOutlet.initializeCompleted(this)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initializeFunction() {
    this.initializeClass()
  }
  initializeClass() {
    this.initializeKlass()
  }
  initializeKlass() {
    switch(this.typeValue) {
      case "default":
        switch(this.colorValue) {
          case "blue":
            this.klassValue = "bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "dark":
            this.klassValue = "bg-gray-100 text-gray-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-gray-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "red":
            this.klassValue = "bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900 dark:text-red-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "green":
            this.klassValue = "bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "yellow":
            this.klassValue = "bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-yellow-900 dark:text-yellow-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "indigo":
            this.klassValue = "bg-indigo-100 text-indigo-800 text-xs font-medium rounded dark:bg-indigo-900 dark:text-indigo-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "purple":
            this.klassValue = "bg-purple-100 text-purple-800 text-xs font-medium rounded dark:bg-purple-900 dark:text-purple-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "pink":
            this.klassValue = "bg-pink-100 text-pink-800 text-xs font-medium rounded dark:bg-pink-900 dark:text-pink-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
        }
        break
      case "border":
        switch(this.colorValue) {
          case "blue":
            this.klassValue = "bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "dark":
            this.klassValue = "bg-gray-100 text-gray-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "red":
            this.klassValue = "bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "green":
            this.klassValue = "bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "yellow":
            this.klassValue = "bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "indigo":
            this.klassValue = "bg-indigo-100 text-indigo-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "purple":
            this.klassValue = "bg-purple-100 text-purple-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "pink":
            this.klassValue = "bg-pink-100 text-pink-800 text-xs font-medium rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
        }
        break
      case "pill":
        switch(this.colorValue) {
          case "blue":
            this.klassValue = "bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "dark":
            this.klassValue = "bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "red":
            this.klassValue = "bg-red-100 text-red-800 text-xs font-medium rounded-full dark:bg-red-900 dark:text-red-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "green":
            this.klassValue = "bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "yellow":
            this.klassValue = "bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "indigo":
            this.klassValue = "bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full dark:bg-indigo-900 dark:text-indigo-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "purple":
            this.klassValue = "bg-purple-100 text-purple-800 text-xs font-medium rounded-full dark:bg-purple-900 dark:text-purple-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
          case "pink":
            this.klassValue = "bg-pink-100 text-pink-800 text-xs font-medium rounded-full dark:bg-pink-900 dark:text-pink-300 flex flex-row justify-center items-center gap-x-1 px-2 py-0.5"
            break
        }
        break
    }
    
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
