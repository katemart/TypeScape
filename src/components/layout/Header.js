import React, {Component} from 'react';
import title from './images/title.png'

//<button className="button" onClick={this.startGame}>Start</button>
class Header extends Component {
    constructor() {
        super();
    
        console.log("Header constructed");
      }
    
      componentDidMount = () => {
        console.log("\tHeader component did mount");
      }
    
      componentWillUnmount = () => {
        console.log("\tHeader component will unmount");
      }

      render() {
        return (
            <header>
                <img src={title} width={400} className="App-title" alt="title"/>
            </header>
        )
      }
}

export default Header;