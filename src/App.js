import './App.css';
import React, {Component} from 'react';
import HomeScreen from './components/home_screen/HomeScreen';
import GameScreen from './components/game_screen/GameScreen';


// THESE ARE THE App SCREENS
const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  GAME_SCREEN: "GAME_SCREEN"
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor");
    this.state = {
      currentScreen: AppScreen.HOME_SCREEN,
    }
  }

  componentDidMount = () => {
    console.log("App did mount");
  }

  componentWillUnmount = () => {
    console.log("App will unmount");
  }

  goToHomeScreen = () => {
    this.setState({
      currentScreen: AppScreen.HOME_SCREEN,
    });
  }

  goToGameScreen = () => {
    this.setState({
      currentScreen: AppScreen.GAME_SCREEN,
    });
  }

  render() {
    switch (this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
          startGameCallback={this.goToGameScreen}
        />;
      case AppScreen.GAME_SCREEN:
        return <GameScreen 
          goToHomeCallback={this.goToHomeScreen}
        />;
      default:
        return <div></div>
    };
  }
}

export default App;
