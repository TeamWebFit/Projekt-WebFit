import React, { Component } from 'react';

class StepBadgesWeekly extends Component {
    render() {
        return (
            <div className="container StepBadgesWeekly">
                <div className="badgesStatistiken">
                    <i class="fa fa-trophy"></i>
                    <div className="badgesStatistikentext">5.000 Schritte</div>
                </div>
                <div className="badgesStatistiken">
                    <i class="fa fa-trophy"></i>
                    <div className="badgesStatistikentext">10.000 Schritte</div>
                </div>
            </div>
        )
    }
}

export default StepBadgesWeekly;