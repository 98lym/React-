import React, { Component } from 'react'
class Header extends Component {
  state = {}
  submit = (e) => {
    if (e.key === 'Enter') {
      if (!e.target.value.trim()) return
      this.props.addToDo(e.target.value)
          e.target.value = ''
    }
  }

  render() {
    return (
      <div className="header flex">
        <input
          type="text"
          placeholder="请确认你的任务名称，按回车键确认"
          onKeyUp={this.submit}
        />
      </div>
    )
  }
}

export default Header
