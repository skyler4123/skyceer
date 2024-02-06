import { twMerge } from 'tailwind-merge'
import ApexCharts from 'apexcharts'
import ApplicationComponentController from '../application_component_controller';

export default class extends ApplicationComponentController {
  static values = {
    ...super.values,
    series: { type: Array }
  }

  initialize() {
    super.initialize()
    this.initializeStylesheet()
    this.initializeValue()
    this.initializeChart()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeStylesheet() {}
  
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



