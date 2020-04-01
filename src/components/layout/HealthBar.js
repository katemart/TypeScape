import React, {Component} from 'react';

class HealthBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 100
        }
    }

    render() {
        return (
            <div style={{padding:10}}>
                <div className="health-bar">
                    <div style={{width: this.state.percentage + "%", height: "15px", backgroundColor: "#0077b3"}}/>
                </div>
            </div>
        )
      }
}

export default HealthBar;