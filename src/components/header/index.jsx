import React from 'react'
import './index.less'

const Header = props => {
  return (
    <div className="navbar navbar-header container">
      <button className="btn btn-back navbar-btn col-xs-1" style={{ backgroundColor: '#fff' }}>
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </button>

      <span className="navbar-text col-xs-2">{props.title}</span>

      <form className="navbar-form navbar-left col-xs-6 container" role="search" style={{padding: 0, marginRight: 10, marginLeft: 10}}>
        <div className="form-group col-xs-9" style={{padding: 0}}>
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-primary col-xs-3">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>

      <button className="btn btn-login btn-primary navbar-btn col-xs-2" style={{ backgroundColor: '#fff' }}>
        Login
      </button>
    </div>
  )
}

export default Header