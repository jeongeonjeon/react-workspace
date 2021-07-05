import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventComponent from './EventComponent';
import DisplayArrayComponent from './DisplayArrayComponent';

class App extends Component {
  render() {
    return (
      <div>
        <DisplayArrayComponent />
      </div>
    );
  }
}

export default App;
