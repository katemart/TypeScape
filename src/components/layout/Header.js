import React, {Component} from 'react';
import title from './images/title.png'

class Header extends Component {
      render() {
        return (
            <header>
                <img 
                  src={title} 
                  width={400} 
                  className="App-title" 
                  alt="title" />
            </header>
        )
      }
}

export default Header;