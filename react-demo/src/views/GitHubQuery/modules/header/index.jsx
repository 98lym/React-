import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { search } from '../../../../api/githubSearch'
export default class Header extends Component {
  search = async (e) => {
    const { value } = e.target
    if (e.key === 'Enter' && value.trim()) {
      PubSub.publish('bodyInfo', {
        firstLoading: false,
        loading: true,
        errMessage: '',
      })
      // try {
      //   const res = await search({ q: value.trim() })
      //   PubSub.publish('bodyInfo', { loading: false, userInfoList: res.items })
      // } catch (error) {
      //   // 处理网络错误等异常
      //   PubSub.publish('bodyInfo', {
      //     loading: false,
      //     errMessage: error.message,
      //   })
      // } finally {
      // }

      // TODO: 采用fetch方法获取数据
      try {
        const response = await fetch(`/v1/search/users?q=${value.trim()}`)
        const data = await response.json()
        PubSub.publish('bodyInfo', { loading: false, userInfoList: data.items })
      } catch (error) {
        PubSub.publish('bodyInfo', {
          loading: false,
          errMessage: error.message,
        })
      }
    }
  }
  render() {
    return (
      <div className="header">
        <div className="title">Search Github Users</div>
        <input type="text" onKeyUp={(e) => this.search(e)} />
      </div>
    )
  }
}
