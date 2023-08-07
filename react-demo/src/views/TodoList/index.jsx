import React, { Component } from 'react'
import Header from './modules/header'
import List from './modules/list'
import All from './modules/All'
import './index.css'
class TodoList extends Component {
  state = {
    taskList: [
      { id: 1, name: '老王', isDone: false },
      { id: 2, name: '老王2', isDone: false },
      { id: 3, name: '老王3', isDone: false },
      { id: 4, name: '老王4', isDone: false },
      { id: 5, name: '老王4', isDone: false },
      { id: 6, name: '老王4', isDone: false },
      { id: 7, name: '老王4', isDone: false },
      { id: 8, name: '老王4', isDone: false },
      { id: 9, name: '老王4', isDone: false },
    ],
  }
  render() {
    const { taskList } = this.state
    return (
      <div className="todoList flex">
        <div className="listBody">
          <Header />
          <List taskList={taskList} />
          <All />
        </div>
      </div>
    )
  }
}

export default TodoList
