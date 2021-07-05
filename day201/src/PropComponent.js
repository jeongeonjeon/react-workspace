import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropComponent extends Component {

    static defaultProps = {
        phone : '010-5555-5555'
    }

    static propTypes = {
        age : PropTypes.number.isRequired
    }

    /* 
    //리액트의 생성자 기본 원형, 생략가능
    constructor(props){
        super(props);
    }
    */
    constructor(props){
        super(props);
        console.log(this.props);
        console.log(typeof this.props.name);
        console.log(typeof this.props.age);
        console.log(typeof this.props.birth);
        this.myAge = this.props.age + 1;
    }
    render() {
        return (
            <div>
                <hr />
                <h2>PROPCOMPONENT..</h2>
                내 이름은 {this.props.name} 입니다.<br />
                내 나이는 {this.myAge}살 입니다.<br />
                내 생일은 {this.props.birth.year}년 {this.props.birth.month}월 {this.props.birth.day}일<br />
                내 전화번호는 {this.props.phone}입니다.
                <hr />
            </div>
        );
    }
}
/* 
//부모에서 날라오는 값이 없을 경우
// static defaultProps보다 우선순위 높음
PropComponent.defaultProps = {
    phone : '010-5555-8888'
}
 */
export default PropComponent;