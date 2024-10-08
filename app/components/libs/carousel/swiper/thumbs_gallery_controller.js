import Swiper from "swiper";
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = [...super.targets, 'swiper', 'thumbs', 'thumbsScrollbar', 'wrapper', 'slide', 'pagination', 'buttonPrev', 'buttonNext', 'scrollbar']
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
    var thumbs = new Swiper(this.thumbsTarget, {
      spaceBetween: 10,
      slidesPerView: 2,
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
          <div data-${this.identifier}-target="slide">Slide 1</div>
          <div data-${this.identifier}-target="slide">Slide 2</div>
          <div data-${this.identifier}-target="slide">Slide 3</div>
          <div data-${this.identifier}-target="slide">Slide 4</div>
          <div data-${this.identifier}-target="slide">Slide 5</div>
          <div data-${this.identifier}-target="slide">Slide 6</div>
        </div>
        <div data-${this.identifier}-target="pagination"></div>

        <div data-${this.identifier}-target="buttonPrev"></div>
        <div data-${this.identifier}-target="buttonNext"></div>

        <div data-${this.identifier}-target="scrollbar"></div>
      </div>
      <div data-${this.identifier}-target="thumbs">
        <div data-${this.identifier}-target="wrapper">
          <div data-${this.identifier}-target="slide">Slide 1</div>
          <div data-${this.identifier}-target="slide">Slide 2</div>
          <div data-${this.identifier}-target="slide">Slide 3</div>
          <div data-${this.identifier}-target="slide">Slide 4</div>
          <div data-${this.identifier}-target="slide">Slide 5</div>
          <div data-${this.identifier}-target="slide">Slide 6</div>
        </div>
        <div data-${this.identifier}-target="thumbsScrollbar"></div>
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
        paginationTarget: 'swiper-pagination',
        buttonPrevTarget: 'swiper-button-prev',
        buttonNextTarget: 'swiper-button-next',
        scrollbarTarget: 'swiper-scrollbar',
        thumbsTarget: 'swiper',
        thumbsScrollbarTarget: 'swiper-scrollbar'
      }
    }
  }
}
