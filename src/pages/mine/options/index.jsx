import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../../../actions/loginActions'

const Options = props => {
  const toCollection = () => {
    // 判断是否登录
    if (props.login.logged) {
      props.history.push('/mine/collection')
    } else {// 跳转到登录界面
      props.loginActions.showLoginPage()
    }
  }
  const toSetPage = () => {
    if (props.login.logged) {
      props.history.push('/mine/set')
    } else {// 跳转到登录界面
      props.loginActions.showLoginPage()
    }
  }
  return (
    <div className="mine-options">
      <div
        onClick={toCollection}
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
        收藏
      </div>
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
        购物车
      </div>
      <div
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        其他
      </div>
      <div
        onClick={toSetPage}
        className="thumbnail mine-option"
        style={{
          display: 'inline-block',
          width: '50%'
        }}>
        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        设置
      </div>
    </div>

  )
}
const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(Options))