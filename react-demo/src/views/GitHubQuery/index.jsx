import React, { Component } from 'react'
import Header from './modules/header'
import Body from './modules/body'
import './index.scss'
export default class GitHubQuery extends Component {
  render() {
    return (
      <div className="GitHubQuery">
        <Header />
        <Body />
      </div>
    )
  }
}
