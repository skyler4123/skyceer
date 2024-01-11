import ApexCharts from 'apexcharts'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static target = ["content", "chart"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    chartOptions: { type: Object },
  }
  initialize() {
    var options = {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: [{
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
    
    var chart = new ApexCharts(this.element, options);
    
    chart.render();
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
