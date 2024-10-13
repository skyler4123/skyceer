import Swiper from "swiper";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { img } from "../../../../javascript/controllers/components";

export default class extends ApplicationController {
  static targets = [...super.targets, 'swiper', 'wrapper', 'slide', 'item', 'pagination', 'buttonPrev', 'buttonNext', 'scrollbar', 'thumbSwiper', 'thumbWrapper', 'thumbSlide', 'thumbItem', 'thumbScrollbar']
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

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  initTarget() {
    this.slideTargets.forEach((slide) => {
      slide.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'item')
    })
    this.thumbSlideTargets.forEach((slide) => {
      slide.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'thumbItem')
    })
  }
  
  initComplete() {
    const thumb = new Swiper(this.thumbSwiperTarget, {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      // freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: this.thumbScrollbarTarget,
      },
      cssMode: true,
      // centeredSlides: true
    });

    const swiper = new Swiper(this.swiperTarget, {
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
      thumbs: {
        swiper: thumb,
      },
      // centeredSlides: true,
      // centeredSlidesBounds: true,
    });
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
        <div data-${this.identifier}-target="pagination"></div>

        <div data-${this.identifier}-target="buttonPrev"></div>
        <div data-${this.identifier}-target="buttonNext"></div>
      </div>
      <div data-${this.identifier}-target="thumbSwiper">
        <div data-${this.identifier}-target="thumbWrapper">
          ${this.imageUrlsParams.map((url) => {
            return `
              <div data-${this.identifier}-target="thumbSlide">
                ${img({src: url})}
              </div>`
          }).join('')}
        </div>
        <div data-${this.identifier}-target="thumbScrollbar"></div>
      </div>
    `
  }

  variantClass() {
    return {
      swiper: {
        element: 'w-1/2 h-[300px]',
        swiperTarget: 'swiper w-full h-5/6',
        wrapperTarget: 'swiper-wrapper',
        slideTarget: 'swiper-slide',
        itemTarget: 'm-auto w-full h-full object-contain',
        paginationTarget: 'swiper-pagination',
        buttonPrevTarget: 'swiper-button-prev',
        buttonNextTarget: 'swiper-button-next',
        thumbSwiperTarget: 'swiper w-full h-1/6',
        thumbWrapperTarget: 'swiper-wrapper',
        thumbSlideTarget: 'swiper-slide',
        thumbItemTarget: 'm-auto object-fill w-full h-20',
        thumbScrollbarTarget: 'swiper-scrollbar'
      }
    }
  }
}
