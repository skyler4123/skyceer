import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "mockup", "content"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },
    name: { type: String, default: "iphone-12" },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    contentClassDefault: { type: String, default: "" },
  }

  initialize() {
    this.initializeID()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML()[this.nameValue])
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
  }

  templateHTML() {
    if (this.templateTarget.content?.childElementCount === 0) {
      return false
    } else {
      return this.templateTarget.innerHTML
    }
  }

  initHTML() {
    return {
      'iphone-12': `
        <div data-${this.identifier}-target="mockup" class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
          <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <div data-${this.identifier}-target="content">
              ${this.templateHTML() ? this.templateHTML() : `
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
              `}
            </div>
          </div>
        </div>
      `,
      'tablet': `
        <div data-${this.identifier}-target="mockup" class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
          <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
            <div data-${this.identifier}-target="content">
              ${this.templateHTML() ? this.templateHTML() : `
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="">
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="">
              `}
            </div>
          </div>
        </div>
      `,
      'laptop': `
        <div data-${this.identifier}-target="mockup">
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <div data-${this.identifier}-target="content">
                ${this.templateHTML() ? this.templateHTML() : `
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="">
                `}
              </div>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      `,
      'desktop': `
        <div data-${this.identifier}-target="mockup">
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
              <div data-${this.identifier}-target="content">
                ${this.templateHTML() ? this.templateHTML() : `
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="">
                `}
              </div>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div>
      `,
      'smartwatch': `
        <div data-${this.identifier}-target="mockup">
          <div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
          <div class="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
              <div class="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
              <div class="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
              <div class="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
                <div data-${this.identifier}-target="content">
                  ${this.templateHTML() ? this.templateHTML() : `
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="dark:hidden h-[193px] w-[188px]" alt="">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden dark:block h-[193px] w-[188px]" alt="">
                  `}
                </div>
              </div>
          </div>
          <div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
        </div>
      `
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

}
