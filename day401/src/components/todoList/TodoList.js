import React, { Component } from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoItemF from '../todoItem/TodoItemF';

class TodoList extends Component {


    handleTodo = (no) => {
        const {onToggle} = this.props;
        // console.log('todoList calll', no)
        onToggle(no);
    }

    handleDelete = (no) => {
        // console.log("handleDelete..", no);
        this.props.onDelete(no);
    }

    render() {
        const {todoList} = this.props;

        const todos = todoList.map((todo, index) => {
            /* return <TodoItem key={todo.no} todo={todo} 
                                onToggle={() => {this.handleTodo()}}/> */
            return <TodoItem key={todo.no} todo={todo} onToggle={this.handleTodo} onDelete={this.handleDelete}/>
            // return <TodoItemF key={todo.no} todo={todo} onToggle={this.handleTodo}/>
        });


        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList;