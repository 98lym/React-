import React, { Component } from 'react'
import PropTypes from 'prop-types'
class All extends Component {
  static propsType = {
    taskList: PropTypes.array,
  }
  static defaultProps = {
    taskList: [],
  }
  handleChange = (e) => {
    const { checked } = e.target
    this.props.isAllChecked(checked)
  }
  handleClearDone = () => {
    this.props.handleClearDone()
  }
  render() {
    const { taskList } = this.props
    const allNumber = taskList.length
    const doneNumber = taskList.filter((item) => item.isDone).length
    const clearButtonClassName = `clearDone ${
      doneNumber === 0 ? 'disabled' : ''
    }`
    return (
      <div className="all">
        <div className="flex">
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={allNumber === doneNumber && allNumber !== 0 ? true : false}
          />
          <div className="done">
            已完成{doneNumber} / 全部{allNumber}
          </div>
        </div>
        <div className={clearButtonClassName} onClick={this.handleClearDone}>
          清除已完成任务
        </div>
      </div>
    )
  }
}

export default All
