import React, { Component } from 'react';
import Chart2 from 'react-chartist';

class AreaChart extends Component {
  render() {

    var data = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [1, 2, 3, 1, 6, 3, 1, 0],
        [5, 1, 2, 5, 4, 7, 2, 1]
      ]
    };

    var options = {
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: false,
        showGrid: false
      }
    };

    var type = 'Line'

    return (
      <div class="chartbox">
        <h6 class="headlinecharts">Line Chart</h6>
        <Chart2 data={data} options={options} type={type} />
      </div>
    )
  }
}

export default AreaChart