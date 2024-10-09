import Swiper from "swiper";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { img } from "../../../../javascript/controllers/components";

export default class extends ApplicationController {
  static targets = [...super.targets, 'swiper', 'wrapper', 'slide', 'pagination', 'buttonPrev', 'buttonNext', 'scrollbar', 'thumbsSwiper', 'thumbsWrapper', 'thumbsSlide', 'thumbsScrollbar']
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
  }

  initComplete() {
    var thumbs = new Swiper(this.thumbsSwiperTarget, {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      // freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: this.thumbsScrollbarTarget,
      },
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
        swiper: thumbs,
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
        <div data-${this.identifier}-target="pagination"></div>

        <div data-${this.identifier}-target="buttonPrev"></div>
        <div data-${this.identifier}-target="buttonNext"></div>

        <div data-${this.identifier}-target="scrollbar"></div>
      </div>
      <div data-${this.identifier}-target="thumbsSwiper">
        <div data-${this.identifier}-target="thumbsWrapper">
          ${this.imageUrlsParams.map((url) => {
            return `
              <div data-${this.identifier}-target="thumbsSlide">
                ${img({src: url, klass: 'object-fill w-full h-20'})}
              </div>`
          }).join('')}
        </div>
        <div data-${this.identifier}-target="thumbsScrollbar"></div>
      </div>
    `
  }

  variantClass() {
    return {
      swiper: {
        element: '',
        swiper: 'swiper w-[600px] h-[300px] rounded-t-xl',
        wrapperTarget: 'swiper-wrapper',
        slideTarget: 'swiper-slide',
        paginationTarget: 'swiper-pagination',
        buttonPrevTarget: 'swiper-button-prev',
        buttonNextTarget: 'swiper-button-next',
        scrollbarTarget: 'swiper-scrollbar',
        thumbsSwiperTarget: 'swiper w-[600px] rounded-b-xl mt-2',
        thumbsWrapperTarget: 'swiper-wrapper',
        thumbsSlideTarget: 'swiper-slide',
        thumbsScrollbarTarget: 'swiper-scrollbar'
      }
    }
  }
}
