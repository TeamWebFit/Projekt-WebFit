import React, { Component } from 'react';
import {} from 'react-bootstrap';
import $ from 'jquery';

// ===================
// Alert Component
// Properties: type[alertgrad, alertyellow, alertblue, alertred], title, message
// ===================

class Alert extends Component{
    componentDidMount() {
     $(".close-alert").click(function(){
         var alertelement = $(this).closest("div");
         alertelement.hide();
     })
     $(function(){
        //pulse
        $('.animate-clickPulse').click(function(){
          animate(this, 'pulse');
  
          return false;
        });
        $('.animate-hoverPulse').hover(function(){
          animate(this, 'pulse');
  
          return false;
        });
  
        //shake
        $('.animate-clickShake').click(function(){
          animate(this, 'shake');
  
          return false;
        });
        $('.animate-hoverShake').hover(function(){
          animate(this, 'shake');
  
          return false;
        });
  
        //animate
        function animate(elem, anim){
          $(elem).addClass('animated '+ anim);
          var wait = setTimeout(function(){
            $(elem).removeClass('animated '+ anim);
          }, 1000);
        }
      })//end animation 
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