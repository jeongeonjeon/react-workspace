import React, { Component } from 'react';

// 함수형 컴포넌트 선언
function Title(props) {
    return (
        <h2>{props.title}</h2>
    );
}
 
function Time(props){
    return (
        <h2>{ props.time.toLocaleTimeString() }</h2>
    )
}

/* 
const Time = ({time}) => {
    return(
        <h2> { time.toLocaleTImeString() } </h2>
    )
}
*/
class ClockComponent extends Component {

    state ={
        time : this.props.time
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time : new Date()
            });
        },1000);

        setTimeout(()=>{
            clearInterval(this.timerId)
        },5000)
    }

    render() {
        return (
            <div>
                <h2>ClockComponent...</h2>
                <Title title={this.props.title} />
                {/* <Time time={this.props.time} /> */}
                <Time time={this.state.time} />
                {/* <h2>{this.props.title}</h2> */}
                {/* <h2>{this.props.time.toLocaleTimeString() }</h2> */}
            </div>
        );
    }
}

export default ClockComponent;