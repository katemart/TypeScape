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

difficultyClick = (e) => {
  const difficulty = e.target.value;
  this.props.setDifficulty(difficulty);
}
  
  render() {
    return (
      <div className="App" style={{padding:10, margin: 10}}>
        <div style={{textAlign: "center"}}>
        <Header goToHomeCallback={this.handleGoHome}/>
        </div>
        
        <div style={{padding: 10}}>
          <span>
            PLAY MODES:
            <br/>
            Match mode:
            Defeat the monster by typing out as many words as you can before the time runs out.
            <br/>
            Freestyle mode:
            Type as many words as you can in a minute.
          </span>
        </div>
        <span style={{padding: 10}}>SELECT A DIFFICULTY LEVEL: </span>
        <form>
            <label style={{padding:10}}>
              <input name="level" type="radio" value={this.props.Levels.EASY} onClick={this.difficultyClick}></input>
              &nbsp;EASY (120 seconds)
            </label>
            <label style={{padding:10}}>
              <input name="level" type="radio" value={this.props.Levels.MEDIUM} onClick={this.difficultyClick}></input>
              &nbsp;MEDIUM (60 seconds)
            </label>
            <label style={{padding:10}}>
              <input name="level" type="radio" value={this.props.Levels.HARD} onClick={this.difficultyClick}></input>
              &nbsp;HARD (30 seconds)
            </label>
        </form>
        <div style={{padding: 10}}>
          <span>CLICK A GAME MODE TO START GAME:</span>
          <br></br>
          <button className="button" onClick={this.handleMatchGame} style={{fontSize: 30, cursor: "pointer", margin: 10}}>MATCH</button>
          <button className="button" onClick={this.handleFreestyleGame} style={{fontSize: 30, cursor: "pointer", margin: 10}}>FREESTYLE</button>
        </div> 
      </div>
    );
  }
}

export default HomeScreen;