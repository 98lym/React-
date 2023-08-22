import React, { Component } from 'react'
// TODO: nanoid：生成唯一标识符
import { nanoid } from 'nanoid'
import Header from './modules/header'
import List from './modules/list'
import All from './modules/All'
import './index.css'
class TodoList extends Component {
  state = {
    taskList: [],
  }
  addToDo = (name) => {
    const { taskList } = this.state
    this.setState({taskList:[{
      id: nanoid(),
      name,
      isDone: false
    },...taskList]})
  }
  render() {
    const { taskList } = this.state
    return (
      <div className="todoList flex">
        <div className="listBody">
          <Header addToDo={this.addToDo} />
          <List taskList={taskList} />
          <All />
        </div>
      </div>
    )
  }
}

export default TodoList
