import React, { Component } from 'react';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput';

class App extends Component {

  no = 1;

  getNo() {
    return this.no++
  }

  state = {
    todoList: [
      { no: this.getNo(), title: '프로젝트 발표준비', done: false },
      { no: this.getNo(), title: '리액트 공부', done: true },
      { no: this.getNo(), title: '최종입사지원서 작성', done: false }
    ]
  }

  searchIndex = (no) => {
    const { todoList } = this.state;

    let index = 0;
    for (const todo of todoList) {
      if (todo.no === no) break;
      index++;
    }
    return(index);
  }


  handleToggle = (no) => {
    // console.log('app call...', no);
    const { todoList } = this.state;
    /* 
        let index = 0;
        for(const todo of todoList) {
          if(todo.no === no) break;
          index++;
        }
     */
    const index = this.searchIndex(no);
    // console.log("index", index);

    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        {
          no: todoList[index].no,
          title: todoList[index].title,
          done: !todoList[index].done
        },
        ...todoList.slice(index + 1)
      ]
    })
  }

  addTodo = (title) => {
    // console.log("click addTodo...", title);
    this.setState({
      todoList: [
        ...this.state.todoList,
        { no: this.getNo(), title: (title), done: false }
      ]
    })
  }

  handleDelete = (no) => {
    const { todoList } = this.state;
    // console.log('handleDelete...app', no);
    const index = this.searchIndex(no);

    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        ...todoList.slice(index+1)
      ]
    })
  }

  render() {
    const { todoList } = this.state;

    return (
      <div >
        <h2>일정관리</h2>
        <TodoInput onAdd={this.addTodo} />
        <TodoList todoList={todoList} onToggle={this.handleToggle} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
