import React from 'react'
import { connect } from 'react-redux'
import './style.less'

const UserMsg = props => {
  const { img, user, msg, identity } = props.login.user

  const userLogOut = () => {
    // ----------该写登出的操作了-------------
  }

  return (
    <div className="img-media">
      <div className="media-middle"
      >
        <img className="mine-img" src={img}
          alt="img" />
      </div>

      <div className="media-body" style={{padding: '0.4rem', paddingTop: 0}}>
        <h3 className="mine-name"
          style={{ textAlign: 'center' }}
        >{user}</h3>
        <p style={{ textAlign: 'center', fontSize: '0.35rem' }}>{identity}</p>
        <p style={{ textAlign: 'center' }}>{msg}</p>
        <button className="btn btn-primary btn-lg btn-block"
        onClick={userLogOut}
        >log out</button>
      </div>
    </div>
  )
}

export default connect(state => state)(UserMsg)