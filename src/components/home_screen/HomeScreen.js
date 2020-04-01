import React, {Component} from 'react';
//import title from '../images/title.png'
import Header from '../layout/Header';

//<button className="button" onClick={this.startGame}>Start</button>
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log("\tHomeScreen constructor");
  }

  handleStartGame = () => {
    console.log("handleStartGame");
    this.props.startGameCallback();
  }
  
  render() {
    console.log("\tHomeScreen render");
    return (
      <div className="App" style={{textAlign: "center", padding:10, margin: 10}}>
        <Header/>
        <p style={{fontSize: 20, padding: 30}}>
          Defeat the monster by typing as many words<br/>as you can before the time runs out.
        </p>
        <button className="button" onClick={this.handleStartGame} style={{ cursor: "pointer", margin: 10}}>START GAME</button>
      </div>
    );
  }
}

export default HomeScreen;