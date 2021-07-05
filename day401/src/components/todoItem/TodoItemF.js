import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Input, InputGroupText} from 'reactstrap';
import './TodoItem.css';

const changeDone = (props) => {
    props.onToggle(props.todo.no);

}

const TodoItemF = (props) => {
    
    const {todo} = props;
    return (
        <div>
            <InputGroup onClick={()=>{changeDone(props)}}>
                <InputGroupAddon addonType="prepend" >
                    <InputGroupText>
                        <Input addon type="checkbox" checked={todo.done} readOnly />
                    </InputGroupText>
                </InputGroupAddon>
                <Input value={todo.title} readOnly className={todo.done ? "done" : ""} />
            </InputGroup>
        </div>
    );
};

export default TodoItemF;