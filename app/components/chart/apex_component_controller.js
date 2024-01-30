import morphdom from "morphdom"
import { Camelize } from '../helpers';
import { twMerge } from 'tailwind-merge'
import ApexCharts from 'apexcharts'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    series: { type: Array }
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeValue()
    this.initializeChart()
    this.initializeAction()

    this.initializeComplete()
  }
  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeValue() {
    this.seriesValue = this.series
  }

  initializeChart() {
    this.chart = new ApexCharts(this.element, this.options);
    this.chart.render();
  }

  initializeAction() {}

  seriesValueChanged(value, previousValue) {
    this.chart.updateSeries(this.seriesValue)
  }

  get klass() {
    return this.optionsValue.klass
  }
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get parentButtonController() {
    return this.element.parentNode.closest('[data-controller*="button-component"]')
  }
  get parentButtonEventId() {
    return JSON.parse(this.parentButtonController?.dataset.buttonComponentOptionsValue)?.events[0]?.id
  }
  get series() {
    return this.optionsValue.series || [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      }]
    }]
  }
  get options() {
    return this.optionsValue.options || {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: this.series
    }
  }

}



