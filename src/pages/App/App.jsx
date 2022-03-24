import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import * as messageAPI from '../../services/messages-api'
import LandingPage from '../LandingPage/LandingPage'
import MessageBoard from '../MessageBoard/MessageBoard'
import MessagePost from "../MessagePost/MessagePost";
import ProfilePage from "../Profile/Profile";
import PlayerSearch from "../PlayerSearch/PlayerSearch";

class App extends Component {
  constructor(){
    super();
    this.state = {
    user: authService.getUser(),
    messages: [],
  }};

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  handleMessagePost = async newMessageData => {
    const newMessage = await messageAPI.create(newMessageData);
    newMessage.postedBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      messages: [...state.messages, newMessage]
    }), () => this.props.history.push('/messages'));
  }

  async componentDidMount() {
    const messages = await messageAPI.getAll();
    this.setState({ messages })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route exact path='/' render={() =>
          <LandingPage />
        } />
        <Route exact path='/messages' render={() =>
          <MessageBoard 
          messages = {this.state.messages}
          user={this.state.user}
          />
        } />
        <Route exact path='/messages/add' render={() =>
          <MessagePost 
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />
        } />
        <Route exact path='/profile' render={() =>
          <ProfilePage
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />
        } />
        <Route exact path='/players' render={() =>
          <PlayerSearch
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />
        } />
      </>
    );
  }
}

export default App;
