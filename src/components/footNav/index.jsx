import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

const FootNav = () => {
  return (
    <div className="navbar navbar-footer" style={{marginBottom: 0}}>
      <ul>
        <li>
          <NavLink to="/" exact style={{ height: '100%', width: '100%' }}>
            <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
              Home
              </NavLink>
        </li>
        <li>
          <NavLink to="/shop" style={{ height: '100%', width: '100%' }}>
            <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
            Shop
              </NavLink>
        </li>
        <li>

          <div>
            <NavLink to="/life" style={{ height: '100%', width: '100%' }}>
              <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
            Life</NavLink>
          </div>
        </li>
        <li>

          <div>
            <NavLink to="/mine" style={{ height: '100%', width: '100%' }}>
              <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            Mine</NavLink>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FootNav