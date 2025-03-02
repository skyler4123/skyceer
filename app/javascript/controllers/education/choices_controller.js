//  HOW TO USE
//  <form action="/">
//    <select data-controller="hello choices" name="cars" id="cars" multiple>
//      <option value="volvo">Volvo</option>
//      <option selected value="saab">Saab</option>
//      <option selected value="opel">Opel</option>
//      <option value="audi">Audi</option>
//    </select>
//    <input type="submit">
//  </form>

import "choices"

import { Controller } from "@hotwired/stimulus"


export default class Education_ChoicesController extends Controller {
  static values = {
    options: { type: Object, default: {
      removeItemButton: true,
    } },
  }

  initialize() {
    setTimeout(() => {
      this.initChoices()
    }
    , 1000)
  }

  initChoices() {
    this.choice = new Choices(this.element, {
      classNames: {
        containerOuter: ['choices w-full !mb-0'],
        containerInner: ['choices__inner'],
        input: ['choices__input'],
        inputCloned: ['choices__input--cloned'],
        list: ['choices__list'],
        listItems: ['choices__list--multiple'],
        listSingle: ['choices__list--single'],
        listDropdown: ['choices__list--dropdown'],
        item: ['choices__item !bg-slate-800 !text-white hover:!bg-slate-700'],
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
        addChoice: ['choices__item--selectable', 'add-choice'],
        noResults: ['has-no-results'],
        noChoices: ['has-no-choices'],
      },
      ...this.optionsValue,
    })
  }
}
