import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  state = {}
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

  render() {
    const { taskList } = this.props
    return (
      <div className="list">
        <ul>
          {taskList.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                defaultChecked={item.isDone}
              />
              <span
                style={{
                  textDecoration: item.isDone ? 'line-through' : 'none',
                }}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
