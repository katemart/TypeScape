import React, {Component} from 'react';
import Header from '../layout/Header';

class HomeScreen extends Component {
  handleMatchGame = () => {
    this.props.startMatchCallback();
  }

  handleFreestyleGame = () => {
    this.props.startFreestyleCallback();
  }
  
  render() {
    return (
      <div className="App" style={{textAlign: "center", padding:10, margin: 10}}>
        <Header/>
        <p style={{fontSize: 20, padding: 30}}>
          Defeat the monster by typing out as many<br/>words as you can before the time runs out.
        </p>
        <button className="button" onClick={this.handleMatchGame} style={{fontSize: 30, cursor: "pointer", margin: 10}}>MATCH</button>
      </div>
    );
  }
}

export default HomeScreen;