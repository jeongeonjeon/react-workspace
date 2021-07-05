import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class App extends Component {
  render() {
    
    let msg = "Hello";
    let myStyle = {
      color : "blue",
      // 'background-color' : "pink"
      backgroundColor : "pink"
    };
    let type='S';

    function checkUser(type){
      if(type === 'S')
        return '관리자';
      return '일반유저';
    }

    return (
      
      <Fragment>      {/* div 대신 가상의 그룹을 잡아주는 태그, 웹 브라우저가 해석한 후에는 보이지 않는 태그이다. */}
        <h2>{ checkUser(type) }</h2>
        <h2>{type === 'S' ? '관리자' : '일반유저' }님 환영합니다.</h2>
        <h3 className = "myCss"> 클래스 적용 </h3>
        <h1 style = {myStyle}> { msg } </h1>
        <h2>Hello React!!</h2>
        <Test />
      </Fragment>
/* 
      <>              { // Fragment생략한 태그, 되는 브라우저있고 안되는 브라우저있음  }
        <h2>Hello React!!</h2>
        <Test />
      </>
 */

    );
  }
}

export default App;       // 외부에서 <App />형태를 사용할 수 있게됨.
