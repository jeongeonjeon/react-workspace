import React, { Component } from 'react';

/**
 * 
 * props와 state의 가장 큰 차이
 * props : readonly
 * state : read & write
 * 
 * render() 내부에 setState()를 재정의하는 것은 위험
 */

class StateComponent extends Component {
/* 
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            age : this.props.age
        }
    }
 */
    state = {
        name : this.props.name,
        age : this.props.age
    }
/* 
    // componentDidMount(){
    componentDidUpdate(UpdateData){
        this.props.handleToUpdate(this.state.name);
    }
 */
    render() {
        // console.log("render : "+ this.setState);
        
        // this.state.name ="윤길순";
        // this.state.age += 1;
        return (
            <div>
                <h2>StateComponent...</h2>
                이름 : {this.state.name}<br />
                나이 : {this.state.age}<br />

                <button onClick={() => {            // 삽입식 내부에 함수를 만들어 넣음
                                                    // 화살표함수를 써야만 this개념을 사용할 수 있음
                    
                    this.setState((prevState, props) => {
                        return {
                            name : '강길순',
                            age : prevState.age + 1
                        }
                    },() =>{
                        this.props.handleToUpdate(this.state.name);
                    });
                    /* 
                    this.setState((prevState, props) => {
                        console.log(prevState)      // 변경 값을 기억하고 있음
                        console.log(props)
                        return {
                            age : prevState.age + 1
                        }
                    });
                     */
                    /* 
                    this.setState((prevState,props) => {
                        this.props.handleToUpdate(this.state.name);

                    });
                     */

                    /* 
                    this.setState({                 
                        name : '강길순',
                        age : this.state.age + 1
                    });

                    this.setState({
                        age : this.state.age + 1    // 한번 더 age를 증가시키고 싶어도 setState는 한번에 모아서 처리하기 때문에
                    })                              // 원하는 결과가 나오지 않을 수 있다. 실제, age는 1씩 증가됨

                    if(this.state.age !== 15){
                        console.log('age 변경 완료');
                    }else{
                        console.log('age 변경이 아직 수행되지 않았습니다.');
                    }
                     */
                }}>데이터변경</button>
                
            </div>
        );
    }
}

export default StateComponent;