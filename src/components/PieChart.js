import React, { Component } from 'react';
import Chart3 from 'react-chartist';

class PieChart extends Component {
  render() {

    var data = {
      labels: ['40%', '60%'],
      series: [40, 60]
    };
    
    var options = {
      labelInterpolationFnc: function(value) {
        return value[0]
      }
    };

    var options = {
      donut: true,
      showLabel: true,
      labelOffset: 30,
    };

    var type = 'Pie'

    return (
      <div className="chartboxweekly">
        <h6 className="headlinechartspie">Schritt Ziel der letzten Woche</h6>
        <div className="goalChart"><Chart3 data={data} options={options} type={type} /></div>
        <p className="piechartp">64232/90000</p>
      </div>
    )
  }
}

export default PieChart