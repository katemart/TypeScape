import React from 'react';
import title from '../images/title.png'

//<button className="button" onClick={this.startGame}>Start</button>
function Header() {
    return (
        <header>
            <img src={title} width={400} className="App-title" alt="title"/>
        </header>
    )
}

export default Header;