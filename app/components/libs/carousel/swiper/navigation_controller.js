import Swiper from "swiper";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { img } from "../../../../javascript/controllers/components";

export default class extends ApplicationController {
  static targets = [...super.targets, 'swiper', 'wrapper', 'slide', 'item', 'buttonPrev', 'buttonNext']
  static values = {
    ...super.values
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'swiper'})
    this.setParams({name: 'imageUrls', defaultValue: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
      "https://swiperjs.com/demos/images/nature-5.jpg",
      "https://swiperjs.com/demos/images/nature-6.jpg",
      "https://swiperjs.com/demos/images/nature-7.jpg",
      "https://swiperjs.com/demos/images/nature-8.jpg",
      "https://swiperjs.com/demos/images/nature-9.jpg",
      "https://swiperjs.com/demos/images/nature-10.jpg",
    ]})
  }

  init() {
     this.initHTML()
     this.initTarget()
  }

  initTarget() {
    this.slideTargets.forEach((slide) => {
      slide.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'item')
    })
  }
  
  initComplete() {
    var thumb = new Swiper(this.thumbSwiperTarget, {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      cssMode: true,
    });

    const swiper = new Swiper(this.swiperTarget, {
      direction: 'horizontal',
      loop: true,    
      // Navigation arrows
      navigation: {
        nextEl: this.buttonNextTarget,
        prevEl: this.buttonPrevTarget,
      },
    });

  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div data-${this.identifier}-target="swiper">
        <div data-${this.identifier}-target="wrapper">
          ${this.imageUrlsParams.map((url) => {
            return `
              <div data-${this.identifier}-target="slide">
                ${img({src: url})}
              </div>`
          }).join('')}
        </div>
        <div data-${this.identifier}-target="buttonPrev"></div>
        <div data-${this.identifier}-target="buttonNext"></div>
      </div>
    `
  }

  variantClass() {
    return {
      swiper: {
        element: '',
        swiper: 'swiper w-[600px] h-[300px]',
        wrapperTarget: 'swiper-wrapper',
        slideTarget: 'swiper-slide',
        itemTarget: 'm-auto',
        buttonPrevTarget: 'swiper-button-prev',
        buttonNextTarget: 'swiper-button-next',
      }
    }
  }
}