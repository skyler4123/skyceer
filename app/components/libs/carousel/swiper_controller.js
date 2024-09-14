import Swiper from "swiper";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Libs_Carousel_SwiperController extends ApplicationController {
  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'options', defaultValue: this.defaultOptions()})
  }

  initComplete() {
    // console.log("Hello, Stimulus!", this.element);
    const swiper = new Swiper(this.element, this.optionsParams);
    
  }

  defaultOptions() {
    return {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
  variantClass() {
    return {
      default: {
        element: 'swiper w-[600px] h-[300px]',
      }
    }
  }
}
