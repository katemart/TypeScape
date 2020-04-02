import React, {Component} from 'react';
import Header from '../layout/Header';

class HomeScreen extends Component {
  handleMatchGame = () => {
    this.props.startMatchCallback();
  }

  handleFreestyleGame = () => {
    this.props.startFreestyleCallback();
  }

  handleGoHome = () => {
    this.props.goToHomeCallback();
}
  
  render() {
    return (
      <div className="App" style={{textAlign: "center", padding:10, margin: 10}}>
        <Header goToHomeCallback={this.handleGoHome}/>
        <div style={{padding: 10}}>
          <span>Match mode:
            Defeat the monster by typing out as many<br/>words as you can before the time runs out.</span>
            <br/><br/>
          <span>Freestyle mode:
            Type as many words as you can in a minute.
          </span>
        </div>
        <div style={{padding: 10}}>
          <button className="button" onClick={this.handleMatchGame} style={{fontSize: 30, cursor: "pointer", margin: 10}}>MATCH</button>
          <button className="button" onClick={this.handleFreestyleGame} style={{fontSize: 30, cursor: "pointer", margin: 10}}>FREESTYLE</button>
        </div> 
      </div>
    );
  }
}

export default HomeScreen;