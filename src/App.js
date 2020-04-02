import './App.css';
import React, {Component} from 'react';
import HomeScreen from './components/home_screen/HomeScreen';
import MatchScree from './components/game_screen/MatchScreen';
import FreestyleScreen from './components/game_screen/FreestyleScreen';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  MATCH_SCREEN: "MATCH_SCREEN",
  FREESTYLE_SCREEN: "FREESTYLE_SCREEN"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: AppScreen.HOME_SCREEN
    }
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

  render() {
    switch (this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
          goToHomeCallback={this.goToHomeScreen}
          startMatchCallback={this.goToMatchScreen}
          startFreestyleCallback={this.goToFreestyleScreen}
        />;
      case AppScreen.MATCH_SCREEN:
        return <MatchScree 
          goToHomeCallback={this.goToHomeScreen}
        />;
      case AppScreen.FREESTYLE_SCREEN:
        return <FreestyleScreen 
          goToHomeCallback={this.goToHomeScreen}
        />;
      default:
        return <div></div>
    };
  }
}

export default App;
