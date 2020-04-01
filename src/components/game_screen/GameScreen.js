import React, {Component} from 'react';
import Header from '../layout/Header';
import {words} from "../../utils/words.js";
import monster from '../layout/images/goop.gif';
import HealthBar from '../layout/HealthBar';

class GameScreen extends Component {
    constructor(props) {
        super(props);
        console.log("\tGameScreen constructor");
        this.state = {
            activeWord: this.getWord(),
            activeLetters: [],
            wordsCorrect: 0,
            timer: 0
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

    countdown = () => {
        
    }

    getWord = () => {
        let index = Math.floor(Math.random() * words.length);
        let currentWord = words[index];
        return currentWord;
    }

    render() {
        console.log("\tGameScreen render");
        return (
        <div className="App">
            <div style={{textAlign: "center", padding:10, margin: 10}}>
                <Header/>
                <h2>{this.state.activeWord}</h2>
                <img src={monster} width={250} className="App-title" alt="title"/>
                <HealthBar/>
                <div className="col s4">
                    <h4>{"TIME: " + this.state.timer}</h4>
                </div>
            </div>
            <div style={{textAlign: "center", padding:10, margin: 10}}>
                <button className="button" onClick={this.handleGoHome} style={{cursor: "pointer", margin: 10}}>PLAY AGAIN</button>
            </div>
        </div>
        );
  }
}

export default GameScreen;