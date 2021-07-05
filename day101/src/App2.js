import React, { Component } from 'react';

import './App.css';

class App2 extends Component {
    
    
    render() {
        const msg = 'Hello 리액트'
        const myStyle = {
            color: 'blue', 
            backgroundColor: 'pink'
          };
        const type ='S';

        return (
            // React.createElement('div', {className: 'myCss'}, "Hello React!!")

            React.createElement('div', null, [
                React.createElement('hr'),
                React.createElement('h2', null, 'hello'),
                React.createElement('h2', {className:'myCss'}, 'Hello'),
                React.createElement('h3', {style:myStyle}, msg),
                React.createElement('h1',{style:myStyle}, type ==='S' ? '관리자' : '일반유저'),
                React.createElement('hr')
            ])


        );

/* 
        return (
            <div className="myCss">
                Hello React
            </div>
        );
*/
    }
}

export default App2;