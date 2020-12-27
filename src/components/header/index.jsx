import React, { useState, useEffect } from 'react'
import './style.less'
import Login from '../login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/loginActions'
import jwtDecode from 'jwt-decode'

const Header = props => {
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {// 组件一挂载就验证 token
    const token = sessionStorage.getItem('token')
    if (token) {
      props.loginActions.changeToLogged((jwtDecode(token)))// 改变登录按钮
    }
  }, [])

  const toLogin = () => {
    setShowLogin(true)
  }
  const closeLogin = () => {
    setShowLogin(false)
  }
  console.log(props.login.user)
  return (
    <div>
      {
        showLogin ? <Login closeLogin={closeLogin}
          loginActions={props.loginActions} /> : null
      }
      <div className="navbar navbar-header container">
        <div className="col-xs-1" style={{ padding: 0 }}>
          <button className="btn btn-back navbar-btn" style={{ backgroundColor: '#fff' }}>
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button>
        </div>

        <div className="col-xs-2" style={{ padding: 0 }}>
          <span className="navbar-text" style={{ fontWeight: 700 }}>{props.title}</span>
        </div>

        <div className="col-xs-7" style={{ padding: 0 }}>
          {props.children && props.children}
        </div>

        <div className="col-xs-2" style={{ padding: 0 }}>
          {
            !props.login.logged ? <button className="btn btn-login btn-default navbar-btn"
              style={{ backgroundColor: '#fff' }}
              onClick={toLogin}
            >
              Login
      </button> : <img src={props.login.user.img} alt="user"/>
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(Header)