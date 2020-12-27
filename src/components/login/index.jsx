import React, { useState } from 'react'
import './style.less'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as loginActions from '../../actions/loginActions'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const handleChangeUsername = e => {
    setUsername(e.target.value)
  }
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleLogin = e => {// 登录
    e.preventDefault()
    if (!username && !password) {// 验证不为空
      setErrors({username: '请填写用户名！', password: '请填写密码!'})
    } else if (!username) {
      setErrors({username: '请填写用户名！'})
    } else if (!password) {
      setErrors({password: '请填写密码!'})
    } else {// 发送请求
      props.loginActions.loginRequest({username, password})
      .then(res => console.log(res),
      err => console.log(err))
    }
  }
  const closeBox = () => {
    props.closeLogin()
  }
  return (
    <div className="login-mask container">
      <div className="container login-box">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Login</h1>
          <button 
          onClick={closeBox}
          className="close btn btn-default">✖</button>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                className='form-control'
                name="username"
                value={username}
                onChange={handleChangeUsername}
                placeholder={errors.username}
                id="username" />
              {/* 如果错误存在就显示 p 标签 */}
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChangePassword}
                placeholder={errors.password}
                id="password" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Login"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(Login)