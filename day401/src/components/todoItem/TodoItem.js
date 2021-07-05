import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Input, InputGroupText, Button, Col} from 'reactstrap';
import classNames from 'classnames/bind';
import './TodoItem.css';

class TodoItem extends Component {

    
    changeDone = () => {
        const {onToggle, todo} = this.props;
        // console.log('todoItem click...')
        onToggle(todo.no);
    }

    clickDel = (e) => {
        // console.log('todoItem del...');
        this.props.onDelete(this.props.todo.no);
        e.stopPropagation();
    }

    render() {
        const {todo} = this.props;
        return (

            // 방법3
            <InputGroup  onClick={this.changeDone} >
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox" checked={todo.done} readOnly />
                    </InputGroupText>
                </InputGroupAddon>
                <Col className="form-control">
                    <span className={classNames("col-sm-4 span_tit",todo.done ? 'done' : "")}>{todo.title}</span>
                    <Button color="link" onClick={this.clickDel}>DELETE</Button>
                </Col>
            </InputGroup>
            

            /*
            // 방법2
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" checked={todo.done} />
                    </div>
                </div>
                <input type="text" className="form-control" value={todo.title} />
            </div>
            */
            /*
            // 방법1
            <div>
                <input type="checkbox" checked={todo.done} />{ todo.title }<br/>
            </div>
            */
        );
    }
}

export default TodoItem;