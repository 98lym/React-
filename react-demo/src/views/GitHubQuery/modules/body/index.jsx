import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Body extends Component {
  static propTypes = {
    userInfoList: PropTypes.array,
  }
  static defaultProps = {
    userInfoList: [],
  }
  render() {
    const { userInfoList } = this.props
    return (
      <div className="body">
        {userInfoList.map((item) => {
          return (
            <div key={item.id} className="box">
              <img
                className="avatar"
                src={item.avatar_url}
                alt=""
                loading="lazy"
              />
              {/* TODO: 图片懒加载*/}
              <div className="name">{item.login}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
