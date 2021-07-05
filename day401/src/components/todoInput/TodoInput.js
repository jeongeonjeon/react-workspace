import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

class TodoInput extends Component {

    state = {
        title : ''
    }

    inputTitle = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clickAdd = () => {
        console.log("add todoInput click...");
        this.props.onAdd(this.state.title);
        this.setState({
            title : ''
        })
    }

    render() {
        const {title} = this.state;
        return (
            
            <InputGroup>
                <Input name="title" value={title} onChange={this.inputTitle} placeholder="일정을 입력해주세요"/>
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={this.clickAdd}>ADD</Button>
                </InputGroupAddon>
                {/* {title} */}
            </InputGroup>
/* 
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="일정을 입력하세요" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
 */
        );
    }
}

export default TodoInput;