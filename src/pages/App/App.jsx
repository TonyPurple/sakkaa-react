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
import Replies from '../Replies/Replies'
import MessageEdit from '../MessageEdit/MessageEdit'
import ProfilePage from "../Profile/Profile";
import CountryPage from "../CountryPage/CountryPage";

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

  handleUpdateMessage = async updatedMessageData => {
    const updatedMessage = await messageAPI.update(updatedMessageData);
    const newMessagesArray = this.state.messages.map(m => 
      m._id === updatedMessage._id ? updatedMessage : m
    );
    this.setState(
      {messages: newMessagesArray},
      () => this.props.history.push('/messages')
    );
  }


  handleDeleteMessage = async id => {
    if (authService.getUser()) {
      await messageAPI.deleteOne(id);
      this.setState(state => ({
        messages: state.messages.filter(m => m._id !== id)
      }), () => this.props.history.push('/messages'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleAddReply = async (updatedMessageData, messageId) => {
    const updatedMessage = await messageAPI.reply(updatedMessageData, messageId);
    const newMessagesArray = this.state.messages.map(m =>
      m._id === updatedMessage._id ? updatedMessage : m
    );
    this.setState(
      { messages: newMessagesArray },
      () => this.props.history.push('/messages')
    );
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
          handleDeleteMessage = {this.handleDeleteMessage}
          messages = {this.state.messages}
          user={this.state.user}
          />
        } />
        <Route 
          exact path='/replies' 
          render={({ location }) =>
            authService.getUser() ?
          <Replies 
            handleDeleteMessage = {this.handleDeleteMessage}
            handleAddReply={this.handleAddReply}
            messages = {this.state.messages}
            location={location}
            users={this.state.users}
            user={this.state.user}
          />:
          <Redirect to='/login' />
        } />
        <Route
          exact path='/editmessage' render={({ location }) =>
            authService.getUser() ?
              <MessageEdit
                handleUpdateMessage={this.handleUpdateMessage}
                location={location}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
          } />
        <Route 
          exact path='/messages/add' 
          render={() =>
            authService.getUser() ?
          <MessagePost
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />:
          <Redirect to='/login' />
        } />
        <Route exact path='/profile' render={() =>
          <ProfilePage
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />
        } />
        <Route exact path='/countries' render={() =>
          <CountryPage
            handleMessagePost={this.handleMessagePost}
            user={this.state.user}
          />
        } />
      </>
    );
  }
}

export default App;
