import React, {Component} from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage.jsx'

class App extends Component {
  state = {
    user: null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = window.localStorage.getItem('token')
    if (token) {

      let userDoc = JSON.parse(window.atob(token.split('.')[1])).user 
      this.setState({user: userDoc})      
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          サッカー　Sakkaa
          </header>
          <br />
          { this.state.user ? 
            <Switch>
          <nav>
            <NavLink exact to='/'>CLUBS LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD CLUB</NavLink>
          </nav>
          <Redirect to="/orders" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
        </main>
    );
  }
}

export default App;
