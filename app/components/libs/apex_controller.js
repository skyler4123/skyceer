import ApexCharts from 'apexcharts'
import ApplicationController from '../../javascript/controllers/application_controller';

export default class Apex extends ApplicationController {
  static values = {
    ...super.values,
    series: { type: Array }
  }

  init() {
    this.initStylesheet()
    this.initValue()
    this.initChart()
  }

  initStylesheet() {}
  
  initValue() {
    this.seriesValue = this.series
  }

  initChart() {
    this.chart = new ApexCharts(this.element, this.options);
    this.chart.render();
  }

  seriesValueChanged(value, previousValue) {
    this.chart.updateSeries(this.seriesValue)
  }

  get seriesDefault() {
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
      series: this.seriesDefault
    }
  }

}



