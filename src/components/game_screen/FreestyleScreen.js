import React, { Component } from 'react';
import Header from '../layout/Header';
import { words } from '../../utils/words.js';
import keypress from '../layout/sounds/keypress.mp3';
import background from '../layout/sounds/game.mp3';
import ding from '../layout/sounds/correct.mp3';
import end from '../layout/sounds/end.mp3';

class FreestyleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeWord: this.getWord(),
            wordsCorrect: 0,
            charsCorrect: 0,
            time: this.props.time,
            wpm: 0,
            isPlaying: true
        };
    }

    componentDidMount = () => {
        this.backgroundAudio = document.getElementById("background");
        this.backgroundAudio.volume = 0.08;
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
        if (this.state.time < 1) {
            clearInterval(this.countInterval);
            this.setState({
                wpm: this.typingSpeed()
            })
        }
    }

    checkStatus = () => {
        if (this.state.time <= 0) {
            this.setState({
                isPlaying: false
            })
        }
    }

    checkWord = (e) => {
        if (e.target.value.toUpperCase() === this.state.activeWord) {
            this.setState({
                activeWord: this.getWord(),
                wordsCorrect: this.state.wordsCorrect + 1,
                charsCorrect: this.state.charsCorrect + this.state.activeWord.length
            })
            let correct = new Audio(ding);
            correct.volume = 0.1;
            correct.play();
            e.target.value = "";
        }
        let press = new Audio(keypress);
        press.volume = 0.4;
        press.play();
    }

    typingSpeed = () => {
        //typing speed = num of correct CPM divided by 5 (divided by num of mins)
        return Math.floor(this.state.charsCorrect / 5);
    }

    render() {
        switch (this.state.isPlaying) {
            case true:
                return (
                    <div>
                        <div style={{ textAlign: "center", padding: 10, margin: 10 }}>
                            <audio id="background" autoPlay loop>
                                <source type="audio/mp3" src={background} />
                            </audio>
                            <Header />
                            <div className="col s4">
                                <h2>{"TIME: " + this.state.time + "\tCORRECT WORDS: " + this.state.wordsCorrect}</h2>
                            </div>
                            <h1 style={{ fontSize: 50 }}>{this.state.activeWord}</h1>
                            <div style={{ padding: 20 }}>
                                <input
                                    className="word-input"
                                    type="text"
                                    placeholder="Start typing..."
                                    style={{ textTransform: "uppercase" }}
                                    onInput={this.checkWord}
                                    autoFocus
                                />
                                <br />
                                <br />
                                <button className="button" onClick={this.handleGoHome} style={{ fontSize: 20, cursor: "pointer" }}>QUIT GAME</button>
                            </div>
                        </div>
                    </div>
                );
            case false:
                return (
                    <div>
                        <div style={{ textAlign: "center", padding: 5, margin: 5 }}>
                            {this.backgroundAudio.pause()}
                            <audio id="end" autoPlay loop>
                                <source type="audio/mp3" src={end} />
                            </audio>
                            <Header />
                            <div>
                                <h1>GAME OVER!</h1>
                                <h3>TOTAL WORDS TYPED: {this.state.wordsCorrect}</h3>
                                <h3>WORDS PER MINUTE: {this.state.wpm}</h3>
                                <h3>CHARACTERS PER MINUTE: {this.state.charsCorrect}</h3>
                            </div>
                        </div>
                        <div style={{ textAlign: "center", padding: 10, margin: 10 }}>
                            <button className="button" onClick={this.handleGoHome}
                                style={{ fontSize: 30, cursor: "pointer", margin: 10 }}>PLAY AGAIN</button>
                        </div>
                    </div>
                );
            default:
                return <div></div>
        }

    }
}

export default FreestyleScreen;