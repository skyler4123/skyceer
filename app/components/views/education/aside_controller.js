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
<ul>
  <li><a
      class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
      href="https://tailwindui.com/components?ref=sidebar">
      <div
        class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400">
          </path>
          <path d="m6 9 6 3v7l-6-3V9Z"
            class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500">
          </path>
          <path d="m18 9-6 3v7l6-3V9Z"
            class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600">
          </path>
        </svg></div>Components
    </a></li>
  <li><a
      class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
      href="https://tailwindui.com/templates?ref=sidebar">
      <div
        class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-slate-800 dark:highlight-white/5">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z"
            fill="#E879F9"
            class="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-slate-400">
          </path>
          <path
            d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z"
            fill="#F0ABFC" class="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-slate-500"></path>
        </svg></div>Templates
    </a></li>
</ul>
    `
  }
}
