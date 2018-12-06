import React, { Component } from 'react';
import Chart3 from 'react-chartist';

class PieChart extends Component {
  render() {

    var data = {
      series: [
        [50, 50]
      ]
    };

    var options = {
      donut: true,
      showLabel: false
    };

    var type = 'Pie'

    return (
      <div class="chartbox">
        <h6 class="headlinecharts">Step Goal</h6>
        <Chart3 data={data} options={options} type={type} />
        <p class="midtextpie">5000/10000</p>
      </div>
    )
  }
}

export default PieChart