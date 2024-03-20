import ApexCharts from 'apexcharts'
import ApplicationController from '../../javascript/controllers/application_controller';

export default class extends ApplicationController {
  static values = {
    ...super.values,
    series: { type: Array }
  }

  initialize() {
    super.initialize()
    this.initializeStylesheet()
    this.initializeValue()
    this.initializeChart()

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
    return this.paramsValue.series || [{
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
    return this.paramsValue.options || {
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



