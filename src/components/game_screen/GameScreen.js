import React, {Component} from 'react';
import Header from '../layout/Header';
import {words} from "../../utils/words.js";

//<button className="button" onClick={this.startGame}>Start</button>
class GameScreen extends Component {
    constructor(props) {
        super(props);
        console.log("\tGameScreen constructor");
        this.state = {
            activeWord: this.getWord(),
            activeLetters: [],
            wordsCorrect: 0,
            timer: 0,
        }
      }

    componentDidMount = () => {
        console.log("\tGameScreen component did mount");
    }

    componentWillUnmount = () => {
        console.log("\tGameScreen component will unmount");
    }

    handleGoHome = () => {
        console.log("handleGoHome");
        this.props.goToHomeCallback();
    }

    getWord = () => {
        let index = Math.floor(Math.random() * words.length);
        let currentWord = words[index];
        return currentWord;
    }

    render() {
        console.log("\tGameScreen render");
        return (
        <div className="App"  style={{textAlign: "center", padding:10, margin: 10}}>
            <Header/>
        <h3>{this.state.activeWord}</h3>
            <button className="button" onClick={this.handleGoHome} style={{ cursor: "pointer", margin: 10}}>PLAY AGAIN</button>
        </div>
        );
  }
}

export default GameScreen;