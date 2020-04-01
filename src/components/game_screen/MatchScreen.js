import React, {Component} from 'react';
import Header from '../layout/Header';
import {words} from '../../utils/words.js';
import monster from '../layout/images/goop.gif';
import monster_final from '../layout/images/goop_end.png';
import HealthBar from '../layout/HealthBar';

const Status = {
    DEFAULT: "",
    WINNER: "WON",
    LOSER: "LOST"
}

class MatchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeWord: this.getWord(),
            activeLetters: [],
            score: 0,
            health: 100,
            time: 10,
            isPlaying: true, 
            status: Status.DEFAULT
        }
      }

    componentDidMount = () => {
        this.intervalId = setInterval(this.countdown.bind(this), 1000);
        document.addEventListener("keydown", this.handleKeyPress);
        setInterval(this.checkStatus.bind(this), 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId);
    }

    handleGoHome = () => {
        this.props.goToHomeCallback();
    }

    getWord = () => {
        let index = Math.floor(Math.random() * words.length);
        let currentWord = words[index];
        return currentWord;
    }

    countdown = () => {
        this.setState({
            time: this.state.time - 1
        })
        if(this.state.time < 1) {
            clearInterval(this.intervalId);
        }
    }

    checkStatus = () => {
        if(this.state.time >= 0 && this.state.health === 0) {
            document.removeEventListener("keydown", this.handleKeyPress);
            this.setState({
                status: Status.WINNER,
                isPlaying: false
            })
        } else if(this.state.time <= 0 && this.state.health > 0){
            document.removeEventListener("keydown", this.handleKeyPress)
            this.setState({
                status: Status.LOSER,
                isPlaying: false
            })
        }
    }

    handleKeyPress = (e) => {
        e.preventDefault();
        // handle backspace and delete (both work the same way on mac)
        if(e.which === 46 || e.which === 8){
            this.setState({
                activeLetters: this.state.activeLetters.slice(0,-1)
            })
        } 
        // handle other keys
        if(e.which >= 65 && e.which <= 90) {
            let char = String.fromCharCode(e.which);
            let word = this.state.activeWord;
            let typed = this.state.activeLetters;
            typed.push(char);
            if(this.checkStrings(typed, word)) {
                this.setState({
                    activeWord: this.getWord(),
                    activeLetters: [],
                    score: this.state.score + 10,
                    health: this.state.health - 50
                })
            } else {
                this.setState({
                    activeLetters: typed
                })
            }
        }
    }

    checkStrings(s1, s2) {
        if(s1.length !== s2.length) 
            return false;
        for(let i = s1.length; i--;) {
            if(s1[i] !== s2[i]) 
                return false;
        }
        return true;
    }

    render() {
        switch(this.state.isPlaying) {
            case true:
                return (
                    <div className="App">
                        <div style={{textAlign: "center", padding:10, margin: 10}}>
                            <Header/>
                            <h2>{this.state.activeWord}</h2>
                            <img src={monster} width={250} className="App-title" alt="title"/>
                            <HealthBar width={this.state.health}/>
                            <div className="col s4">
                                <h4>{"TIME: " + this.state.time + "\tSCORE: " + this.state.score}</h4>
                            </div>
                        </div>
                    </div>
                );
            case false:
                return (
                    <div>
                        <div style={{textAlign: "center", padding: 5, margin: 5}}>
                            <Header/>
                            <h2>{this.state.activeWord}</h2>
                            <img src={monster_final} width={250} className="App-title" alt="title"/>
                            <div className="col s4">
                                <h4>GAME OVER!</h4>
                                <h5>YOU HAVE {this.state.status} THE GAME.</h5>
                                <h6>FINAL SCORE: {this.state.score}</h6>
                            </div>
                        </div>
                        <div style={{textAlign: "center", padding:10, margin: 10}}>
                            <button className="button" onClick={this.handleGoHome} style={{fontSize: 30, cursor: "pointer", margin: 10}}>PLAY AGAIN</button>
                        </div>
                    </div>
                );
            default:
                return <div></div>
        }
        
  }
}

export default MatchScreen;