import React, { Component } from 'react'
import Header from './modules/header'
import Body from './modules/body'
import './index.scss'
import { search } from '../../api/githubSearch'
export default class GitHubQuery extends Component {
  state = {
    searchText: '',
    userInfoList: []
  }
  handleSearch = async (value) => {
    try {
      const res = await search({q: value})
      this.setState({userInfoList: res.items})
    } catch (error) {}
  }
  render() {
    const { userInfoList } = this.state
    return (
      <div className="GitHubQuery">
        <Header search={this.handleSearch} />
        <Body userInfoList={userInfoList}/>
      </div>
    )
  }
}
