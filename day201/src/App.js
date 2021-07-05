import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropComponent from './PropComponent';
import StateComponent from './StateComponent';
import ClockComponent from './ClockComponent';

class App extends Component {
  
  name = '홍길동';
  age = 15;
  birth = {
    year : 1999,
    month : 12,
    day : 23
  }
  
  state = {
    name : this.name,
    age : this.age
  }

    constructor(props){
      super(props);
      this.handleToUpdate = this.handleToUpdate.bind(this);
    }

    handleToUpdate(updateData){
    // console.log(this.setState)
    // console.log('App handleToUpdate 호출..', updateData);
    this.setState({
      name : updateData
    });
  }

  render() {
  
    return (
      <div>
        name : {this.name} <br />
        age : {this.age} <br />
        state name : {this.state.name} <br />
        state age : {this.state.age} <br />
        <StateComponent name={this.name} age={this.age} handleToUpdate={this.handleToUpdate} />
        {/* <PropComponent name="홍길동" age='10'/> */}
        <PropComponent name={this.name} age={this.age} birth={this.birth} />
        <ClockComponent title="현재시간" time={new Date()} />
      </div>
    );
  }
}

export default App;
