import React, { useState } from 'react'
import './style.less'

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
  const handleLogin = () => {
    // -----------------该写这里了------------------
  }
  return (
    <div className="login-mask">
      <div className="container login-box">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                className='form-control'
                name="username"
                value={username}
                onChange={handleChangeUsername}
                id="username" />
              {errors.username && <p>{errors.username}</p>}
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
                id="password" />
              {errors.password && <p>{errors.password}</p>}
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

export default Login