import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StateComponent from './StateComponent';

function MyTag(props){
    return (<div>
                <h2>MyTag</h2>
                <h4>Name : { props.name }</h4>
            </div>);
}

// ReactDOM.render(<MyTag name="홍길동" />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
