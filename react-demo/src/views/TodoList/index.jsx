import React, { Component } from 'react'
// TODO: nanoid：生成唯一标识符
import { nanoid } from 'nanoid'
import Header from './modules/header'
import List from './modules/list'
import All from './modules/All'
import './index.scss'
class TodoList extends Component {
  state = {
    taskList: [],
  }
  addToDo = (name) => {
    const { taskList } = this.state
    const flag = taskList.some((item) => item.name === name)
    if (flag) return
    this.setState({
      taskList: [
        {
          id: nanoid(),
          name,
          isDone: false,
        },
        ...taskList,
      ],
    })
  }
  // FIXME: 选中
  handleChecked = (status, id) => {
    const { taskList } = this.state
    const newTaskList = taskList.map((item) => {
      if (item.id === id) {
        item.isDone = status
      }
      return item
    })
    this.handleSetStrate(newTaskList)
  }
  // FIXME: 删除
  handleDel = (id) => {
    const { taskList } = this.state
    const newTaskList = taskList.filter((item) => item.id !== id)
    this.handleSetStrate(newTaskList)
  }
  // FIXME: 是否选中全部
  isAllChecked = (status) => {
    const { taskList } = this.state
    const newTaskList = taskList.map((item) => {
      item.isDone = status
      return item
    })
    this.handleSetStrate(newTaskList)
  }
  // FIXME: 清除已完成任务
  handleClearDone = () => {
    const { taskList } = this.state
    const newTaskList = taskList.filter((item) => !item.isDone)
    this.handleSetStrate(newTaskList)
  }
  handleSetStrate = (taskList) => {
    this.setState({ taskList })
  }
  render() {
    const { taskList } = this.state
    return (
      <div className="todoList flex">
        <div className="listBody">
          <Header addToDo={this.addToDo} />
          <List
            taskList={taskList}
            handleChecked={this.handleChecked}
            handleDel={this.handleDel}
          />
          <All
            taskList={taskList}
            isAllChecked={this.isAllChecked}
            handleClearDone={this.handleClearDone}
          />
        </div>
      </div>
    )
  }
}

export default TodoList
