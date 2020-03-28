import React, {Component} from 'react';
import './App.css';
import HomeScreen from './components/home_screen/HomeScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeScreen/>
      </div>
    );
  }
}

export default App;
