import React, { Component } from 'react';
//import Sound from 'react-sound';
import Header from '../layout/Header';
import background from '../layout/sounds/home.mp3';

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

  difficultyClick = (e) => {
    const difficulty = e.target.value;
    this.props.setDifficulty(difficulty);
  }

  render() {
    return (
      <div className="App" style={{ padding: 10, margin: 15 }}>
        <audio id="music" autoPlay loop>
          <source type="audio/mp3" src={background} />
        </audio>
        <div style={{ textAlign: "center" }}>
          <Header />
        </div>
        <div style={{ margin: "auto", width: "80%" }}>
          <div>
            <span>
              PLAY MODES:
              <br />
              Match mode:
              Defeat the monster by typing out as many words as you can before the time runs out.
              <br />
              Freestyle mode:
              Type as many words as you can before time runs out.
            </span>
          </div>
          <br />
          <form>
            <span>
              SELECT A DIFFICULTY LEVEL:
              <br />
              If no level is chosen, the level will be set to "EASY" by default.
            </span>
            <br />
            <label>
              <input name="level" type="radio" value={this.props.Levels.EASY} onClick={this.difficultyClick}></input>
                &nbsp;EASY (120 seconds)
              </label>
            <label style={{ padding: 10 }}>
              <input name="level" type="radio" value={this.props.Levels.MEDIUM} onClick={this.difficultyClick}></input>
                &nbsp;MEDIUM (60 seconds)
            </label>
            <label style={{ padding: 10 }}>
              <input name="level" type="radio" value={this.props.Levels.HARD} onClick={this.difficultyClick}></input>
                &nbsp;HARD (30 seconds)
            </label>
          </form>
          <br />
          <div>
            <span>SELECT A PLAY MODE TO START GAME:</span>
            <br></br>
            <button className="button" onClick={this.handleMatchGame} style={{ fontSize: 30, cursor: "pointer" }}>MATCH</button>
            <button className="button" onClick={this.handleFreestyleGame} style={{ fontSize: 30, cursor: "pointer", margin: 10 }}>FREESTYLE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;