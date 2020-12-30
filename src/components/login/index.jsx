import React, { useState } from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [failedMsg, setFailedMsg] = useState('')
  const [isLoading] = useState(false)

  const handleChangeUsername = e => {
    setUsername(e.target.value)
  }
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleLogin = e => {// 登录
    e.preventDefault()
    if (!username && !password) {// 验证不为空
      setErrors({ username: '请填写用户名！', password: '请填写密码!' })
      setFailedMsg('')
    } else if (!username) {
      setErrors({ username: '请填写用户名！' })
      setFailedMsg('')
    } else if (!password) {
      setErrors({ password: '请填写密码!' })
      setFailedMsg('')
    } else {// 发送请求
      props.loginActions.loginRequest({ username, password })
        .then(() => {// 登陆成功或失败都进入这个 then
          if (sessionStorage.getItem('token')) {
            setFailedMsg('')
            props.closeLogin()// 关闭登录框
          } else {
            setFailedMsg('用户名或密码错误!')
          }
        })
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
              <span style={{ color: 'red', marginLeft: '10px' }}>{failedMsg}</span>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}



export default withRouter(Login)