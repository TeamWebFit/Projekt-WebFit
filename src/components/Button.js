import React, { Component } from 'react';
import {} from 'react-bootstrap';

// ===================
// Button Component
// Properties: type[btn-basic, btn-black, btn-ghost, btn-blueline, btn-redline, btn-orangeline, btn-blackline, btn-whiteline, btn-round], message, onClick
// ===================

class Button extends Component{
    render(){
        return (
            <div className={this.props.type} onClick={this.props.onClick}>
                {this.props.message}
            </div>
        )
    }
}

export default Button;