import React, { Component } from 'react';
import { } from 'react-bootstrap';
import $ from 'jquery';
import gql from 'graphql-tag';

class AddButton extends Component {

    componentDidMount() {
        $(".fab").click(function () {
            $(".overlay").fadeIn();
            $(".overlay-fab").show();
            $(".overlay-fab").animate({ opacity: 1 }, { duration: 100, queue: false });
            $(".overlay-fab").animate({ "margin-top": "0px" }, { duration: 500, queue: false });
        })
        $(".overlay").click(function () {
            $(".overlay").fadeOut();
            $(".overlay-fab").animate({ opacity: 0 }, { duration: 100, queue: false });
            $(".overlay-fab").animate({ "margin-top": "300px" }, { duration: 500, queue: false });
            $(".overlay-fab").hide();
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            time: '',
            tag: '',
            monat: '',
            jahr: '',
            steps: '',
            kcal: '',
            sport: ''
        }
    }

    onChange(e) {

    }

    update(state) {

    }

    async onSubmit(e) {

    }

    render() {
        const { date, month, year, sport, time } = this.state;
        const thisYear = new Date().getFullYear();
        return (
            <div class="container">
                <div class="btn-round fab"></div>
                <div class="overlay-fab">
                    <div class="container">
                        <div class="col-md-12">
                            <p class="fab-title">Workout hinzufügen</p>
                            <p class="fab-subtitle">Welche Art von Training möchtest Du hinzufügen?</p>
                            <form>
                                <select className="selectBoxDate" onChange={this.onChange} value={sport} name="sportart">
                                    <option>Sportart</option>
                                    {}
                                </select>
                                <br></br>
                                <select className="selectBoxDate" onChange={this.onChange} value={date} name="tag">
                                    <option>Tag</option>
                                    {getOptions(1, 31)}
                                </select>
                                <select className="selectBoxDate" onChange={this.onChange} value={month} name="monat">
                                    <option>Monat</option>
                                    {getOptions(1, 12)}
                                </select>
                                <select className="selectBoxDate" onChange={this.onChange} value={year} name="jahr">
                                    <option>Jahr</option>
                                    {getOptions(thisYear - 60, thisYear - 12)}
                                </select>
                                <br></br>
                                <select className="selectBoxDate" onChange={this.onChange} value={time} name="time">
                                    <option>Dauer</option>
                                    {}
                                </select>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputKcal" placeholder="kcal" name="kcal" onChange={this.onChange} value={this.state.kcal} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputSteps" placeholder="steps" name="steps" onChange={this.onChange} value={this.state.steps} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function getSport(array) {
    const options = [];
    if (array) {
        array.forEach(function (element) {
            options.push(<options key={element.id} value={element.id}>{element.name}</options>)
        });
        return options;
    }
}


function getOptions(start, end) {
    const options = [];

    for (let i = start; i <= end; i++) {
        options.push(<option key={i}>{i}</option>)
    }

    return options;
}

const newWorkout = gql`
  mutation AddNewWorkout($time: int, $value: int)
  {  createNewWorkout(
      time: $time,
      value: $value,
    )
    {
      time
      value
    }
  }
`

export default AddButton;