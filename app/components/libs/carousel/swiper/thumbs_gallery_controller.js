import Swiper from "swiper";
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = [...super.targets, 'wrapper', 'slide', 'pagination', 'buttonPrev', 'buttonNext', 'scrollbar']
  static values = {
    ...super.values
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'swiper'})
  }

  init() {
     this.initHTML()
  }

  initComplete() {
    setTimeout(() => {
      const swiper = new Swiper(this.element, {
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: this.paginationTarget,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: this.buttonNextTarget,
          prevEl: this.buttonPrevTarget,
        },
      });
    }, 2000)

  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div data-${this.identifier}-target="wrapper">
        <div data-${this.identifier}-target="slide">Slide 1</div>
        <div data-${this.identifier}-target="slide">Slide 2</div>
        <div data-${this.identifier}-target="slide">Slide 3</div>
      </div>
      <div data-${this.identifier}-target="pagination"></div>

      <div data-${this.identifier}-target="buttonPrev"></div>
      <div data-${this.identifier}-target="buttonNext"></div>

      <div data-${this.identifier}-target="scrollbar"></div>
    `
  }

  variantClass() {
    return {
      swiper: {
        element: 'swiper w-[600px] h-[300px]',
        wrapperTarget: 'swiper-wrapper',
        slideTarget: 'swiper-slide',
        paginationTarget: 'swiper-pagination',
        buttonPrevTarget: 'swiper-button-prev',
        buttonNextTarget: 'swiper-button-next',
        scrollbarTarget: 'swiper-scrollbar'
      }
    }
  }
}
