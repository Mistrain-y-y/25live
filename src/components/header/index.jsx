import React, { useEffect } from 'react'
import './style.less'
import Login from '../login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import jwtDecode from 'jwt-decode'
import { withRouter } from 'react-router-dom'

const Header = props => {
  useEffect(() => {// 组件一挂载就验证 token
    const token = sessionStorage.getItem('token')
    if (token) {// 如果 token 存在, 踩坑实测无法 jwtDecode(null)!
      props.loginActions.changeToLogged((jwtDecode(token)))// 改变登录按钮
    }
  }, [props.loginActions])

  const toLogin = () => {
    props.loginActions.showLoginPage()
  }
  const closeLogin = () => {
    props.loginActions.hideLoginPage()
  }
  const goBack = () => {
    console.log(props.history)
    props.history.goBack()
  }
  return (
    <div>
      {
        props.showLogin.showLogin ? <Login closeLogin={closeLogin}
          loginActions={props.loginActions} /> : null
      }
      <div className="navbar navbar-header container">
        <div className="col-xs-1" style={{ padding: 0 }}>
          {
            props.showBackBtn ? <button
              className="btn btn-back navbar-btn"
              style={{ backgroundColor: '#fff' }}
              onClick={goBack}
            >
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </button> : null
          }
        </div>

        <div className="col-xs-2" style={{ padding: 0 }}>
          <span className="navbar-text" style={{ fontWeight: 700 }}>{props.title}</span>
        </div>

        <div className="col-xs-7" style={{ padding: 0 }}>
          {props.children && props.children}
        </div>

        <div className="col-xs-2" style={{ padding: 0, textAlign: 'center' }}>
          {
            !props.login.logged ? <button className="btn btn-login btn-default navbar-btn"
              style={{ backgroundColor: '#fff' }}
              onClick={toLogin}
            >
              Login
      </button> : <img src={props.login.user.img} alt="user" />
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(Header))