import React, { Component } from 'react'

class All extends Component {
  render() {
    return (
      <div className="all">
        <div className="flex">
          <input type="checkbox" />
          <div className='done'>已完成0 / 全部2</div>
        </div>
        <div className='clearDone'>清除已完成任务</div>
      </div>
    )
  }
}

export default All
