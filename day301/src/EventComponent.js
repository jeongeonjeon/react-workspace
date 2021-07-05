import React, { Component } from 'react';
import './myClass.css'

class EventComponent extends Component {

    state = {
        name: '',
        phone: '',
        validate : true,
        clicked : false
    }

    showData = () => {
        alert('이름:' + this.state.name+'\n전화번호:' + this.state.phone);
        
        //validation check...()
        this.setState({
            validate : !this.state.phone.match(/^010/),
            clicked : true
        },() => {
            if(this.state.validate)
                this.inputPhone.focus();
        });
    }

    changeData = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value,
            clicked : false
        })
        
    }

    constructor(props) {
        super(props);
        // this.state ={
        //   name : ''
        //   phone : ''
        // }
        this.showData = this.showData.bind(this);
    }
/* 
    showData() {
        // console.log(this);
        alert('이름:' + this.state.name+'\n전화번호:' + this.state.phone);
    }
 */ 
    render() {
        const {clicked, validate} = this.state;
        return (
            <div>
                <h2>이벤트 연습</h2>
                이름:  <input type="text" name="name"
                    value={this.state.name}
                    onChange = {this.changeData}
/*                     onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}*/
                     /> <br />
                전화번호 : <input type="text" name="phone"
                                 value= {this.state.phone}
                                 onChange = {this.changeData}
                                 className = {clicked ? (validate? 'fail' : 'success') : ''} 
                                 ref={(ref)=> (this.inputPhone = ref)} />

                <hr />
                이름 : {this.state.name}<br />
                전화번호 : {this.state.phone}<br />
                <button onClick={() => {
                    alert('이름:' + this.state.name+'\n전화번호:' + this.state.phone);
                }}>데이터 확인</button>
                <button onClick={this.showData}>데이터 확인</button>
            </div>
        );
    }
}

export default EventComponent;