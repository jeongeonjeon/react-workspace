import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Board from './pages/Board';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Menu from './pages/Menu';
import Boardwrite from './components/Boardwrite';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/board/post" component={Boardwrite} />
      </div>
    );
  }
}

export default App;
