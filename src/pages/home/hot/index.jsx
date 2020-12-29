import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as loginActions from '../../../actions/loginActions'
import { bindActionCreators } from 'redux'

const Hot = props => {
  const getDetails = () => {
    // 如果登录了, 就允许进入详情页, 否则跳转到登录页
    if (props.login.logged) {
      props.history.push(`/details/${props.item.name}`)
    } else {// 没登录, 显示登录页面
      props.loginActions.showLoginPage()
    }
  }
  return (
    <div onClick={getDetails}>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="media">
            <div className="media-left media-middle">
              <img className="media-object" src={props.item.img}
                style={{ width: '5em' }}
                alt="img" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">{props.item.name}
                <span className="badge">{props.item.num}</span>
              </h4>
              <p className="ellipsis-p">{props.item.content}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(Hot))