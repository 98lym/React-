import React, { Component } from 'react'

export default class Header extends Component {
  state = {}
  search = (e) => {
    const { value } = e.target
    if (e.key === 'Enter'  && value.trim()) {
      this.props.search(value.trim())
    }
  }
  render() {
    return (
      <div className='header'>
        <div className='title'>Search Github Users</div>
        <input type='text' onKeyUp={e => this.search(e)}/>
      </div>
    )
  }
}
