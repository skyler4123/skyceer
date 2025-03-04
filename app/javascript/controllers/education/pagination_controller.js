import { Controller } from "@hotwired/stimulus"
import { isEmpty } from "controllers/education/helpers/data_helpers"


export default class Education_PaginationController extends Controller {
  static targets = ["page", "currentPage"]
  static values = {
    pagination: { type: Object, default: {} },
  }
  
  // initialize if paginationValue is not empty
  initialize() {
    if (!this.canInitialize()) { return }
    this.element.className = "w-full flex flex-row justify-center items-center gap-x-1"
    this.initPaginationHTML()
    this.currentPageTarget.className = "flex justify-center items-center bg-slate-800 text-white hover:cursor-not-allowed min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-slate-600"
  }

  canInitialize() {
    if (isEmpty(this.paginationValue)) { return false }
    if (this.paginationValue.last === 1) { return false }
    return true
  }

  initPaginationHTML() {
    this.element.innerHTML = this.paginationHTML(this.paginationValue)
  }

  paginationHTML() {
    return `

      <a
        class="hover:cursor-pointer rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800"
        href="${this.urlForPageNumber(this.previousPage())}"
      >
        Prev
      </a>
      ${this.pageNumbers().map(pageNumber => {
        return `
          <a
            class="flex justify-center items-center hover:cursor-pointer min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800"
            ${ pageNumber !== '...' ?
              `
                href="${this.urlForPageNumber(pageNumber)}"
                data-${this.identifier}-target="page ${pageNumber === this.paginationValue.page && "currentPage"}"
              `
            :
            '' }
            >
              <span>${pageNumber}</span>
          </a>
        `
      }).join('')}
      <a
        class="hover:cursor-pointer min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800"
        href="${this.urlForPageNumber(this.nextPage())}"
      >
        Next
      </a>

    `
  }

  pageNumbers() {
    // create an array of numbers from 1 to last
    let last = this.paginationValue.last
    let pageNumbers = []
    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i)
    }
    // reduce array to size with page in the middle
    let pageIndex = pageNumbers.indexOf(this.paginationValue.page)
    if (pageIndex < 4) {
      pageNumbers = pageNumbers.slice(0, 9)
    } else if (pageIndex > pageNumbers.length - 5) {
      pageNumbers = pageNumbers.slice(pageNumbers.length - 9, pageNumbers.length)
    } else {
      pageNumbers = pageNumbers.slice(pageIndex - 4, pageIndex + 5)
    }

    // if first item is not 1, remove first item and add '...'
    if (pageNumbers[0] !== 1) {
      pageNumbers.shift()
      pageNumbers.unshift('...')
      pageNumbers.unshift(1)

    }

    // if last item is not last, remove last item and add '...'
    if (pageNumbers[pageNumbers.length - 1] !== last) {
      pageNumbers.pop()
      pageNumbers.push('...')
      pageNumbers.push(last)
    }
    return pageNumbers
  }

  // nextPage is greater than page + 1 with maximum of last
  nextPage() {
    let nextPage = this.paginationValue.page + 1
    return nextPage > this.paginationValue.last ? this.paginationValue.last : nextPage
  }

  // previousPage is less than page - 1 with minimum of 1
  previousPage() {
    let previousPage = this.paginationValue.page - 1
    return previousPage < 1 ? 1 : previousPage
  }

  urlForPageNumber(pageNumber) {
    let url = new URL(window.location.href)
    url.searchParams.set("page", pageNumber)
    return url
  }
}