import ApexCharts from 'apexcharts'
import ApplicationController from '../../application_controller';

export default class Apex extends ApplicationController {
  static values = {
    ...super.values,
    series: { type: Array, default: [] }
  }

  initParams() {

    this.setParams({name: 'options', defaultValue: this.options()})
  }

  initComplete() {
    this.chart = new ApexCharts(this.element, this.optionsParams);
    this.chart.render();
    this.initValue()
  }

  initValue() {
    let value
    if (this.optionsParams.series.length > 0) {
      value = this.optionsParams.series 
    } else {
      value = this.seriesValueDefault()
    }
    this.seriesValue = value
  }
  
  seriesValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.chart.updateSeries(this.seriesValue)
  }

  options() {
    return this.optionsDefault()
  }

  optionsDefault() {
    return this.paramsValue.options || {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: []
    }
  }

  seriesValueDefault() {
    return [{
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

}
