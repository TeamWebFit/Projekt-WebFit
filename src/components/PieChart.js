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
      <div className="container chartbox">
        <h6 className="headlinecharts">Ziele</h6>
        <div className="goalChart"><Chart3 data={data} options={options} type={type} /></div>
        <div className="goalChart"><Chart3 data={data} options={options} type={type} /></div>
        <button type="submit" className="btn btn-basic">Ziele Bearbeiten</button>
      </div>
    )
  }
}

export default PieChart