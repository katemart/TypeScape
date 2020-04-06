import React, {Component} from 'react';
import Header from '../layout/Header';
import {words} from '../../utils/words.js';
import monster_easy from '../layout/images/monster_1.gif';
import monster_medium from '../layout/images/monster_2.gif';
import monster_hard from '../layout/images/monster_3.gif';
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
            score: 0,
            health: 100,
            time: this.props.time,
            isPlaying: true, 
            status: Status.DEFAULT,
            image: this.getMonster()
        };
    }

    componentDidMount = () => {
        this.countInterval = setInterval(this.countdown.bind(this), 1000);
        this.statusInterval = setInterval(this.checkStatus.bind(this), 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.countInterval);
        clearInterval(this.statusInterval);
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
            clearInterval(this.countInterval);
        }
    }

    checkStatus = () => {
        if(this.state.time > 0 && this.state.health === 0) {
            this.setState({
                status: Status.WINNER,
                isPlaying: false
            })
        } else if(this.state.time <= 0 && this.state.health > 0){
            this.setState({
                status: Status.LOSER,
                isPlaying: false
            })
        } 
    }

    getMonster () {
        let time = this.props.time;
        if(time === "30") {
            return monster_hard;
        } else if(time === "60") {
            return monster_medium;
        } else {
            return monster_easy;
        }
    }

    calculateHealth = () => {
        let health = this.state.health;
        if(this.state.activeWord.length <= 5 && health > 5) {
            return health - 5;
        } else if((this.state.activeWord.length > 5 && this.state.activeWord.length <= 10) && health > 10) {
            return health - 10;
        } else if(this.state.activeWord.length > 10 && health > 20) {
            return health - 20;
        } else {
            health = 0;
            return health;
        }
    }

    calculateScore = () => {
        let score = this.state.score;
        if(this.state.activeWord.length <= 5) {
            return score + 5;
        } else if(this.state.activeWord.length <= 8) {
            return score + 10;
        } else {
            return score + 15;
        }
    }

    checkWord = (e) => {
        if(e.target.value.toUpperCase() === this.state.activeWord) {
            this.setState({
                activeWord: this.getWord(),
                score: this.calculateScore(),
                health: this.calculateHealth()
            })
            e.target.value = "";
        } 
    }

    render() {
        switch(this.state.isPlaying) {
            case true:
                return (
                    <div style={{textAlign: "center", padding: 10, margin: 10}}>
                        <Header goToHomeCallback={this.handleGoHome}/>
                        <div>
                            <h2>{"TIME: " + this.state.time + "\tSCORE: " + this.state.score}</h2>
                        </div>
                        <br/>
                        <img src={this.state.image} style={{height:250}} alt=""/>
                        <HealthBar width={this.state.health}/>
                        <h1 style={{fontSize: 50}}>{this.state.activeWord}</h1>
                        <div style={{padding: 20}}>
                            <input 
                                className="word-input"
                                type="text" 
                                placeholder="Start typing..." 
                                style={{textTransform: "uppercase"}} 
                                onInput={this.checkWord}
                                autoFocus
                             />
                         </div>
                    </div>
                );
            case false:
                return (
                    <div style={{textAlign: "center", padding: 5, margin: 5}}>
                        <Header goToHomeCallback={this.handleGoHome}/>
                        <div>
                            <h1>GAME OVER!</h1>
                            <h2>YOU HAVE {this.state.status} THE GAME.</h2>
                            <h3>FINAL SCORE: {this.state.score}</h3>
                        </div>
                    <div style={{textAlign: "center", padding:10, margin: 10}}>
                        <button className="button" onClick={this.handleGoHome} 
                        style={{fontSize: 30, cursor: "pointer", margin: 10}}>PLAY AGAIN</button>
                    </div>
                </div>
                );
            default:
                return <div></div>
        }
        
  }
}

export default MatchScreen;