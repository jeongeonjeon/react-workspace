import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';
import Test from './Test';

function getTime() {

    const element = (
        <div>
            <h2>현재시간</h2>
            <h2> { new Date().toLocaleTimeString() } </h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(getTime, 1000);

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Test />, document.getElementById('root'));
// ReactDOM.render(<App2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
