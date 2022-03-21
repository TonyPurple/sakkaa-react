import React, {Component} from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

class App extends Component {
  state = {
    clubs: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          サッカー　Sakkaa
          <nav>
            <NavLink exact to='/'>CLUBS LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD CLUB</NavLink>
          </nav>
        </header>
        <main>
        <h1>test</h1>
        </main>
      </div>
    );
  }
}

export default App; 
