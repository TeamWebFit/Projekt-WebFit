import React, { Component } from 'react';
import {} from 'react-bootstrap';
import $ from 'jquery';

// Properties: type, title, message

class Alert extends Component{
    componentDidMount() {
     $(".close-alert").click(function(){
         var alertelement = $(this).closest("div");
         alertelement.hide();
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