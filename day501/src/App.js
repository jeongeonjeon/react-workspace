import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        {/* 만약 '/'라면 Home.js를 띄워라*/}
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page1/:param" component={Page1} />
        <Route exact path="/page1/:param/:param2" component={Page1} />
        <Route exact path="/page1?" component={Page1} />
      </div>
    );
  }
}

export default App;
