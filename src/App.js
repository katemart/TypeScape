import './App.css';
import React, {Component} from 'react';
import HomeScreen from './components/home_screen/HomeScreen';
import MatchScreen from './components/game_screen/MatchScreen';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  MATCH_SCREEN: "MATCH_SCREEN"
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

  render() {
    switch (this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
          startMatchCallback={this.goToMatchScreen}
          startFreestyleCallback={this.goToFreestyleScreen}
        />;
      case AppScreen.MATCH_SCREEN:
        return <MatchScreen 
          goToHomeCallback={this.goToHomeScreen}
        />;
      default:
        return <div></div>
    };
  }
}

export default App;
