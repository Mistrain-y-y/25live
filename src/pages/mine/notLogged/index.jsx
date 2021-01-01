import React from 'react'
import * as loginActions from '../../../actions/loginActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const NotLogged = props => {
  const showLogin = () => {
    props.loginActions.showLoginPage()
  }
  return (
    <div className="img-media">
      <div className="media-middle"
      >
        <div className="mine-img"
        style={{backgroundColor: '#e6e6e6', width: '3rem', height: '3rem'}}></div>
      </div>

      <div className="media-body" style={{padding: '0.4rem', paddingTop: 0}}>
        <h3 className="mine-name"
          style={{ textAlign: 'center' }}
        >请先登录!</h3>
        <button className="btn btn-primary btn-lg btn-block"
        style={{borderRadius: '0.95rem'}}
        onClick={showLogin}
        >login</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(NotLogged)