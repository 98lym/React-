import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Body extends Component {
  state = {
    userInfoList: [],
    firstLoading: true,
    loading: false,
    errMessage: '',
  }
  componentDidMount() {
    this.pubSub = PubSub.subscribe('bodyInfo', (msg, data) => {
      this.setState(data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.pubSub)
  }
  render() {
    const { userInfoList, loading, firstLoading, errMessage } = this.state
    return (
      <div
        className="body"
        style={{
          display: userInfoList.length > 0 ? 'flex' : '',
        }}
      >
        {firstLoading ? (
          <div className="be-current">Enter name to search</div>
        ) : loading ? (
          <div className="be-current">loading...</div>
        ) : errMessage ? (
          <div className="be-current errMessage">{errMessage}</div>
        ) : (
          userInfoList.map((item) => {
            return (
              <div key={item.id} className="box">
                <a rel="noreferrer" href={item.html_url} target="_blank">
                  <img
                    className="avatar"
                    src={item.avatar_url}
                    alt=""
                    loading="lazy"
                  />
                </a>
                {/* TODO: 图片懒加载*/}
                <div className="name">{item.login}</div>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
