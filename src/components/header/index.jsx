import React from 'react'
import './style.less'

const Header = props => {
  return (
    <div className="navbar navbar-header container">
      <div className="col-xs-1" style={{padding: 0}}>
      <button className="btn btn-back navbar-btn" style={{ backgroundColor: '#fff'}}>
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </button>
      </div>

      <div className="col-xs-2" style={{padding: 0}}>
      <span className="navbar-text" style={{fontWeight: 700}}>{props.title}</span>
      </div>

      <div className="col-xs-7" style={{padding: 0}}>
        {props.children && props.children[0]}
      </div>

      <div className="col-xs-2" style={{padding: 0}}>
        {props.children && props.children[1]}
      </div>
    </div>
  )
}

export default Header