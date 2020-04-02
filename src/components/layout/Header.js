import React, {Component} from 'react';
import title from './images/title.png'

class Header extends Component {
  handleGoHome = () => {
    this.props.goToHomeCallback();
  }

      render() {
        return (
            <header>
                <img 
                  src={title} 
                  width={400} 
                  className="App-title" 
                  alt="title" 
                  style={{cursor: "pointer"}}
                  onClick={this.handleGoHome}/>
            </header>
        )
      }
}

export default Header;