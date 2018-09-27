import React, { Component } from 'react';
import {} from 'react-bootstrap';
import $ from 'jquery';

class Alert extends Component{
    componentDidMount() {
     $(".close-alert").click(function(){
         var test = $(this).closest("div");
         test.hide();
     })
    }
    render(){
        return (
            <div className={this.props.type}>
                <h3>
                    {this.props.title}
                    <i className="fa fa-times close-alert"></i>
                </h3>
                     <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Alert;