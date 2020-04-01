import React, {Component} from 'react';

class HealthBar extends Component {
    render() {
        return (
            <div style={{padding:10}}>
                <div className="health-bar">
                    <div style={{width: this.props.width + "%", height: "15px", backgroundColor: "#ff4d4d"}}/>
                </div>
            </div>
        )
      }
}

export default HealthBar;