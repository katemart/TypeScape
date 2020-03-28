import React, {Component} from 'react';
//import title from '../images/title.png'
import Header from '../layout/Header';

//<button className="button" onClick={this.startGame}>Start</button>
class HomeScreen extends Component {
  render() {
    console.log("\tHomeScreen render");
    return (
      <div className="App"  style={{textAlign: "center", padding:10, margin: 10}}>
        <Header/>
        <p>Type as many words as you can before the time runs out.</p>
        <button className="button" style={{ cursor: "pointer", margin: 10}}>START GAME</button>
      </div>
    );
  }
}

export default HomeScreen;