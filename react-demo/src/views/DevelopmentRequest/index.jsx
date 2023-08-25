import React, { Component } from 'react'
import { getBooks } from '../../api/bookInfo.js'
export default class Request extends Component {
  handleGetBooks = async () => {
    try {
      const res = await getBooks()
      console.log(res, '😙')
    } catch (error) {}
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGetBooks}>获取书本的数据</button>
      </div>
    )
  }
}
