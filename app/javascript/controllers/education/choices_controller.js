import "choices"
import { initializedEvent } from "controllers/education/helpers/data_helpers"
import ApplicationController from "controllers/application_controller"


export default class Education_ChoicesController extends ApplicationController {
  static values = {
    options: { type: Object, default: {
      removeItemButton: true,
    } },
  }

  initialize() {
    this.element.addEventListener(initializedEvent, this.init())
  }
  
  init() {
    setTimeout(() => {
      this.initChoices()
    }, 100)
  }

  initChoices() {
    this.choice = new Choices(this.element, {
      classNames: {
        containerOuter: ['choices', 'w-full', '!mb-0'],
        containerInner: ['choices__inner'],
        input: ['choices__input'],
        inputCloned: ['choices__input--cloned'],
        list: ['choices__list'],
        listItems: ['choices__list--multiple'],
        listSingle: ['choices__list--single'],
        listDropdown: ['choices__list--dropdown'],
        item: ['choices__item', 'dark:!bg-slate-800', 'dark:!text-white', 'dark:hover:!bg-slate-700'],
        itemSelectable: ['choices__item--selectable'],
        itemDisabled: ['choices__item--disabled'],
        itemChoice: ['choices__item--choice'],
        description: ['choices__description'],
        placeholder: ['choices__placeholder'],
        group: ['choices__group'],
        groupHeading: ['choices__heading'],
        button: ['choices__button'],
        activeState: ['is-active'],
        focusState: ['is-focused'],
        openState: ['is-open'],
        disabledState: ['is-disabled'],
        highlightedState: ['is-highlighted'],
        selectedState: ['is-selected'],
        flippedState: ['is-flipped'],
        loadingState: ['is-loading'],
        notice: ['choices__notice'],
        addItem: ['choices__item--selectable', 'add-item'],
        noResults: ['has-no-results'],
        noChoices: ['has-no-choices'],
      },
      ...this.optionsValue,
    })
  }

}
