import './App.css';
import React, {Component} from 'react';
import HomeScreen from './components/home_screen/HomeScreen';
import MatchScreen from './components/game_screen/MatchScreen';
import FreestyleScreen from './components/game_screen/FreestyleScreen';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  MATCH_SCREEN: "MATCH_SCREEN",
  FREESTYLE_SCREEN: "FREESTYLE_SCREEN"
}

const Levels = {
  EASY: 120,
  MEDIUM: 60,
  HARD: 30
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: AppScreen.HOME_SCREEN
    };
    this.time = Levels.EASY;
  }

  goToHomeScreen = () => {
    this.setState({
      currentScreen: AppScreen.HOME_SCREEN,
    });
  }

  goToMatchScreen = () => {
    this.setState({
      currentScreen: AppScreen.MATCH_SCREEN,
    });
  }

  goToFreestyleScreen = () => {
    this.setState({
      currentScreen: AppScreen.FREESTYLE_SCREEN,
    });
  }

  setDifficulty = (difficulty) => {
    this.time = difficulty;
  }

  render() {
    switch (this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
          goToHomeCallback={this.goToHomeScreen}
          startMatchCallback={this.goToMatchScreen}
          startFreestyleCallback={this.goToFreestyleScreen}
          setDifficulty={this.setDifficulty}
          Levels={Levels}
        />;
      case AppScreen.MATCH_SCREEN:
        return <MatchScreen 
          goToHomeCallback={this.goToHomeScreen}
          time={this.time}
        />;
      case AppScreen.FREESTYLE_SCREEN:
        return <FreestyleScreen 
          goToHomeCallback={this.goToHomeScreen}
          time={this.time}
        />;
      default:
        return <div></div>
    };
  }
}

export default App;
