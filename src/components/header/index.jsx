import React, { useState } from 'react'
import './style.less'
import Login from '../login'

const Header = props => {
  const [showLogin, setShowLogin] = useState(false)
  const [logged, setLogged] = useState(false)
  const toLogin = () => {
    setShowLogin(true)
  }
  const closeLogin = () => {
    setShowLogin(false)
  }
  return (
    <div>
      {
        showLogin ? <Login closeLogin={closeLogin} /> : null
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
            !logged ? <button className="btn btn-login btn-default navbar-btn"
              style={{ backgroundColor: '#fff' }}
              onClick={toLogin}
            >
              Login
      </button> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Header