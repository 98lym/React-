import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  state = {
    mouseID: null,
  }
  static propTypes = {
    taskList: PropTypes.array,
  }
  static defaultProps = {
    taskList: [],
  }
  handleCheckboxChange = (itemId) => {
    // this.setState((prevState) => ({
    //   taskList: prevState.taskList.map((item) =>
    //     item.id === itemId ? { ...item, isDone: !item.isDone } : item
    //   ),
    // }))
  }

  handleMouse = (id) => {
    this.setState({ mouseID: id ? id : null })
  }

  handleChange = (e, id) => {
    console.log(e, id, '🤡🤡');
  }
  render() {
    const { taskList } = this.props
    const { mouseID } = this.state
    return (
      <div className="list">
        <ul>
          {taskList.map((item) => (
            <li
              key={item.id}
              style={{
                backgroundColor: mouseID === item.id ? '#ddd' : 'white',
              }}
              onMouseEnter={() => this.handleMouse(item.id)}
              onMouseLeave={() => this.handleMouse()}
            >
              <div>
                <input type="checkbox" defaultChecked={item.isDone} onChange={(e) => this.handleChange(e, item.id)}/>
                <span
                  style={{
                    textDecoration: item.isDone ? 'line-through' : 'none',
                  }}
                >
                  {item.name}
                </span>
              </div>
              <div
                style={{
                  display: mouseID === item.id ? 'initial' : 'none',
                }}
                className="del"
              >
                删除
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
