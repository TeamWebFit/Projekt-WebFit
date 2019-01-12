import React, { Component } from 'react';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
    }
  }

  render() {
    var userId = this.props.user.id;
    return(
      <div>
        <Query query={GET_STEPS} variables={{ userId }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              if(data.stepsViaUser){

                const steps = data.stepsViaUser;
                const time = [];
                const value = [];
                if(steps){
                  steps.forEach(function(element){
                    time.push(element.time);
                    value.push(element.value);
                  })
                }
                const timeArray = [];
                for(var i = 0; i < 7; i++){
                  timeArray.push(time[i]);
                }

                const valueArray = [];
                for(var i = 0; i < 7; i++){
                  valueArray.push(value[i]);
                }

                var data = {
                  labels: timeArray,
                  series: [
                    valueArray
                  ]
                };

                var options = {
                  height:'220px',
                  axisX: {
                    labelInterpolationFnc: function (value, index) {
                      return value;
                    }
                  }
                };

                var type = 'Bar';

                return (
                    <div className="chartboxweekly">
                      <h6 className="headlinecharts">Wöchentliche Schrittanzahl</h6>
                      <Chart1 data={data} options={options} type={type} />
                    </div>
                )
              }
            }}
          </Query>
        </div>
      )
  }//end render
}//end component

const GET_STEPS = gql`
        query GetSteps($userId: ID){
          stepsViaUser(userId: $userId){
            time
            value
          }
        }
        `

export default BarChart;
